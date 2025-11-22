import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, teknik SEO, içerik SEO, yerel SEO ve backlink yönetimiyle markalar ve oteller için organik görünürlük sağlayan profesyonel bir SEO ajansıdır.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dgtlface.com/#website",
      "url": "https://dgtlface.com/",
      "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://dgtlface.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/seo-hizmetleri/#webpage",
      "url": "https://dgtlface.com/tr/seo-hizmetleri",
      "name": "SEO Hizmetleri – Teknik, Yerel ve İçerik SEO Uzmanlığı | DGTLFACE",
      "description": "DGTLFACE, teknik SEO, yerel SEO ve içerik optimizasyonuyla organik görünürlüğünüzü artırır. SEO ajansı olarak web sitenizi Google’da üst sıralara taşır.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "seo ajansı",
        "teknik seo analizi",
        "içerik seo",
        "yerel seo",
        "backlink stratejisi",
        "turizm seo"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/seo-hizmetleri/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/seo-hizmetleri/#service",
      "name": "Profesyonel SEO Hizmetleri – Teknik, Yerel ve İçerik SEO",
      "url": "https://dgtlface.com/tr/seo-hizmetleri",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "SEO ajansı, teknik SEO, içerik SEO, yerel SEO, backlink yönetimi",
      "description": "DGTLFACE, teknik SEO, içerik SEO, yerel SEO ve backlink yönetimini birleştirerek organik görünürlüğünüzü artırır. Özellikle oteller ve turizm markaları için çok dilli SEO, PMS uyumlu yapılandırma ve destinasyon odaklı stratejilerle gerçek rezervasyon üreten bir organik trafik modeli kurar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "seo ajansı",
        "seo hizmetleri",
        "teknik seo analizi",
        "seo danışmanlığı",
        "seo optimizasyonu",
        "profesyonel seo çözümleri",
        "seo nasıl yapılır 2025",
        "teknik seo nedir",
        "içerik odaklı seo stratejileri",
        "google sıralama yükseltme yöntemleri",
        "otel seo hizmeti",
        "turizm seo stratejisi",
        "pms uyumlu seo",
        "ota seo optimizasyonu",
        "seo ajansı antalya",
        "antalya seo hizmetleri",
        "türkiye seo uzmanı",
        "antalya dijital pazarlama"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/seo-hizmetleri/#services-list",
      "name": "DGTLFACE SEO Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Teknik SEO",
          "url": "https://dgtlface.com/tr/seo/teknik-seo"
        },
        {
          "@type": "Service",
          "name": "İçerik SEO",
          "url": "https://dgtlface.com/tr/seo/icerik-seo"
        },
        {
          "@type": "Service",
          "name": "Yerel SEO",
          "url": "https://dgtlface.com/tr/seo/yerel-seo"
        },
        {
          "@type": "Service",
          "name": "Backlink & Dijital Otorite Yönetimi",
          "url": "https://dgtlface.com/tr/seo/backlink-yonetimi"
        },
        {
          "@type": "Service",
          "name": "SEO Raporlama & Performans Analizi",
          "url": "https://dgtlface.com/tr/seo/seo-raporlama"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/seo-hizmetleri/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://dgtlface.com/tr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO Hizmetleri",
          "item": "https://dgtlface.com/tr/seo-hizmetleri"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/seo-hizmetleri/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "DGTLFACE SEO hizmetleri neleri kapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; teknik SEO, içerik SEO, yerel SEO, backlink yönetimi ve SEO raporlama süreçlerini kapsayan uçtan uca SEO hizmetleri sunar."
          }
        },
        {
          "@type": "Question",
          "name": "SEO sonuçları ne kadar sürede görülür?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sektör ve rekabete göre değişmekle birlikte genellikle 3–6 ay arasında anlamlı hareketlenmeler, 6–12 ay aralığında ise daha büyük ölçekli sonuçlar görülmeye başlar."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için SEO nasıl farklı işler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için SEO; destinasyon aramaları, çok dilli yapı, OTA rekabeti ve rezervasyon odaklı içerik stratejisini içerir. DGTLFACE bu alanları otelinizin ticari hedefleriyle uyumlu şekilde kurgular."
          }
        }
      ]
    }
  ]
}

const servicesData = [
  {
    id: 1,
    title: "On-Page SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/seo/onpageSeo"
  },
  {
    id: 2,
    title: "Off-Page SEO",
    subTitle: "Deign Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/offpageSeo"
  },
  {
    id: 3,
    title: "Technical SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/technicaSeo"
  },
  {
    id: 4,
    title: "Original Copywriting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/originalCopywriting"
  },

  {
    id: 5,
    title: "SEO Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/seoReporting"
  },
];

const page = () => {
   const t = useTranslations("Seo");
   
   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`seo_services_title${i}`),
  subTitle: t(`seo_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`seo_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/seo/onpageSeo",
    "/Services/seo/offpageSeo",
    "/Services/seo/technicalSeo",
    "/Services/seo/originalCopywriting",
    "/Services/seo/seoReporting"
  ][i-1]
}));
  return (
  <>
   {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      
      
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
       <MainBanner  header={t("seo_banner_header")} span={t("seo_banner_span")} text={t("seo_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("seo_section_header1")} header2={t("seo_section_header2")} text={t("seo_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
    </>
  )
}

export default page
