import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
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

  const pathnameKey = "/Services/digitalAnalysis/lookerStudio";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Looker Studio Raporlama – Google Veri Dashboard & Otomasyon | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Looker Studio ile SEO, SEM, SMM ve web performans verilerinizi tek bir panelde toplar. Otel ve işletmeler için otomatik raporlama çözümleri.";

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
//       "description": "DGTLFACE, oteller ve markalar için Looker Studio tabanlı dijital performans panelleri, otomatik raporlama ve çok kanallı veri entegrasyonu sunan turizm odaklı dijital pazarlama ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/raporlama/looker-studio/#webpage",
//       "url": "https://dgtlface.com/tr/raporlama/looker-studio",
//       "name": "Looker Studio Raporlama – Google Veri Dashboard & Otomasyon | DGTLFACE",
//       "description": "DGTLFACE, Looker Studio ile SEO, SEM, SMM ve web performans verilerinizi tek bir panelde toplar. Otel ve işletmeler için otomatik raporlama çözümleri.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/raporlama/looker-studio/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/raporlama/looker-studio/#service",
//       "name": "Looker Studio Raporlama – Google Veri Dashboard & Otomasyon",
//       "url": "https://dgtlface.com/tr/raporlama/looker-studio",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "looker studio raporlama, google data studio, otomatik raporlama, veri dashboard, dijital performans paneli, veri analizi raporu",
//       "description": "DGTLFACE, Looker Studio ile SEO, SEM, SMM, web, OTA, PMS ve çağrı merkezi verilerinizi tek bir dijital performans panelinde toplar. Google Data Studio altyapısıyla otomatik raporlama, çok kanallı veri dashboard’ları, oteller için performans raporları, reklam raporlama panelleri ve gelir & pazarlama içgörüleri sunarak veri odaklı karar almayı kolaylaştırır.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "looker studio raporlama",
//         "google data studio",
//         "otomatik raporlama",
//         "veri dashboard",
//         "dijital performans paneli",
//         "veri analizi raporu",
//         "looker studio nasıl kullanılır",
//         "looker studio dashboard örnekleri",
//         "oteller için performans raporu",
//         "reklam raporlama paneli oluşturma",
//         "veri kaynaklarını bağlama",
//         "seo performans paneli",
//         "sosyal medya rapor şablonu",
//         "looker excel entegrasyonu",
//         "otomatik mail raporlama",
//         "çok kanallı rapor paneli",
//         "otel looker studio paneli",
//         "turizm raporlama dashboard",
//         "resort performans raporu",
//         "pms + looker entegrasyonu",
//         "looker studio antalya",
//         "raporlama hizmeti antalya",
//         "dijital dashboard türkiye",
//         "performans paneli antalya"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/raporlama/looker-studio/#breadcrumb",
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
//           "name": "Veri Analizi & Raporlama",
//           "item": "https://dgtlface.com/tr/veri-analiz-ve-raporlama"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Looker Studio Raporlama",
//           "item": "https://dgtlface.com/tr/raporlama/looker-studio"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/raporlama/looker-studio/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Looker Studio nedir ve ne işe yarar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Looker Studio, farklı veri kaynaklarını (GA4, Google Ads, Search Console, Meta Ads, Excel, PMS, OTA vb.) tek bir interaktif rapor ve dashboard üzerinde görmenizi, bu verilerden görselleştirilmiş performans panelleri ve otomatik raporlar oluşturmanızı sağlayan Google tabanlı raporlama aracıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "SEO, SEM, SMM verilerini tek panelde nasıl toplayabilirim?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SEO, SEM ve SMM verileri; GA4, Search Console, Google Ads ve Meta Ads gibi kaynaklar Looker Studio’ya bağlanarak tek panelde toplanır. DGTLFACE, bu kaynakları kanal bazlı sekmeler ve üst seviye KPI ekranlarıyla okunabilir tek bir dijital performans paneli hâline getirir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "GA4, Search Console, Ads, PMS ve OTA verileri Looker Studio’ya nasıl bağlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "GA4, Search Console ve Google Ads doğrudan konektörlerle; PMS, OTA, CRM ve çağrı merkezi verileri ise genellikle Google Sheets, CSV, database veya özel konektörler aracılığıyla Looker Studio’ya bağlanır. Böylece tüm dijital ve operasyonel veriler tek dashboard’ta birleşir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otomatik e-mail raporlama nasıl kurulur?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Hazırlanan Looker Studio raporu için paylaşım ayarları yapılarak belirli periyotlarda (haftalık, aylık, sezonluk) ilgili kişilere otomatik e-posta gönderimi planlanır. Yönetim için özet, pazarlama için detaylı dashboard linkleri ve PDF çıktıları bu otomasyona dâhil edilebilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çok otelli yapılar için tek panelde raporlama mümkün mü?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Chain veya grup oteller için her otel ayrı sekme veya filtreyle temsil edilirken, üst seviye bir görünümde tüm otellerin doluluk, gelir, kanal performansı ve kampanya sonuçları konsolide şekilde gösterilebilir. Böylece hem genel resmi hem de otel bazlı detayları tek Looker Studio panelinden izleyebilirsiniz."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
   const t = await getTranslations({locale,namespace: "LookerStudioReportingPage",});
    const t2 = await getTranslations({locale,namespace: "LookerStudioReportingPage.h4Section",});

      const baseUrl = getBaseUrl();
      const pathnameKey = "/Services/digitalAnalysis/lookerStudio";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
           
              const stepData = [1,2,3,4,5].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5][i-1],
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
                                               name: locale === "tr" ? "Veri Analizi & Raporlama" : "Data Analytics & Performance Reporting ",
                                               url: `${baseUrl}${locale === "tr" ? "/tr/raporlama" : "/en/digital-analysis"}`,
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
<div className="flex flex-col items-center justify-center gap-5">
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
      <VerticalSlider page="LookerStudioReportingPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

