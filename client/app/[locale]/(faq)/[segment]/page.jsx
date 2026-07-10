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
import JsonLd from "../../components/seo/JsonLd";
import { getFaqNamespace } from "@/app/lib/get-faq-namespace";

// -----------------------------
// Meta helper
// -----------------------------
function metaFromJsonLd(jsonLd) {
  if (!jsonLd) return null;
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
  };
}

// -----------------------------
// JSON-LD helpers
// -----------------------------

function cleanSchemaText(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?(services|seo|smm|software|reporting|a|b|strong|ul|ol|li)(?:\s+[^>]*)?>/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function getVisibleFaqQuestionSet(namespace, limit = 11) {
  const visibleItems = namespace?.sections?.generalQuestions?.items || [];

  return visibleItems
    .filter((item) => item?.q && item?.a)
    .slice(0, limit)
    .map((item) => ({
      question: cleanSchemaText(item.q),
      answer: cleanSchemaText(item.a),
    }));
}

function buildFrameworkFaqJsonLd({
  baseJsonLd,
  locale,
  faqItems,
  pageLabel,
  siteUrl,
  breadcrumbItems,
}) {
  if (!baseJsonLd || !faqItems.length) return null;

  const pageUrl = baseJsonLd.url || `${siteUrl}${getFaqIndexHref(locale)}`;
  const pageName = cleanSchemaText(baseJsonLd.name || pageLabel);
  const pageDescription = cleanSchemaText(baseJsonLd.description || "");
  const pageOrigin = (() => {
    try {
      return new URL(pageUrl).origin;
    } catch {
      return siteUrl;
    }
  })();
  const language = locale === "en" ? "en-US" : "tr-TR";
  const organizationId = `${pageOrigin}/#organization`;
  const websiteId = `${pageOrigin}/#website`;
  const webpageId = `${pageUrl}#webpage`;
  const faqpageId = `${pageUrl}#faqpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const homeUrl = `${pageOrigin}/${locale}/`;
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const toAbsoluteBreadcrumbUrl = (href) => {
    if (!href) return pageUrl;
    if (href === `/${locale}` || href === `/${locale}/`) return homeUrl;

    try {
      return new URL(href, pageOrigin).toString();
    } catch {
      return pageUrl;
    }
  };
  const breadcrumbListItems =
    Array.isArray(breadcrumbItems) && breadcrumbItems.length
      ? breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label || pageLabel,
          item: toAbsoluteBreadcrumbUrl(item.href),
        }))
      : [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageLabel,
            item: pageUrl,
          },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": faqpageId,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
        inLanguage: language,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
        inLanguage: language,
        isPartOf: { "@id": websiteId },
        about: { "@id": faqpageId },
        mainEntity: { "@id": faqpageId },
        publisher: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: breadcrumbListItems,
      },
    ],
  };
}

// -----------------------------
// Metadata
// -----------------------------
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.segment;
  const locale = resolvedParams?.locale || "tr";
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
  const canonicalUrl = `${siteUrl}${buildFaqHrefBySlug(slug, locale)}`;

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
export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.segment;
  const locale = resolvedParams?.locale || "tr";

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

  const namespace = await getFaqNamespace(locale, pageNs);

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
  const faqQuestionSet = getVisibleFaqQuestionSet(namespace, 11);
  const siteUrl = getSiteUrl();
  const currentUrl = `${siteUrl}${currentHref}`;
  const frameworkBaseJsonLd = {
    ...(fixedJsonLd || {}),
    url: currentUrl,
    name: fixedJsonLd?.name || fixedJsonLd?.dgPageName || currentLabel,
    description:
      fixedJsonLd?.description || fixedJsonLd?.dgMetaDescription || "",
  };
  const jsonLdData = buildFrameworkFaqJsonLd({
    baseJsonLd: frameworkBaseJsonLd,
    locale,
    faqItems: faqQuestionSet,
    pageLabel: currentLabel,
    siteUrl,
    breadcrumbItems: crumbItems,
  });

  return (
    <div className="flex flex-col max-w-full">
      {jsonLdData ? <JsonLd id={`jsonld-faq-${slug}`} data={jsonLdData} /> : null}

      <SearchBanner faqSlug={slug} />
      <Breadcrumbs items={crumbItems} />
      <FaqMainServer locale={locale} pageNs={pageNs} />
    </div>
  );
}
