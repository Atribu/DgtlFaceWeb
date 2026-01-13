import HomepageClient from "./components/homepage/HomepageClient"
import ThreeMainBanner from "./components/homepage/ThreeMainBanner";

export async function generateMetadata() {
  const title =
    "Dijital Pazarlama, SEO, SEM, Creative, Yazılım & Otel Teknoloji Partneri | DGTLFACE";
  const description =
    "DGTLFACE; SEO, SEM, sosyal medya yönetimi, yazılım, creative, çok dilli çağrı merkezi ve otel teknolojileri alanlarında profesyonel dijital pazarlama çözümleri sunan teknoloji partneridir.";
  const url = "https://dgtlface.com/tr/";
  const keywords =
    "dijital pazarlama ajansı, teknoloji partneri, dijital pazarlama hizmetleri, seo ajansı, sem ajansı, smm ajansı, çok dilli çağrı merkezi, otel dijital pazarlama, dijital pazarlama ajansı nedir, oteller için dijital pazarlama stratejileri, pms ve ota yönetimi nasıl yapılır, çok dilli çağrı merkezi hizmeti nasıl çalışır, google ads seo sosyal medya birlikte nasıl çalışır, dijital dönüşüm ajansı ne yapar, otel web sitesi nasıl optimize edilir, sosyal medya içerik planlama nasıl yapılır, turizm sektörü dijital pazarlama örnekleri, seo sem smm arasındaki farklar, dijital pazarlama ile satış nasıl artırılır, rezervasyon dönüşümü artırma yöntemleri, otel dijital dönüşüm ajansı, turizm teknolojileri pazarlama, resort dijital marketing, çok kanallı otel satış optimizasyonu, antalya dijital ajans, antalya teknoloji partneri, antalya seo sem smm ajansı, antalya otel dijital pazarlama";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title:
        "DGTLFACE: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Partneriniz",
      description,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "DGTLFACE",
      images: [
        {
          url: "https://dgtlface.com/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
        },
      ],
    },
  };
}

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description":
        "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunan dijital pazarlama ve teknoloji partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
     "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dgtlface.com/#website",
      "url": "https://dgtlface.com/",
      "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
      "description": "Dijital Pazarlama, SEO, SEM, Creative, Yazılım ve Otel Teknoloji Partneri.",
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://dgtlface.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/#webpage",
      "url": "https://dgtlface.com/tr/",
      "name": "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
      "description":
        "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative, çok dilli çağrı merkezi ve PMS–OTA entegrasyonuyla markalar ve oteller için uçtan uca dijital pazarlama ve teknoloji çözümleri sunar.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "dijital pazarlama ajansı",
        "teknoloji partneri",
        "otel dijital pazarlama",
        "turizm teknolojileri",
        "çok dilli çağrı merkezi",
        "PMS & OTA yönetimi"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/#service",
      "name": "DGTLFACE – Dijital Pazarlama ve Otel Teknoloji Partnerliği",
      "url": "https://dgtlface.com/tr/",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType":
        "dijital pazarlama ajansı, SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, çok dilli çağrı merkezi, PMS–OTA yönetimi, otel dijital pazarlama",
      "description":
        "DGTLFACE, SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunar; özellikle oteller ve turizm markaları için uçtan uca dijital dönüşüm sağlar.",
    "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "dijital pazarlama ajansı",
        "teknoloji partneri",
        "dijital pazarlama hizmetleri",
        "seo ajansı",
        "sem ajansı",
        "smm ajansı",
        "çok dilli çağrı merkezi",
        "otel dijital pazarlama",
        "otel dijital dönüşüm ajansı",
        "turizm teknolojileri pazarlama",
        "resort dijital marketing",
        "çok kanallı otel satış optimizasyonu",
        "antalya dijital ajans",
        "antalya teknoloji partneri",
        "antalya seo sem smm ajansı",
        "antalya otel dijital pazarlama"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://dgtlface.com/tr/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "DGTLFACE nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "DGTLFACE, markalar ve özellikle oteller için SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative prodüksiyon, PMS–OTA entegrasyonu ve çok dilli çağrı merkezi hizmetlerini tek çatı altında sunan entegre bir dijital pazarlama ve teknoloji partneridir."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE sadece reklam yöneten bir ajans mıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hayır. DGTLFACE sadece reklam yönetimi yapmaz; SEO, SEM, sosyal medya, web & yazılım, PMS–OTA ve çağrı merkezi süreçlerini uçtan uca entegre eden bir teknoloji partneri olarak çalışır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için DGTLFACE’in en büyük avantajı nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Oteller için en büyük avantaj; OTA, PMS, web sitesi, reklam ve çağrı merkezi süreçlerinin tek çatı altında birleşmesi ve tüm dijital temas noktalarının entegre bir mimariyle yönetilmesidir."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE sonuçları nasıl raporlar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Tüm veriler Looker Studio dashboard’larında ve düzenli raporlarda birleştirilir; SEO, SEM, sosyal medya, OTA ve çağrı merkezi performansı günlük, haftalık ve aylık olarak izlenir."
          }
        }
      ]
    }
  ]
};



export default function HomePage() {
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
