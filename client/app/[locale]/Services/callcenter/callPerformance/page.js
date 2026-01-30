import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.png"
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

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/callcenter/callPerformance";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Çağrı Merkezi Performans Analizi – KPI, Raporlama ve Optimizasyon | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, çağrı merkezi KPI’larını analiz ederek operasyonel verimliliği artırır. Günlük, aylık ve çok kanallı performans raporlarıyla süreçlerinizi optimize edin.";

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
//       "description": "DGTLFACE, oteller ve markalar için çağrı merkezi KPI’larını analiz ederek operasyonel verimlilik, satış ve misafir memnuniyetini artıran performans raporlama ve optimizasyon hizmetleri sunan dijital pazarlama ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi/#webpage",
//       "url": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi",
//       "name": "Çağrı Merkezi Performans Analizi – KPI, Raporlama ve Optimizasyon | DGTLFACE",
//       "description": "DGTLFACE, çağrı merkezi KPI’larını analiz ederek operasyonel verimliliği artırır. Günlük, aylık ve çok kanallı performans raporlarıyla süreçlerinizi optimize edin.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi/#service",
//       "name": "Çağrı Merkezi Performans Analizi – KPI, Raporlama ve Optimizasyon",
//       "url": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "çağrı merkezi raporlama, çağrı merkezi analizi, performans raporu, KPI takibi, çağrı istatistikleri, operasyon analizi",
//       "description": "DGTLFACE, çağrı merkezi KPI’larını analiz ederek operasyonel verimliliği artırır. Çağrı adedi, cevaplanma oranı, bekleme süresi, ilk çağrıda çözüm, satış/rezervasyon dönüşümü, çok kanallı etkileşim ve agent performansı gibi metrikleri Looker Studio dashboard’larında birleştirir; otel ve turizm çağrı merkezleri için multi-channel performans ölçümü, raporlama ve optimizasyon önerileri sunar.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "çağrı merkezi raporlama",
//         "çağrı merkezi analizi",
//         "performans raporu",
//         "kpi takibi",
//         "çağrı istatistikleri",
//         "operasyon analizi",
//         "çağrı merkezi performansı nasıl ölçülür",
//         "inbound/outbound performans raporu",
//         "otel çağrı merkezi kpi",
//         "turizm müşteri deneyimi raporu",
//         "multi-channel performans ölçümü",
//         "arama süresi optimizasyonu",
//         "call center dashboard örnekleri",
//         "looker studio call center raporu",
//         "otel çağrı merkezi raporu",
//         "turizm çağrı analizi",
//         "resort kpi yönetimi",
//         "booking operasyon raporu",
//         "çağrı merkezi raporlama antalya",
//         "antalya performans analizi",
//         "çağrı merkezi kpi türkiye",
//         "antalya operasyon merkezi"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi/#breadcrumb",
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
//           "name": "Çağrı Merkezi Hizmetleri",
//           "item": "https://dgtlface.com/tr/cagri-merkezi-hizmetleri"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Performans Analizi & Raporlama",
//           "item": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Çağrı merkezi performansı nasıl ölçülür?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Çağrı merkezi performansı; çağrı hacmi, cevaplanma oranı, bekleme süresi, ilk çağrıda çözüm oranı, çağrı süresi, satış/rezervasyon dönüşüm oranı, tekrar arama oranı ve memnuniyet skorları gibi KPI’larla ölçülür ve bu metrikler düzenli olarak raporlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hangi KPI’lar çağrı merkezi için kritiktir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Cevaplanma oranı, ortalama bekleme süresi, ilk çağrıda çözüm (FCR), çağrı süresi, satış/rezervasyon dönüşümü, tekrar arama oranı ve agent bazlı kalite skorları çağrı merkezleri için en kritik KPI’lar arasındadır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Inbound ve outbound performans raporu nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Inbound için çağrı hacmi, kaçan çağrı, yanıt süresi, çözüm oranı ve memnuniyet; outbound için arama sayısı, ulaşma oranı, görüşme süresi, satış/dönüşüm oranı ve kampanya bazlı sonuçlar ayrı ama entegre şekilde raporlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Looker Studio ile çağrı merkezi dashboard’ı nasıl çalışır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Çağrı merkezi yazılımı, telefon santrali, CRM, PMS ve mesaj kanallarından gelen veriler Looker Studio’ya entegre edilir; yönetim için özet, operasyon için detaylı KPI panelleri oluşturularak 7/24 canlı erişim sağlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece raporlama mı, optimizasyon önerisi de veriyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, raporlamanın yanında KPI sonuçlarına göre vardiya, ekip, script, kanal ve teknoloji düzeyinde somut optimizasyon önerileri de sunar; performans analizi sürekli iyileştirme döngüsü ile birlikte ilerler."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "CallCenterPerformancePage" });
        const t2 = await getTranslations({ locale, namespace: "CallCenterPerformancePage.h4Section" });
        
              const baseUrl = getBaseUrl();
                         const pathnameKey = "/Services/callcenter/callPerformance";
                         const canonicalUrl = getCanonicalUrl(pathnameKey, locale);


                const stepData = [1,2,3,4].map(i => ({
                  id: i,
                  image: [image1,image2,image3,image4][i-1],
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
                                                 name:
                                                   locale === "tr"
                                                     ? "Çağrı Merkezi Hizmetleri"
                                                     : "Call Center Services",
                                                 url: `${baseUrl}${locale === "tr" ? "/tr/cagri-merkezi" : "/en/call-center"}`,
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
      <VerticalSlider page="CallCenterPerformancePage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

