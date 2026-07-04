import React from 'react'
import { useTranslations, useLocale } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import FaqPrompt from '../../components/common/FaqPrompt'
import RichTextSpan from '../../components/common/RichTextSpan'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import JsonLd from '../../components/seo/JsonLd'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import {
  AutoBreadcrumbsWhiteDeferred as AutoBreadcrumbsWhite,
  ContactMainDeferred as Contact,
  MainBannerDeferred as MainBanner,
  MobileMainBannerDeferred as MobileMainBanner,
  QuestionsSection2Deferred as QuestionsSection2,
  StepSectionDeferred as StepSection,
  VerticalSlider2Deferred as VerticalSlider2,
} from '@/app/[locale]/components/subPageComponents/DeferredServiceSections'

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/Services/hotel"; // og-map key'in buysa

  const seoData = getSeoData(pathnameKey, locale);
  const title = seoData?.title || "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider | DGTLFACE";
  const description =
    seoData?.description ||
    "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS–OTA entegrasyonu, çağrı merkezi ve veri analiziyle 360° dijital pazarlama ve dönüşüm çözümleri sunar.";

  const base = getBaseUrl();

  // ✅ og map'ten çek + fallback ver (çok kritik)
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  const ogImageAbs = new URL(ogPath, base).toString(); 

  const url = getCanonicalUrl(pathnameKey, locale);

  return {
    // ✅ en kritik satır
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: getCanonicalUrl(pathnameKey, "tr"),
        en: getCanonicalUrl(pathnameKey, "en"),
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
          url: ogImageAbs, // metadataBase sayesinde absolute'a tamamlanır
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


function normalizeCanonicalUrl(url) {
  if (!url) return url;

  try {
    const parsed = new URL(url);
    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "");
    }
    return parsed.toString();
  } catch {
    return url.replace(/\/+$/, "");
  }
}


function buildHotelServiceJsonLd({
  locale,
  baseUrl,
  pageUrl,
  servicesUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
}) {
  const cleanBaseUrl = normalizeCanonicalUrl(baseUrl);
  const canonicalPageUrl = normalizeCanonicalUrl(pageUrl);
  const canonicalServicesUrl = normalizeCanonicalUrl(servicesUrl);

  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const organizationId = `${cleanBaseUrl}/#organization`;
  const websiteId = `${cleanBaseUrl}/#website`;
  const webpageId = `${canonicalPageUrl}#webpage`;
  const serviceId = `${canonicalPageUrl}#service`;
  const breadcrumbId = `${canonicalPageUrl}#breadcrumb`;

  const homeUrl = getCanonicalUrl("/", locale);

  const labels =
    locale === "tr"
      ? {
          home: "Anasayfa",
          services: "Hizmetler",
          current: "Otel Dijital Dönüşüm",
          serviceType: "Otel Dijital Pazarlama",
          country: "Türkiye",
        }
      : {
          home: "Home",
          services: "Services",
          current: "Hotel Digital Transformation",
          serviceType: "Hotel Digital Marketing",
          country: "Turkey",
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: canonicalPageUrl,
        name: pageName,
        description: pageDescription,
        inLanguage,
        isPartOf: {
          "@id": websiteId,
        },
        publisher: {
          "@id": organizationId,
        },
        about: {
          "@id": serviceId,
        },
        mainEntity: {
          "@id": serviceId,
        },
        breadcrumb: {
          "@id": breadcrumbId,
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        description: serviceDescription,
        serviceType: labels.serviceType,
        url: canonicalPageUrl,
        mainEntityOfPage: {
        "@id": webpageId,
        },
        provider: {
          "@id": organizationId,
        },
        areaServed: [
          {
            "@type": "Country",
            name: labels.country,
          },
          {
            "@type": "AdministrativeArea",
            name: "Antalya",
          },
          {
            "@type": "Place",
            name: "Belek",
          },
          {
            "@type": "Place",
            name: "Kemer",
          },
          {
            "@type": "Place",
            name: "Side",
          },
          {
            "@type": "Place",
            name: "Alanya",
          },
        ],
        inLanguage,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: labels.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: labels.services,
            item: canonicalServicesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: labels.current,
            item: canonicalPageUrl,
          },
        ],
      },
    ],
  };
}


const Page = () => {
  const locale = useLocale();
const base = getBaseUrl();
const pathnameKey = "/Services/hotel";

  const t = useTranslations("Hotel");
     const t2 = useTranslations("Hotel.h4Section");
      
const pageUrl = getCanonicalUrl(pathnameKey, locale);
const servicesUrl = getCanonicalUrl("/Services", locale);

const jsonLd = buildHotelServiceJsonLd({
  locale,
  baseUrl: base,
  pageUrl,
  pageName: t("jsonld.pageName"),
  pageDescription: stripHtml(t("jsonld.pageDescription")),
  serviceName: t("jsonld.serviceName"),
  serviceDescription: stripHtml(t("aiAnswerBlock")),
  servicesUrl,
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
          
               const cards = [
            {
              widthClass: "w-[90%] lg:w-[80%]",
              title: t2("card1title"),
              description: (
                <RichTextSpan
                  ns="Hotel"
                  id="h4Section.card1description"
                />
              ),
            },
            {
              widthClass: "w-[90%] lg:w-[75%]",
              title: t2("card2title"),
              description: (
                <RichTextSpan
                  ns="Hotel"
                  id="h4Section.card2description"
                />
              ),
            },
            {
              widthClass: "w-[90%] lg:w-[70%]",
              title: t2("card3title"),
              description: (
                <RichTextSpan
                  ns="Hotel"
                  id="h4Section.card3description"
                />
              ),
            },
          
          ];

  const servicesData = [1,2,3,4,5,6].map(i => ({
  id: i,
  title: t(`hotel_services_title${i}`),
  subTitle: t(`hotel_services_subtitle${i}`),
     text: t(`hotel_services_text${i}`),
  features: [1,2,3,4].map(j => t(`hotel_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/hotel/seo",
    "/Services/hotel/socialMedia",
    "/Services/hotel/adsManagement",
    "/Services/hotel/otaManagement",
     "/Services/hotel/pmsIntegration",
      "/Services/hotel/callCenter",
  ][i-1]
}));
  
  return (
  <>
      <JsonLd id="hotel-service-jsonld" data={jsonLd} />


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
     <FaqPrompt
      namespace="Hotel.faqPrompt"
      faqSlug="otel-dijital-pazarlama-sss"
     />
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
