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
   keywords = [],  
  serviceItems = [], // [{name, url}] -> ItemList
   aiQuestion,  // string
  aiAnswer,    // string (aiAnswerBlock)
  aiSource,    // string (aiSourceMention)
}) {
  const base = getBaseUrl();
  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";
  const siteUrl = `${base}/${locale}`;
  const siteId = `${siteUrl}#website`;
  const webpageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const servicesListId = `${pageUrl}#services-list`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

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
        "@id": siteId,
        "url": siteUrl,
        "name": locale === "tr"
          ? "DGTLFACE Dijital Pazarlama & Teknoloji Partneri"
          : "DGTLFACE Digital Marketing & Technology Partner",
        "inLanguage": inLanguage,
        "publisher": { "@id": `${base}/#organization` },
      },

      {
        "@type": "WebPage",
        "@id": webpageId,
        "url": pageUrl,
        "name": pageName,
        "description": pageDescription,
        "isPartOf": { "@id": siteId },
        "inLanguage": inLanguage,
        "breadcrumb": { "@id": breadcrumbId },

        ...(keywords.length ? { "about": keywords } : {}),

        // ✅ AI Answer Block'u "Question -> acceptedAnswer" olarak işaretle
  ...(aiQuestion && aiAnswer
    ? {
        "mainEntity": {
          "@type": "Question",
          "name": stripHtml(aiQuestion),
          "acceptedAnswer": {
            "@type": "Answer",
            // İstersen source'u answer text'e de ekleyebilirsin (çok net olur)
            "text": aiSource
              ? `${stripHtml(aiAnswer)}\n\nKaynak: ${stripHtml(aiSource)}`
              : stripHtml(aiAnswer),
          },
        },
      }
    : {}),

  // ✅ Source mention'ı sayfa düzeyinde de citation olarak ekle
  ...(aiSource ? { "citation": [stripHtml(aiSource)] } : {}),
      },

      {
        "@type": "Service",
        "@id": serviceId,
        "name": serviceName,
        "url": pageUrl,
        "provider": { "@id": `${base}/#organization` },
        "description": serviceDescription,
        "areaServed": ["Antalya", "Türkiye", "Europe", "Belek", "Kemer", "Side", "Alanya", "Bodrum"],
        "inLanguage": inLanguage,

        ...(aiSource ? { "isBasedOn": [{ "@type": "CreativeWork", "name": stripHtml(aiSource) }] } : {}),

      },

      // ItemList opsiyonel (alt sayfalar gerçekten varsa açık kalsın)
      ...(serviceItems.length
        ? [{
            "@type": "ItemList",
            "@id": servicesListId,
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
        "@id": breadcrumbId,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": homeLabel, "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": breadcrumbName, "item": pageUrl },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": faqId,
        "inLanguage": inLanguage,
        "isPartOf": { "@id": webpageId },
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
