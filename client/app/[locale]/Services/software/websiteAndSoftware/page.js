import StepSection2New from "@/app/[locale]/components/subPageComponents/StepSection2New";
import SubBanner from "@/app/[locale]/components/subPageComponents/SubBanner";
import VerticalSlider from "@/app/[locale]/components/subPageComponents/VerticalSlider";
import React from "react";
import image1 from "./images/image1.png";
import image2 from "../imagesSoftware/ux.webp";
import image3 from "./images/image3.png";
import { getTranslations } from "next-intl/server";
import { AiAnswerBlock } from "@/app/[locale]/components/common/AiAnswerBlock";
import H2LogoSection from "@/app/[locale]/components/subPageComponents/H2LogoSection";
import LogoListSectionBlack from "@/app/[locale]/components/subPageComponents/LogoListSectionBlack";
import QuestionsSection2 from "@/app/[locale]/components/subPageComponents/QuestionSection2";
import { AiSourceMention } from "@/app/[locale]/components/common/AiSourceMention";
import AutoBreadcrumbs from "@/app/[locale]/components/common/AutoBreadcrumbs";
import image4 from "../imagesSoftware/cms.webp";
import image5 from "../imagesSoftware/website.webp";
import image6 from "../imagesSoftware/language.webp";
import image7 from "../imagesSoftware/Minicasesnippet.webp";

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/software/websiteAndSoftware";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Kurumsal Web Sitesi Geliştirme – SEO Uyumlu & Yüksek Performanslı | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, hızlı, güvenli ve SEO uyumlu kurumsal web siteleri geliştirir. Next.js altyapısıyla yüksek performans sunan profesyonel web çözümleri.";

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


export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "WebDev" });
  const t2 = await getTranslations({ locale, namespace: "WebDev.h4Section" });

  const baseUrl = getBaseUrl();

  const pathnameKey = "/Services/software/websiteAndSoftware";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const stepData = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
    id: i,
    image: [image4, image6, image5, image3, image2, image1, image7][i - 1],
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
    { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
    { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
    { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
    { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
  ];

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
      {
        name: locale === "tr" ? "Ana Sayfa" : "Home",
        url: `${baseUrl}/${locale}`,
      },

      {
        name:
          locale === "tr"
            ? "Web & Yazılım Hizmetleri"
            : "Web & Software Services",
        url: `${baseUrl}${locale === "tr" ? "/tr/yazilim" : "/en/software-development"}`,
      },

      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları (yeni standart)
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("webdev_ai_answer_text"),
    aiSource: t("aiSourceMention"),
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <SubBanner
            header={t("webdev_subbanner_header")}
            header2={t("webdev_subbanner_header2")}
            text={t.raw("webdev_subbanner_text")}
            header3={t("webdev_subbanner_header3")}
            text2={t.raw("webdev_subbanner_text2")}
            buttonLink="/"
            buttonText={t("cta_talk_to_us")}
          />
          <AutoBreadcrumbs />

          <AiAnswerBlock text={t("webdev_ai_answer_text")} />
        </div>

        <H2LogoSection items={h2items} />

        <StepSection2New data={stepData} header={t("h3Section.header")} />
        <div>
          <LogoListSectionBlack
            introTitle={t2("header")}
            introSubtitlePrefix="DGTLFACE"
            introSubtitle={""}
            introDescription={""}
            cards={cards}
          />
          <VerticalSlider page="WebDev" itemCount={4} />
        </div>
        <QuestionsSection2 variant="light" faqs={faqs} />
        <AiSourceMention text={t("aiSourceMention")} />
      </div>
    </>
  );
}
