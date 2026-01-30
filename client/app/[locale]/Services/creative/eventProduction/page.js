import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
import image7 from "./images/image7.webp"
import image8 from "./images/image8.webp"
import image9 from "./images/image9.webp"
import { getTranslations } from "next-intl/server";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/creative/eventProduction";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Etkinlik Prodüksiyonu – Lansman, Konser ve Kurumsal Organizasyonlar | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, lansman, konser ve kurumsal organizasyonlar için profesyonel etkinlik prodüksiyonu ve video çekimi sunar. Planlama, çekim ve aftermovie süreçlerini uçtan uca yönetir.";

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
//       "description": "DGTLFACE, lansmanlar, konserler, otel etkinlikleri ve kurumsal organizasyonlar için profesyonel etkinlik prodüksiyonu, etkinlik çekimi ve aftermovie üretimi sunan creative prodüksiyon partneridir.",
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
//       "@id": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu/#webpage",
//       "url": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu",
//       "name": "Etkinlik Prodüksiyonu – Lansman, Konser ve Kurumsal Organizasyonlar | DGTLFACE",
//       "description": "DGTLFACE, lansman, konser ve kurumsal organizasyonlar için profesyonel etkinlik prodüksiyonu ve video çekimi sunar. Planlama, çekim ve aftermovie süreçlerini uçtan uca yönetir.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu/#service",
//       "name": "Etkinlik Prodüksiyonu – Lansman, Konser ve Kurumsal Organizasyonlar",
//       "url": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "etkinlik prodüksiyonu, etkinlik çekimi, lansman prodüksiyonu, kurumsal organizasyon, etkinlik yönetimi, etkinlik video çekimi",
//       "description": "DGTLFACE, lansmanlar, konserler, otel etkinlikleri ve kurumsal organizasyonlar için profesyonel etkinlik prodüksiyonu sunar. Etkinlik öncesi planlama, çekim senaryosu, kamera ve ekipman organizasyonu, etkinlik günü çok kameralı video ve fotoğraf çekimi, drone ve 360 içerikler, sahne arkası (BTS) kayıtları, aftermovie ve kısa teaser kurguları ile sosyal medya, web, reklam ve kurumsal arşiv için çoklu formatta içerik üretir.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "etkinlik prodüksiyonu",
//         "etkinlik çekimi",
//         "lansman prodüksiyonu",
//         "kurumsal organizasyon",
//         "etkinlik yönetimi",
//         "etkinlik video çekimi",
//         "etkinlik prodüksiyonu nasıl yapılır",
//         "konser çekimi teknikleri",
//         "kurumsal etkinlik planlama",
//         "oteller için etkinlik çekimi",
//         "turizm etkinlik prodüksiyonu",
//         "açılış organizasyonu video",
//         "etkinlik sonrası raporlama",
//         "profesyonel etkinlik belgeleme",
//         "sahne arkasından çekim teknikleri",
//         "otel etkinlik çekimi",
//         "resort organizasyon prodüksiyonu",
//         "turizm konser prodüksiyonu",
//         "otel lansman çekimi",
//         "etkinlik prodüksiyonu antalya",
//         "antalya konser prodüksiyonu",
//         "etkinlik çekimi türkiye",
//         "antalya lansman ajansı"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu/#breadcrumb",
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
//           "name": "Creative Tasarım & Prodüksiyon",
//           "item": "https://dgtlface.com/tr/creative-ve-tasarim"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Etkinlik Prodüksiyonu",
//           "item": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Etkinlik prodüksiyonu neleri kapsar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Etkinlik prodüksiyonu; etkinlik öncesi planlama ve çekim senaryosu, mekân keşfi ve teknik analiz, kamera–ses–ışık–drone gibi ekipman planlaması, etkinlik günü çok kameralı video ve fotoğraf çekimi, sahne arkası (BTS) görüntüleri, aftermovie, teaser ve öne çıkan anlar videolarının kurgulanması ve farklı kanallar için formatlanmasını kapsar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Lansman ve konser çekimleri nasıl yapılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Lansman ve konser çekimlerinde etkinlik akışına göre çok kameralı kurgu ile sahne, seyirci ve atmosfer planları alınır; ışık ve ses koşulları önceden test edilir, kritik anların kaçırılmaması için detaylı çekim listeleri hazırlanır ve etkinlik sonrası highlight & aftermovie içerikleri üretilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otellerde etkinlik tanıtımı için hangi video türleri üretilir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için gala gecesi, konser, DJ performansı, MICE etkinlikleri ve havuz partileri gibi organizasyonlar için aftermovie, kısa sosyal medya videoları, Reels/Shorts formatları ve gerektiğinde kurumsal tanıtım filmlerine entegre edilecek etkinlik bölümleri üretilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Drone ve 360 çekim etkinliklerde nasıl kullanılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Drone çekimleri etkinliğin yapıldığı mekanın ve kalabalığın genel atmosferini havadan göstermek için, 360 çekimler ise belirli alanlar ve deneyimler için immersive içerikler oluşturmak amacıyla kullanılır; bu görüntüler web, sosyal medya ve tanıtım filmlerine entegre edilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Etkinlik videosunu sosyal medya ve reklam için farklı formatlarda teslim alabilir miyiz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Etkinlik videoları YouTube ve web için yatay, Instagram feed için kare, Reels, TikTok ve Shorts için dikey formatlarda hazırlanan farklı cut’larla teslim edilir; böylece aynı içerik seti tüm dijital kanallarda en verimli şekilde kullanılabilir."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
   const t = await getTranslations({ locale, namespace: "EventProductionPage" });
      const t2 = await getTranslations({ locale, namespace: "EventProductionPage.h4Section" });
      
              const baseUrl = getBaseUrl();
                   const pathnameKey = "/Services/creative/eventProduction";
                   const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

                const stepData = [1,2,3,4,5,6,7,8,9].map(i => ({
                  id: i,
                  image: [image1,image2,image5,image4,image3,image6,image7,image8,image9][i-1],
                  header: t(`h3Section.header${i}`),
                  text:   t(`h3Section.text${i}`),
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
                    question: t.raw("faq.question3"),
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
                 { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
                 { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
                  { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
                 { title: t("h2Section.header6"), text: t.raw("h2Section.text6") },
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
                                    name:
                                      locale === "tr"
                                        ? "Creative Tasarım & Prodüksiyon Hizmetleri"
                                        : "Creative Design & Production Services",
                                    url: `${baseUrl}${locale === "tr" ? "/tr/creative" : "/en/creative-design"}`,
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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden justify-center items-center'>
<div className='flex flex-col items-center justify-center gap-5'>
       <SubBanner
  header={t('subbanner_header')}
  header2={t('subbanner_header2')}
  text={t.raw('subbanner_text')}
    header3={t('subbanner_header3')}
  text2={t.raw('subbanner_text2')}
  buttonLink="/"
  buttonText={t('cta_talk_to_us')}
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
      <VerticalSlider page="EventProductionPage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

