import React from 'react'
import Section1 from "./Section1/Section1.jsx"
import Section2 from './Section2/Section2.jsx'
import Section4 from './Section4/Section4.jsx'
import Section5 from './Section5/Section5.jsx'
import ServicesGridSection from './components/ServicesGridSection.jsx'
import ResponsiveServicesBanner from './components/ResponsiveServicesBanner.jsx'
import ViewportLazyMount from '../components/homepage/ViewportLazyMount.jsx'
import DualHighlightSection from '../components/subPageComponents/DualHighlightSection.jsx'
import { getTranslations } from "next-intl/server";
import LogoListSection from '../components/subPageComponents/LogoListSection.jsx'
import Section3Long from './Section3/Section3Long.jsx'
import { AiAnswerBlock } from '../components/common/AiAnswerBlock.jsx'
import FaqPrompt from '../components/common/FaqPrompt.jsx'
import RichTextSpan from '../components/common/RichTextSpan.jsx'
import { AiSourceMention } from '../components/common/AiSourceMention.jsx'
import JsonLd from "../components/seo/JsonLd";
import {
  AutoBreadcrumbsWhiteDeferred as AutoBreadcrumbsWhite,
  ContactMainDeferred as ContactMain,
  QuestionsSection2Deferred as QuestionsSection2,
  VerticalSlider2Deferred as VerticalSlider2,
} from '@/app/[locale]/components/subPageComponents/DeferredServiceSections'
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd";

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { getSeoData } from "@/app/lib/seo-utils";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const pathnameKey = "/Services";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "DGTLFACE Hizmetlerimiz | Dijital Pazarlama & Teknoloji";
  const description =
    seoData?.description ||
    "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative ve otel dijital dönüşüm çözümlerini tek çatı altında sunar.";

  const canonical = getCanonicalUrl(pathnameKey, locale);
  const trUrl = getCanonicalUrl(pathnameKey, "tr");
  const enUrl = getCanonicalUrl(pathnameKey, "en");

  // ✅ OG locale’e göre map’ten gelsin
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  const ogImage = new URL(ogPath, base).toString();
  //const ogImage = `https://dgtlface.com${ogPath}`; //ogPath?.startsWith("http") ? ogPath : `${base}${ogPath}`;

  return {
    metadataBase: new URL(base),
    title,
    description,

    alternates: {
      canonical,
      languages: { tr: trUrl, en: enUrl },
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

// Services hub JSON-LD: CollectionPage + BreadcrumbList + visible service ItemList.
function buildServicesHubJsonLd({
  locale,
  baseUrl,
  pageUrl,
  pageName,
  pageDescription,
  breadcrumbName,
  serviceItems = [],
}) {
  const lang = locale === "tr" ? "tr-TR" : "en-US";
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const collectionId = `${pageUrl}#collection`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const homeUrl = `${baseUrl}/${locale}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "CollectionPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": collectionId },
        mainEntity: { "@id": collectionId },
        publisher: { "@id": organizationId },
        inLanguage: lang,
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "ItemList",
        "@id": collectionId,
        name: locale === "tr" ? "DGTLFACE Hizmet Kümeleri" : "DGTLFACE Service Clusters",
        itemListElement: serviceItems.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: s.url,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "tr" ? "Ana Sayfa" : "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

const Page = async ({ params }) => {
   const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  const t2 = await getTranslations({ locale, namespace: "ServicesPage.h4Section" });

const base = getBaseUrl();
const pathnameKey = "/Services";
const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

const serviceItems = [
  { name: stripHtml(t("servicesData.title1")), url: getCanonicalUrl("/Services/sem", locale) },
  { name: stripHtml(t("servicesData.title2")), url: getCanonicalUrl("/Services/seo", locale) },
  { name: stripHtml(t("servicesData.title3")), url: getCanonicalUrl("/Services/smm", locale) },
  { name: stripHtml(t("servicesData.title4")), url: getCanonicalUrl("/Services/software", locale) },
  { name: stripHtml(t("servicesData.title5")), url: getCanonicalUrl("/Services/creative", locale) },
  { name: stripHtml(t("servicesData.title6")), url: getCanonicalUrl("/Services/callcenter", locale) },
  { name: stripHtml(t("servicesData.title7")), url: getCanonicalUrl("/Services/pms", locale) },
  { name: stripHtml(t("servicesData.title8")), url: getCanonicalUrl("/Services/hotel", locale) },
  { name: stripHtml(t("servicesData.title9")), url: getCanonicalUrl("/Services/digitalAnalysis", locale) },
];

const jsonLd = buildServicesHubJsonLd({
  locale,
  baseUrl: base,
  pageUrl: canonicalUrl,
  pageName: t("jsonld.pageName"),
  pageDescription: stripHtml(t("jsonld.pageDescription")).slice(0, 300),
  breadcrumbName: t("jsonld.breadcrumbName"),
  serviceItems,
});


const renderDescription = (key) =>
  t2.rich(key, {
    // <br /> → satır atlat
    br: () => <><br /></>,

    // <ul> wrapper (JSON'da kullanırsan)
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-2 ">
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
    widthClass: "w-[90%] lg:  w-[70%]",
    title: t2("card3title"),
    description: renderDescription("card3description"),
  },
];


  const faqs = [
    {
      question: t("faq.question1"),
      answer:
       t("faq.answer1"),
    },
    {
      question:
       t("faq.question2"),
      answer:
        t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer:
          t("faq.answer3"),
    },

    {
      question:t("faq.question4"),
      answer:
        t("faq.answer4"),
    },

    {
      question: t("faq.question5"),
      answer:
        t("faq.answer5"),
    },

  ];

  const items = [
    {
      title: t("h2Section.title1"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text1"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title2"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text2"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title3"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text3"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title4"),
       text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text4"
          className=""
        />
      ),
    },
  ];



  return (
   <>
    <JsonLd id="services-hub-jsonld" data={jsonLd} />
      
    <div className='flex flex-col overflow-hidden gap-[30px] md:gap-[35px] lg:gap-[50px] items-center justify-center max-w-screen '>
      <ResponsiveServicesBanner header={t("servicespage_s1_text1")} span={t("servicespage_s1_span1")} text={
        <RichTextSpan
          ns="ServicesPage"
          id="servicespage_s1_text2"
        />
      }
      text2={
        <RichTextSpan
          ns="ServicesPage"
          id="servicespage_s1_text3"
        />
      } buttonText={t("servicespage_s1_button1")}/>

  <AutoBreadcrumbsWhite/>
     <AiAnswerBlock text={t("aiAnswerBlock")}/>
     <DualHighlightSection items={items} />
      <Section2 />
     
      <ServicesGridSection/>
     <div className='hidden lg:flex'>
     <Section3Long page="ServicesPage"/>
     </div>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />

     <ViewportLazyMount
       rootMargin="600px 0px"
       threshold={0.01}
       className="services-vertical-slider-lazy w-full min-h-[670px] lg:min-h-[800px]"
     >
       <VerticalSlider2 page="ServicesPage" itemCount={4}/>
     </ViewportLazyMount>

      <QuestionsSection2 color="#140F25" faqs={faqs} />
      <FaqPrompt
        namespace="ServicesPage.faqPrompt"
        faqSlug="hizmetlerimiz-sss"
      />
      <Section4 />
      <Section5 />
      <AiSourceMention text={t("aiSourceMention")}/>
      <ContactMain />
    </div>
   </>
  )
}

export default Page
