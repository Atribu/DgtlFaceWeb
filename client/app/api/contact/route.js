// app/api/contact/route.js
export const runtime = "nodejs";

import nodemailer from "nodemailer";
import {
  escapeHtml,
  validateContactPayload,
} from "./contact-validation.mjs";

const MAX_REQUEST_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_MAX_ENTRIES = 10_000;

const contactRateLimitStore =
  globalThis.__dgtlfaceContactRateLimitStore || new Map();
globalThis.__dgtlfaceContactRateLimitStore = contactRateLimitStore;

let smtpTransporter = null;
let rateLimitCheckCount = 0;

function jsonResponse(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function getClientIp(req) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const rawIp =
    forwardedFor?.split(",")[0] ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "";

  return rawIp.trim().slice(0, 128);
}

function pruneRateLimitStore(now) {
  rateLimitCheckCount += 1;
  if (rateLimitCheckCount % 100 !== 0 && contactRateLimitStore.size < 5_000) {
    return;
  }

  for (const [ip, entry] of contactRateLimitStore) {
    if (entry.resetAt <= now) contactRateLimitStore.delete(ip);
  }

  while (contactRateLimitStore.size > RATE_LIMIT_MAX_ENTRIES) {
    const oldestKey = contactRateLimitStore.keys().next().value;
    if (oldestKey == null) break;
    contactRateLimitStore.delete(oldestKey);
  }
}

function consumeRateLimit(clientIp) {
  if (!clientIp) {
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS };
  }

  const now = Date.now();
  pruneRateLimitStore(now);
  const current = contactRateLimitStore.get(clientIp);

  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    contactRateLimitStore.set(clientIp, next);
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: next.resetAt,
    };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
    resetAt: current.resetAt,
  };
}

function getSmtpTransporter() {
  if (smtpTransporter) return smtpTransporter;

  const requiredVariables = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"];
  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable]
  );
  if (missingVariables.length) {
    throw new Error(`Missing SMTP configuration: ${missingVariables.join(", ")}`);
  }

  const port = Number(process.env.SMTP_PORT || 465);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
  }

  smtpTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure:
      process.env.SMTP_SECURE == null
        ? port === 465
        : process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return smtpTransporter;
}

export async function POST(req) {
  const rateLimit = consumeRateLimit(getClientIp(req));
  const rateLimitHeaders = {
    "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
  };

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
    );
    return jsonResponse(
      { error: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyiniz." },
      429,
      { ...rateLimitHeaders, "Retry-After": String(retryAfterSeconds) }
    );
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      { error: "Gönderilen form verisi çok büyük." },
      413,
      rateLimitHeaders
    );
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse(
      { error: "Geçerli bir JSON form verisi gönderiniz." },
      400,
      rateLimitHeaders
    );
  }

  const validation = validateContactPayload(payload);
  if (!validation.ok) {
    return jsonResponse({ error: validation.error }, 400, rateLimitHeaders);
  }

  const { name, surname, email, phone, message } = validation.data;
  const fullName = [name, surname].filter(Boolean).join(" ");
  const safeName = escapeHtml(name);
  const safeSurname = escapeHtml(surname);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const emailContent = `
${message}

İletişim Bilgileri:
- İsim: ${fullName}
- Telefon: ${phone}
${email ? `- E-posta: ${email}` : ""}
`.trim();

  try {
    await getSmtpTransporter().sendMail({
      from: `"Dgtlface Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || "info@dgtlface.com",
      replyTo: email || process.env.SMTP_USER,
      subject: `Yeni İletişim Formu Mesajı - ${fullName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #54b9cf;">Yeni İletişim Formu Mesajı</h2>
          <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${safeMessage}</pre>

          <h3 style="margin-top: 16px; color: #547ccf;">İletişim Bilgileri</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>İsim:</strong> ${safeName}${safeSurname ? ` ${safeSurname}` : ""}</li>
            <li><strong>Telefon:</strong> ${safePhone}</li>
            ${safeEmail ? `<li><strong>E-posta:</strong> ${safeEmail}</li>` : ""}
          </ul>
        </div>
      `,
    });

    return jsonResponse(
      { message: "Mesajınız başarıyla gönderildi!" },
      200,
      rateLimitHeaders
    );
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return jsonResponse(
      { error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz." },
      500,
      rateLimitHeaders
    );
  }
}
