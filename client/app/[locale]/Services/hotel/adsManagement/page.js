import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.webp"
import image2 from "./images/image2.webp"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
import image7 from "./images/image7.webp"
import image8 from "./images/image8.webp"
import image9 from "./images/image9.webp"
import { getTranslations } from "next-intl/server";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/hotel/adsManagement";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Otel Reklam Yönetimi – Google Ads, Meta Ads & YouTube | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için Google Ads, Meta Ads ve YouTube reklam kampanyaları yönetir. Rezervasyon, doluluk ve gelir artırma odaklı otel reklam yönetimi, otel Google Ads, turizm reklamcıları, resort Meta Ads, hotel YouTube Ads ve otel PPC kampanyaları stratejileri sunar.";

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
//       "description": "DGTLFACE, oteller ve turizm markaları için SEO, reklam, sosyal medya, PMS–OTA entegrasyonu ve çağrı merkezi çözümleri sunan, rezervasyon ve gelir odaklı çalışan bir dijital pazarlama ve teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": [
//         "Antalya",
//         "Belek",
//         "Side",
//         "Kemer",
//         "Alanya",
//         "Türkiye",
//         "Europe"
//       ]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/otel/reklam-yonetimi/#webpage",
//       "url": "https://dgtlface.com/tr/otel/reklam-yonetimi",
//       "name": "Otel Reklam Yönetimi – Google Ads, Meta Ads & YouTube | DGTLFACE",
//       "description": "DGTLFACE, oteller için Google Ads, Meta Ads ve YouTube reklam kampanyaları yönetir. Rezervasyon, doluluk ve gelir artırma odaklı otel reklam yönetimi, otel Google Ads, turizm reklamcıları, resort Meta Ads, hotel YouTube Ads ve otel PPC kampanyaları stratejileri sunar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/otel/reklam-yonetimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/otel/reklam-yonetimi/#service",
//       "name": "Otel Reklam Yönetimi – Google Ads, Meta Ads & YouTube",
//       "url": "https://dgtlface.com/tr/otel/reklam-yonetimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "otel reklam yönetimi, otel google ads, turizm reklamcıları, resort meta ads, hotel youtube ads, otel ppc kampanyaları",
//       "description": "DGTLFACE, oteller için Google Ads, Meta Ads ve YouTube reklam kampanyaları yönetir. Otel reklam yönetimi, otel Google Ads, turizm reklamcıları, resort Meta Ads, hotel YouTube Ads, otel PPC kampanyaları, oteller için Google Ads stratejileri, resort satış artırma reklamları, turizm Google reklamlari, otel reklam bütçesi yönetimi, oda doluluk artırma reklamları, Google Hotel Ads entegrasyonu ve otel remarketing sistemi ile rezervasyon ve geliri artıran performans odaklı çözümler sunar.",
//       "areaServed": [
//         "Antalya",
//         "Belek",
//         "Side",
//         "Kemer",
//         "Alanya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "otel reklam yönetimi",
//         "otel google ads",
//         "turizm reklamcıları",
//         "resort meta ads",
//         "hotel youtube ads",
//         "otel ppc kampanyaları",
//         "oteller için google ads stratejileri",
//         "resort satış artırma reklamları",
//         "turizm google reklamlari",
//         "otel reklam bütçesi yönetimi",
//         "oda doluluk artırma reklamları",
//         "ppc reklam optimizasyon rehberi",
//         "google hotel ads entegrasyonu",
//         "otel remarketing sistemi",
//         "all inclusive ads",
//         "luxury hotel google ads",
//         "boutique hotel advertising",
//         "antalya otel reklamcılığı",
//         "belek ads kampanyaları",
//         "side resort ads",
//         "alanya turizm reklamları"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/otel/reklam-yonetimi/#breadcrumb",
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
//           "name": "Otel Dijital Pazarlama",
//           "item": "https://dgtlface.com/tr/otel-dijital-pazarlama"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Otel Reklam Yönetimi",
//           "item": "https://dgtlface.com/tr/otel/reklam-yonetimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/otel/reklam-yonetimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Zaten OTA üzerinden doluluk alıyorum, yine de dijital reklam yatırımı yapmalı mıyım?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. OTA doluluğu komisyonludur ve uzun vadede maliyeti yüksektir. Kendi Google Ads, Meta Ads ve YouTube kampanyalarınız üzerinden gelen rezervasyonlar, daha kârlı ve marka odaklıdır. DGTLFACE, OTA’ları kapatmak yerine doğrudan satışın payını artırmak ve marka gücünüzü yükseltmek için reklam stratejileri kurgular."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otel reklamları için minimum aylık bütçe ne olmalı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Minimum bütçe; otelin büyüklüğüne, pazar sayısına ve hedef doluluğa göre belirlenir. Amaç, çok küçük testler yerine anlamlı veri üretecek bir alt bandın altına düşmemektir. DGTLFACE, analiz sonrası oteliniz için verimsiz seviyenin altına inmeyecek net bütçe aralıkları önerir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece Google Ads ya da sadece Meta Ads ile çalışmak yeterli mi?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Kısa vadede sonuç alınabilir ancak en güçlü performans, Google arama (niyet), Meta/Instagram (ilham ve remarketing) ve YouTube (farkındalık) birlikte kullanıldığında ortaya çıkar. DGTLFACE, her platforma özel rol ve KPI tanımlayarak kombine bir otel reklam stratejisi kurgular."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Google Hotel Ads nasıl çalışır ve otelime ne kazandırır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Google Hotel Ads, otelinizin fiyat ve müsaitlik bilgilerini doğrudan Google arama ve Google Travel sonuçlarında gösteren bir reklam formatıdır. PMS veya OTA entegrasyonu ile çalışır. Özellikle yüksek niyetli aramalarda direkt rezervasyon ve marka görünürlüğünü artırmak için güçlü bir kanaldır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE otel reklam optimizasyonunu nasıl yönetir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, otel reklamlarında hedef pazar analizi, kampanya kurulumu, dönüşüm takibi, A/B testleri, bütçe ve teklif optimizasyonu, remarketing kurguları ve aylık gelir & rezervasyon raporlaması adımlarını uçtan uca yönetir. Her raporda hangi kampanyanın ne kadar rezervasyon ve gelir ürettiği net şekilde gösterilir."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
   const t = await getTranslations({locale,namespace: "OtelAdsPage",});
    const t2 = await getTranslations({locale,namespace: "OtelAdsPage.h4Section",});

      const baseUrl = getBaseUrl();
      const pathnameKey = "/Services/hotel/adsManagement";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
           
              const stepData = [1,2,3,4,5,6,7,8,9].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6,image7,image8,image9][i-1],
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
                     name: locale === "tr" ? "Otel Dijital Dönüşüm" : "Hotel Digital Marketing",
                     url: `${baseUrl}${locale === "tr" ? "/tr/otel" : "/en/hotel"}`,
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
      <VerticalSlider page="OtelAdsPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

