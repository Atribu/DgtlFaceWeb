import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations, useLocale } from "next-intl";
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
  const pathnameKey = "/Services/seo/contentSeo";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "İçerik SEO – Anahtar Kelime Odaklı İçerik ve Blog Optimizasyonu | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, SEO uyumlu blog ve içerik stratejileriyle organik trafik artışı sağlar. Arama niyetine uygun içeriklerle Google sıralamalarınızı güçlendirin.";

  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

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
//       "description": "DGTLFACE, arama niyetine uygun içerik stratejileri, blog optimizasyonu ve topic cluster yapılarıyla oteller ve markalar için içerik SEO hizmeti sunan dijital pazarlama ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/seo/icerik-seo/#webpage",
//       "url": "https://dgtlface.com/tr/seo/icerik-seo",
//       "name": "İçerik SEO – Anahtar Kelime Odaklı İçerik ve Blog Optimizasyonu | DGTLFACE",
//       "description": "DGTLFACE, SEO uyumlu blog ve içerik stratejileriyle organik trafik artışı sağlar. Arama niyetine uygun içeriklerle Google sıralamalarınızı güçlendirin.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/seo/icerik-seo/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/seo/icerik-seo/#service",
//       "name": "İçerik SEO – Anahtar Kelime Odaklı İçerik ve Blog Optimizasyonu",
//       "url": "https://dgtlface.com/tr/seo/icerik-seo",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "içerik seo, seo içerik yazarlığı, blog optimizasyonu, seo uyumlu makale, içerik stratejisi, anahtar kelime haritalandırma",
//       "description": "DGTLFACE, anahtar kelime haritalandırma, search intent analizi, içerik kümeleri (topic clusters), blog optimizasyonu ve içerik güncelleme süreçlerini kapsayan içerik SEO hizmetleri sunar. Otel ve turizm markaları için destinasyon ve deneyim odaklı içeriklerle hem trafik hem rezervasyon funnel’ını güçlendirir.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "içerik seo",
//         "seo içerik yazarlığı",
//         "blog optimizasyonu",
//         "seo uyumlu makale",
//         "içerik stratejisi",
//         "anahtar kelime haritalandırma",
//         "seo uyumlu içerik nasıl yazılır",
//         "içerik pazarlama stratejileri",
//         "blog trafik artırma yöntemleri",
//         "içerik kümeleri nasıl oluşturulur",
//         "seo içerik güncelleme teknikleri",
//         "google search intent analizi",
//         "blog kategorileri nasıl planlanır",
//         "oteller için içerik stratejisi",
//         "turizm içerik pazarlaması",
//         "içerik yoğunluğu optimizasyonu",
//         "otel blog içerikleri",
//         "turizm içerik yazıları",
//         "resort seo içerik stratejisi",
//         "ota içerik pazarlama",
//         "içerik yazarı antalya",
//         "antalya seo içerik",
//         "içerik planlama türkiye",
//         "antalya blog optimizasyonu"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/seo/icerik-seo/#breadcrumb",
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
//           "name": "SEO Hizmetleri",
//           "item": "https://dgtlface.com/tr/seo-hizmetleri"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "İçerik SEO",
//           "item": "https://dgtlface.com/tr/seo/icerik-seo"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/seo/icerik-seo/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "İçerik SEO nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "İçerik SEO, içeriklerin arama niyetine uygun şekilde planlanması, anahtar kelime haritalandırılması, doğru başlık ve URL yapısıyla yayınlanması ve performansa göre güncellenmesi sürecidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "SEO uyumlu içerik nasıl yazılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SEO uyumlu içerik; kullanıcı niyeti odaklı, doğru başlık hiyerarşisine sahip, semantik olarak zengin ve doğal akışta anahtar kelimeler içeren, sonunda net CTA barındıran içeriktir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Topic cluster / içerik kümeleri nasıl oluşturulur?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Ana bir konu (pillar) seçilir, bu konuyu destekleyen alt başlıklar için ayrı içerikler üretilir ve bu içerikler güçlü iç linkleme yapısıyla birbirine bağlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için içerik stratejisi nasıl olmalı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için içerik; destinasyon rehberleri, deneyim odaklı içerikler, oda tipleri, sık sorulan sorular ve sezonluk kampanya yazıları etrafında kurgulanmalı ve rezervasyona giden funnel ile bağlanmalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Eski içerikler nasıl güncellenmeli?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Eski içeriklerde güncel veriler eklenmeli, alakasız bölümler temizlenmeli, yeni alt başlıklar ve iç linkler ile içerik derinleştirilmeli ve performans takibi sonrası gerekli optimizasyonlar yapılmalıdır."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = () => {
    const locale = useLocale();
    const baseUrl = getBaseUrl();
  
     const pathnameKey = "/Services/seo/contentSeo";
    const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

   const t = useTranslations("ContentSeo");
           const t2 = useTranslations("ContentSeo.h4Section");
        
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
                { name: "SEO", url: `${baseUrl}${locale === "tr" ? "/tr/seo" : "/en/seo"}` },
                { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
              ],
          
              faqs,
          
              // 🤖 AI alanları (yeni standart)
              aiQuestion: t("jsonld.pageName"),
              aiAnswer: t("content_ai_answer_text"),
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
  header={t("contentsub_header")}
  header2={t("contentsub_header2")}
  text={t.raw("contentsub_text")}
  header3={t("contentsub_header3")}
  text2={t.raw("contentsub_text2")}
  buttonLink="/"
   buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("content_ai_answer_text")}/>
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
      <VerticalSlider page="ContentSeo" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
<AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

export default Page
