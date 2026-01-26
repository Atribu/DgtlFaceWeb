import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import RichTextSpan from '../../components/common/RichTextSpan'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: bu sayfanın standart key'i
  const pathnameKey = "/Services/seo";

  // Türkçe yorum: ortam bazlı base URL (local + prod)
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // Türkçe yorum: seoConfig'ten title/description çek
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "SEO Hizmetleri – Teknik, Yerel ve İçerik SEO Uzmanlığı | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, teknik SEO, yerel SEO ve içerik optimizasyonuyla organik görünürlüğünüzü artırır. SEO ajansı olarak web sitenizi Google’da üst sıralara taşır.";

  // Türkçe yorum: OG görselini map'ten çek + fallback
  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

  // Türkçe yorum: canonical URL (local + prod)
  const url =
    locale === "tr"
      ? `${base}/tr/seo`
      : `${base}/en/seo-search-engine-optimization`; 

  return {
    // ✅ kritik: "/og/..." gibi relative path'leri absolute'a çevirir
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: `${base}/tr/seo`,
        en: `${base}/en/seo-search-engine-optimization`,
      },
    },

    openGraph: {
      type: "website",
      url,
      siteName: "DGTLFACE",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
      "description": "DGTLFACE, teknik SEO, içerik SEO, yerel SEO ve backlink yönetimiyle markalar ve oteller için organik görünürlük sağlayan profesyonel bir SEO ajansıdır.",
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
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://dgtlface.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/seo/#webpage",
      "url": "https://dgtlface.com/tr/seo",
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
        "@id": "https://dgtlface.com/tr/seo/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/seo/#service",
      "name": "Profesyonel SEO Hizmetleri – Teknik, Yerel ve İçerik SEO",
      "url": "https://dgtlface.com/tr/seo",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "SEO ajansı, teknik SEO, içerik SEO, yerel SEO, backlink yönetimi",
      "description": "DGTLFACE, teknik SEO, içerik SEO, yerel SEO ve backlink yönetimini birleştirerek organik görünürlüğünüzü artırır. Özellikle oteller ve turizm markaları için çok dilli SEO, PMS uyumlu yapılandırma ve destinasyon odaklı stratejilerle gerçek rezervasyon üreten bir organik trafik modeli kurar.",
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
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
      "@id": "https://dgtlface.com/tr/seo/#services-list",
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
      "@id": "https://dgtlface.com/tr/seo/#breadcrumb",
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
          "item": "https://dgtlface.com/tr/seo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/seo/#faq",
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





const Page = () => {
   const t = useTranslations("Seo");
    const t2 = useTranslations("Seo.h4Section");

      const faqs = [
    {
      question: t("faqs.question1"),
      answer:
        t("faqs.answer1"),
    },
    {
      question: t("faqs.question2"),
      answer:
        t("faqs.answer2"),
    },
    {
     question: t("faqs.question3"),
      answer:
        t("faqs.answer3"),
    },

    {
    question: t("faqs.question4"),
      answer:
        t("faqs.answer4"),
    },

    {
      question: t("faqs.question5"),
      answer:
        t("faqs.answer5"),
    },


  ];

   const items = [
       {
         title: t("h2Section.title1"),
         text: (
           <RichTextSpan
             ns="Seo"
             id="h2Section.text1"
             className=""
           />
         ),
       },
       {
         title: t("h2Section.title2"),
         text: (
           <RichTextSpan
             ns="Seo"
             id="h2Section.text2"
             className=""
           />
         ),
       },
       {
         title: t("h2Section.title3"),
         text: (
           <RichTextSpan
             ns="Seo"
             id="h2Section.text3"
             className=""
           />
         ),
       },
         {
         title: t("h2Section.title4"),
         text: (
           <RichTextSpan
             ns="Seo"
             id="h2Section.text4"
             className=""
           />
         ),
       },
       
     ];

     const renderDescription = (key) =>
  t2.rich(key, {
    // <br /> → satır atlat
    br: () => <><br /></>,

    // <ul> wrapper (JSON'da kullanırsan)
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-2 grid grid-cols-3">
        {chunks}
      </ul>
    ),

    // <li> → tek tek maddeler
    li: (chunks) => <li>{chunks}</li>,

    // istersen kalın da destekleyelim
    b: (chunks) => <span className="font-semibold">{chunks}</span>,
  });


     const cards = [
  {
    widthClass: "w-[90%] lg:w-[80%]",
    title: t2("card1title"),
    description: renderDescription("card1description"),
  },
  {
    widthClass: "w-[90%] lg:w-[75%]",
    title: t2("card2title"),
    description: renderDescription("card2description"),
  },
  {
    widthClass: "w-[90%] lg:w-[70%]",
    title: t2("card3title"),
    description: renderDescription("card3description"),
  },

];

   
   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`seo_services_title${i}`),
  subTitle: t(`seo_services_subtitle${i}`),
  text: t(`seo_services_text${i}`),
  features: [1,2,3,4].map(j => t(`seo_services_feature${i}_${j}`)),
  buttonLink: [
    "/seo/teknik-seo",
    "/seo/icerik-seo",
    "/seo/yerel-seo",
    "/seo/backlink-yonetimi",
    "/seo/seo-raporlama"
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
      
      
    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden'>
      <div className='hidden lg:flex'>
         <MainBanner  header={t("seo_banner_header")} span={t("seo_banner_span")} text={t("seo_banner_text")} buttonText={t("buttonText")}/>
      </div>
      <div className='flex lg:hidden'>
         <MobileMainBanner  header={t("seo_banner_header")} span={t("seo_banner_span")} text={t("seo_banner_text")} buttonText={t("buttonText")}/>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
         <AutoBreadcrumbsWhite/>

       <AiAnswerBlock text={t("aiAnswerBlock")}/>
      </div>
       <DualHighlightSection items={items}/>
      <StepSection header={t("seo_section_header1")} header2={t("seo_section_header2")} text={t("seo_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
     <VerticalSlider2 page="Seo" itemCount={4}/>
      <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
