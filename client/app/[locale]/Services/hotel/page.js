import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { buildDepartmentJsonLd, stripHtml, getBaseUrl } from "@/app/lib/structured-data/buildDepartmentJsonLd";
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/hotel"; // og-map key'in buysa

  const seoData = getSeoData(pathnameKey, locale);
  const title = seoData?.title || "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider | DGTLFACE";
  const description =
    seoData?.description ||
    "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS–OTA entegrasyonu, çağrı merkezi ve veri analiziyle 360° dijital pazarlama ve dönüşüm çözümleri sunar.";

  // ✅ ortam bazlı base URL
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // ✅ og map'ten çek + fallback ver (çok kritik)
  const ogImage = getOgImageByPathnameKey(pathnameKey, locale);


  const url =
    locale === "tr"
      ? `${base}/tr/otel`
      : `${base}/en/hotel`;

  return {
    // ✅ en kritik satır
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: `${base}/tr/otel`,
        en: `${base}/en/hotel`,
      },
    },

    openGraph: {
      type: "website",
      url,
      siteName: "DGTLFACE",
      title,
      description,
      images: [
        {
          url: ogImage, // metadataBase sayesinde absolute'a tamamlanır
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
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
//       "url": "https://dgtlface.com/",
//       "description": "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS entegrasyonu, OTA yönetimi, 4 dilli çağrı merkezi ve veri analizi ile 360° otel dijital pazarlama ve dijital dönüşüm çözümleri sunan teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//         "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"]
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://dgtlface.com/#website",
//       "url": "https://dgtlface.com/",
//       "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
//       "inLanguage": "tr-TR",
//       "publisher": {
//         "@id": "https://dgtlface.com/#organization"
//       }
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/otel/#webpage",
//       "url": "https://dgtlface.com/tr/otel",
//       "name": "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider | DGTLFACE",
//       "description": "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS entegrasyonu, OTA yönetimi ve 4 dilli çağrı merkezi çözümleri sunar. Turizm sektörüne özel dijital dönüşüm sağlar.",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#website"
//       },
//       "inLanguage": "tr-TR",
//       "about": [
//         "otel dijital pazarlama",
//         "otel dijital dönüşümü",
//         "otel pazarlama ajansı",
//         "otel için SEO",
//         "otel Google Ads",
//         "otel sosyal medya yönetimi",
//         "turizm dijital pazarlama rehberi"
//       ],
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/otel/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/otel/#service",
//       "name": "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider",
//       "url": "https://dgtlface.com/tr/otel",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "otel dijital pazarlama, turizm dijital dönüşüm, otel SEO, otel reklam yönetimi, OTA yönetimi, PMS entegrasyonu, otel çağrı merkezi",
//       "description": "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS–OTA entegrasyonu, OTA yönetimi, 4 dilli çağrı merkezi ve veri analiziyle 360° otel dijital pazarlama ve dönüşüm hizmetleri sunar. Resort, city, butik ve luxury oteller için özel yol haritaları ve stratejiler geliştirir.",
//         "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "otel dijital pazarlama",
//         "otel dijital dönüşümü",
//         "otel pazarlama ajansı",
//         "otel için seo",
//         "otel google ads",
//         "otel sosyal medya yönetimi",
//         "oteller için dijital pazarlama stratejisi",
//         "resort dijital pazarlama",
//         "butik otel dijital pazarlama",
//         "villa & luxury otel dönüşümü",
//         "all inclusive otel dijital strateji",
//         "turizm sektörü online satış artırma yöntemleri",
//         "otel rezervasyon dönüşümünü artırma",
//         "google hotel ads entegrasyonu",
//         "otel marka bilinirliği artırma",
//         "booking expedia optimizasyon",
//         "otel müşteri deneyimi için dijital çözümler",
//         "otel sosyal medya reklamcılığı",
//         "otel gelir yönetimi digital",
//         "turizm dijital pazarlama rehberi",
//         "otel dijital pazarlama antalya",
//         "antalya resort marketing",
//         "otel pazarlama türkiye",
//         "side–kemer–belek dijital otel çözümleri"
//       ]
//     },
//     {
//       "@type": "ItemList",
//       "@id": "https://dgtlface.com/tr/otel/#services-list",
//       "name": "DGTLFACE Otel Dijital Pazarlama Hizmetleri",
//       "itemListElement": [
//         {
//           "@type": "Service",
//           "name": "Otel SEO",
//           "url": "https://dgtlface.com/tr/otel/seo"
//         },
//         {
//           "@type": "Service",
//           "name": "Otel Sosyal Medya Yönetimi",
//           "url": "https://dgtlface.com/tr/otel/sosyal-medya"
//         },
//         {
//           "@type": "Service",
//           "name": "Otel Reklam Yönetimi",
//           "url": "https://dgtlface.com/tr/otel/reklam-yonetimi"
//         },
//         {
//           "@type": "Service",
//           "name": "OTA Yönetimi (Hotel OTA)",
//           "url": "https://dgtlface.com/tr/otel/ota-yonetimi"
//         },
//         {
//           "@type": "Service",
//           "name": "PMS Entegrasyonu (Hotel PMS)",
//           "url": "https://dgtlface.com/tr/otel/pms-entegrasyonu"
//         },
//         {
//           "@type": "Service",
//           "name": "Otel Rezervasyon Çağrı Merkezi",
//           "url": "https://dgtlface.com/tr/otel/cagri-merkezi"
//         }
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/otel/#breadcrumb",
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
//           "item": "https://dgtlface.com/tr/otel"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/otel/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Otelim için neden özel dijital stratejiye ihtiyacım var?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Her otelin hedef pazarı, sezonu, ürün tipi (resort, city, butik, luxury) ve kanal dengesi farklıdır. Bu nedenle her otel için özel bir dijital pazarlama stratejisi gereklidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece reklam yönetimi ile çalışmak yeterli mi?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Sadece reklam yönetimiyle başlanabilir; ancak en güçlü sonuçlar SEO, OTA, web ve çağrı merkezi süreçlerinin entegre çalıştığı yapılarda elde edilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "OTA bağımlılığını azaltıp direkt rezervasyon artırabilir miyiz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Doğru fiyatlandırma, web kullanıcı deneyimi, reklam stratejisi ve call center kurgusu ile direkt rezervasyon oranını artırmak mümkündür."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hangi sürelerle çalışıyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Genellikle 6–12 aylık otel dijital dönüşüm planlarıyla çalışıyoruz; bu süre içinde strateji, uygulama ve optimizasyon döngüleri tamamlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otelim Türkiye dışından da misafir ağırlıyor; çok dilli yapı kurabilir misiniz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Web, sosyal medya ve çağrı merkezi tarafında TR–EN–DE–RU gibi çok dilli yapılar kurarak farklı pazarlara uygun iletişim stratejileri geliştiriyoruz."
//           }
//         }
//       ]
//     }
//   ]
// }


const Page = () => {
  const locale = useLocale();
const base = getBaseUrl();

  const t = useTranslations("Hotel");
     const t2 = useTranslations("Hotel.h4Section");
      
     // ✅ generateMetadata ile birebir canonical
const pageUrl =
  locale === "tr"
    ? `${base}/tr/otel`
    : `${base}/en/hotel`;

// ✅ UI’de render edilen FAQ ile birebir
const faqsLd = [1, 2, 3, 4, 5].map((i) => ({
  question: t(`faqs.question${i}`),
  answer: t(`faqs.answer${i}`),
}));

// ✅ StepSection buttonLink’leri ile birebir (absolute)
const serviceItems =
  locale === "tr"
    ? [
        { name: stripHtml(t("hotel_services_title1")), url: `${base}/tr/otel/seo` },
        { name: stripHtml(t("hotel_services_title2")), url: `${base}/tr/otel/sosyal-medya` },
        { name: stripHtml(t("hotel_services_title3")), url: `${base}/tr/otel/reklam-yonetimi` },
        { name: stripHtml(t("hotel_services_title4")), url: `${base}/tr/otel/ota-yonetimi` },
        { name: stripHtml(t("hotel_services_title5")), url: `${base}/tr/otel/pms-entegrasyonu` },
        { name: stripHtml(t("hotel_services_title6")), url: `${base}/tr/otel/cagri-merkezi` }
      ]
    : [
        { name: stripHtml(t("hotel_services_title1")), url: `${base}/en/hotel/seo` },
        { name: stripHtml(t("hotel_services_title2")), url: `${base}/en/hotel/social-media` },
        { name: stripHtml(t("hotel_services_title3")), url: `${base}/en/hotel/advertising` },
        { name: stripHtml(t("hotel_services_title4")), url: `${base}/en/hotel/ota-management` },
        { name: stripHtml(t("hotel_services_title5")), url: `${base}/en/hotel/pms-integration` },
        { name: stripHtml(t("hotel_services_title6")), url: `${base}/en/hotel/call-center` }
      ];


const jsonLd = buildDepartmentJsonLd({
  locale,
  pageUrl,

  pageName: t("jsonld.pageName"),
  pageDescription: t("jsonld.pageDescription"),

  serviceName: t("jsonld.serviceName"),
  serviceDescription: stripHtml(t("aiAnswerBlock")),

  breadcrumbName: t("jsonld.breadcrumbName"),

  keywords: t.raw("jsonld.keywords"),

  faqItems: faqsLd,
  serviceItems,

  // 🤖 AI uyumlu alanlar
  aiQuestion: t("jsonld.pageName"),
  aiAnswer: t("aiAnswerBlock"),
  aiSource: t("aiSourceMention"),
});


                const faqs = [
              {
                question: t("faqs.question1"),
                answer:
                  t("faqs.answer1"),
              },
              {
                question: t("faqs.question2"),
                answer:
                  t("faqs.answer2"),
              },
              {
               question: t("faqs.question3"),
                answer:
                  t("faqs.answer3"),
              },
          
              {
              question: t("faqs.question4"),
                answer:
                  t("faqs.answer4"),
              },
          
              {
                question: t("faqs.question5"),
                answer:
                  t("faqs.answer5"),
              },
          
          
            ];
          
             const items = [
                 {
                   title: t("h2Section.title1"),
                   text: (
                     <RichTextSpan
                       ns="Hotel"
                       id="h2Section.text1"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title2"),
                   text: (
                     <RichTextSpan
                       ns="Hotel"
                       id="h2Section.text2"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title3"),
                   text: (
                     <RichTextSpan
                       ns="Hotel"
                       id="h2Section.text3"
                       className=""
                     />
                   ),
                 },
                   {
                   title: t("h2Section.title4"),
                   text: (
                     <RichTextSpan
                       ns="Hotel"
                       id="h2Section.text4"
                       className=""
                     />
                   ),
                 },
                 
               ];
          
               const renderDescription = (key) =>
            t2.rich(key, {
              // <br /> → satır atlat
              br: () => <><br /></>,
          
              // <ul> wrapper (JSON'da kullanırsan)
              ul: (chunks) => (
                <ul className="list-disc list-inside space-y-1 mt-2 grid grid-cols-3">
                  {chunks}
                </ul>
              ),
          
              // <li> → tek tek maddeler
              li: (chunks) => <li>{chunks}</li>,
          
              // istersen kalın da destekleyelim
              b: (chunks) => <span className="font-semibold">{chunks}</span>,
            });
          
          
               const cards = [
            {
              widthClass: "w-[90%] lg:w-[80%]",
              title: t2("card1title"),
              description: renderDescription("card1description"),
            },
            {
              widthClass: "w-[90%] lg:w-[75%]",
              title: t2("card2title"),
              description: renderDescription("card2description"),
            },
            {
              widthClass: "w-[90%] lg:w-[70%]",
              title: t2("card3title"),
              description: renderDescription("card3description"),
            },
          
          ];

  const servicesData = [1,2,3,4,5,6].map(i => ({
  id: i,
  title: t(`hotel_services_title${i}`),
  subTitle: t(`hotel_services_subtitle${i}`),
     text: t(`hotel_services_text${i}`),
  features: [1,2,3,4].map(j => t(`hotel_services_feature${i}_${j}`)),
  buttonLink: [
    "/otel/seo",
    "/otel/sosyal-medya",
    "/otel/reklam-yonetimi",
    "/otel/ota-yonetimi",
     "/otel/pms-entegrasyonu",
      "/otel/cagri-merkezi",
  ][i-1]
}));
  
  return (
  <>
  {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden'>
   <div className='hidden lg:flex'>
     <MainBanner header={t("hotel_banner_header")} text={<RichTextSpan
                       ns="Hotel"
                       id="hotel_banner_text"
                     />} span={t("hotel_banner_span")} buttonText={t("buttonText")}/>
   </div>

    <div className='flex lg:hidden'>
     <MobileMainBanner header={t("hotel_banner_header")} text={<RichTextSpan
                       ns="Hotel"
                       id="hotel_banner_text"
                     />} span={t("hotel_banner_span")} buttonText={t("buttonText")}/>
   </div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>
    <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
       <DualHighlightSection items={items}/>
<StepSection
  header={t("hotel_section_header1")}
  header2={t("hotel_section_header2")}
  text={t("hotel_section_text")}
  servicesData={servicesData}
  buttonText={t("buttonText")}
/>

<LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />


        <VerticalSlider2 page="Hotel" itemCount={4}/>
     <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
