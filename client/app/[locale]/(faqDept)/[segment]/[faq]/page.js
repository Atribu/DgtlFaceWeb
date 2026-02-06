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

// ============================================================================
// YARDIMCI FONKSİYONLAR
// ============================================================================

/**
 * Locale ve slug'a göre doğru FAQ URL'ini oluşturur
 * TR: /tr/yazilim/cms-entegrasyonu-sss
 * EN: /en/software-development/cms-entegrasyonu-sss
 */
function buildFaqUrl(locale, slug, deptSegment = null) {
  // Eğer department segment verilmediyse, slug'dan bul
  const segment = deptSegment || FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];

  if (segment) {
    return `/${locale}/${segment}/${slug}`;
  }

  // Root FAQ sayfaları için
  if (slug === "sss") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }

  if (slug === "hizmetlerimiz-sss") {
    return `/${locale}/${locale === "en" ? "services/faq" : "hizmetlerimiz-sss"}`;
  }

  return `/${locale}/${slug}`;
}

/**
 * Department ana sayfası URL'ini oluşturur
 * TR: /tr/seo-sss
 * EN: /en/search-engine-optimization/seo-sss (veya /en/seo/seo-sss - routing'e göre)
 */
function buildDeptUrl(locale, deptSlug) {
  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[deptSlug];

  if (deptSegment) {
    return `/${locale}/${deptSegment}/${deptSlug}`;
  }

  return `/${locale}/${deptSlug}`;
}

// ============================================================================
// METADATA FONKSİYONU
// ============================================================================

export async function generateMetadata({ params }) {
  const locale = params?.locale || "tr";
  const slug = params?.faq;
  const segment = params?.segment;

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
  const description = fixedJsonLd.dgMetaDescription || fixedJsonLd.description || "";
  const canonical = fixedJsonLd.url || "";

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,

    openGraph: {
      title,
      description,
      url: canonical || `${siteUrl}${buildFaqUrl(locale, slug, segment)}`,
      siteName: "DGTLFACE",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// ============================================================================
// JSON-LD STRUCTURED DATA FONKSİYONLARI
// ============================================================================

/**
 * Google için zenginleştirilmiş JSON-LD verisi oluşturur
 */
function buildEnhancedJsonLd(baseJsonLd, slug, locale) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  const inLanguage = baseJsonLd.inLanguage || locale;

  const nodes = [];

  // Ana FAQ JSON-LD
  nodes.push(baseJsonLd);

  // Breadcrumb JSON-LD
  const breadcrumb = buildBreadcrumbJsonLd(baseJsonLd, slug, locale);
  if (breadcrumb) nodes.push(breadcrumb);

  // WebPage JSON-LD
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

  // Voice query examples (varsa)
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

/**
 * Breadcrumb (ekmek kırıntıları) JSON-LD verisi oluşturur
 * Ana Sayfa > SSS > SEO > Teknik SEO gibi
 */
function buildBreadcrumbJsonLd(baseJsonLd, slug, locale) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const pageUrl = baseJsonLd.url || "";
  const inLanguage = baseJsonLd.inLanguage || locale;

  if (!pageUrl) return null;

  // Etiketler (locale'e göre)
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";

  // FAQ index URL
  const faqIndexSlug = locale === "en" ? "faq" : "sss";
  const faqIndexUrl = `https://dgtlface.com/${locale}/${faqIndexSlug}`;

  // Department bilgileri
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug
    ? FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlug] || "Category"
    : null;

  let deptUrl = "";
  if (deptSlug && deptSlug !== slug) {
    deptUrl = `https://dgtlface.com${buildDeptUrl(locale, deptSlug)}`;
  }

  const items = [];

  // 1) Ana Sayfa
  items.push({
    name: homeLabel,
    item: `https://dgtlface.com/${locale}`,
  });

  // 2) SSS Ana Sayfa
  items.push({ name: faqLabel, item: faqIndexUrl });

  // 3) Departman (varsa ve mevcut sayfadan farklıysa)
  if (deptUrl && deptLabel) {
    items.push({ name: deptLabel, item: deptUrl });
  }

  // 4) Mevcut Sayfa
  items.push({
    name: baseJsonLd.dgH1 || baseJsonLd.dgPageName || baseJsonLd.name || faqLabel,
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

// ============================================================================
// ANA SAYFA KOMPONENTİ
// ============================================================================

export default function Page({ params }) {
  const locale = params?.locale || "tr";
  const segment = params?.segment; // URL'deki department segmenti (örn: "yazilim", "software-development")
  const slug = params?.faq; // FAQ slug'ı (örn: "cms-entegrasyonu-sss")

  // FAQ namespace ve JSON-LD verisini al
  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
  const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale);

  // Sayfa bulunamazsa 404
  if (!pageNs) notFound();

  // ============================================================================
  // GÜVENLİK KONTROLÜ
  // ============================================================================
  // Slug'ın beklenen department segmentinde olup olmadığını kontrol et
  // Örnek: "cms-entegrasyonu-sss" slug'ı mutlaka "yazilim" (TR) veya
  // "software-development" (EN) segmentinde olmalı
  const expectedSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];

  if (expectedSegment && expectedSegment !== segment) {
    // Yanlış department'ta ise 404
    notFound();
  }

  // ============================================================================
  // BREADCRUMB (EKMEK KIRINTILARI) OLUŞTURMA
  // ============================================================================

  // Locale'e göre etiketler
  const homeLabel = locale === "en" ? "Home" : "Ana Sayfa";
  const faqLabel = locale === "en" ? "FAQ" : "SSS";

  // Department bilgileri
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug
    ? FAQ_DEPT_LABEL_MAP?.[locale]?.[deptSlug] || "Category"
    : null;

  // URL'ler
  const homeHref = `/${locale}`;
  const faqIndexHref = `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  const deptHref = deptSlug ? buildDeptUrl(locale, deptSlug) : null;
  const currentHref = buildFaqUrl(locale, slug, segment);

  // Breadcrumb öğelerini oluştur
  const crumbItems = [
    { label: homeLabel, href: homeHref },
    { label: faqLabel, href: faqIndexHref },
    // Department linki (varsa ve mevcut sayfadan farklıysa)
    ...(deptSlug && deptSlug !== slug ? [{ label: deptLabel, href: deptHref }] : []),
    // Mevcut sayfa
    {
      label: fixedJsonLd?.dgPageName || fixedJsonLd?.name || faqLabel,
      href: currentHref,
    },
  ];

  // JSON-LD structured data oluştur
  const jsonLdNodes = buildEnhancedJsonLd(fixedJsonLd, slug, locale);

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="flex flex-col max-w-full">
      {/* JSON-LD Structured Data (Google için) */}
      {jsonLdNodes ? (
        <script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      {/* Arama Banner'ı */}
      <SearchBanner faqSlug={slug} />

      {/* Breadcrumb (Ekmek Kırıntıları) */}
      <Breadcrumbs items={crumbItems} />

      {/* FAQ İçeriği */}
      <FaqMainServer pageNs={pageNs} />
    </div>
  );
}