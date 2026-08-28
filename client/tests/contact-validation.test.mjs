import test from "node:test";
import assert from "node:assert/strict";
import {
  escapeHtml,
  validateContactPayload,
} from "../app/api/contact/contact-validation.mjs";

const validPayload = {
  name: "Alice",
  surname: "Yılmaz",
  email: "alice@example.com",
  phone: "+90 (555) 123 45 67",
  message: "Projem hakkında bilgi almak istiyorum.",
};

test("valid contact payload is trimmed and accepted", () => {
  const result = validateContactPayload({
    ...validPayload,
    name: "  Alice  ",
    message: "  Merhaba\nDetaylı bilgi rica ederim.  ",
  });

  assert.equal(result.ok, true);
  assert.equal(result.data.name, "Alice");
  assert.equal(result.data.message, "Merhaba\nDetaylı bilgi rica ederim.");
});

test("required fields and payload type are validated", () => {
  assert.equal(validateContactPayload(null).ok, false);
  assert.equal(validateContactPayload([]).ok, false);
  assert.equal(
    validateContactPayload({ ...validPayload, name: { value: "Alice" } }).ok,
    false
  );
  assert.equal(validateContactPayload({ ...validPayload, name: "" }).ok, false);
  assert.equal(validateContactPayload({ ...validPayload, phone: "" }).ok, false);
  assert.equal(validateContactPayload({ ...validPayload, message: "" }).ok, false);
});

test("email, phone and header line breaks are rejected", () => {
  assert.equal(
    validateContactPayload({ ...validPayload, email: "invalid-email" }).ok,
    false
  );
  assert.equal(
    validateContactPayload({ ...validPayload, phone: "not-a-phone" }).ok,
    false
  );
  assert.equal(
    validateContactPayload({ ...validPayload, name: "Alice\r\nBcc: attacker@example.com" }).ok,
    false
  );
});

test("oversized fields are rejected", () => {
  assert.equal(
    validateContactPayload({ ...validPayload, message: "x".repeat(8001) }).ok,
    false
  );
});

test("all HTML-sensitive characters are escaped", () => {
  assert.equal(
    escapeHtml(`<a href="x">O'Reilly & Co</a>`),
    "&lt;a href=&quot;x&quot;&gt;O&#39;Reilly &amp; Co&lt;/a&gt;"
  );
});
