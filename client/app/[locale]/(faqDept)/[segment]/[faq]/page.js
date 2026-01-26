// app/[locale]/(faq)/[dept]/[faq]/page.js
import React from "react";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../../../(faq)/faqMap";
import { FAQ_JSONLD_MAP } from "../../../(faq)/faqJsonLdMap";
import { FAQ_DEPT_CRUMB_MAP, FAQ_DEPT_LABEL_MAP, FAQ_SLUG_DEPT_SEGMENT_MAP } from "../../../faqRouteMap";
import SearchBanner from "../../../sss/components/SearchBanner";
import FaqMain from "../../../sss/components/FaqMain";

// metaFromJsonLd + buildEnhancedJsonLd + buildBreadcrumbJsonLd fonksiyonlarını
// mevcut dosyandan olduğu gibi buraya taşıyabilirsin.

export async function generateMetadata({ params }) {
  const slug = params?.faq;
  const jsonLd = FAQ_JSONLD_MAP?.[slug];
  if (!jsonLd) return {};
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
    alternates: jsonLd.url ? { canonical: jsonLd.url } : undefined,
  };
}

export default function Page({ params }) {
  const locale = params?.locale || "tr";
  const dept = params?.segment;     // smm
  const slug = params?.faq;      // reels-video-sss

  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];

  if (!pageNs) notFound();

  // ✅ slug’ın dept’i doğru mu?
const expectedDept = FAQ_SLUG_DEPT_SEGMENT_MAP?.[slug];

// slug dept’li ise kontrol et
if (expectedDept && expectedDept !== dept) {
  notFound();
}

  // Breadcrumb için senin mevcut yaklaşımın aynen kullanılabilir:
  const deptSlug = FAQ_DEPT_CRUMB_MAP?.[slug] || null;
  const deptLabel = deptSlug ? (FAQ_DEPT_LABEL_MAP?.[deptSlug] || "Kategori") : null;

  const homeHref = `/${locale}`;
  const faqIndexHref = `/${locale}/sss`;

  // Kategori sayfaları halen /seo-sss vb kaldığı için:
  const deptHref = deptSlug ? `/${locale}/${deptSlug}` : null;

  const currentHref =
    baseJsonLd?.url?.replace("https://dgtlface.com", "") || `/${locale}/${dept}/${slug}`;

  const crumbItems = [
    { label: "Ana Sayfa", href: homeHref },
    { label: "SSS", href: faqIndexHref },
    ...(deptSlug ? [{ label: deptLabel, href: deptHref }] : []),
    { label: (baseJsonLd?.dgPageName || baseJsonLd?.name || "SSS"), href: currentHref },
  ];

  const jsonLdNodes = baseJsonLd ? [baseJsonLd] : null; // sende enhanced vardı, aynen taşı

  return (
    <div className="flex flex-col max-w-full">
      {jsonLdNodes ? (
        <Script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      <SearchBanner faqSlug={slug} />
      {/* <Breadcrumbs items={crumbItems} /> */}
      <FaqMain pageNs={pageNs} />
    </div>
  );
}
