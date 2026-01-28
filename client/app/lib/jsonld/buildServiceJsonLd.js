// lib/jsonld/buildServiceJsonLd.js
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd"; // ya da ortak util'e taşı

export function buildServiceJsonLd({
  baseUrl,
  locale,
  canonicalUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceType,
  keywords = [],
  breadcrumbItems = [],
  faqs = [],
  aiAnswerBlock,      // ✅ yeni
  aiSourceMention,    // ✅ yeni
}) {
  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const orgId = `${baseUrl}/#organization`;
  const siteId = `${baseUrl}/#website`;

  const webpageId = `${canonicalUrl}#webpage`;
  const serviceId = `${canonicalUrl}#service`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const faqId = `${canonicalUrl}#faq`;

  const siteName =
    locale === "tr"
      ? "DGTLFACE Dijital Pazarlama & Teknoloji Partneri"
      : "DGTLFACE Digital Marketing & Technology Partner";

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
      name: siteName,
      inLanguage,
      publisher: { "@id": orgId },
    },

    // ✅ WebPage: AI bloklarını "hasPart" ile bağla
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: canonicalUrl,
      name: pageName,
      description: pageDescription,
      isPartOf: { "@id": siteId },
      inLanguage,
      breadcrumb: { "@id": breadcrumbId },
      ...(aiAnswerBlock || aiSourceMention
        ? {
            hasPart: [
              ...(aiAnswerBlock
                ? [
                    {
                      "@type": "WebPageElement",
                      "@id": `${canonicalUrl}#ai-answer`,
                      name: "AI Answer Block",
                      text: stripHtml(aiAnswerBlock),
                      isPartOf: { "@id": webpageId },
                    },
                  ]
                : []),
              ...(aiSourceMention
                ? [
                    {
                      "@type": "WebPageElement",
                      "@id": `${canonicalUrl}#ai-source`,
                      name: "AI Source Mention",
                      text: stripHtml(aiSourceMention),
                      isPartOf: { "@id": webpageId },
                    },
                  ]
                : []),
            ],
          }
        : {}),
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
      // keywords Service için şart değil ama kalabilir:
      ...(keywords?.length ? { keywords } : {}),
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
      inLanguage,
      isPartOf: { "@id": webpageId },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: stripHtml(f.question),
        acceptedAnswer: { "@type": "Answer", text: stripHtml(f.answer) },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
