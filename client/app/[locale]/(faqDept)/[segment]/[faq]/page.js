// app/[locale]/(faqDept)/[segment]/[faq]/page.js
import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { FAQ_MAP } from "../../../(faq)/faqMap";
import { FAQ_JSONLD_MAP } from "../../../(faq)/faqJsonLdMap";
import {
  FAQ_DEPT_CRUMB_MAP,
  FAQ_DEPT_LABEL_MAP,
} from "../../../faqRouteMap";
import SearchBanner from "../../../sss/components/SearchBanner";
import { fixFaqJsonLdLocale } from "../../../(faq)/utils/fixFaqJsonLd";
import Breadcrumbs from "@/app/[locale]/(faq)/[segment]/components/Breadcrumbs";
import { getFaqOgImageUrl } from "../../../(faq)/utils/faqOgImage";
import FaqMainServer from "@/app/[locale]/sss/components/FaqMainServer";
import {
  buildFaqHrefBySlug,
  findFaqSlugByNamespace,
  resolveFaqContentSlug,
} from "@/app/lib/faq-url";
import { getSiteUrl } from "@/app/lib/site-url";

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

/**
 * Locale + slug -> doğru URL
 * - Dept segmentli: /en/<segment>/<slug>
 * - Root: /en/faq, /tr/sss
 */
function buildFaqUrl(locale, slug, deptSegment = null) {
  return buildFaqHrefBySlug(slug, locale, deptSegment);
}

/**
 * Department ana sayfası URL'ini oluşturur
 * TR: /tr/seo-sss
 * EN: /en/search-engine-optimization/seo-faq (senin map yapına göre)
 */
function buildDeptUrl(locale, deptSlug) {
  return buildFaqHrefBySlug(deptSlug, locale);
}

export async function generateMetadata({ params }) {
  const locale = params?.locale || "tr";
  const slug = params?.faq;      // ✅ doğru: [faq]
  const segment = params?.segment; // ✅ doğru: [segment]
  const resolvedSlug = resolveFaqContentSlug(slug, locale, segment);
  const baseJsonLd = FAQ_JSONLD_MAP?.[resolvedSlug] || FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);
  if (!fixedJsonLd) return {};

  const siteUrl = getSiteUrl();
  const ogImage = getFaqOgImageUrl({ slug: resolvedSlug, locale, segment, siteUrl });

  const title = fixedJsonLd.dgTitle || fixedJsonLd.name || "";
  const description =
    fixedJsonLd.dgMetaDescription || fixedJsonLd.description || "";
  const canonical = fixedJsonLd.url || "";
  const pageNs = FAQ_MAP?.[resolvedSlug];
  const trSlug = findFaqSlugByNamespace(pageNs, "tr") || resolvedSlug;
  const enSlug = findFaqSlugByNamespace(pageNs, "en") || resolvedSlug;
  const canonicalUrl =
    canonical || `${siteUrl}${buildFaqHrefBySlug(resolvedSlug, locale, segment)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        tr: `${siteUrl}${buildFaqHrefBySlug(trSlug, "tr")}`,
        en: `${siteUrl}${buildFaqHrefBySlug(enSlug, "en")}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article",
      images: [{ url: ogImage, secureUrl: ogImage, width: 1200, height: 630, alt: title }],
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
  const resolvedSlug = resolveFaqContentSlug(slug, locale, segment);

  if (
    (locale === "en" && /-sss$/.test(slug)) ||
    (locale === "tr" && /-faq$/.test(slug))
  ) {
    permanentRedirect(buildFaqHrefBySlug(resolvedSlug, locale, segment));
  }

  const pageNs = FAQ_MAP?.[resolvedSlug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[resolvedSlug];
  if (!pageNs) notFound();

  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);
  const canonicalHref = buildFaqHrefBySlug(resolvedSlug, locale, segment);
  const currentHref = `/${locale}/${segment}/${slug}`;

  // Public slug, legacy slug ve canonical path tek yerde normalize edilir.
  if (currentHref !== canonicalHref) {
    permanentRedirect(canonicalHref);
  }

  // Labels
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";

  // Hrefs
  const homeHref = `/${locale}`;
  const faqIndexHref = getFaqIndexHref(locale);

  // Dept info - TR slug kullanarak department bul
  const deptSlugTR = FAQ_DEPT_CRUMB_MAP?.[resolvedSlug] ||
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
  const currentBreadcrumbHref = buildFaqUrl(locale, resolvedSlug, segment);

  const crumbItems = [
    { label: homeLabel, href: homeHref },
    { label: faqLabel, href: faqIndexHref },
    ...(deptSlugTR && deptSlugTR !== resolvedSlug ? [{ label: deptLabel, href: deptHref }] : []),
    { label: currentLabel, href: currentBreadcrumbHref },
  ];

  return (
    <div className="flex flex-col max-w-full">
      <SearchBanner faqSlug={resolvedSlug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer locale={locale} pageNs={pageNs} />
    </div>
  );
}
