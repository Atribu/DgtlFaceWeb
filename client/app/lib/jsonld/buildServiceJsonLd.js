// lib/jsonld/buildServiceJsonLd.js
export function buildServiceJsonLd({
  baseUrl,
  locale,
  canonicalUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceType,
  keywords = [],
  breadcrumbItems = [], // [{name, url}]
  faqs = [], // [{question, answer}]
}) {
  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const orgId = `${baseUrl}/#organization`;
  const siteId = `${baseUrl}/#website`;

  const webpageId = `${canonicalUrl}#webpage`;
  const serviceId = `${canonicalUrl}#service`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const faqId = `${canonicalUrl}#faq`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "DGTLFACE",
      url: `${baseUrl}/`,
      logo: `${baseUrl}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: `${baseUrl}/`,
      name: "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
      inLanguage,
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: canonicalUrl,
      name: pageName,
      description: pageDescription,
      isPartOf: { "@id": siteId },
      inLanguage,
      breadcrumb: { "@id": breadcrumbId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: serviceName,
      url: canonicalUrl,
      provider: { "@id": orgId },
      serviceType,
      description: pageDescription,
      inLanguage,
      keywords,
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbItems.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.url,
      })),
    },
  ];

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
