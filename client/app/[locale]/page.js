import HomepageClient from "./components/homepage/HomepageClient"
import ThreeMainBanner from "./components/homepage/ThreeMainBanner";
import { getTranslations } from "next-intl/server";

import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { getOgImageByPathnameKey } from "@/app/lib/og-map";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/"; 
  const base = getBaseUrl();
  const canonical = getCanonicalUrl(pathnameKey, locale);

  const trUrl = getCanonicalUrl(pathnameKey, "tr");
  const enUrl = getCanonicalUrl(pathnameKey, "en");

    // OG: locale'e göre map'ten al
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  // OG url absolute olsun (garanti)
    const ogImageAbs = new URL(ogPath, base).toString(); 

  // İstersen bunları da next-intl JSON'a taşıyabiliriz (şimdilik sabit bıraktım)
  const title =
    locale === "tr"
      ? "DGTLFACE | Dijital Dönüşüm Partneriniz"
      : "Digital Marketing, SEO, SEM, Creative, Software & Hotel Tech Partner | DGTLFACE";

  const description =
    locale === "tr"
      ? "DGTLFACE; SEO, SEM, sosyal medya yönetimi, yazılım, creative, çok dilli çağrı merkezi ve otel teknolojileri alanlarında profesyonel dijital pazarlama çözümleri sunan teknoloji partneridir."
      : "DGTLFACE is a digital marketing & technology partner offering SEO, SEM, social media, software, creative production, multilingual call center and hotel technology solutions.";

  return {
    metadataBase: new URL(base),
    title,
    description,

    alternates: {
      canonical,
      languages: {
        tr: trUrl,
        en: enUrl,
        "x-default": trUrl,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "DGTLFACE",
      title,
      description,
      images: [{ url: ogImageAbs, width: 1200, height: 630, alt: title }],
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
  };
}





export default async function HomePage({ params }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Homepage" });

  const baseUrl = getBaseUrl();
  const pathnameKey = "/";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
  const websiteId = `${canonicalUrl}#website`;

  // Home JSON-LD (locale'e göre metin)
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "DGTLFACE | Dijital Pazarlama & Teknoloji Partneri",
        url: `${baseUrl}/`,
        description: t("jsonld.orgDescription"),
        logo: `${baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antalya",
          addressCountry: "TR",
        },
        areaServed: t.raw("jsonld.areaServed"),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: canonicalUrl,
        name: t("jsonld.websiteName"),
        alternateName: "DGTLFACE",
        description: t("jsonld.websiteDescription"),
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: t("jsonld.pageName"),
        description: t("jsonld.pageDescription"),
        isPartOf: { "@id": websiteId },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "tr" ? "DGTLFACE" : "DGTLFACE",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: t("jsonld.faq.q1"),
            acceptedAnswer: { "@type": "Answer", text: t.raw("jsonld.faq.a1") },
          },
          {
            "@type": "Question",
            name: t("jsonld.faq.q2"),
            acceptedAnswer: { "@type": "Answer", text: t.raw("jsonld.faq.a2") },
          },
          {
            "@type": "Question",
            name: t("jsonld.faq.q3"),
            acceptedAnswer: { "@type": "Answer", text: t.raw("jsonld.faq.a3") },
          },
          {
            "@type": "Question",
            name: t("jsonld.faq.q4"),
            acceptedAnswer: { "@type": "Answer", text: t.raw("jsonld.faq.a4") },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <main className="flex flex-col gap-[10px] lg:gap-[20px] max-w-screen overflow-x-hidden">
        <ThreeMainBanner/>
        <HomepageClient/>
      </main>
    </>

  );
}