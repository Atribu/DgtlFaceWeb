// app/[locale]/(faqDept)/[segment]/[faq]/page.js
import React from "react";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../../../(faq)/faqMap";
import { FAQ_JSONLD_MAP } from "../../../(faq)/faqJsonLdMap";
import { FAQ_DEPT_CRUMB_MAP, FAQ_DEPT_LABEL_MAP, FAQ_SLUG_DEPT_SEGMENT_MAP } from "../../../faqRouteMap";
import SearchBanner from "../../../sss/components/SearchBanner";
import FaqMain from "../../../sss/components/FaqMain";
import { fixFaqJsonLdLocale } from "../../../(faq)/utils/fixFaqJsonLd"; // ✅ EKLEND
import Breadcrumbs from "@/app/[locale]/(faq)/[segment]/components/Breadcrumbs";
import { getFaqOgImageUrl } from "../../../(faq)/utils/faqOgImage";


// metaFromJsonLd + buildEnhancedJsonLd + buildBreadcrumbJsonLd fonksiyonlarını
// mevcut dosyandan olduğu gibi buraya taşıyabilirsin.

export async function generateMetadata({ params }) {
  const locale = params?.locale || "tr";
  const slug = params?.faq;

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
      url: canonical || `${siteUrl}/${locale}/${params?.segment}/${slug}`,
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


export default function Page({ params }) {
  const locale = params?.locale || "tr";
  const dept = params?.segment;     // smm
  const slug = params?.faq;      // reels-video-sss

  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];
   const fixedJsonLd = fixFaqJsonLdLocale(baseJsonLd, locale); // ✅ EKLENDİ

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
    fixedJsonLd?.url?.replace("https://dgtlface.com", "") || `/${locale}/${dept}/${slug}`; //

  const crumbItems = [
    { label: "Ana Sayfa", href: homeHref },
    { label: "SSS", href: faqIndexHref },
    ...(deptSlug ? [{ label: deptLabel, href: deptHref }] : []),
    { label: (fixedJsonLd?.dgPageName || fixedJsonLd?.name || "SSS"), href: currentHref }, // ✅ fixedJsonLd
  ];

  const jsonLdNodes = fixedJsonLd ? [fixedJsonLd] : null; // ✅ fixedJsonLd

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
      <FaqMain pageNs={pageNs} />
    </div>
  );
}
