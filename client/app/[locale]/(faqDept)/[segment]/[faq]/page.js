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
import {
  fixFaqJsonLdLocale,
  sanitizeFaqJsonLdForOutput,
} from "../../../(faq)/utils/fixFaqJsonLd";
import Breadcrumbs from "@/app/[locale]/(faq)/[segment]/components/Breadcrumbs";
import { getFaqOgImageUrl } from "../../../(faq)/utils/faqOgImage";
import FaqMainServer from "@/app/[locale]/sss/components/FaqMainServer";
import JsonLd from "../../../components/seo/JsonLd";
import {
  buildFaqHrefBySlug,
  findFaqSlugByNamespace,
  resolveFaqContentSlug,
} from "@/app/lib/faq-url";
import { getSiteUrl } from "@/app/lib/site-url";

//  Aynı namespace'in locale'e göre doğru slug'ını bul
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

function toAbsoluteSiteUrl(href) {
  if (!href) return "";

  try {
    return new URL(href, "https://dgtlface.com").toString();
  } catch {
    return href;
  }
}

function buildFaqDeptJsonLd(baseJsonLd, crumbItems, locale) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  if (!url) return baseJsonLd;

  const inLanguage = baseJsonLd.inLanguage || locale;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqId = baseJsonLd["@id"] || `${url}#faq`;

  return sanitizeFaqJsonLdForOutput([
    baseJsonLd,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: crumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: toAbsoluteSiteUrl(item.href),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      inLanguage,
      name: baseJsonLd.dgPageName || baseJsonLd.name,
      description: baseJsonLd.description,
      isPartOf: { "@id": "https://dgtlface.com/#website" },
      publisher: { "@id": "https://dgtlface.com/#organization" },
      breadcrumb: { "@id": breadcrumbId },
      mainEntity: { "@id": faqId },
    },
  ]);
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "tr";
  const slug = resolvedParams?.faq;      // ✅ doğru: [faq]
  const segment = resolvedParams?.segment; // ✅ doğru: [segment]
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
    canonical || `${siteUrl}${buildFaqHrefBySlug(resolvedSlug, locale)}`;

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

export default async function Page({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "tr";
  const segment = resolvedParams?.segment; // ✅ doğru: [segment]
  const slug = resolvedParams?.faq;        // ✅ doğru: [faq]
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
  const canonicalHref = buildFaqHrefBySlug(resolvedSlug, locale);
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
  const jsonLdData = buildFaqDeptJsonLd(fixedJsonLd, crumbItems, locale);

  return (
    <div className="flex flex-col max-w-full">
      {jsonLdData ? <JsonLd id={`jsonld-faq-${segment}-${slug}`} data={jsonLdData} /> : null}
      <SearchBanner faqSlug={resolvedSlug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer locale={locale} pageNs={pageNs} />
    </div>
  );
}
