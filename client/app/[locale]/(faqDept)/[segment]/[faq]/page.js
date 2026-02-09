// app/[locale]/(faqDept)/[segment]/[faq]/page.js
import React from "react";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../../../(faq)/faqMap";
import { FAQ_JSONLD_MAP } from "../../../(faq)/faqJsonLdMap";
import {
  FAQ_DEPT_CRUMB_MAP,
  FAQ_DEPT_LABEL_MAP,
  FAQ_SLUG_DEPT_SEGMENT_MAP,
} from "../../../faqRouteMap";
import SearchBanner from "../../../sss/components/SearchBanner";
import { fixFaqJsonLdLocale } from "../../../(faq)/utils/fixFaqJsonLd";
import Breadcrumbs from "@/app/[locale]/(faq)/[segment]/components/Breadcrumbs";
import { getFaqOgImageUrl } from "../../../(faq)/utils/faqOgImage";
import FaqMainServer from "@/app/[locale]/sss/components/FaqMainServer";

// Türkçe yorum: Aynı namespace'in locale'e göre doğru slug'ını bul
function findSlugByNs(ns, locale, FAQ_MAP) {
  if (!ns) return null;

  const suffix = locale === "en" ? "-faq" : "-sss";

  const match = Object.keys(FAQ_MAP || {}).find(
    (slug) => FAQ_MAP[slug] === ns && slug.endsWith(suffix)
  );

  return match || null;
}


// breadcrumbs yardımcı fonksiyonlar
function getFaqIndexHref(locale) {
  return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
}

// ✅ EN: /en/services-faq (tek segment)
function getServicesFaqHref(locale) {
  return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
}

/**
 * Locale + slug -> doğru URL
 * - Dept segmentli: /en/<segment>/<slug>
 * - Root: /en/faq, /tr/sss
 * - Services root: /en/services-faq, /tr/hizmetlerimiz-sss
 */
function buildFaqUrl(locale, slug, deptSegment = null) {
  // services root hem TR hem EN slug ile gelebilir
  if (slug === "hizmetlerimiz-sss" || slug === "services-faq") {
    return getServicesFaqHref(locale);
  }

  // FAQ index
  if (slug === "sss" || slug === "faq") {
    return getFaqIndexHref(locale);
  }

  const segment = deptSegment || FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];
  if (segment) return `/${locale}/${segment}/${slug}`;

  return `/${locale}/${slug}`;
}

/**
 * Department ana sayfası URL'ini oluşturur
 * TR: /tr/seo-sss
 * EN: /en/search-engine-optimization/seo-faq (senin map yapına göre)
 */
function buildDeptUrl(locale, deptSlug) {
  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[deptSlug];
  if (deptSegment) return `/${locale}/${deptSegment}/${deptSlug}`;
  return `/${locale}/${deptSlug}`;
}

export async function generateMetadata({ params }) {
  const locale = params?.locale || "tr";
  const slug = params?.faq;      // ✅ doğru: [faq]
  const segment = params?.segment; // ✅ doğru: [segment]

  // Türkçe yorum: EN'de TR slug'ları kesinlikle açılmasın
  if (locale === "en" && /-sss$/.test(slug)) {
    notFound();
  }

  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);
  if (!fixedJsonLd) return {};

  const siteUrl = "https://dgtlface.com";
  const ogImage = getFaqOgImageUrl({ slug, locale, siteUrl });

  const title = fixedJsonLd.dgTitle || fixedJsonLd.name || "";
  const description =
    fixedJsonLd.dgMetaDescription || fixedJsonLd.description || "";
  const canonical = fixedJsonLd.url || "";

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      url: canonical || `${siteUrl}${buildFaqUrl(locale, slug, segment)}`, // ✅ segment'i burada kullan
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article",
      images: [{ url: ogImage, secureUrl: ogImage,  width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }) {
  const locale = params?.locale || "tr";
  const segment = params?.segment; // ✅ doğru: [segment]
  const slug = params?.faq;        // ✅ doğru: [faq]

  // Türkçe yorum: EN'de TR slug'ları kesinlikle açılmasın
  if (locale === "en" && /-sss$/.test(slug)) notFound();

  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
  if (!pageNs) notFound();

  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);

  // ✅ slug'ın doğru segmentte olup olmadığını kontrol et
  const expectedSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];
  if (expectedSegment && expectedSegment !== segment) notFound();

  // Labels
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";

  // Hrefs
  const homeHref = `/${locale}`;
  const faqIndexHref = getFaqIndexHref(locale);

  // Dept info - TR slug kullanarak department bul
  const deptSlugTR = FAQ_DEPT_CRUMB_MAP?.[slug] || 
                     FAQ_DEPT_CRUMB_MAP?.[findSlugByNs(pageNs, "tr", FAQ_MAP)] || 
                     null;
  
  // ✅ FIX: Dept label'ı locale'e göre al
  const deptLabel = (() => {
    if (!deptSlugTR) return null;
    
    // Önce TR slug'dan label al
    const labelFromTRSlug = FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlugTR];
    if (labelFromTRSlug) return labelFromTRSlug;
    
    // Yoksa EN slug'a çevir ve ondan label al
    const deptNs = FAQ_MAP?.[deptSlugTR];
    const deptSlugLocale = findSlugByNs(deptNs, locale, FAQ_MAP);
    return FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlugLocale] || "Category";
  })();
  
  const deptHref = (() => {
    if (!deptSlugTR) return null;
    const deptNs = FAQ_MAP?.[deptSlugTR];
    const deptSlugLocale = findSlugByNs(deptNs, locale, FAQ_MAP) || deptSlugTR;
    return buildDeptUrl(locale, deptSlugLocale);
  })();

  // ✅ FIX: Current label - JSON-LD'den al, fallback olarak slug kullan
  const currentLabel = fixedJsonLd?.dgPageName || fixedJsonLd?.name || faqLabel;
  const currentHref = buildFaqUrl(locale, slug, segment);

  const crumbItems = [
    { label: homeLabel, href: homeHref },
    { label: faqLabel, href: faqIndexHref },
    ...(deptSlugTR && deptSlugTR !== slug ? [{ label: deptLabel, href: deptHref }] : []),
    { label: currentLabel, href: currentHref },
  ];

  return (
    <div className="flex flex-col max-w-full">
      <SearchBanner faqSlug={slug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer pageNs={pageNs} />
    </div>
  );
}