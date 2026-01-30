import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.webp"
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/sem/performanceAnalysis";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "Reklam Performans Raporlama – Veri Odaklı SEM Analizi | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, tüm reklam kampanyalarını Looker Studio ile analiz ederek dönüşümlerinizi artırır. Veri odaklı reklam raporlama ile doğru kararlar alın.";

  const ogImage = getOgImageByPathnameKey(pathnameKey, locale);


  const canonical = getCanonicalUrl(pathnameKey, locale);
  const trUrl = getCanonicalUrl(pathnameKey, "tr");
  const enUrl = getCanonicalUrl(pathnameKey, "en");

  return {
    metadataBase: new URL(base),
    title,
    description,

    alternates: {
      canonical,
      languages: {
        tr: trUrl,
        en: enUrl,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "DGTLFACE",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
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

// const homeJsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": "https://dgtlface.com/#organization",
//       "name": "DGTLFACE",
//       "url": "https://dgtlface.com",
//       "description": "DGTLFACE, Google Ads, Meta Ads, YouTube ve diğer dijital reklam kampanyalarınızın performansını Looker Studio dashboard’larında analiz eden veri odaklı dijital pazarlama ve teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": ["Antalya","Türkiye","Europe"]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#webpage",
//       "url": "https://dgtlface.com/tr/sem/reklam-raporlama",
//       "name": "Reklam Performans Raporlama – Veri Odaklı SEM Analizi | DGTLFACE",
//       "description": "DGTLFACE, tüm reklam kampanyalarını Looker Studio ile analiz ederek dönüşümlerinizi artırır. Veri odaklı reklam raporlama ile doğru kararlar alın.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#service",
//       "name": "Reklam Performans Raporlama & SEM Analizi",
//       "url": "https://dgtlface.com/tr/sem/reklam-raporlama",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "reklam raporlama, sem performans analizi, google ads raporlama, meta ads raporlama, dijital performans dashboard, reklam analizi",
//       "description": "DGTLFACE, Google Ads, Meta Ads, YouTube ve diğer dijital kampanyalarınızın verilerini Looker Studio üzerinde tek panelde birleştirerek reklam performans raporlama ve SEM analizi hizmeti sunar.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "reklam raporlama",
//         "sem performans analizi",
//         "google ads raporlama",
//         "meta ads raporlama",
//         "dashboard oluşturma",
//         "reklam analizi",
//         "reklam performans raporu nasıl hazırlanır",
//         "looker studio reklam raporu",
//         "sem analizi nasıl yapılır",
//         "google ads dönüşüm raporu",
//         "youtube reklam raporu",
//         "meta ads dönüşüm analizi",
//         "oteller için reklam raporlama",
//         "turizm reklam analizi",
//         "reklam maliyeti optimizasyon raporu",
//         "google ads raporlama şablonu",
//         "otel reklam raporlaması",
//         "turizm sektörü reklam analizi",
//         "ota reklam performansı",
//         "otel kampanya performansı",
//         "reklam raporlama antalya",
//         "sem raporlama türkiye",
//         "dijital raporlama antalya",
//         "reklam analizi antalya"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#breadcrumb",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Ana Sayfa",
//           "item": "https://dgtlface.com/tr/"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "SEM – Dijital Reklam Yönetimi",
//           "item": "https://dgtlface.com/tr/sem"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Reklam Raporlama & Performans Analizi",
//           "item": "https://dgtlface.com/tr/sem/reklam-raporlama"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Reklam performans raporlamasında hangi metriklere bakmalıyım?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Genellikle tıklama, gösterim, CTR, dönüşüm sayısı, CPA, ROAS ve gerektiğinde gelir/rezervasyon metrikleri takip edilmelidir. Oteller için doluluk ve RevPAR da önemlidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Raporları hangi sıklıkta hazırlıyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Dashboard’lar canlıdır; bunun üzerine haftalık kısa özetler ve aylık detaylı rapor + aksiyon toplantıları öneriyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Tüm kanalları tek panelde görebilir miyim?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Google Ads, Meta Ads, YouTube, GA4 ve gerektiğinde PMS/OTA verilerini Looker Studio üzerinde tek panelde birleştiriyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için özel reklam raporlaması yapıyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Doluluk oranı, rezervasyon sayısı, kanal bazlı gelir, RevPAR ve OTA vs direkt kanal oranı gibi otel KPI’larını raporlara dahil ediyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE’in raporlama yaklaşımı klasik ajanslardan nasıl farklıdır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, raporu sadece veri tablosu olarak değil, yorum ve aksiyon önerileriyle bir karar destek dokümanı olarak sunar ve raporları ölçüm ve kampanya yönetimiyle entegre yürütür."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = () => {
   const locale = useLocale();
    const baseUrl = getBaseUrl();
    const pathnameKey = "/Services/sem/performanceAnalysis";
    const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const t = useTranslations("PerformanceAnalysis");
     const t2 = useTranslations("PerformanceAnalysis.h4Section");
  
     const stepData = [1,2,3,4].map(i => ({
       id: i,
       image: [image1,image2,image3,image4][i-1],
       header: t(`h3Section.header${i}`),
       text:   t.raw(`h3Section.text${i}`),
        textHtml:   t.raw(`h3Section.text${i}`)
     }));
  

     const jsonLd = buildServiceJsonLd({
         baseUrl,
         locale,
         canonicalUrl,
         pageName: t("jsonld.pageName"),
  pageDescription: t("jsonld.pageDescription"),
  serviceName: t("jsonld.serviceName"),
  serviceType: t("jsonld.serviceType"),
  keywords: t.raw("jsonld.keywords"),

  breadcrumbItems: [
    { name: locale === "tr" ? "Ana Sayfa" : "Home", url: `${baseUrl}/${locale}` },
    { name: "SEM", url: `${baseUrl}${locale === "tr" ? "/tr/sem" : "/en/search-engine-marketing"}` },
    { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
  ],
         faqs: [
          {
           question: t("faq.question1"),
           answer:
            t.raw("faq.answer1"),
         },
         {
           question: t("faq.question2"),
           answer:
            t.raw("faq.answer2"),
         },
         {
            question: t("faq.question3"),
           answer:
            t.raw("faq.answer3"),
         },
     
         {
         question: t("faq.question4"),
           answer:
            t.raw("faq.answer4"),
         },
     
         {
         question: t("faq.question5"),
           answer:
            t.raw("faq.answer5"),
         },
         ],

          // 🤖 AI uyumlu alanlar (öncekiyle birebir)
  aiQuestion: t("jsonld.pageName"),
  aiAnswer: t("aiAnswerBlock"),
  aiSource: t("aiSourceMention"),
       });
  
  
     const cards = [
      {
        widthClass: "w-[95%] lg:w-[80%]",
        title: t2("card1title"),
        description: t2.raw("card1description"),
      },
      {
        widthClass: "w-[95%] lg:w-[75%]",
        title: t2("card2title"),
        description: t2.raw("card2description"),
      },
      {
        widthClass: "w-[95%] lg:w-[70%]",
        title: t2("card3title"),
        description: t2.raw("card3description"),
      },
  
    ];
  
      const faqs = [
      {
        question: t("faq.question1"),
        answer:
         t.raw("faq.answer1"),
      },
      {
        question: t("faq.question2"),
        answer:
         t.raw("faq.answer2"),
      },
      {
         question: t("faq.question3"),
        answer:
         t.raw("faq.answer3"),
      },
  
      {
      question: t("faq.question4"),
        answer:
         t.raw("faq.answer4"),
      },
  
      {
      question: t("faq.question5"),
        answer:
         t.raw("faq.answer5"),
      },
    ];
  
      const h2items = [
      { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
      { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
      { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
      { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },

    ];

  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <SubBanner
  header={t("performanceanalysis_subbanner_header")}
  header2={t("performanceanalysis_subbanner_header2")}
  text={t.raw("performanceanalysis_subbanner_text")}
    header3={t("performanceanalysis_subbanner_header3")}
  text2={t.raw("performanceanalysis_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("aiAnswerBlock")}/>
      </div>
<H2LogoSection items={h2items} />

 <StepSection2New data={stepData} header={t("h3Section.header")}/>
  <div>
         <LogoListSectionBlack
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <VerticalSlider page="PerformanceAnalysis" itemCount={4}/>
    </div>
 
       <QuestionsSection2 variant="light" faqs={faqs} />
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

export default Page
