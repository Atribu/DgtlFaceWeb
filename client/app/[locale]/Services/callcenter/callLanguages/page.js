import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image-1.png"
import image2 from "./images/image-2.png"
import image3 from "./images/image-3.png"
import { getTranslations } from "next-intl/server";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import FaqPrompt from '@/app/[locale]/components/common/FaqPrompt'
import JsonLd from "@/app/[locale]/components/seo/JsonLd";
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/Services/callcenter/callLanguages";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "4 Dilli Çağrı Merkezi – Çok Dilli Misafir & Müşteri Destek Hizmeti | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel çağrı merkezi desteği sağlar. Oteller ve işletmeler için uluslararası müşteri iletişimi çözümleri sunar.";

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

function buildCallCenter4LangServiceJsonLd({
  locale,
  baseUrl,
  pageUrl,
  servicesUrl,
  parentUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
}) {
  const cleanBaseUrl = normalizeBaseUrl(baseUrl);
  const canonicalPageUrl = normalizeCanonicalUrl(pageUrl);
  const canonicalServicesUrl = normalizeCanonicalUrl(servicesUrl);
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
          home: "Anasayfa",
          services: "Hizmetler",
          parent: "Çağrı Merkezi Hizmetleri",
          current: "4 Dilli Çağrı Merkezi",
          serviceType: "4 Dilli Çağrı Merkezi",
          country: "Türkiye",
        }
      : {
          home: "Home",
          services: "Services",
          parent: "Call Center Services",
          current: "4-Language Call Center",
          serviceType: "4-Language Call Center",
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
            name: labels.parent,
            item: canonicalParentUrl,
          },
          {
            "@type": "ListItem",
            position: 4,
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
  const pathnameKey = "/Services/callcenter/callLanguages";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const t = await getTranslations({
    locale,
    namespace: "CallCenter4LangPage",
  });

  const t2 = await getTranslations({
    locale,
    namespace: "CallCenter4LangPage.h4Section",
  });

  const servicesUrl = getCanonicalUrl("/Services", locale);

  const parentCallCenterUrl =
    locale === "tr"
      ? `${baseUrl}/tr/cagri-merkezi`
      : `${baseUrl}/en/call-center`;

  const jsonLd = buildCallCenter4LangServiceJsonLd({
    locale,
    baseUrl,
    pageUrl: canonicalUrl,
    servicesUrl,
    parentUrl: parentCallCenterUrl,
    pageName: t("jsonld.pageName"),
    pageDescription: stripHtml(t("jsonld.pageDescription")),
    serviceName: t("jsonld.serviceName"),
    serviceDescription: stripHtml(t("ai_answer_text")),
  });

  const stepData = [1, 2, 3].map((i) => ({
    id: i,
    image: [image1, image2, image3][i - 1],
    header: t(`h3Section.header${i}`),
    text: t.raw(`h3Section.text${i}`),
    textHtml: t.raw(`h3Section.text${i}`),
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

  const faqs = [1, 2, 3, 4, 5].map((i) => ({
    question: t(`faq.question${i}`),
    answer: t.raw(`faq.answer${i}`),
  }));

  const h2items = [
    { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
    { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
    { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
  ];

  return (
    <>
      <JsonLd id="call-center-4-lang-service-jsonld" data={jsonLd} />

      <div className="flex flex-col gap-[12px] lg:gap-[80px] bg-[#080612] overflow-x-hidden items-center justify-center pb-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <SubBanner
            header={t("subbanner_header")}
            header2={t("subbanner_header2")}
            text={t.raw("subbanner_text")}
            header3={t("subbanner_header3")}
            text2={t.raw("subbanner_text2")}
            buttonLink="/"
            buttonText={t("cta_talk_to_us")}
          />

          <AutoBreadcrumbs />

          <AiAnswerBlock text={t("ai_answer_text")} />
        </div>

        <H2LogoSection items={h2items} />

        <StepSection2New
          data={stepData}
          header={t("h3Section.header")}
        />

        <div>
          <LogoListSectionBlack
            introTitle={t2("header")}
            introSubtitlePrefix="DGTLFACE"
            introSubtitle=""
            introDescription=""
            cards={cards}
          />

          <VerticalSlider
            page="CallCenter4LangPage"
            itemCount={5}
          />
        </div>

        <QuestionsSection2
          variant="light"
          faqs={faqs}
        />

        <FaqPrompt
          namespace="CallCenter4LangPage.faqPrompt"
          faqSlug="4-dilli-cagri-merkezi-sss"
        />

        <AiSourceMention text={t("aiSourceMention")} />
      </div>
    </>
  );
};

export default Page;