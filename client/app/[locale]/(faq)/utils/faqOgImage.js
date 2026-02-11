const TR_SLUG_FILE_ALIAS = {
  "kurumsal-hediye-tasarimi-sss": "kurumsal-hediye-sss",
  "ui-ux-tasarim-sss": "ui-ux-hizmeti-sss",
  "video-produksiyon-sss": "video-ve-produksiyon-sss",
  "otel-ota-sss": "otel-ota-sss (1)",
};

// Türkçe yorum: FAQ sayfaları için og görsel URL'ini slug + locale (+segment) ile üretir
export function getFaqOgImageUrl({
  slug,
  locale,
  segment,
  siteUrl = "https://dgtlface.com",
}) {
  const safeLocale = locale === "en" ? "en" : "tr"; // sadece tr/en kullanıyorsun

  // TR: /og/sss
  // EN: /og/sss/en
  const baseDir = safeLocale === "en" ? "/og/sss/en" : "/og/sss";

  let normalizedSlug = slug || "sss";
  if (safeLocale === "tr") {
    normalizedSlug = TR_SLUG_FILE_ALIAS[normalizedSlug] || normalizedSlug;
  }

  // EN alt FAQ görsellerinde dosya adı: dgtlface.com_en_{segment}_{slug}.webp
  // EN ana FAQ sayfalarında dosya adı: dgtlface.com_en_{slug}.webp
  const hasNestedSegment =
    safeLocale === "en" &&
    segment &&
    segment !== normalizedSlug &&
    !["faq", "services-faq"].includes(normalizedSlug);

  const fileName = hasNestedSegment
    ? `dgtlface.com_${safeLocale}_${segment}_${normalizedSlug}.webp`
    : `dgtlface.com_${safeLocale}_${normalizedSlug}.webp`;

  return `${siteUrl}${baseDir}/${encodeURIComponent(fileName)}`;
}
