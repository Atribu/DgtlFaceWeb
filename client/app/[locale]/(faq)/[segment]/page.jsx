// app/[locale]/(faq)/[segment]/page.js
import React from "react";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../faqMap";
import { FAQ_JSONLD_MAP } from "../faqJsonLdMap";
import SearchBanner from "../../sss/components/SearchBanner";
import Breadcrumbs from "./components/Breadcrumbs";
import {
  FAQ_DEPT_CRUMB_MAP,
  FAQ_DEPT_LABEL_MAP,
  FAQ_SLUG_DEPT_SEGMENT_MAP,
} from "../../faqRouteMap";
import { fixFaqJsonLdLocale } from "../utils/fixFaqJsonLd";
import { getFaqOgImageUrl } from "../utils/faqOgImage";
import FaqMainServer from "../../sss/components/FaqMainServer";

function metaFromJsonLd(jsonLd) {
  if (!jsonLd) return null;
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
    canonical: jsonLd.url || "",
  };
}

// Build proper URL based on locale and slug
function buildFaqUrl(locale, slug) {
  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];
  
  if (deptSegment) {
    return `/${locale}/${deptSegment}/${slug}`;
  }
  
  // Root FAQ pages
  if (slug === "sss") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }
  
  if (slug === "hizmetlerimiz-sss") {
    return `/${locale}/${locale === "en" ? "services/faq" : "hizmetlerimiz-sss"}`;
  }
  
  return `/${locale}/${slug}`;
}

// Google structured data
function buildEnhancedJsonLd(baseJsonLd, slug, locale) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  const inLanguage = baseJsonLd.inLanguage || locale;

  const nodes = [];
  nodes.push(baseJsonLd);

  // Add breadcrumb
  const breadcrumb = buildBreadcrumbJsonLd(baseJsonLd, slug, locale);
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

// Build breadcrumb JSON-LD
function buildBreadcrumbJsonLd(baseJsonLd, slug, locale) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const pageUrl = baseJsonLd.url || "";
  const inLanguage = baseJsonLd.inLanguage || locale;

  if (!pageUrl) return null;

  // FAQ index URL
  const faqIndexSlug = locale === "en" ? "faq" : "sss";
  const faqIndexUrl = `https://dgtlface.com/${locale}/${faqIndexSlug}`;

  // Department slug + label + url
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug ? (FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlug] || "Category") : null;
  
  let deptUrl = "";
  if (deptSlug && deptSlug !== slug) {
    deptUrl = `https://dgtlface.com${buildFaqUrl(locale, deptSlug)}`;
  }

  const items = [];

  // 1) Home
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  items.push({
    name: homeLabel,
    item: `https://dgtlface.com/${locale}`,
  });

  // 2) FAQ index
  const faqIndexLabel = locale === "en" ? "FAQ" : "SSS";
  items.push({ name: faqIndexLabel, item: faqIndexUrl });

  // 3) Department (if different from current page)
  if (deptUrl && deptLabel) {
    items.push({ name: deptLabel, item: deptUrl });
  }

  // 4) Current page
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

export async function generateMetadata({ params }) {
  const slug = params?.segment;
  const locale = params?.locale || "tr";

  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);

  const meta = metaFromJsonLd(fixedJsonLd);
  if (!meta) return {};

  const siteUrl = "https://dgtlface.com";
  const ogImage = getFaqOgImageUrl({ slug, locale, siteUrl });

  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.canonical ? { canonical: meta.canonical } : undefined,

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical || `${siteUrl}${buildFaqUrl(locale, slug)}`,
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
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
  const locale = params?.locale || "tr";

    // Türkçe yorum: EN'de TR slug'ları kesinlikle açılmasın
  if (locale === "en" && /-sss$/.test(slug)) {
    notFound();
  }
  
  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];

  if (!pageNs) notFound();

  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);
  const jsonLdNodes = buildEnhancedJsonLd(fixedJsonLd, slug, locale);

  // Build breadcrumb items
  const isFaqRoot = slug === "sss";
  const isServicesRoot = slug === "hizmetlerimiz-sss";

  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";
  const servicesLabel = locale === "en" ? "Our Services FAQ" : "Hizmetlerimiz SSS";

  const homeHref = `/${locale}`;
  const faqIndexHref = `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  const servicesHref = `/${locale}/${locale === "en" ? "services/faq" : "hizmetlerimiz-sss"}`;

  // Department info
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug ? (FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlug] || "Category") : null;
  const deptHref = deptSlug ? buildFaqUrl(locale, deptSlug) : null;

  const currentLabel = baseJsonLd?.dgPageName || baseJsonLd?.name || faqLabel;
  const currentHref = buildFaqUrl(locale, slug);

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
            ...(deptSlug && deptSlug !== slug ? [{ label: deptLabel, href: deptHref }] : []),
            { label: currentLabel, href: currentHref },
          ]),
  ];

  return (
    <div className="flex flex-col max-w-full">
      {/* JSON-LD */}
      {jsonLdNodes ? (
        <script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      <SearchBanner faqSlug={slug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer pageNs={pageNs} />
    </div>
  );
}