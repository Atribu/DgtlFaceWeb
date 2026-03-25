import "server-only";

const faqNamespaceCache = new Map();

export async function getFaqNamespace(locale, pageNs) {
  const normalizedLocale = locale === "en" ? "en" : "tr";
  const cacheKey = `${normalizedLocale}:${pageNs}`;

  if (faqNamespaceCache.has(cacheKey)) {
    return faqNamespaceCache.get(cacheKey);
  }

  const mod =
    normalizedLocale === "en"
      ? await import("@/messages/en.json")
      : await import("@/messages/tr.json");

  const messages = mod?.default || mod || {};
  let namespace = messages?.[pageNs] || {};

  if (normalizedLocale === "en" && !Object.keys(namespace).length) {
    const fallbackMod = await import("@/messages/tr.json");
    const fallbackMessages = fallbackMod?.default || fallbackMod || {};
    namespace = fallbackMessages?.[pageNs] || {};
  }

  faqNamespaceCache.set(cacheKey, namespace);
  return namespace;
}
