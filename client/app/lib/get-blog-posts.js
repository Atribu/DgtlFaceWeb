import "server-only";

export async function getBlogPosts(locale) {
  const normalizedLocale = locale === "en" ? "en" : "tr";
  const mod =
    normalizedLocale === "en"
      ? await import("@/messages/en.json")
      : await import("@/messages/tr.json");

  const messages = mod?.default || mod || {};
  return messages?.BlogPosts || {};
}
