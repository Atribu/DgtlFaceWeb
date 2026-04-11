import React from 'react'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import RichTextSpan from '../../components/common/RichTextSpan'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import {
  AutoBreadcrumbsWhiteDeferred as AutoBreadcrumbsWhite,
  ContactMainDeferred as Contact,
  MainBannerDeferred as MainBanner,
  MobileMainBannerDeferred as MobileMainBanner,
  QuestionsSection2Deferred as QuestionsSection2,
  StepSectionDeferred as StepSection,
  VerticalSlider2Deferred as VerticalSlider2,
} from '@/app/[locale]/components/subPageComponents/DeferredServiceSections'
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
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
const ogImageAbs = new URL(ogPath, base).toString(); 

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
          url: ogImageAbs,
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
      images: [ogImageAbs],
    },
  };
}


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
const serviceItems =
  locale === "tr"
    ? [
        { name: stripHtml(t("callcenter_services_title1")), url: `${base}/tr/cagri-merkezi/4-dilli-cagri-merkezi` },
        { name: stripHtml(t("callcenter_services_title2")), url: `${base}/tr/cagri-merkezi/rezervasyon-destegi` },
        { name: stripHtml(t("callcenter_services_title3")), url: `${base}/tr/cagri-merkezi/mesaj-yonetimi` },
        { name: stripHtml(t("callcenter_services_title4")), url: `${base}/tr/cagri-merkezi/satis-sonrasi-destek` },
        { name: stripHtml(t("callcenter_services_title5")), url: `${base}/tr/cagri-merkezi/performans-analizi` },
      ]
    : [
        // EN child route'lar sende neyse ona göre update edersin:
        { name: stripHtml(t("callcenter_services_title1")), url: `${base}/en/call-center/multilingual-call-center` },
        { name: stripHtml(t("callcenter_services_title2")), url: `${base}/en/call-center/reservation-support` },
        { name: stripHtml(t("callcenter_services_title3")), url: `${base}/en/call-center/message-management` },
        { name: stripHtml(t("callcenter_services_title4")), url: `${base}/en/call-center/after-sales-support` },
        { name: stripHtml(t("callcenter_services_title5")), url: `${base}/en/call-center/performance-analysis` },
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

  faqItems: faqs,
  serviceItems,

  // ✅ AI parçaları: JSON-LD içine de girsin
  aiQuestion: t("jsonld.pageName"),
  aiAnswer: t("aiAnswerBlock"),
  aiSource: t("aiSourceMention"),
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
                      className="!text-black"
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
    "/Services/callcenter/callLanguages",
    "/Services/callcenter/reservationSupport",
    "/Services/callcenter/messageManagement",
    "/Services/callcenter/aftersalesSupport",
    "/Services/callcenter/callPerformance"
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
