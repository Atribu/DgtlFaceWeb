// app/api/contact/route.js
export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, surname, email, phone, message } = await req.json();

    // Validation
    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Zorunlu alanları doldurunuz" }),
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const secure = port === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,        // mail.dgtlface.com
  port: 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});
await transporter.verify();


    // İstersen hızlı doğrulama (deploy’da iyi debug verir)
    // await transporter.verify();

    const emailContent = `
${message}

İletişim Bilgileri:
- İsim: ${name} ${surname || ""}
- Telefon: ${phone}
${email ? `- E-posta: ${email}` : ""}
`.trim();

    const mailOptions = {
      from: `"Dgtlface Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || "info@dgtlface.com",
      replyTo: email || process.env.SMTP_USER,
      subject: `Yeni İletişim Formu Mesajı - ${name}${surname ? " " + surname : ""}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #54b9cf;">Yeni İletişim Formu Mesajı</h2>
          <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${String(message)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")}</pre>

          <h3 style="margin-top: 16px; color: #547ccf;">İletişim Bilgileri</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>İsim:</strong> ${name} ${surname || ""}</li>
            <li><strong>Telefon:</strong> ${phone}</li>
            ${email ? `<li><strong>E-posta:</strong> ${email}</li>` : ""}
          </ul>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Mesajınız başarıyla gönderildi!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return new Response(
      JSON.stringify({ error: "Mesaj gönderilirken bir hata oluştu: " + (error?.message || error) }),
      { status: 500 }
    );
  }
}
