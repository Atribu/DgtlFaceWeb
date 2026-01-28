// app/lib/structured-data/buildServicesHubJsonLd.js
import { stripHtml, getBaseUrl } from "@/app/lib/structured-data/buildDepartmentJsonLd";

export function buildServicesHubJsonLd({
  locale,
  canonicalUrl,
  pageName,
  pageDescription,
  aiAnswerBlock,
  aiSourceMention,
  departmentItems = [], // [{ name, url }]
  faqItems = [],        // [{ question, answer }]
}) {
  const baseUrl = getBaseUrl();
  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const orgId = `${baseUrl}/#organization`;
  const siteId = `${baseUrl}/#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;

  const homeLabel = locale === "tr" ? "Ana Sayfa" : "Home";
  const servicesLabel = locale === "tr" ? "Hizmetlerimiz" : "Services";

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      "name": "DGTLFACE",
      "url": `${baseUrl}/`,
      "logo": `${baseUrl}/logo.png`,
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
      "url": `${baseUrl}/`,
      "name":
        locale === "tr"
          ? "DGTLFACE Dijital Pazarlama & Teknoloji Partneri"
          : "DGTLFACE Digital Marketing & Technology Partner",
      "inLanguage": inLanguage,
      "publisher": { "@id": orgId },
    },

    {
      "@type": ["WebPage", "CollectionPage"],
      "@id": webpageId,
      "url": canonicalUrl,
      "name": pageName,
      "description": pageDescription,
      "isPartOf": { "@id": siteId },
      "inLanguage": inLanguage,
      "publisher": { "@id": orgId },
      "breadcrumb": { "@id": breadcrumbId },

      ...(aiAnswerBlock || aiSourceMention
        ? {
            "hasPart": [
              ...(aiAnswerBlock
                ? [{
                    "@type": "WebPageElement",
                    "@id": `${canonicalUrl}#ai-answer`,
                    "name": "AI Answer Block",
                    "text": stripHtml(aiAnswerBlock),
                    "isPartOf": { "@id": webpageId },
                  }]
                : []),
              ...(aiSourceMention
                ? [{
                    "@type": "WebPageElement",
                    "@id": `${canonicalUrl}#ai-source`,
                    "name": "AI Source Mention",
                    "text": stripHtml(aiSourceMention),
                    "isPartOf": { "@id": webpageId },
                  }]
                : []),
            ],
          }
        : {}),
    },

    ...(departmentItems.length
      ? [{
          "@type": "ItemList",
          "@id": `${canonicalUrl}#service-categories`,
          "name": locale === "tr" ? "DGTLFACE Hizmet Kümeleri" : "DGTLFACE Service Categories",
          "itemListElement": departmentItems.map((d, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": d.name,
            "url": d.url,
          })),
        }]
      : []),

    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": homeLabel, "item": `${baseUrl}/${locale}/` },
        { "@type": "ListItem", "position": 2, "name": servicesLabel, "item": canonicalUrl },
      ],
    },
  ];

  if (faqItems.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "inLanguage": inLanguage,
      "isPartOf": { "@id": webpageId },
      "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": stripHtml(f.question),
        "acceptedAnswer": { "@type": "Answer", "text": stripHtml(f.answer) },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
