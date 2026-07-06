import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/tagmanager.webp"
import { getTranslations } from "next-intl/server";
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import FaqPrompt from '@/app/[locale]/components/common/FaqPrompt'
import JsonLd from "@/app/[locale]/components/seo/JsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/Services/sem/googleAdsAdvertising";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "Google Ads Yönetimi – Dönüşüm Odaklı Kampanya Optimizasyonu | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Google Ads kampanyalarını satış ve rezervasyon odaklı yönetir; dönüşüm takibi, optimizasyon ve Looker Studio raporlama ile şeffaf büyüme sağlar.";

  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  const ogImageAbs = new URL(ogPath, base).toString();


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
      images: [{ url: ogImageAbs, width: 1200, height: 630, alt: title }],
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

function normalizeBaseUrl(url) {
  if (!url) return url;
  return normalizeCanonicalUrl(url).replace(/\/+$/, "");
}

function buildGoogleAdsServiceJsonLd({
  locale,
  baseUrl,
  pageUrl,
  parentUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
}) {
  const cleanBaseUrl = normalizeBaseUrl(baseUrl);
  const canonicalPageUrl = normalizeCanonicalUrl(pageUrl);
  const canonicalParentUrl = normalizeCanonicalUrl(parentUrl);
  const homeUrl = normalizeCanonicalUrl(getCanonicalUrl("/", locale));

  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const organizationId = `${cleanBaseUrl}/#organization`;
  const websiteId = `${cleanBaseUrl}/#website`;
  const webpageId = `${canonicalPageUrl}#webpage`;
  const serviceId = `${canonicalPageUrl}#service`;
  const breadcrumbId = `${canonicalPageUrl}#breadcrumb`;

  const labels =
    locale === "tr"
      ? {
          home: "Ana Sayfa",
          parent: "SEM",
          current: "Google Ads Yönetimi",
          serviceType: "Google Ads Yönetimi",
          country: "Türkiye",
        }
      : {
          home: "Home",
          parent: "SEM",
          current: "Google Ads Management",
          serviceType: "Google Ads Management",
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
            name: labels.parent,
            item: canonicalParentUrl,
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

const Page = async ({ params }) => {
  const { locale } = await params;

  const baseUrl = getBaseUrl();
  const pathnameKey = "/Services/sem/googleAdsAdvertising";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const t = await getTranslations({
    locale,
    namespace: "GoogleAdsAdvertising",
  });

  const t2 = await getTranslations({
    locale,
    namespace: "GoogleAdsAdvertising.h4Section",
  });

  const parentSemUrl =
    locale === "tr"
      ? `${baseUrl}/tr/sem`
      : `${baseUrl}/en/search-engine-marketing`;

  const jsonLd = buildGoogleAdsServiceJsonLd({
    locale,
    baseUrl,
    pageUrl: canonicalUrl,
    parentUrl: parentSemUrl,
    pageName: t("jsonld.pageName"),
    pageDescription: t("jsonld.pageDescription"),
    serviceName: t("jsonld.serviceName"),
    serviceDescription: t("aiAnswerBlock"),
  });

   const stepData = [1,2,3,4,5].map(i => ({
     id: i,
     image: [image1,image2,image3,image4, image5][i-1],
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
    // ileride header5/text5, header6/text6 eklersen
    // sadece bu listeye item eklemen yeterli
  ];
   
  return (
    <>
     <JsonLd id="google-ads-service-jsonld" data={jsonLd} />

    <div className='flex flex-col gap-[12px] lg:gap-[80px] bg-[#080612] overflow-x-hidden items-center justify-center pb-10'>
<div className='flex flex-col items-center justify-center gap-5'>

        <SubBanner
  header={t("googleadsadvertising_subbanner_header")}
  header2={t("googleadsadvertising_subbanner_header2")}
  header3={t("googleadsadvertising_subbanner_header3")}
  text={t.raw("googleadsadvertising_subbanner_text")}
   text2={t.raw("googleadsadvertising_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("aiAnswerBlock")}/>
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
      <VerticalSlider page="GoogleAdsAdvertising" itemCount={3}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
        <FaqPrompt
  namespace="GoogleAdsAdvertising.faqPrompt"
  faqSlug="sem/google-ads-yonetimi-sss"
/>
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
