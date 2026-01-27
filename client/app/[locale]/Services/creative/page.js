import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { buildDepartmentJsonLd, stripHtml, getBaseUrl } from "@/app/lib/structured-data/buildDepartmentJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: bu sayfanın standart key'i
  const pathnameKey = "/Services/creative";

  // Türkçe yorum: ortam bazlı base URL (local + prod)
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // Türkçe yorum: seoConfig'ten title/description çek
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Creative Tasarım & Prodüksiyon Hizmetleri – Marka Deneyimi Tasarlıyoruz | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, grafik tasarım, video prodüksiyon, 360° çekim, UI/UX ve kurumsal kimlik hizmetleriyle markanız için güçlü yaratıcı çözümler sunar.";

  // Türkçe yorum: OG görselini map'ten çek + fallback
  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

  // Türkçe yorum: canonical URL (local + prod)
  const url =
    locale === "tr"
      ? `${base}/tr/creative`
      : `${base}/en/creative-design`; 

  return {
    // ✅ kritik: "/og/..." gibi relative path'leri absolute'a çevirir
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: `${base}/tr/creative`,
        en: `${base}/en/creative-design`,
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
//       "description": "DGTLFACE, grafik tasarım, video prodüksiyon, 360° çekim, UI/UX ve kurumsal kimlik hizmetleriyle markalar ve oteller için güçlü yaratıcı çözümler sunan creative tasarım ajansıdır.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
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
//       "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#webpage",
//       "url": "https://dgtlface.com/tr/creative-ve-tasarim",
//       "name": "Creative Tasarım & Prodüksiyon Hizmetleri – Marka Deneyimi Tasarlıyoruz | DGTLFACE",
//       "description": "DGTLFACE, grafik tasarım, video prodüksiyon, 360° çekim, UI/UX ve kurumsal kimlik hizmetleriyle markanız için güçlü yaratıcı çözümler sunar.",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#website"
//       },
//       "inLanguage": "tr-TR",
//       "about": [
//         "creative tasarım ajansı",
//         "grafik tasarım hizmeti",
//         "video prodüksiyon ajansı",
//         "ui ux tasarım",
//         "360 çekim hizmeti",
//         "kurumsal kimlik tasarımı"
//       ],
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#service",
//       "name": "Creative Tasarım & Prodüksiyon Hizmetleri – Marka Deneyimi Tasarlıyoruz",
//       "url": "https://dgtlface.com/tr/creative-ve-tasarim",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "creative tasarım ajansı, grafik tasarım, video prodüksiyon, UI/UX tasarımı, 360 çekim hizmeti, kurumsal kimlik",
//       "description": "DGTLFACE, grafik tasarım, video prodüksiyon, 360° çekim, UI/UX ve kurumsal kimlik hizmetleriyle markanıza güçlü bir yaratıcı kimlik kazandırır. Oteller ve turizm markaları için tanıtım filmi, 360 tur, sosyal medya kreatifleri, UI/UX tasarımı ve kurumsal hediyeler üretir.",
//      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
//         "Kemer",
//         "Side",
//         "Alanya","Bodrum"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "creative tasarım ajansı",
//         "grafik tasarım hizmeti",
//         "video prodüksiyon ajansı",
//         "kurumsal kimlik tasarımı",
//         "ui ux tasarım",
//         "360 çekim hizmeti",
//         "profesyonel grafik tasarım hizmetleri",
//         "oteller için video prodüksiyon",
//         "kurumsal kimlik nasıl oluşturulur",
//         "web sitesi ui/ux tasarımı",
//         "sosyal medya için görsel tasarım",
//         "turizm sektörü için prodüksiyon",
//         "kısa reklam filmi çekimi",
//         "otel tanıtım videosu",
//         "mimari çekim teknikleri",
//         "otel video çekimi",
//         "resort 360 tur",
//         "turizm grafik tasarım",
//         "otel kurumsal kimlik çalışması",
//         "creative ajans antalya",
//         "antalya video prodüksiyon",
//         "grafik tasarım antalya",
//         "antalya mimari çekim"
//       ]
//     },
//     {
//       "@type": "ItemList",
//       "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#services-list",
//       "name": "DGTLFACE Creative & Prodüksiyon Hizmetleri",
//       "itemListElement": [
//         {
//           "@type": "Service",
//           "name": "Grafik & Motion Tasarım",
//           "url": "https://dgtlface.com/tr/creative/grafik-motion-tasarim"
//         },
//         {
//           "@type": "Service",
//           "name": "UI & UX Tasarımı",
//           "url": "https://dgtlface.com/tr/creative/ui-ux-tasarim"
//         },
//         {
//           "@type": "Service",
//           "name": "Video & Prodüksiyon",
//           "url": "https://dgtlface.com/tr/creative/video-produksiyon"
//         },
//         {
//           "@type": "Service",
//           "name": "Etkinlik Prodüksiyonu",
//           "url": "https://dgtlface.com/tr/creative/etkinlik-produksiyonu"
//         },
//         {
//           "@type": "Service",
//           "name": "Kurumsal Hediye & Tasarım",
//           "url": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi"
//         }
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#breadcrumb",
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
//           "name": "Creative – Tasarım & Prodüksiyon",
//           "item": "https://dgtlface.com/tr/creative-ve-tasarim"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/creative-ve-tasarim/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Creative hizmetleriniz neleri içeriyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE; grafik tasarım, video prodüksiyon, UI/UX, 360 çekim, kurumsal kimlik ve etkinlik prodüksiyonu gibi alanlarda uçtan uca creative & prodüksiyon hizmetleri sunar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otel çekimleri yapıyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Oda, restoran, spa, etkinlik alanları, 360 tur ve drone çekimleri dahil otel ve resort’lar için kapsamlı çekim hizmeti sunuyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Markam için kurumsal kimlik çalışması yapabilir misiniz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Logo, renk paleti, tipografi, kurumsal kimlik rehberi ve uygulama alanlarıyla uçtan uca kurumsal kimlik tasarımı sunuyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "UI/UX tasarım web projeleriyle entegre mi çalışıyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. UI/UX tasarım süreçleri web & yazılım ekibiyle entegre yürütülür; böylece tasarım ve kodlama aynı mimari içinde ilerler."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = ({ params }) => {
  const t = useTranslations("CreativePage");
   const t2 = useTranslations("CreativePage.h4Section");

   const { locale } = params;
   const base = getBaseUrl();

    // ✅ generateMetadata ile birebir aynı canonical
  const pageUrl =
    locale === "tr"
      ? `${base}/tr/creative`
      : `${base}/en/creative-design`;

  // ✅ Sayfada render edilen 5 FAQ -> JSON-LD de 5 olmalı
  const faqItems = [1, 2, 3, 4, 5].map((i) => ({
    question: t(`faqs.question${i}`),
    answer: t(`faqs.answer${i}`),
  }));

  // ✅ StepSection / kart linklerinle aynı (absolute + locale’li)
  // EN child route’lar farklıysa burayı routing’e göre uyarlarsın.
  const serviceItems =
    locale === "tr"
      ? [
          { name: stripHtml(t("creativepage_services_title1")), url: `${base}/tr/creative/grafik-motion-tasarim` },
          { name: stripHtml(t("creativepage_services_title2")), url: `${base}/tr/creative/ui-ux-tasarim` },
          { name: stripHtml(t("creativepage_services_title3")), url: `${base}/tr/creative/video-produksiyon` },
          { name: stripHtml(t("creativepage_services_title4")), url: `${base}/tr/creative/etkinlik-produksiyonu` },
          { name: stripHtml(t("creativepage_services_title5")), url: `${base}/tr/creative/kurumsal-hediye-tasarimi` },
        ]
      : [
          // placeholder: EN child path’ler sende nasıl ise ona göre değiştir
          { name: stripHtml(t("creativepage_services_title1")), url: `${base}/en/creative-design/graphic-motion-design` },
          { name: stripHtml(t("creativepage_services_title2")), url: `${base}/en/creative-design/ui-ux-design` },
          { name: stripHtml(t("creativepage_services_title3")), url: `${base}/en/creative-design/video-production` },
          { name: stripHtml(t("creativepage_services_title4")), url: `${base}/en/creative-design/event-production` },
          { name: stripHtml(t("creativepage_services_title5")), url: `${base}/en/creative-design/corporate-gift-design` },
        ];

  const jsonLd = buildDepartmentJsonLd({
    locale,
    pageUrl,
    pageName:
      locale === "tr"
        ? "Creative Tasarım & Prodüksiyon Hizmetleri – Marka Deneyimi Tasarlıyoruz | DGTLFACE"
        : "Creative Design & Production Services | DGTLFACE",
    pageDescription: stripHtml(t("aiAnswerBlock")).slice(0, 300),
    serviceName:
      locale === "tr"
        ? "Creative Tasarım & Prodüksiyon Hizmetleri"
        : "Creative Design & Production Services",
    serviceDescription: stripHtml(t("aiAnswerBlock")),
    breadcrumbName: locale === "tr" ? "Creative – Tasarım & Prodüksiyon" : "Creative Design",
    faqItems,
    serviceItems,
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
                     ns="CreativePage"
                     id="h2Section.text1"
                     className=""
                   />
                 ),
               },
               {
                 title: t("h2Section.title2"),
                 text: (
                   <RichTextSpan
                     ns="CreativePage"
                     id="h2Section.text2"
                     className=""
                   />
                 ),
               },
               {
                 title: t("h2Section.title3"),
                 text: (
                   <RichTextSpan
                     ns="CreativePage"
                     id="h2Section.text3"
                     className=""
                   />
                 ),
               },
                 {
                 title: t("h2Section.title4"),
                 text: (
                   <RichTextSpan
                     ns="CreativePage"
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
  

 const buttonLinks=["/Services/creative/graphicDesign","/Services/creative/uiUxDesign", "/Services/creative/videoProduction", "/Services/creative/eventProduction", "/Services/creative/corporateGift"]

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`creativepage_services_title${i}`),
  subTitle: t(`creativepage_services_subtitle${i}`),
   text: t.raw(`creativepage_services_text${i}`),
  features: [1,2,3,4].map(j => t(`creativepage_services_feature${i}_${j}`)),
  buttonLink: [
    "/creative/grafik-motion-tasarim",
    "/creative/ui-ux-tasarim",
    "/creative/video-produksiyon",
    "/creative/etkinlik-produksiyonu",
    "/creative/kurumsal-hediye-tasarimi"
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


    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden '>
      <div className='hidden lg:flex'>
        <MainBanner header={t("creativepage_banner_header")} span={t("creativepage_banner_span")} text={ <RichTextSpan
                   ns="CreativePage"
                   id="creativepage_banner_text"
                 />} buttonText={t("buttonText")}/>
      </div>
        <div className='flex lg:hidden'>
        <MobileMainBanner header={t("creativepage_banner_header")} span={t("creativepage_banner_span")} text={ <RichTextSpan
                   ns="CreativePage"
                   id="creativepage_banner_text"
                 />} buttonText={t("buttonText")}/>
      </div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>
      <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
       <DualHighlightSection items={items}/>
      <StepSection page="CreativePage" header={t("creativepage_step_header1")} header2={t("creativepage_step_header2")} text={t("creativepage_step_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider2 page="CreativePage" itemCount={4}/>
      <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
