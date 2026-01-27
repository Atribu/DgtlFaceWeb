import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import RichTextSpan from '../../components/common/RichTextSpan'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { buildDepartmentJsonLd, stripHtml, getBaseUrl } from "@/app/lib/structured-data/buildDepartmentJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: bu sayfanın standart key'i (og-map + seoConfig'te aynı key kullanılacak)
  const pathnameKey = "/Services/callcenter";

  // Türkçe yorum: ortam bazlı base URL (local + prod)
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // Türkçe yorum: seoConfig'ten title/description çek
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Çağrı Merkezi Hizmetleri – Çok Kanallı Müşteri Destek ve Rezervasyon Yönetimi | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, çok kanallı çağrı merkezi hizmetleriyle rezervasyon, satış sonrası destek, mesaj yönetimi ve performans analizi sunar. 4 dilde profesyonel müşteri hizmetleri sağlar.";

  // Türkçe yorum: OG görselini map'ten çek + fallback
  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

  // Türkçe yorum: canonical URL (local + prod)
  const url =
    locale === "tr"
    ? `${base}/tr/cagri-merkezi`
    : `${base}/en/call-center`;

  return {
    // ✅ kritik: "/og/..." gibi relative path'leri absolute'a çevirir
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url, 
      languages: {
        tr: `${base}/tr/cagri-merkezi`,
        en: `${base}/en/call-center`,
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
          url: ogImage,
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
//       "description": "DGTLFACE, çok kanallı çağrı merkezi hizmetleriyle oteller ve markalar için rezervasyon, satış sonrası destek, mesaj yönetimi ve performans analizi sunan bir teknoloji ve operasyon partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//        "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
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
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/#webpage",
//       "url": "https://dgtlface.com/tr/cagri-merkezi",
//       "name": "Çağrı Merkezi Hizmetleri – Çok Kanallı Müşteri Destek ve Rezervasyon Yönetimi | DGTLFACE",
//       "description": "DGTLFACE, çok kanallı çağrı merkezi hizmetleriyle rezervasyon, satış sonrası destek, mesaj yönetimi ve performans analizi sunar. 4 dilde profesyonel müşteri hizmetleri sağlar.",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#website"
//       },
//       "inLanguage": "tr-TR",
//       "about": [
//         "çağrı merkezi hizmeti",
//         "çok dilli çağrı merkezi",
//         "rezervasyon çağrı merkezi",
//         "otel çağrı merkezi",
//         "turizm çağrı merkezi",
//         "multichannel müşteri hizmetleri"
//       ],
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/cagri-merkezi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/#service",
//       "name": "Çağrı Merkezi Hizmetleri – Çok Kanallı Müşteri Destek ve Rezervasyon Yönetimi",
//       "url": "https://dgtlface.com/tr/cagri-merkezi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "çağrı merkezi hizmeti, çok dilli çağrı merkezi, rezervasyon çağrı merkezi, sosyal medya mesaj yönetimi, satış sonrası destek, çağrı merkezi performans analizi",
//       "description": "DGTLFACE, çok kanallı çağrı merkezi hizmetleriyle oteller ve markalar için rezervasyon, satış sonrası destek, sosyal medya mesaj yönetimi ve performans analizi sunar. 4 dilde (TR–EN–DE–RU) inbound/outbound destek sağlar ve PMS–OTA entegrasyonlu rezervasyon süreçleriyle çalışır.",
//       "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "çağrı merkezi hizmeti",
//         "çok dilli çağrı merkezi",
//         "müşteri destek merkezi",
//         "rezervasyon çağrı merkezi",
//         "inbound call center",
//         "outbound call center",
//         "çok dilli çağrı merkezi hizmeti nedir",
//         "oteller için çağrı merkezi yönetimi",
//         "rezervasyon satış destek hattı",
//         "sosyal medya mesaj yönetimi çağrı merkezi",
//         "müşteri şikayet yönetimi nasıl yapılır",
//         "oteller için rezervasyon telefonu",
//         "whatsapp destek merkezi",
//         "instagram dm yönetimi",
//         "çağrı merkezi raporlama sistemi",
//         "otel satış sonrası operasyon yönetimi",
//         "çağrı karşılama script örnekleri",
//         "oteller için çok kanallı müşteri yönetimi",
//         "online rezervasyon çağrı destek",
//         "multi-channel müşteri hizmetleri",
//         "otel çağrı merkezi",
//         "turizm çağrı merkezi",
//         "resort müşteri destek",
//         "otel rezervasyon destek hattı",
//         "çağrı merkezi antalya",
//         "antalya otel destek merkezi",
//         "müşteri hizmetleri türkiye",
//         "antalya rezervasyon merkezi"
//       ]
//     },
//     {
//       "@type": "ItemList",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/#services-list",
//       "name": "DGTLFACE Çağrı Merkezi Hizmetleri",
//       "itemListElement": [
//         {
//           "@type": "Service",
//           "name": "4 Dilli Çağrı Merkezi",
//           "url": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi"
//         },
//         {
//           "@type": "Service",
//           "name": "Rezervasyon Desteği (Otel)",
//           "url": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi"
//         },
//         {
//           "@type": "Service",
//           "name": "Sosyal Medya Mesaj Yönetimi",
//           "url": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi"
//         },
//         {
//           "@type": "Service",
//           "name": "Satış Sonrası Destek",
//           "url": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek"
//         },
//         {
//           "@type": "Service",
//           "name": "Performans Analizi & Raporlama",
//           "url": "https://dgtlface.com/tr/cagri-merkezi/performans-analizi"
//         }
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/#breadcrumb",
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
//           "item": "https://dgtlface.com/tr/cagri-merkezi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "DGTLFACE hangi kanallarda çağrı merkezi hizmeti veriyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Telefon (inbound/outbound), WhatsApp, Instagram DM, Facebook mesajları, web chat ve OTA mesaj kanalları üzerinden hizmet veriyoruz. Projenin ihtiyacına göre aktif kanalları birlikte belirliyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çağrı merkezi sadece oteller için mi, diğer sektörler de olabilir mi?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Odak noktamız otel ve turizm olmakla birlikte; hizmet, e-ticaret, B2B ve farklı sektörler için de çağrı merkezi, mesaj yönetimi ve satış sonrası destek hizmetleri sunabiliyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece rezervasyon hattı için çalışabilir miyiz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Sadece otel rezervasyon çağrı merkezi veya sadece sosyal medya mesaj yönetimi gibi tekil hizmetler için de bizimle çalışabilirsiniz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çağrı merkezi performansını nasıl raporluyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Çağrı sayıları, cevaplanma oranları, bekleme süreleri, satış/rezervasyon oranları, kanal kırılımları ve ajan bazlı KPI’ları içeren detaylı raporlar hazırlıyor; çoğu projede bu verileri Looker Studio dashboard’ları ile görselleştiriyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE ile çağrı merkezi projesine nasıl başlanıyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Öncelikle ihtiyaç ve hedeflerinizi konuştuğumuz bir analiz toplantısı yapıyoruz. Kanallar, diller, çalışma saatleri, ekip büyüklüğü ve KPI’ları netleştirdikten sonra; senaryo & script geliştirme, teknik kurulum, eğitim ve pilot dönem adımlarını planlıyoruz."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = () => {
   const locale = useLocale();
  const base = getBaseUrl();

   const t = useTranslations("Callcenter");
         const t2 = useTranslations("Callcenter.h4Section");
     
             // ✅ generateMetadata ile birebir aynı canonical
  const pageUrl =
    locale === "tr"
      ? `${base}/tr/cagri-merkezi`
      : `${base}/en/call-center`;

  // ✅ Sayfada render edilen FAQ sayısı ile JSON-LD birebir
  const faqs = [1, 2, 3, 4, 5].map((i) => ({
    question: t(`faqs.question${i}`),
    answer: t(`faqs.answer${i}`),
  }));

  // ✅ StepSection linkleri ile birebir aynı URL’ler (absolute)
  const serviceItems = [
    { name: stripHtml(t("callcenter_services_title1")), url: `${pageUrl}/4-dilli-cagri-merkezi` },
    { name: stripHtml(t("callcenter_services_title2")), url: `${pageUrl}/rezervasyon-destegi` },
    { name: stripHtml(t("callcenter_services_title3")), url: `${pageUrl}/mesaj-yonetimi` },
    { name: stripHtml(t("callcenter_services_title4")), url: `${pageUrl}/satis-sonrasi-destek` },
    { name: stripHtml(t("callcenter_services_title5")), url: `${pageUrl}/performans-analizi` },
  ];

  const jsonLd = buildDepartmentJsonLd({
    locale,
    pageUrl,
    pageName:
      locale === "tr"
        ? "Çağrı Merkezi Hizmetleri – Çok Kanallı Müşteri Destek ve Rezervasyon Yönetimi | DGTLFACE"
        : "Call Center Services | DGTLFACE",
    pageDescription: stripHtml(t("aiAnswerBlock")).slice(0, 300),
    serviceName: locale === "tr" ? "Çağrı Merkezi Hizmetleri" : "Call Center Services",
    serviceDescription: stripHtml(t("aiAnswerBlock")),
    breadcrumbName: locale === "tr" ? "Çağrı Merkezi" : "Call Center",
    faqItems: faqs,
    serviceItems,
  });
         
            const items = [
                {
                  title: t("h2Section.title1"),
                  text: (
                    <RichTextSpan
                      ns="Callcenter"
                      id="h2Section.text1"
                      className=""
                    />
                  ),
                },
                {
                  title: t("h2Section.title2"),
                  text: (
                    <RichTextSpan
                      ns="Callcenter"
                      id="h2Section.text2"
                      className=""
                    />
                  ),
                },
                {
                  title: t("h2Section.title3"),
                  text: (
                    <RichTextSpan
                      ns="Callcenter"
                      id="h2Section.text3"
                      className=""
                    />
                  ),
                },
                  {
                  title: t("h2Section.title4"),
                  text: (
                    <RichTextSpan
                      ns="Callcenter"
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
  
   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`callcenter_services_title${i}`),
  subTitle: t(`callcenter_services_subtitle${i}`),
  text: t(`callcenter_services_text${i}`),
  features: [1,2,3,4].map(j => t(`callcenter_services_feature${i}_${j}`)),
  buttonLink: [
    "/cagri-merkezi/4-dilli-cagri-merkezi",
    "/cagri-merkezi/rezervasyon-destegi",
    "/cagri-merkezi/mesaj-yonetimi",
    "/cagri-merkezi/satis-sonrasi-destek",
    "/cagri-merkezi/performans-analizi"
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
        <MainBanner  header={t("callcenter_banner_header")} span={t("callcenter_banner_span")} text={<RichTextSpan
                   ns="Callcenter"
                   id="callcenter_banner_text"
                 /> } buttonText={t("buttonText")}/>
</div>

<div className='flex lg:hidden'>
        <MobileMainBanner  header={t("callcenter_banner_header")} span={t("callcenter_banner_span")} text={<RichTextSpan
                   ns="Callcenter"
                   id="callcenter_banner_text"
                 /> } buttonText={t("buttonText")}/>
</div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>
      <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
      <DualHighlightSection items={items}/>
      <StepSection header={t("callcenter_section_header1")} header2={t("callcenter_section_header2")} text={t("callcenter_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
     <VerticalSlider2 page="Callcenter" itemCount={4}/>
     <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
