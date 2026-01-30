import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { getTranslations } from "next-intl/server";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/smm/socialMediaReporting";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Sosyal Medya Analiz & Raporlama – Etkileşim ve Performans Ölçümü | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, sosyal medya performansınızı ölçerek detaylı raporlama sunar. Etkileşim, erişim ve kampanya verilerini analiz ederek stratejinizi güçlendirir.";

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
//       "description": "DGTLFACE, markalar ve oteller için Instagram, Facebook, TikTok ve YouTube gibi platformlarda sosyal medya performansını erişim, etkileşim, tıklama ve dönüşüm odaklı olarak analiz eden, veri ve raporlama uzmanlığı sunan dijital pazarlama partneridir.",
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
//       "@id": "https://dgtlface.com/tr/smm/analiz-raporlama/#webpage",
//       "url": "https://dgtlface.com/tr/smm/analiz-raporlama",
//       "name": "Sosyal Medya Analiz & Raporlama – Etkileşim ve Performans Ölçümü | DGTLFACE",
//       "description": "DGTLFACE, sosyal medya performansınızı ölçerek detaylı raporlama sunar. Etkileşim, erişim ve kampanya verilerini analiz ederek stratejinizi güçlendirir.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/smm/analiz-raporlama/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/smm/analiz-raporlama/#service",
//       "name": "Sosyal Medya Analiz ve Raporlama – Performansınızı Doğru Ölçün",
//       "url": "https://dgtlface.com/tr/smm/analiz-raporlama",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "sosyal medya analiz, sosyal medya raporlama, etkileşim analizi, erişim raporu, instagram analiz aracı, kpi raporlama",
//       "description": "DGTLFACE, sosyal medya analiz ve raporlama hizmetinde erişim, etkileşim oranı, kaydetme, paylaşma, tıklama, profil ziyareti, DM, WhatsApp, form ve rezervasyon gibi tüm KPI’ları izler. Instagram, Facebook, TikTok ve YouTube verilerini Looker Studio dashboard’larında birleştirerek özellikle otel ve turizm markaları için sezon, destinasyon ve oda/servis bazlı sosyal medya performansını analiz eder ve aksiyon planları oluşturur.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "sosyal medya analiz",
//         "sosyal medya raporlama",
//         "etkileşim analizi",
//         "erişim raporu",
//         "instagram analiz aracı",
//         "kpi raporlama",
//         "sosyal medya performans raporu nasıl hazırlanır",
//         "instagram etkileşim düşüşü neden olur",
//         "aylık sosyal medya raporu örneği",
//         "otel sosyal medya raporu",
//         "turizm sosyal medya performansı",
//         "sosyal medya kpi belirleme",
//         "reel performans analizi",
//         "sosyal medya veri ölçümü",
//         "erişim artırma yöntemleri",
//         "sosyal medya analizi nedir",
//         "otel sosyal medya raporlaması",
//         "turizm sosyal medya analizi",
//         "resort sosyal medya kpi",
//         "otel dashboard raporu",
//         "sosyal medya analizi antalya",
//         "antalya sosyal medya raporlama",
//         "sosyal medya analizi türkiye",
//         "antalya instagram analiz"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/smm/analiz-raporlama/#breadcrumb",
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
//           "name": "Sosyal Medya Yönetimi",
//           "item": "https://dgtlface.com/tr/sosyal-medya-yonetimi"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Analiz & Raporlama",
//           "item": "https://dgtlface.com/tr/smm/analiz-raporlama"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/smm/analiz-raporlama/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Sosyal medya performansı nasıl ölçülür?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Sosyal medya performansı; erişim, etkileşim oranı, kaydetme, paylaşma, link tıklama, profil ziyareti, DM, WhatsApp tıklamaları ve dönüşüm gibi KPI’lar üzerinden ölçülür ve dönemsel olarak raporlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hangi sosyal medya KPI’larına bakmalıyım?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Marka hedefine göre değişmekle birlikte temel KPI’lar; erişim, etkileşim oranı, kaydetme, paylaşma, tıklama, profil ziyareti, takipçi kalitesi ve satış/rezervasyon gibi dönüşüm metrikleridir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Instagram etkileşim düşüşünü nasıl analiz ederim?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "İçerik formatı, yayın sıklığı, hedef kitle değişimi, reklam etkileri ve olası algoritma güncellemeleri birlikte incelenerek etkileşim düşüşünün temel sebepleri analiz edilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için sosyal medya raporu nasıl olmalı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Otel raporlarında; pazar bazlı performans, içerik tipine göre etkileşim, kampanya sonuçları, sosyal medya kaynaklı site trafiği ve rezervasyon/gelir katkısı gibi turizm odaklı KPI’lar yer almalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Looker Studio ile sosyal medya dashboard’ı nasıl çalışır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Instagram, Facebook, Meta Ads, GA4 ve gerekirse PMS/çağrı merkezi verileri Looker Studio’ya entegre edilir; böylece tüm sosyal medya KPI’ları tek bir canlı dashboard üzerinden anlık olarak takip edilir."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
       const t = await getTranslations({ locale, namespace: "SmmAnalyticsReporting" });
  const t2 = await getTranslations({ locale, namespace: "SmmAnalyticsReporting.h4Section" });

  const baseUrl = getBaseUrl();

  // Türkçe yorum: canonical mapping key’i
  const pathnameKey = "/Services/smm/socialMediaReporting";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
        
           const stepData = [1,2,3].map(i => ({
             id: i,
             image: [image1,image2,image3][i-1],
             header: t(`h3Section.header${i}`),
             text:   t.raw(`h3Section.text${i}`),
            textHtml:  t.raw(`h3Section.text${i}`)
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
            { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
            { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
            { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
            { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
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
      { name: locale === "tr" ? "Ana Sayfa" : "Home", url: `${baseUrl}/${locale}` },
      {
        name: locale === "tr" ? "Sosyal Medya" : "Social Media",
        url: `${baseUrl}${locale === "tr" ? "/tr/smm" : "/en/social-media-management"}`,
      },
      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("smmanalytics_ai_answer_text"),
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
  header={t("smmanalytics_subbanner_header")}
  header2={t("smmanalytics_subbanner_header2")}
  text={t.raw("smmanalytics_subbanner_text")}
    header3={t("smmanalytics_subbanner_header3")}
  text2={t.raw("smmanalytics_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("smmanalytics_ai_answer_text")}/>
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
      <VerticalSlider page="SmmAnalyticsReporting" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

