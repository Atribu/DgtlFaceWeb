import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import RichTextSpan from '../../components/common/RichTextSpan'
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: bu sayfanın standart key'i
  const pathnameKey = "/Services/smm";

  // Türkçe yorum: ortam bazlı base URL (local + prod)
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // Türkçe yorum: seoConfig'ten title/description çek
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "Sosyal Medya Yönetimi – Strateji, İçerik ve Reklam Uzmanlığı | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, markanız için sosyal medya stratejisi, içerik üretimi, planlama, Reels & video ve reklam yönetimi sunar.";

  // Türkçe yorum: OG görselini map'ten çek + fallback
  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

  // Türkçe yorum: canonical URL (local + prod)
  const url =
    locale === "tr"
      ? `${base}/tr/smm`
      : `${base}/en/social-media-marketing`; 

  return {
    // ✅ kritik: "/og/..." gibi relative path'leri absolute'a çevirir
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: `${base}/tr/smm`,
        en: `${base}/en/social-media-marketing`,
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


const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, markalar ve oteller için sosyal medya stratejisi, içerik üretimi, Reels & video, reklam yönetimi ve analiz sunan profesyonel bir sosyal medya ajansıdır.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dgtlface.com/#website",
      "url": "https://dgtlface.com/",
      "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://dgtlface.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/smm/#webpage",
      "url": "https://dgtlface.com/tr/smm",
      "name": "Sosyal Medya Yönetimi – Strateji, İçerik ve Reklam Uzmanlığı | DGTLFACE",
      "description": "DGTLFACE, markanız için sosyal medya stratejisi, içerik üretimi, planlama, Reels & video ve reklam yönetimi sunar. Instagram, Facebook ve YouTube için profesyonel sosyal medya yönetimi hizmeti alın.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "sosyal medya yönetimi",
        "sosyal medya ajansı",
        "instagram yönetimi",
        "sosyal medya danışmanlığı",
        "otel sosyal medya yönetimi"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/smm/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/smm/#service",
      "name": "Sosyal Medya Yönetimi – Profesyonel SMM Stratejileri",
      "url": "https://dgtlface.com/tr/smm",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "sosyal medya yönetimi, sosyal medya reklamları, içerik üretimi, SMM stratejisi",
      "description": "DGTLFACE, sosyal medya stratejisi, içerik üretimi, planlama, Reels & video prodüksiyon, reklam yönetimi ve performans analizi ile markalar ve oteller için profesyonel sosyal medya yönetimi sunar.",
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "sosyal medya yönetimi",
        "sosyal medya ajansı",
        "instagram yönetimi",
        "sosyal medya danışmanlığı",
        "içerik üretimi hizmeti",
        "sosyal medya reklam yönetimi",
        "sosyal medya yönetimi nasıl yapılır",
        "instagram içerik planı nasıl hazırlanır",
        "sosyal medya etkileşimi artırma yolları",
        "işletmeler için sosyal medya stratejisi",
        "oteller için sosyal medya pazarlaması",
        "turizm sektöründe sosyal medya",
        "reel video nasıl viral olur",
        "içerik takvimi oluşturma",
        "sosyal medya raporu nasıl hazırlanır",
        "otel sosyal medya yönetimi",
        "resort instagram yönetimi",
        "otel reels video üretimi",
        "sosyal medya yönetimi antalya",
        "antalya sosyal medya ajansı",
        "instagram yönetimi türkiye",
        "sosyal medya danışmanı antalya"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/smm/#services-list",
      "name": "DGTLFACE SMM Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Sosyal Medya İçerik Üretimi",
          "url": "https://dgtlface.com/tr/smm/icerik-uretimi"
        },
        {
          "@type": "Service",
          "name": "Planlama ve Strateji",
          "url": "https://dgtlface.com/tr/smm/planlama-strateji"
        },
        {
          "@type": "Service",
          "name": "Reels & Video İçerik Üretimi",
          "url": "https://dgtlface.com/tr/smm/reels-video"
        },
        {
          "@type": "Service",
          "name": "Sosyal Medya Reklamları",
          "url": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari"
        },
        {
          "@type": "Service",
          "name": "Analiz & Raporlama",
          "url": "https://dgtlface.com/tr/smm/analiz-raporlama"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/smm/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://dgtlface.com/tr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sosyal Medya Yönetimi",
          "item": "https://dgtlface.com/tr/smm"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/smm/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Sosyal medya yönetimi sadece post paylaşmak mıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Profesyonel sosyal medya yönetimi; strateji, içerik üretimi, tasarım, video, planlama, reklam, topluluk yönetimi ve raporlama gibi birçok sürecin birlikte çalıştığı bir yapıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için sosyal medya gerçekten rezervasyon getirir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doğru strateji, doğru içerik ve reklam kurgusuyla evet. Özellikle Reels, kısa video ve kampanya iletişimi, misafirin otel tercihinde ciddi rol oynar."
          }
        },
        {
          "@type": "Question",
          "name": "Sadece içerik üretimi veya sadece reklam yönetimi hizmeti alabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, sadece içerik üretimi, sadece planlama veya sadece sosyal medya reklam yönetimi hizmeti alabilirsiniz. Ancak en güçlü sonuçlar bu alanların entegre çalıştığı modellerde elde edilir."
          }
        }
      ]
    }
  ]
}

const Page = () => {
     const t = useTranslations("Smm");
    const t2 = useTranslations("Smm.h4Section");

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
                 ns="Smm"
                 id="h2Section.text1"
                 className=""
               />
             ),
           },
           {
             title: t("h2Section.title2"),
             text: (
               <RichTextSpan
                 ns="Smm"
                 id="h2Section.text2"
                 className=""
               />
             ),
           },
           {
             title: t("h2Section.title3"),
             text: (
               <RichTextSpan
                 ns="Smm"
                 id="h2Section.text3"
                 className=""
               />
             ),
           },
             {
             title: t("h2Section.title4"),
             text: (
               <RichTextSpan
                 ns="Smm"
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
  title: t(`smm_services_title${i}`),
  subTitle: t(`smm_services_subtitle${i}`),
   text: t(`smm_services_text${i}`),
  features: [1,2,3,4].map(j => t(`smm_services_feature${i}_${j}`)),
  buttonLink: [
    "/smm/icerik-uretimi",
    "/smm/planlama-strateji",
    "/smm/reels-video",
    "/smm/sosyal-medya-reklamlari",
    "/smm/analiz-raporlama"
  ][i-1]
}));

  return (
   <>
   {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden'>
       <div className='hidden lg:flex'>
        <MainBanner  header={t("smm_banner_header")} span={t("smm_banner_span")} text={t("smm_banner_text")} buttonText={t("buttonText")}/>
       </div>
          <div className='flex lg:hidden'>
        <MobileMainBanner  header={t("smm_banner_header")} span={t("smm_banner_span")} text={t("smm_banner_text")} buttonText={t("buttonText")}/>
       </div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>
       <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
       <DualHighlightSection items={items}/>
      <StepSection header={t("smm_section_header1")} header2={t("smm_section_header2")} text={t("smm_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
       <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider2 page="Smm" itemCount={4}/>
      <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
