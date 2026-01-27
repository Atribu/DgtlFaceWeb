// Türkçe yorum: Schema Answer.text için HTML'i düz metne çeviriyoruz
export function stripHtml(html = "") {
  return String(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/?ul>/gi, "\n")
    .replace(/<\/?b>/gi, "")
    .replace(/<\/?strong>/gi, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

/**
 * Türkçe yorum:
 * Departman sayfaları için ortak JSON-LD üreticisi.
 * - locale bazlı URL + dil
 * - FAQ sayısı ve service linkleri parametre
 */
export function buildDepartmentJsonLd({
  locale,
  pageUrl,           // absolute
  pageName,          // string
  pageDescription,   // string
  serviceName,       // string
  serviceDescription,// string
  breadcrumbName,    // string (SEO, SEM vs)
  faqItems,          // [{question, answer}]
  serviceItems = [], // [{name, url}] -> ItemList
}) {
  const base = getBaseUrl();
  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const homeLabel = locale === "tr" ? "Ana Sayfa" : "Home";

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Not: Bunu ileride layout'a taşıyacağız (tek yerde dursun).
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        "name": "DGTLFACE",
        "url": `${base}/`,
        "logo": `${base}/logo.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR",
        },
        "areaServed": ["Antalya", "Türkiye", "Europe", "Belek", "Kemer", "Side", "Alanya", "Bodrum"],
      },

      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        "url": `${base}/`,
        "name": locale === "tr"
          ? "DGTLFACE Dijital Pazarlama & Teknoloji Partneri"
          : "DGTLFACE Digital Marketing & Technology Partner",
        "inLanguage": inLanguage,
        "publisher": { "@id": `${base}/#organization` },
      },

      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": pageName,
        "description": pageDescription,
        "isPartOf": { "@id": `${base}/#website` },
        "inLanguage": inLanguage,
        "breadcrumb": { "@id": `${pageUrl}/#breadcrumb` },
      },

      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "name": serviceName,
        "url": pageUrl,
        "provider": { "@id": `${base}/#organization` },
        "description": serviceDescription,
        "areaServed": ["Antalya", "Türkiye", "Europe", "Belek", "Kemer", "Side", "Alanya", "Bodrum"],
        "inLanguage": inLanguage,
      },

      // ItemList opsiyonel (alt sayfalar gerçekten varsa açık kalsın)
      ...(serviceItems.length
        ? [{
            "@type": "ItemList",
            "@id": `${pageUrl}/#services-list`,
            "name": `${breadcrumbName} Services`,
            "itemListElement": serviceItems.map((s) => ({
              "@type": "Service",
              "name": s.name,
              "url": s.url,
            })),
          }]
        : []),

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": homeLabel, "item": `${base}/${locale}/` },
          { "@type": "ListItem", "position": 2, "name": breadcrumbName, "item": pageUrl },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        "inLanguage": inLanguage,
        "isPartOf": { "@id": `${pageUrl}/#webpage` },
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": stripHtml(f.question),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": stripHtml(f.answer),
          },
        })),
      },
    ],
  };
}
