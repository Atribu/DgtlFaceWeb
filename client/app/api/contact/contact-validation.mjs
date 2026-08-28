const FIELD_LIMITS = {
  name: 80,
  surname: 80,
  email: 160,
  phone: 30,
  message: 8000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d+\s().-]+$/;
const CONTROL_CHAR_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

function readString(payload, field, { required = false, singleLine = false } = {}) {
  const value = payload[field];

  if (value == null || value === "") {
    return required
      ? { error: `${field} alanı zorunludur.` }
      : { value: "" };
  }

  if (typeof value !== "string") {
    return { error: `${field} alanı metin olmalıdır.` };
  }

  const normalized = value.trim();
  if (required && !normalized) {
    return { error: `${field} alanı zorunludur.` };
  }

  if (normalized.length > FIELD_LIMITS[field]) {
    return { error: `${field} alanı çok uzundur.` };
  }

  if (CONTROL_CHAR_RE.test(normalized)) {
    return { error: `${field} alanı geçersiz karakter içeriyor.` };
  }

  if (singleLine && /[\r\n]/.test(normalized)) {
    return { error: `${field} alanı tek satır olmalıdır.` };
  }

  return { value: normalized };
}

export function validateContactPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, error: "Geçersiz form verisi." };
  }

  const fields = {
    name: readString(payload, "name", { required: true, singleLine: true }),
    surname: readString(payload, "surname", { singleLine: true }),
    email: readString(payload, "email", { singleLine: true }),
    phone: readString(payload, "phone", { required: true, singleLine: true }),
    message: readString(payload, "message", { required: true }),
  };

  const firstError = Object.values(fields).find((result) => result.error)?.error;
  if (firstError) return { ok: false, error: firstError };

  const data = Object.fromEntries(
    Object.entries(fields).map(([field, result]) => [field, result.value])
  );

  if (data.email && !EMAIL_RE.test(data.email)) {
    return { ok: false, error: "Geçerli bir e-posta adresi giriniz." };
  }

  const digitCount = (data.phone.match(/\d/g) || []).length;
  if (!PHONE_RE.test(data.phone) || digitCount < 7) {
    return { ok: false, error: "Geçerli bir telefon numarası giriniz." };
  }

  return { ok: true, data };
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

