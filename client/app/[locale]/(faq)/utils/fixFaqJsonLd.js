// Türkçe yorum: JSON-LD alanlarını locale'e göre düzeltir (url, @id, inLanguage vb.)
export function fixFaqJsonLdLocale(baseJsonLd, locale) {
  if (!baseJsonLd) return null;

  const data = JSON.parse(JSON.stringify(baseJsonLd));

  const from = "/tr/";
  const to = `/${locale}/`;

  if (typeof data.url === "string") data.url = data.url.replace(from, to);
  if (typeof data["@id"] === "string") data["@id"] = data["@id"].replace(from, to);
  if (typeof data.dgParentUrl === "string") data.dgParentUrl = data.dgParentUrl.replace(from, to);

  data.inLanguage = locale;
  if (locale === "tr") data.dgLanguage = "TR";
  if (locale === "en") data.dgLanguage = "EN";

  return data;
}
