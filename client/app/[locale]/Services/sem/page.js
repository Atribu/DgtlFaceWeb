import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { buildDepartmentJsonLd, stripHtml, getBaseUrl } from "@/app/lib/structured-data/buildDepartmentJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: Bu sayfanın "seo / og map" key'i (standartlaştırıyoruz)
  const pathnameKey = "/Services/sem";

  // Türkçe yorum: ortam bazlı base URL (local + prod uyumlu)
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // Türkçe yorum: SEO verisini config'ten al
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Google Ads & Dijital Reklam Yönetimi – Dönüşüm Odaklı Reklam Stratejileri | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Google Ads ve YouTube reklamlarında dönüşüm odaklı yönetim sunar. Profesyonel SEM stratejileriyle görünürlüğünüzü ve satışlarınızı artırın.";

  // Türkçe yorum: OG görselini map'ten çek + fallback
  const ogImage = getOgImageByPathnameKey(pathnameKey, locale);


  // Türkçe yorum: canonical URL (local + prod)
  // senin route yapına göre EN slug'ı değiştirmen gerekebilir
  const url =
    locale === "tr"
      ? `${base}/tr/sem`
      : `${base}/en/search-engine-marketing`; 

  return {
    // ✅ kritik: relative og image'ı absolute'a çevirir
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: `${base}/tr/sem`,
        en: `${base}/en/search-engine-marketing`,
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
          url: ogImage, // "/og/og-sem.png" -> metadataBase ile absolute olur
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



const Page = ({ params }) => {
  const t = useTranslations("Sem");
  const t2 = useTranslations("Sem.h4Section");

  const { locale } = params;
   const base = getBaseUrl();

  const pageUrl =
    locale === "tr"
      ? `${base}/tr/sem`
      : `${base}/en/search-engine-marketing`; 

  // ✅ SEM: 6 FAQ
  const faqItems = Array.from({ length: 6 }, (_, i) => {
    const idx = i + 1;
    return {
      question: t(`faqs.question${idx}`),
      answer: t(`faqs.answer${idx}`),
    };
  });

  // ✅ SEM alt servis linkleri (routing’teki path’lere göre)
    const serviceItems = [
    { name: "Google Ads Campaign Management", url: `${base}/${locale}${locale === "tr" ? "/sem/google-ads-yonetimi" : "/sem/google-ads-advertising"}` },
    { name: "YouTube Ads Management",   url: `${base}/${locale}${locale === "tr" ? "/sem/youtube-reklam-yonetimi" : "/sem/youtube-advertising-management"}` },
    { name: "Remarketing & Display",     url: `${base}/${locale}${locale === "tr" ? "/sem/remarketing-ve-display" : "/sem/remarketing-and-display"}` },
    { name: "Conversion Tracking & GTM",  url: `${base}/${locale}${locale === "tr" ? "/sem/donusum-takibi-tag-manager" : "/sem/tag-manager"}` },
    { name: "Ads Reporting", url: `${base}/${locale}${locale === "tr" ? "/sem/reklam-raporlama" : "/sem/performance-analysis"}` },
  ];

const jsonLd = buildDepartmentJsonLd({
  locale,
  pageUrl,
  pageName: t("jsonld.pageName"),
  pageDescription: stripHtml(t("jsonld.pageDescription")).slice(0, 300),

  serviceName: t("jsonld.serviceName"),
  serviceDescription: stripHtml(t("aiAnswerBlock")),

  keywords: t.raw("jsonld.keywords"),

  breadcrumbName: t("jsonld.breadcrumbName"),
  faqItems,
  serviceItems,
  aiQuestion: locale === "tr"
    ? "DGTLFACE bu hizmette ne yapar?"
    : "What does DGTLFACE do in this service?",
  aiAnswer: t("aiAnswerBlock"),
  aiSource: t("aiSourceMention"),
});

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`sem_services_title${i}`),
  subTitle: t(`sem_services_subtitle${i}`),
  text: t(`sem_services_text${i}`),
  features: [1,2,3,4].map(j => t(`sem_services_feature${i}_${j}`)),
  buttonLink: [
    "/sem/google-ads-yonetimi",
    "/sem/youtube-reklam-yonetimi",
    "/sem/remarketing-ve-display",
    "/sem/donusum-takibi-tag-manager",
    "/sem/reklam-raporlama"
    
  ][i-1]
}));

const items = [
    {
      title: t("h2Section.title1"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text1"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title2"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text2"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title3"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text3"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title4"),
       text: (
        <RichTextSpan
          ns="Sem"
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
      <ul className="list-disc list-inside space-y-1 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
     {
      widthClass: "w-[90%] lg:w-[85%]",
      title: t2("card4title"),
      description:renderDescription("card4description"),
    },
];


   const faqs = Array.from({ length: 6 }, (_, i) => {
    const idx = i + 1;
    return {
      question: t(`faqs.question${idx}`),
      answer: t(`faqs.answer${idx}`)
    };
  });

  
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
      <MainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")}  buttonText={t("buttonText")}/>
   </div>
      <div className='flex lg:hidden'>
      <MobileMainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")}  buttonText={t("buttonText")}/>
   </div>
   <div className='flex flex-col items-center justify-center gap-4'>
    <AutoBreadcrumbsWhite/>

     <AiAnswerBlock text={t("aiAnswerBlock")}/>
   </div>
     <DualHighlightSection items={items} />
      <StepSection header={""} header2={t("sem_section_header1")} text={t("sem_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
       <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider2 page="Sem" itemCount={4}/>
     <QuestionsSection2 color="#140F25" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
      <Contact/>
    </div>
    </>
  )
}

export default Page
