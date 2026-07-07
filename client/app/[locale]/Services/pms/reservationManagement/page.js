import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import { getTranslations } from "next-intl/server";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import FaqPrompt from '@/app/[locale]/components/common/FaqPrompt'

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/Services/pms/reservationManagement";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Rezervasyon Yönetimi – Oteller İçin Profesyonel Rezervasyon Süreçleri | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için rezervasyon yönetimini dijital platformlara taşır. Misafir iletişimi, kayıt, doğrulama ve süreç takibi profesyonel şekilde yönetilir.";

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

function stripHtml(value) {
  if (typeof value !== "string") return "";

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function buildReservationManagementJsonLd({
  locale,
  baseUrl,
  pageUrl,
  servicesUrl,
  parentPmsOtaUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
  breadcrumbName,
}) {
  const cleanBaseUrl = normalizeBaseUrl(baseUrl);
  const canonicalPageUrl = normalizeCanonicalUrl(pageUrl);
  const canonicalServicesUrl = normalizeCanonicalUrl(servicesUrl);
  const canonicalParentPmsOtaUrl = normalizeCanonicalUrl(parentPmsOtaUrl);
  const homeUrl = normalizeCanonicalUrl(`${cleanBaseUrl}/${locale}`);

  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const organizationId = `${cleanBaseUrl}/#organization`;
  const websiteId = `${cleanBaseUrl}/#website`;
  const serviceId = `${canonicalPageUrl}#service`;
  const webpageId = `${canonicalPageUrl}#webpage`;
  const breadcrumbId = `${canonicalPageUrl}#breadcrumb`;

  const labels =
    locale === "tr"
      ? {
          home: "Anasayfa",
          services: "Hizmetler",
          parent: "PMS & OTA Yönetimi",
          serviceType: "Rezervasyon Yönetimi",
          country: "Türkiye",
          region: "Antalya",
          belek: "Belek",
          kemer: "Kemer",
          side: "Side",
          alanya: "Alanya",
        }
      : {
          home: "Home",
          services: "Services",
          parent: "PMS & OTA Management",
          serviceType: "Reservation Management",
          country: "Turkey",
          region: "Antalya",
          belek: "Belek",
          kemer: "Kemer",
          side: "Side",
          alanya: "Alanya",
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        description: serviceDescription,
        serviceType: labels.serviceType,
        url: canonicalPageUrl,
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
            name: labels.region,
          },
          {
            "@type": "City",
            name: labels.belek,
          },
          {
            "@type": "City",
            name: labels.kemer,
          },
          {
            "@type": "City",
            name: labels.side,
          },
          {
            "@type": "City",
            name: labels.alanya,
          },
        ],
        inLanguage,
        mainEntityOfPage: {
          "@id": webpageId,
        },
      },
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
            item: canonicalParentPmsOtaUrl,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: breadcrumbName,
            item: canonicalPageUrl,
          },
        ],
      },
    ],
  };
}

export default async function Page({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ReservationManagementPage",
  });

  const t2 = await getTranslations({
    locale,
    namespace: "ReservationManagementPage.h4Section",
  });

  const baseUrl = getBaseUrl();

  const pathnameKey = "/Services/pms/reservationManagement";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const servicesUrl =
    locale === "tr"
      ? `${baseUrl}/tr/hizmetlerimiz`
      : `${baseUrl}/en/services`;

  // Master'daki eski parent /tr/pms-ota-yonetimi değil,
  // canlı PMS & OTA parent URL kullanılmalı.
  const parentPmsOtaUrl =
    locale === "tr"
      ? `${baseUrl}/tr/pms-ota`
      : `${baseUrl}/en/pms-ota`;

  const jsonLd = buildReservationManagementJsonLd({
    locale,
    baseUrl,
    pageUrl: canonicalUrl,
    servicesUrl,
    parentPmsOtaUrl,
    pageName: stripHtml(t("jsonld.pageName")),
    pageDescription: stripHtml(t("jsonld.pageDescription")),
    serviceName: stripHtml(t("jsonld.serviceName")),
    serviceDescription:
      stripHtml(t("ai_answer_text")) || stripHtml(t("jsonld.pageDescription")),
    breadcrumbName: stripHtml(t("jsonld.breadcrumbName")),
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

  const faqs = [
    {
      question: t("faq.question1"),
      answer: t.raw("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t.raw("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t.raw("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t.raw("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t.raw("faq.answer5"),
    },
  ];

  const h2items = [
    {
      title: t("h2Section.header1"),
      text: t.raw("h2Section.text1"),
    },
    {
      title: t("h2Section.header2"),
      text: t.raw("h2Section.text2"),
    },
    {
      title: t("h2Section.header3"),
      text: t.raw("h2Section.text3"),
    },
    {
      title: t("h2Section.header4"),
      text: t.raw("h2Section.text4"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      <div className="flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center">
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

        <StepSection2New data={stepData} header={t("h3Section.header")} />

        <div>
          <LogoListSectionBlack
            introTitle={t2("header")}
            introSubtitlePrefix="DGTLFACE"
            introSubtitle=""
            introDescription=""
            cards={cards}
          />

          <VerticalSlider page="ReservationManagementPage" itemCount={5} />
        </div>

        <QuestionsSection2 variant="light" faqs={faqs} />

        <FaqPrompt
          namespace="ReservationManagementPage.faqPrompt"
          faqSlug="rezervasyon-yonetimi-sss"
        />

        <AiSourceMention text={t("aiSourceMention")} />
      </div>
    </>
  );
}