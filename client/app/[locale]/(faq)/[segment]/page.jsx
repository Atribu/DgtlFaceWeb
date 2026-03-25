// app/[locale]/(faq)/[segment]/page.js
import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { FAQ_MAP } from "../faqMap";
import { FAQ_JSONLD_MAP } from "../faqJsonLdMap";
import SearchBanner from "../../sss/components/SearchBanner";
import Breadcrumbs from "./components/Breadcrumbs";
import {
  FAQ_DEPT_CRUMB_MAP,
  FAQ_DEPT_LABEL_MAP,
} from "../../faqRouteMap";
import {
  buildFaqHrefBySlug,
  findFaqSlugByNamespace,
  getFaqLocaleSlug,
  getFaqIndexHref,
  getServicesFaqHref,
  isFaqDetailSlug,
} from "@/app/lib/faq-url";
import { getSiteUrl } from "@/app/lib/site-url";
import { fixFaqJsonLdLocale } from "../utils/fixFaqJsonLd";
import { getFaqOgImageUrl } from "../utils/faqOgImage";
import FaqMainServer from "../../sss/components/FaqMainServer";

// -----------------------------
// Meta helper
// -----------------------------
function metaFromJsonLd(jsonLd) {
  if (!jsonLd) return null;
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
    canonical: jsonLd.url || "",
  };
}

// -----------------------------
// JSON-LD builder'ları
// -----------------------------
function buildEnhancedJsonLd(baseJsonLd, slug, locale, resolvedConfigSlugTR) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  const inLanguage = baseJsonLd.inLanguage || locale;

  const nodes = [];
  nodes.push(baseJsonLd);

  const breadcrumb = buildBreadcrumbJsonLd(baseJsonLd, slug, locale, resolvedConfigSlugTR);
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

function buildBreadcrumbJsonLd(baseJsonLd, slug, locale, resolvedConfigSlugTR) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const pageUrl = baseJsonLd.url || "";
  const inLanguage = baseJsonLd.inLanguage || locale;
  if (!pageUrl) return null;

  // FAQ index URL
  const faqIndexUrl = `https://dgtlface.com${getFaqIndexHref(locale)}`;

  // Dept bilgisi (map TR slug ile çalışıyor)
  const deptSlugTR = FAQ_DEPT_CRUMB_MAP?.[resolvedConfigSlugTR] || null;
  const deptLabel = deptSlugTR
    ? (FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlugTR] || "Category")
    : null;

  // Dept URL (EN'de dept slug'ı -faq'a çevir)
  let deptUrl = "";
  if (deptSlugTR && deptSlugTR !== resolvedConfigSlugTR) {
    const deptNs = FAQ_MAP?.[deptSlugTR];
    const deptSlugLocale = findFaqSlugByNamespace(deptNs, locale) || deptSlugTR;
    deptUrl = `https://dgtlface.com${buildFaqHrefBySlug(deptSlugLocale, locale)}`;
  }

  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqIndexLabel = locale === "en" ? "FAQ" : "SSS";

  const items = [
    { name: homeLabel, item: `https://dgtlface.com/${locale}` },
    { name: faqIndexLabel, item: faqIndexUrl },
  ];

  if (deptUrl && deptLabel) items.push({ name: deptLabel, item: deptUrl });

  items.push({
    name: baseJsonLd.dgH1 || baseJsonLd.dgPageName || baseJsonLd.name || faqIndexLabel,
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

// -----------------------------
// Metadata
// -----------------------------
export async function generateMetadata({ params }) {
  const slug = params?.segment;
  const locale = params?.locale || "tr";
  const localizedSlug = getFaqLocaleSlug(slug, locale);

  const baseJsonLd = FAQ_JSONLD_MAP?.[localizedSlug] || FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);

  const meta = metaFromJsonLd(fixedJsonLd);
  if (!meta) return {};

  const siteUrl = getSiteUrl();
  const ogImage = getFaqOgImageUrl({ slug, locale, segment: slug, siteUrl });
  const pageNs = FAQ_MAP?.[localizedSlug] || FAQ_MAP?.[slug];
  const trSlug = findFaqSlugByNamespace(pageNs, "tr") || slug;
  const enSlug = findFaqSlugByNamespace(pageNs, "en") || slug;
  const canonicalUrl = meta.canonical || `${siteUrl}${buildFaqHrefBySlug(slug, locale)}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        tr: `${siteUrl}${buildFaqHrefBySlug(trSlug, "tr")}`,
        en: `${siteUrl}${buildFaqHrefBySlug(enSlug, "en")}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article",
      images: [{ url: ogImage, secureUrl: ogImage, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

// -----------------------------
// Page
// -----------------------------
export default function Page({ params }) {
  const slug = params?.segment;
  const locale = params?.locale || "tr";

  if (
    (locale === "en" && /-sss$/.test(slug)) ||
    (locale === "tr" && /-faq$/.test(slug))
  ) {
    permanentRedirect(buildFaqHrefBySlug(slug, locale));
  }

  if (isFaqDetailSlug(slug, locale)) {
    permanentRedirect(buildFaqHrefBySlug(slug, locale));
  }

  const pageNs = FAQ_MAP?.[slug];
  if (!pageNs) notFound();

  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);

  // ✅ Bu sayfanın TR "config slug"ı (breadcrumb map'ler bununla çalışıyor)
  const resolvedConfigSlugTR = (() => {
    if (slug === "faq" || slug === "sss") return "sss";
    if (slug === "services-faq" || slug === "hizmetlerimiz-sss") return "hizmetlerimiz-sss";
    return findFaqSlugByNamespace(pageNs, "tr") || "sss";
  })();

  const jsonLdNodes = buildEnhancedJsonLd(fixedJsonLd, slug, locale, resolvedConfigSlugTR);

  // Breadcrumb label'lar
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";
  const servicesLabel = locale === "en" ? "Our Services FAQ" : "Hizmetlerimiz SSS";

  const homeHref = `/${locale}`;
  const faqIndexHref = getFaqIndexHref(locale);
  const servicesHref = getServicesFaqHref(locale);

  const isFaqRoot = resolvedConfigSlugTR === "sss";
  const isServicesRoot = resolvedConfigSlugTR === "hizmetlerimiz-sss";

  // Dept info (map TR slug ile çalışıyor)
  const deptSlugTR = FAQ_DEPT_CRUMB_MAP?.[resolvedConfigSlugTR] || null;
  
  // ✅ FIX: Dept label'ı locale'e göre al, ama TR slug kullanarak
  const deptLabel = (() => {
    if (!deptSlugTR) return null;
    
    // Önce TR slug'dan label al
    const labelFromTRSlug = FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlugTR];
    if (labelFromTRSlug) return labelFromTRSlug;
    
    // Yoksa EN slug'a çevir ve ondan label al
    const deptNs = FAQ_MAP?.[deptSlugTR];
    const deptSlugLocale = findFaqSlugByNamespace(deptNs, locale);
    return FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlugLocale] || "Category";
  })();

  // Dept href (EN'de dept slug'ı -faq'a çevir)
  const deptHref = (() => {
    if (!deptSlugTR) return null;
    const deptNs = FAQ_MAP?.[deptSlugTR];
    const deptSlugLocale = findFaqSlugByNamespace(deptNs, locale) || deptSlugTR;
    return buildFaqHrefBySlug(deptSlugLocale, locale);
  })();

  // ✅ FIX: Current label - bu sayfanın kendi label'ı, EN'de slug'dan değil JSON-LD'den alınmalı
  const currentLabel = (() => {
    // Root sayfalar için direkt label döndür
    if (isFaqRoot) return faqLabel;
    if (isServicesRoot) return servicesLabel;
    
    // Department ana sayfaları için locale'e göre label
    const currentSlugLabel = FAQ_DEPT_LABEL_MAP?.[locale]?.[slug];
    if (currentSlugLabel) return currentSlugLabel;
    
    // Diğer sayfalar için JSON-LD'den al
    return fixedJsonLd?.dgPageName || fixedJsonLd?.name || faqLabel;
  })();
  
  const currentHref = buildFaqHrefBySlug(slug, locale);

  const crumbItems = [
    { label: homeLabel, href: homeHref },

    ...(isFaqRoot
      ? [{ label: faqLabel, href: faqIndexHref }]
      : isServicesRoot
        ? [
            { label: faqLabel, href: faqIndexHref },
            { label: servicesLabel, href: servicesHref },
          ]
        : [
            { label: faqLabel, href: faqIndexHref },
            ...(deptSlugTR && deptSlugTR !== resolvedConfigSlugTR
              ? [{ label: deptLabel, href: deptHref }]
              : []),
            { label: currentLabel, href: currentHref },
          ]),
  ];

  return (
    <div className="flex flex-col max-w-full">
      {jsonLdNodes ? (
        <script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      <SearchBanner faqSlug={slug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer locale={locale} pageNs={pageNs} />
    </div>
  );
}
