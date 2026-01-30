import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import { getTranslations } from "next-intl/server";
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/pms/webPayment";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Online Satış Optimizasyonu – Rezervasyon & Gelir Artırma | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için online satış optimizasyonu sunar. OTA, web sitesi ve rezervasyon kanallarında maksimum gelir elde etmenizi sağlar.";

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
//       "description": "DGTLFACE, oteller için OTA, web sitesi, çağrı merkezi ve diğer rezervasyon kanallarında online satış optimizasyonu, gelir yönetimi ve dijital pazarlama çözümleri sunan turizm odaklı teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/pms-ota/online-satis/#webpage",
//       "url": "https://dgtlface.com/tr/pms-ota/online-satis",
//       "name": "Online Satış Optimizasyonu – Rezervasyon & Gelir Artırma | DGTLFACE",
//       "description": "DGTLFACE, oteller için online satış optimizasyonu sunar. OTA, web sitesi ve rezervasyon kanallarında maksimum gelir elde etmenizi sağlar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/pms-ota/online-satis/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/pms-ota/online-satis/#service",
//       "name": "Online Satış Optimizasyonu – Rezervasyon & Gelir Artırma",
//       "url": "https://dgtlface.com/tr/pms-ota/online-satis",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "online satış optimizasyonu, otel satış artırma, dijital satış optimizasyonu, gelir yönetimi, rezervasyon dönüşüm artırma, online kanal optimizasyonu",
//       "description": "DGTLFACE, oteller için online satış optimizasyonu sunar. OTA, web sitesi, çağrı merkezi ve diğer rezervasyon kanallarını tek satış hunisi hâline getirerek fiyat stratejisi, pazar bazlı segmentasyon, görünürlük artırma, rezervasyon dönüşüm analizi ve RevPAR optimizasyonu ile doluluk ve geliri sürdürülebilir şekilde yükseltir.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "online satış optimizasyonu",
//         "otel satış artırma",
//         "dijital satış optimizasyonu",
//         "gelir yönetimi",
//         "rezervasyon dönüşüm artırma",
//         "online kanal optimizasyonu",
//         "oteller için satış artırma rehberi",
//         "online satış optimizasyonu nasıl yapılır",
//         "oda başı gelir artırma (RevPAR)",
//         "turizm satış stratejileri",
//         "booking dönüşüm artırma",
//         "web rezervasyon dönüşüm optimizasyonu",
//         "çağrı merkezi + ota kombine satış",
//         "fiyat stratejisi oluşturma",
//         "resort satış optimizasyonu",
//         "butik otel gelir yönetimi",
//         "turizm satış danışmanlığı",
//         "pms gelir yönetimi",
//         "satış optimizasyon antalya",
//         "turizm satış türkiye",
//         "otel gelir yönetimi antalya",
//         "antalya online satış"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/pms-ota/online-satis/#breadcrumb",
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
//           "name": "PMS & OTA Yönetimi",
//           "item": "https://dgtlface.com/tr/pms-ota-yonetimi"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Online Satış Optimizasyonu",
//           "item": "https://dgtlface.com/tr/pms-ota/online-satis"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/pms-ota/online-satis/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Online satış optimizasyonu nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Online satış optimizasyonu; OTA, web sitesi, metasearch ve çağrı merkezi gibi tüm dijital satış kanallarının fiyat, envanter, kampanya ve dönüşüm performansına göre yönetilmesi, test edilmesi ve gelir odaklı şekilde sürekli iyileştirilmesidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller online kanallardan daha fazla satış nasıl alır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller; doğru fiyatlandırma, güçlü OTA ve web görünürlüğü, yüksek dönüşüm odaklı rezervasyon akışı, çağrı merkezi ile kombine satış modeli ve veri odaklı kampanya stratejileri ile online kanallardan daha fazla satış elde edebilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "OTA ve Web rezervasyon oranı nasıl dengelenir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "OTA–Web dengesi; fiyat paritesi kuralları, doğrudan kanala özel avantajlar, UX ve hız odaklı web rezervasyon deneyimi ve OTA’yı bilinirlik kanalı, web’i ise final satış kanalı olarak konumlandıran strateji ile sağlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "RevPAR nasıl artırılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "RevPAR; pazar segmentasyonu, tarihe ve talebe göre dinamik fiyat optimizasyonu, doğru kanal karması, upsell ve cross-sell stratejileri ile doluluğu korurken oda başı geliri yükselterek artırılır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çağrı Merkezi + OTA + Web dönüşüm modeli nasıl çalışır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Çağrı Merkezi + OTA + Web modeli; misafirin OTA veya web üzerinden oteli keşfetmesi, detay ve ikna sürecinde çağrı merkezi ve mesaj kanallarının devreye girmesi ve tüm rezervasyonların PMS üzerinde tek satış hunisi olarak yönetilmesi prensibiyle çalışır."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({locale,namespace: "OnlineSalesOptimizationPage",});
    const t2 = await getTranslations({locale,namespace: "OnlineSalesOptimizationPage.h4Section",});

      const baseUrl = getBaseUrl();
      const pathnameKey = "/Services/pms/webPayment";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
             
                const stepData = [1,2,3].map(i => ({
                  id: i,
                  image: [image1,image2,image3][i-1],
                  header: t(`h3Section.header${i}`),
                  text:   t.raw(`h3Section.text${i}`),
                   textHtml:   t.raw(`h3Section.text${i}`)
                }));
             
             
             
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
                 { title: t("h2Section.header1"),text: t.raw("h2Section.text1") },
                 { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
                 { title: t("h2Section.header3"), text: t.raw("h2Section.text3") }
               ];

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
                     {
                       name: locale === "tr" ? "Ana Sayfa" : "Home",
                       url: `${baseUrl}/${locale}`,
                     },
               
                     {
                       name: locale === "tr" ? "PMS & OTA" : "PMS & OTA",
                       url: `${baseUrl}${locale === "tr" ? "/tr/pms-ota" : "/en/pms-ota"}`,
                     },
               
                     { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
                   ],
               
                   faqs,
               
                   // 🤖 AI alanları (yeni standart)
                   aiQuestion: t("jsonld.pageName"),
                   aiAnswer: t("ai_answer_text"),
                   aiSource: t("aiSourceMention"),
                 });
  
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
  header={t("subbanner_header")}
  header2={t("subbanner_header2")}
  text={t.raw("subbanner_text")}
    header3={t("subbanner_header3")}
  text2={t.raw("subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
     <AiAnswerBlock text={t("ai_answer_text")}/>
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
      <VerticalSlider page="OnlineSalesOptimizationPage" itemCount={4}/>
      {/* WebPayment */}
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

