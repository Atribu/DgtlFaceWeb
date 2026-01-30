// app/[locale]/(faq)/[faq]/page.js
import React from "react";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../faqMap";
import { FAQ_JSONLD_MAP } from "../faqJsonLdMap";
import SearchBanner from "../../sss/components/SearchBanner";
import FaqMain from "../../sss/components/FaqMain";
import Breadcrumbs from "./components/Breadcrumbs"; 
import { FAQ_DEPT_CRUMB_MAP, FAQ_DEPT_LABEL_MAP } from "../../faqRouteMap";


function metaFromJsonLd(jsonLd) {
  if (!jsonLd) return null;
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
    canonical: jsonLd.url || "",
  };
}

// Google'a "standart" şekilde yansıtma katmanı
function buildEnhancedJsonLd(baseJsonLd, slug) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  const inLanguage = baseJsonLd.inLanguage || "tr";

  const nodes = [];

  nodes.push(baseJsonLd);

  // ✅ BreadcrumbList ekle
  const breadcrumb = buildBreadcrumbJsonLd(baseJsonLd, slug);
  if (breadcrumb) nodes.push(breadcrumb);

  nodes.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    inLanguage,
    name: baseJsonLd.name,
    description: baseJsonLd.description,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".dg-ai-capsule", ".dg-voice-summary", ".dg-voice-queries"],
    },
  });

  const voiceQueries = Array.isArray(baseJsonLd.dgVoiceQueryExamples)
    ? baseJsonLd.dgVoiceQueryExamples
    : [];

  if (voiceQueries.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#voice-queries`,
      name: "Voice query examples",
      itemListElement: voiceQueries.map((q, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: q,
      })),
    });
  }

  return nodes;
}


/**breadcrumb üretme */
function buildBreadcrumbJsonLd(baseJsonLd, slug) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const pageUrl = baseJsonLd.url || "";
  const inLanguage = baseJsonLd.inLanguage || "tr";

  if (!pageUrl) return null;

  // Locale tespiti (sen localePrefix always kullanıyorsun)
  const locale = pageUrl.includes("/en/") ? "en" : pageUrl.includes("/ru/") ? "ru" : "tr";

  // SSS index URL
  const faqIndexUrl = `https://dgtlface.com/${locale}/sss`;

  // Departman slug + label + url
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug ? (FAQ_DEPT_LABEL_MAP?.[deptSlug] || "Kategori") : null;
  const deptUrl = deptSlug ? `https://dgtlface.com/${locale}/${deptSlug}` : "";

  const items = [];

  // 1) Home
  items.push({
    name: "Ana Sayfa",
    item: `https://dgtlface.com/${locale}`, // istersen routing'e göre /tr/anasayfa da yaparız
  });

  // 2) SSS index
  items.push({ name: "SSS", item: faqIndexUrl });

  // 3) Departman (varsa)  ✅ İŞTE BURAYA
  if (deptUrl && deptLabel) {
    items.push({ name: deptLabel, item: deptUrl });
  }

  // 4) Current page
  items.push({
    name: baseJsonLd.dgH1 || baseJsonLd.dgPageName || baseJsonLd.name || "SSS",
    item: pageUrl,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    inLanguage,
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}



export async function generateMetadata({ params }) {
  const slug = params?.faq;
  const jsonLd = FAQ_JSONLD_MAP?.[slug];
  const meta = metaFromJsonLd(jsonLd);
  if (!meta) return {};

  const locale = params?.locale || "tr";

  // Site domain (prod)
  const siteUrl = "https://dgtlface.com";

  // OG görsel URL
  const ogImage = `${siteUrl}/og/sss/dgtlface.com_tr_sss.jpeg`;


   return {
    title: meta.title,
    description: meta.description,
    alternates: meta.canonical ? { canonical: meta.canonical } : undefined,

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical || `${siteUrl}/${locale}/sss/${slug}`,
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article", // faq sayfası için istersen "website" da diyebilirsin
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }) {
   const slug = params?.segment;
  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];

  if (!pageNs) notFound();

  const jsonLdNodes = buildEnhancedJsonLd(baseJsonLd, slug);

  const locale = params?.locale || "tr";

// 1) departman slug’ını bul (seo-sss / sem-sss vs)
const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;

// 2) departman label’ı
const deptLabel = deptSlug ? (FAQ_DEPT_LABEL_MAP?.[deptSlug] || "Kategori") : null;

// 3) URL’leri locale’li üret
const homeHref = `/${locale}`;            // /tr
const faqIndexHref = `/${locale}/sss`;    // /tr/sss
const deptHref = deptSlug ? `/${locale}/${deptSlug}` : null;

// 4) current sayfa label’ında "SSS" tekrarını azalt (opsiyonel)
// Örn: "SEO SSS" yerine sadece "SEO" demek istiyorsan burada kırparsın
const currentLabelRaw = baseJsonLd?.dgPageName || baseJsonLd?.name || "SSS";
const currentLabel = currentLabelRaw.replace(/\s*SSS\s*/gi, " ").trim(); // istersen bunu kaldır

const currentHref =
  baseJsonLd?.url?.replace("https://dgtlface.com", "") || `/${locale}/${slug}`;
  
  const isFaqRoot = slug === "sss";
const isServicesRoot = slug === "hizmetlerimiz-sss";

const crumbItems = [
  { label: "Ana Sayfa", href: homeHref },

 ...(isFaqRoot
    ? [{ label: "SSS", href: faqIndexHref }]
    : isServicesRoot
      ? [
          { label: "SSS", href: faqIndexHref },
          { label: "Hizmetlerimiz SSS", href: `/${locale}/hizmetlerimiz-sss` },
        ]
      : [
          { label: "SSS", href: faqIndexHref },
          ...(deptSlug ? [{ label: deptLabel, href: deptHref }] : []),
          { label: (baseJsonLd?.dgPageName || baseJsonLd?.name || "SSS"), href: currentHref },
        ]),
];



  return (
    <div className="flex flex-col max-w-full">
      {/* JSON-LD */}
      {jsonLdNodes ? (
        <Script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      <SearchBanner faqSlug={slug} />
       <Breadcrumbs items={crumbItems} />
      <FaqMain pageNs={pageNs} />
    </div>
  );
}

