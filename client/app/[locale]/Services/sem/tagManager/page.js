import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
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
  const pathnameKey = "/Services/sem/tagManager";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Dönüşüm Takibi & Google Tag Manager Kurulumu – GA4, Meta CAPI, WhatsApp/Telefon | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, GTM ve GA4 dönüşüm takibi, Meta Conversion API, WhatsApp/telefon ölçümü ve rezervasyon tracking ile reklam verisini doğru ölçer ve optimize eder.";

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

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, Google Tag Manager, GA4, Meta Conversion API, WhatsApp–telefon izleme ve otel rezervasyon tracking süreçlerinde uzman bir dönüşüm takip ve veri analizi partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe"]
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#webpage",
      "url": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager",
      "name": "Dönüşüm Takibi & Google Tag Manager Kurulumu – Veri Odaklı Reklam Yönetimi | DGTLFACE",
      "description": "DGTLFACE, Google Tag Manager ve dönüşüm takip kurulumu ile reklam verilerinizi doğru ölçmenizi sağlar. GA4, Meta CAPI, telefon ve rezervasyon ölçümlemeleri sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {"@id": "https://dgtlface.com/#organization"},
      "breadcrumb": {"@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#breadcrumb"}
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#service",
      "name": "Dönüşüm Takibi & Google Tag Manager Kurulumu",
      "url": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager",
      "provider": {"@id": "https://dgtlface.com/#organization"},
      "serviceType": "dönüşüm takibi, google tag manager kurulumu, google analytics dönüşüm izleme, analytics 4 conversion setup, gelişmiş e-ticaret izleme, reklam performans ölçümü",
      "description": "DGTLFACE, GA4–GTM dönüşüm takibi, Meta Conversion API, WhatsApp–telefon ölçümü, otel rezervasyon tracking ve cross-domain yapılandırmalarıyla veri doğruluğu sağlar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "dönüşüm takibi",
        "tag manager kurulumu",
        "google analytics dönüşüm izleme",
        "conversion tracking",
        "gelişmiş e-ticaret izleme",
        "reklam performans ölçümü",
        "google tag manager nasıl kurulur",
        "dönüşüm izleme hataları nasıl çözülür",
        "google analytics ile dönüşüm takibi",
        "facebook conversion api kurulumu",
        "meta ads dönüşüm takibi",
        "otel rezervasyon dönüşüm izlemesi",
        "çağrı izleme nasıl yapılır",
        "telefon dönüşüm takibi",
        "analytics 4 conversion setup",
        "cross-domain takip yöntemi",
        "otel rezervasyon dönüşüm takibi",
        "pms dönüşüm entegrasyonu",
        "turizm analytics 4 kurulumu",
        "booking-to-ga4 tracking",
        "tag manager antalya",
        "dönüşüm takibi antalya",
        "analytics kurulumu türkiye",
        "sem analizi antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem","position": 1,"name": "Ana Sayfa","item": "https://dgtlface.com/tr/"},
        {"@type": "ListItem","position": 2,"name": "SEM – Dijital Reklam Yönetimi","item": "https://dgtlface.com/tr/sem"},
        {"@type": "ListItem","position": 3,"name": "Dönüşüm Takibi & GTM","item": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Dönüşüm takibi neden önemlidir?",
          "acceptedAnswer": {"@type": "Answer","text": "Reklamların gerçekten satış üretip üretmediğini anlamak için dönüşüm takibi şarttır."}
        },
        {
          "@type": "Question",
          "name": "Google Tag Manager kurulumu nasıl yapılır?",
          "acceptedAnswer": {"@type": "Answer","text": "Tag planı → etiket kurulumu → tetikleyiciler → test → yayın aşamalarıyla kurulur."}
        },
        {
          "@type": "Question",
          "name": "GA4 dönüşüm izleme yöntemleri nelerdir?",
          "acceptedAnswer": {"@type": "Answer","text": "Event tabanlı takip, conversion event tanımı, cross-domain ve rezervasyon funnel kurulumları kullanılır."}
        },
        {
          "@type": "Question",
          "name": "Otellerde rezervasyon dönüşümü nasıl izlenir?",
          "acceptedAnswer": {"@type": "Answer","text": "PMS entegrasyonu, booking-to-GA4 tracking ve rezervasyon motoru event kurgusu ile ölçülür."}
        },
        {
          "@type": "Question",
          "name": "Telefon / WhatsApp dönüşümleri nasıl ölçülür?",
          "acceptedAnswer": {"@type": "Answer","text": "Click-to-call event’leri, call tracking ve WhatsApp chat-start ölçümleri kullanılır."}
        }
      ]
    }
  ]
}

const Page = () => {
   const locale = useLocale();
  const baseUrl = getBaseUrl();

   const pathnameKey = "/Services/sem/tagManager";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);


   const t = useTranslations("TagManager");
   const t2 = useTranslations("TagManager.h4Section");

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
   

    // ✅ JSON-LD (hardcoded yerine standard builder)
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
      { name: "SEM", url: `${baseUrl}${locale === "tr" ? "/tr/sem" : "/en/search-engine-marketing"}` },
      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları (yeni standart)
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("aiAnswerBlock"),
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
  header={t("tagmanager_subbanner_header")}
  header2={t("tagmanager_subbanner_header2")}
   header3={t("tagmanager_subbanner_header3")}
  text={t.raw("tagmanager_subbanner_text")}
   text2={t.raw("tagmanager_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
      <H2LogoSection items={h2items} />

 <StepSection2New data={stepData} header={t("h3Section.header")}/>

         <LogoListSectionBlack
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
        <VerticalSlider page="TagManager" itemCount={4}/>
      <QuestionsSection2 variant="light" faqs={faqs} />
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

export default Page
