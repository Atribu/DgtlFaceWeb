// Türkçe yorum: FAQ sayfaları için og görsel URL'ini slug + locale ile üretir
export function getFaqOgImageUrl({ slug, locale, siteUrl = "https://dgtlface.com" }) {
  const safeLocale = locale === "en" ? "en" : "tr"; // sadece tr/en kullanıyorsun

  // TR: /og/sss
  // EN: /og/sss/en
  const baseDir = safeLocale === "en" ? "/og/sss/en" : "/og/sss";

  // Dosya adı kuralın: dgtlface.com_{locale}_{slug}.jpeg
  // ör: dgtlface.com_tr_sem-sss.jpeg
  const fileName = `dgtlface.com_${safeLocale}_${slug}.webp`;

  return `${siteUrl}${baseDir}/${fileName}`;
}
