import HomepageClient from "./components/homepage/HomepageClient"
import ThreeMainBanner from "./components/homepage/ThreeMainBanner";
import { getTranslations } from "next-intl/server";

import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { getOgImageByPathnameKey } from "@/app/lib/og-map";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/"; // routing internal key
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
      ? "Dijital Pazarlama, SEO, SEM, Creative, Yazılım & Otel Teknoloji Partneri | DGTLFACE"
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
      languages: { tr: trUrl, en: enUrl },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "DGTLFACE | Technology Partner",
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

// const homeJsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": "https://dgtlface.com/#organization",
//       "name": "DGTLFACE",
//       "url": "https://dgtlface.com/",
//       "description":
//         "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunan dijital pazarlama ve teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"]
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://dgtlface.com/#website",
//       "url": "https://dgtlface.com/",
//       "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
//       "description": "Dijital Pazarlama, SEO, SEM, Creative, Yazılım ve Otel Teknoloji Partneri.",
//       "inLanguage": "tr-TR",
//       "publisher": {
//         "@id": "https://dgtlface.com/#organization"
//       }
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/#webpage",
//       "url": "https://dgtlface.com/tr/",
//       "name": "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
//       "description":
//         "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative, çok dilli çağrı merkezi ve PMS–OTA entegrasyonuyla markalar ve oteller için uçtan uca dijital pazarlama ve teknoloji çözümleri sunar.",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#website"
//       },
//       "inLanguage": "tr-TR",
//       "about": [
//         "dijital pazarlama ajansı",
//         "teknoloji partneri",
//         "otel dijital pazarlama",
//         "turizm teknolojileri",
//         "çok dilli çağrı merkezi",
//         "PMS & OTA yönetimi"
//       ],
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/#service",
//       "name": "DGTLFACE – Dijital Pazarlama ve Otel Teknoloji Partnerliği",
//       "url": "https://dgtlface.com/tr/",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType":
//         "dijital pazarlama ajansı, SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, çok dilli çağrı merkezi, PMS–OTA yönetimi, otel dijital pazarlama",
//       "description":
//         "DGTLFACE, SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunar; özellikle oteller ve turizm markaları için uçtan uca dijital dönüşüm sağlar.",
//     "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "dijital pazarlama ajansı",
//         "teknoloji partneri",
//         "dijital pazarlama hizmetleri",
//         "seo ajansı",
//         "sem ajansı",
//         "smm ajansı",
//         "çok dilli çağrı merkezi",
//         "otel dijital pazarlama",
//         "otel dijital dönüşüm ajansı",
//         "turizm teknolojileri pazarlama",
//         "resort dijital marketing",
//         "çok kanallı otel satış optimizasyonu",
//         "antalya dijital ajans",
//         "antalya teknoloji partneri",
//         "antalya seo sem smm ajansı",
//         "antalya otel dijital pazarlama"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/#breadcrumb",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Ana Sayfa",
//           "item": "https://dgtlface.com/tr/"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "DGTLFACE nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text":
//               "DGTLFACE, markalar ve özellikle oteller için SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunan entegre bir dijital pazarlama ve teknoloji partneridir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE sadece reklam yöneten bir ajans mıdır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text":
//               "Hayır. DGTLFACE sadece reklam yönetimi yapmaz; SEO, SEM, sosyal medya, web & yazılım, PMS–OTA ve çağrı merkezi süreçlerini uçtan uca entegre eden bir teknoloji partneri olarak çalışır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için DGTLFACE’in en büyük avantajı nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text":
//               "Oteller için en büyük avantaj; OTA, PMS, web sitesi, reklam ve çağrı merkezi süreçlerinin tek çatı altında birleşmesi ve tüm dijital temas noktalarının entegre bir mimariyle yönetilmesidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE sonuçları nasıl raporlar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text":
//               "Tüm veriler Looker Studio dashboard’larında ve düzenli raporlarda birleştirilir; SEO, SEM, sosyal medya, OTA ve çağrı merkezi performansı günlük, haftalık ve aylık olarak izlenir."
//           }
//         }
//       ]
//     }
//   ]
// };



export default async function HomePage({ params: { locale } }) {

  const t = await getTranslations({ locale, namespace: "HomePage" });

    const baseUrl = getBaseUrl();
  const pathnameKey = "/";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  // Home JSON-LD (locale'e göre metin)
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "DGTLFACE",
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
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: t("jsonld.websiteName"),
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
        isPartOf: { "@id": `${baseUrl}/#website` },
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
            name: locale === "tr" ? "Ana Sayfa" : "Home",
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
