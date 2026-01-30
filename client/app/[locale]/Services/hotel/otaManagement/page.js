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

  const pathnameKey = "/Services/hotel/otaManagement";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Otel OTA Yönetimi – Booking, Expedia & Agoda Optimizasyonu | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA platformlarının performansını optimize eder. Otel OTA yönetimi, booking optimizasyonu, Expedia satış artırma, otel envanter yönetimi, OTA fiyat stratejisi ve turizm OTA çözümleriyle doluluk, görünürlük ve geliri artırır.";

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
//       "description": "DGTLFACE, oteller için OTA yönetimi, dijital reklam, SEO, sosyal medya, PMS–OTA entegrasyonu ve çağrı merkezi hizmetleri sunan, rezervasyon ve gelir odaklı çalışan bir dijital pazarlama ve turizm teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#webpage",
//       "url": "https://dgtlface.com/tr/otel/ota-yonetimi",
//       "name": "Otel OTA Yönetimi – Booking, Expedia & Agoda Optimizasyonu | DGTLFACE",
//       "description": "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA platformlarının performansını optimize eder. Otel OTA yönetimi, booking optimizasyonu, Expedia satış artırma, otel envanter yönetimi, OTA fiyat stratejisi ve turizm OTA çözümleriyle doluluk, görünürlük ve geliri artırır.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#service",
//       "name": "Otel OTA Yönetimi – Booking, Expedia & Agoda Optimizasyonu",
//       "url": "https://dgtlface.com/tr/otel/ota-yonetimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "otel ota yönetimi, booking optimizasyonu, expedia satış artırma, otel envanter yönetimi, ota fiyat stratejisi, turizm ota çözümleri",
//       "description": "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA platformlarının performansını optimize eder. Otel OTA yönetimi, booking optimizasyonu, Expedia satış artırma, otel envanter yönetimi, OTA fiyat stratejisi, turizm OTA çözümleri, OTA satış analizi, OTA fiyat kontrol sistemi, OTA yorum yönetimi ve OTA vs direkt kanal denge stratejileriyle doluluk, görünürlük ve geliri artırır.",
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
//         "otel ota yönetimi",
//         "booking optimizasyonu",
//         "expedia satış artırma",
//         "otel envanter yönetimi",
//         "ota fiyat stratejisi",
//         "turizm ota çözümleri",
//         "booking görünürlük artırma teknikleri",
//         "expedia sıralama artırma yolları",
//         "ota fiyat kontrol sistemi",
//         "resort ota stratejisi",
//         "butik otel ota yönetimi",
//         "booking.com dönüşüm oranı artırma",
//         "ota satış analizi nasıl yapılır",
//         "ota fiyat karşılaştırması",
//         "antalya booking yönetimi",
//         "belek ota optimizasyon",
//         "kemer expedia yönetimi",
//         "alanya ota reklam stratejisi",
//         "resort ota optimizasyon",
//         "butik otel booking pazarlama",
//         "villa ota yönetimi"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#breadcrumb",
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
//           "name": "OTA Yönetimi",
//           "item": "https://dgtlface.com/tr/otel/ota-yonetimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "OTA yönetimi tam olarak nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "OTA yönetimi; Booking, Expedia, Agoda gibi online seyahat ajanslarında fiyat, envanter, içerik, kampanya ve yorum süreçlerinin PMS ve channel manager ile entegre şekilde yönetilmesidir. Amaç, doluluğu ve görünürlüğü artırırken komisyon ve overbooking riskini kontrol altında tutmaktır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Booking ve Expedia sıralaması nasıl yükseltilir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Booking ve Expedia sıralamasını iyileştirmek için içerik doluluk oranı, görsel kalitesi, rekabetçi fiyat, kampanya kullanımı, yorum sayısı ve puanı, iptal/no-show oranı ve cevap hızı gibi faktörler optimize edilmelidir. DGTLFACE, bu alanları veriyle analiz edip OTA bazlı aksiyon planları uygular."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "OTA fiyat stratejisi nasıl belirlenir ve rate parity nasıl korunur?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "OTA fiyat stratejisi PMS merkezde olacak şekilde tasarlanır. Tüm sezon ve fiyat planları PMS’te tanımlanır; Channel Manager üzerinden OTA’lara dağıtılır. Paritenin bozulmaması için OTA panelinden rastgele manuel müdahaleden kaçınılır, özel avantajlar fiyat yerine paket ve ek hizmet üzerinden kurgulanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Overbooking nasıl önlenir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Overbooking riskini azaltmak için PMS, Channel Manager ve OTA eşleştirmeleri doğru kurgulanmalı, envanter tek kaynaktan yönetilmeli, kritik dönemlerde buffer oda stratejisi kullanılmalı ve stop-sale limitleri iyi tanımlanmalıdır. DGTLFACE, teknik akış ve operasyon süreçlerini bu prensiplere göre yapılandırır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "OTA yönetimi sadece büyük oteller için mi mantıklıdır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Hayır. Az odalı butik oteller ve villalar için OTA yönetimi daha da kritiktir; çünkü her rezervasyonun toplam doluluk ve gelir üzerindeki etkisi çok daha yüksektir. Küçük oteller için daha sade ama titiz bir OTA stratejisi, kârlılığı ve risk kontrolünü doğrudan etkiler."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
     const t = await getTranslations({locale,namespace: "OtaManagementPage",});
      const t2 = await getTranslations({locale,namespace: "OtaManagementPage.h4Section",});
           
       const baseUrl = getBaseUrl();
            const pathnameKey = "/Services/hotel/otaManagement";
            const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

              const stepData = [1,2,3,4,5,6,7].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6,image7][i-1],
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
               { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
                { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
                 { title: t("h2Section.header5"), text: t.raw("h2Section.text5") }
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
      <VerticalSlider page="OtaManagementPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}


