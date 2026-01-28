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
  const pathnameKey = "/Services/seo/seoReporting";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "SEO Raporlama – Organik Performans Analizi & Looker Studio Dashboard | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, SEO performansınızı Looker Studio ve gelişmiş analiz araçlarıyla raporlar. Organik görünürlüğünüzü veriye dayalı olarak artırın.";

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
//       "description": "DGTLFACE, SEO performansını Google Search Console, GA4, keyword tracking araçları ve Looker Studio dashboard’ları ile analiz eden veri odaklı bir SEO ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/seo/seo-raporlama/#webpage",
//       "url": "https://dgtlface.com/tr/seo/seo-raporlama",
//       "name": "SEO Raporlama – Organik Performans Analizi & Looker Studio Dashboard | DGTLFACE",
//       "description": "DGTLFACE, SEO performansınızı Looker Studio ve gelişmiş analiz araçlarıyla raporlar. Organik görünürlüğünüzü veriye dayalı olarak artırın.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/seo/seo-raporlama/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/seo/seo-raporlama/#service",
//       "name": "SEO Raporlama & Performans Analizi",
//       "url": "https://dgtlface.com/tr/seo/seo-raporlama",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "seo raporlama, seo analiz hizmeti, organik trafik raporu, seo performans ölçümü, keyword tracking, seo dashboard, seo analiz raporu",
//       "description": "DGTLFACE, SEO raporlamasını sadece sıralama ve trafikle sınırlamaz; sayfa bazlı performans, arama niyeti, dönüşüm ve gelir katkısını birlikte analiz eder. Search Console, GA4, keyword tracking araçları ve Looker Studio entegrasyonlarıyla tüm organik verileri tek panelde toplar.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "seo raporlama",
//         "seo analiz hizmeti",
//         "organik trafik raporu",
//         "seo performans ölçümü",
//         "keyword tracking",
//         "seo dashboard",
//         "seo raporu nasıl hazırlanır",
//         "anahtar kelime sıralama takibi",
//         "organik trafik düşüşü neden olur",
//         "seo analiz raporu örneği",
//         "oteller için seo raporlama",
//         "turizm seo performansı",
//         "google search console raporu",
//         "seo performans iyileştirme teknikleri",
//         "seo ölçümleme araçları",
//         "seo analiz şablonu",
//         "otel seo raporlaması",
//         "turizm seo analizi",
//         "pms seo performansı",
//         "ota seo raporlama",
//         "seo raporlama antalya",
//         "antalya seo analizi",
//         "organik performans raporu türkiye",
//         "seo dashboard antalya"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/seo/seo-raporlama/#breadcrumb",
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
//           "name": "SEO Raporlama & Performans Analizi",
//           "item": "https://dgtlface.com/tr/seo/seo-raporlama"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/seo/seo-raporlama/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "SEO raporu nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SEO raporu; organik trafik, anahtar kelime sıralamaları, CTR, landing page performansı, dönüşüm ve gerekiyorsa gelir metriklerini içeren, yorum ve aksiyon önerileriyle desteklenen bir doküman olarak hazırlanmalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hangi SEO metriklerine bakmalıyım?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Organik oturumlar, kullanıcı sayısı, anahtar kelime sıralamaları, CTR, en iyi landing page’ler, dönüşüm sayısı ve oranı, teknik sağlık ve gerekiyorsa gelir katkısı önemli SEO metrikleridir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Organik trafik düşüşünün nedeni nasıl bulunur?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Algoritma değişiklikleri, teknik problemler, içerik kayıpları, rekabet artışı ve marka aramalarındaki değişimler analiz edilerek organik trafik düşüşünün nedeni tespit edilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için SEO raporlama nasıl olmalı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Otel SEO raporlarında; destinasyon ve konsept kelime performansının yanı sıra organik rezervasyon, doluluk, RevPAR ve ülke/pazar bazlı trafik ve gelir katkısı da takip edilmelidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "SEO sonuçlarını satış ve rezervasyonla nasıl ilişkilendiririm?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SEO verileri, dönüşüm ve satış raporlarıyla birleştirilerek; organik kanaldan gelen rezervasyon ve gelir katkısı Looker Studio ve satış/dönüşüm dashboard’larında gösterilir."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = () => {
   const locale = useLocale();
      const baseUrl = getBaseUrl();
    
       const pathnameKey = "/Services/seo/seoReporting";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

   const t = useTranslations("SeoReporting");
           const t2 = useTranslations("SeoReporting.h4Section");
        
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
           { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
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
                        aiAnswer: t("seoreporting_ai_answer_text"),
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
  header={t("seoreporting_subbanner_header")}
  header2={t("seoreporting_subbanner_header2")}
  text={t.raw("seoreporting_subbanner_text")}
    header3={t("seoreporting_subbanner_header3")}
  text2={t.raw("seoreporting_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("seoreporting_ai_answer_text")}/>
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
      <VerticalSlider page="SeoReporting" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
<AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
