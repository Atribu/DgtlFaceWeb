import StepSection2New from "@/app/[locale]/components/subPageComponents/StepSection2New";
import SubBanner from "@/app/[locale]/components/subPageComponents/SubBanner";
import VerticalSlider from "@/app/[locale]/components/subPageComponents/VerticalSlider";
import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.webp";
import { getTranslations } from "next-intl/server";
import { AiAnswerBlock } from "@/app/[locale]/components/common/AiAnswerBlock";
import H2LogoSection from "@/app/[locale]/components/subPageComponents/H2LogoSection";
import LogoListSectionBlack from "@/app/[locale]/components/subPageComponents/LogoListSectionBlack";
import QuestionsSection2 from "@/app/[locale]/components/subPageComponents/QuestionSection2";
import { AiSourceMention } from "@/app/[locale]/components/common/AiSourceMention";
import AutoBreadcrumbs from "@/app/[locale]/components/common/AutoBreadcrumbs";

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/pms/channelManagement";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Kanal Yönetimi – Envanter & Fiyat Senkronizasyonu | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, kanal yönetimiyle otelinizde fiyat ve envanteri tüm OTA platformlarında senkronize eder. Satış etkisini artırın, overbooking riskini azaltın.";

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

// const homeJsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": "https://dgtlface.com/#organization",
//       "name": "DGTLFACE",
//       "url": "https://dgtlface.com",
//       "description": "DGTLFACE, oteller için PMS + Channel Manager + OTA altyapılarını entegre ederek fiyat ve envanteri tüm online satış kanallarında senkronize eden, turizm odaklı gelir ve dağıtım stratejileri sunan bir teknoloji ve dijital pazarlama partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi/#webpage",
//       "url": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi",
//       "name": "Kanal Yönetimi – Envanter & Fiyat Senkronizasyonu | DGTLFACE",
//       "description": "DGTLFACE, kanal yönetimiyle otelinizde fiyat ve envanteri tüm OTA platformlarında senkronize eder. Satış etkisini artırın, overbooking riskini azaltın.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi/#service",
//       "name": "Kanal Yönetimi – Envanter & Fiyat Senkronizasyonu",
//       "url": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "kanal yönetimi, channel manager hizmeti, fiyat yönetimi, envanter senkronizasyonu, PMS–OTA uyumu, satış optimizasyonu",
//       "description": "DGTLFACE, kanal yönetimi hizmetiyle PMS + Channel Manager + OTA üçlüsünü entegre ederek otellerde fiyat ve envanteri tüm satış kanallarında senkronize eder. Booking, Expedia, Agoda, web rezervasyon sistemi ve çağrı merkezi tek panelden yönetilir; pazar bazlı fiyatlandırma, rate & inventory sync, overbooking riskini azaltan envanter stratejileri ve gelir odaklı kanal planlaması ile doluluk ve RevPAR performansı optimize edilir.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "kanal yönetimi",
//         "channel manager hizmeti",
//         "fiyat yönetimi",
//         "envanter senkronizasyonu",
//         "pms–ota uyumu",
//         "satış optimizasyonu",
//         "channel manager nasıl çalışır",
//         "oteller için fiyat optimizasyonu",
//         "envanter kontrol yöntemleri",
//         "ota fiyat stratejileri",
//         "turizm fiyat yönetimi",
//         "oda doluluk artırma teknikleri",
//         "pms ile kanal senkronizasyonu",
//         "rezervasyon yönetim sistemi",
//         "pazar bazlı fiyatlandırma",
//         "resort channel manager",
//         "butik otel kanal yönetimi",
//         "turizm fiyat optimizasyonu",
//         "otel doluluk artırma stratejisi",
//         "kanal yönetimi antalya",
//         "antalya channel manager",
//         "turizm fiyat yönetimi türkiye",
//         "antalya otel fiyat sistemi"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi/#breadcrumb",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Ana Sayfa",
//           "item": "https://dgtlface.com/tr/"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "PMS & OTA Yönetimi",
//           "item": "https://dgtlface.com/tr/pms-ota-yonetimi"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Kanal Yönetimi",
//           "item": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Kanal yönetimi (channel manager) nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Kanal yönetimi, PMS’ten gelen oda ve fiyat bilgilerinin channel manager aracılığıyla Booking, Expedia, Agoda ve diğer OTA’lara ve satış kanallarına otomatik olarak dağıtılmasını ve bu kanallardan gelen rezervasyonların tekrar PMS’e işlenmesini sağlayan sistemdir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "PMS + Channel Manager + OTA nasıl birlikte çalışır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "PMS, oda ve fiyatların ana kaynağıdır; channel manager bu verileri tüm OTA ve dijital satış kanallarına iletir. OTA’lardan gelen rezervasyonlar channel manager üzerinden PMS’e geri düşerek tek bir rezervasyon gerçekliği oluşturur."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Envanter (oda sayısı) tüm kanallarda nasıl yönetilir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oda envanteri PMS’te yönetilir; PMS’ten channel manager’a aktarılan stok bilgisi tüm OTA ve dijital kanallara dağıtılır. Kritik dönemlerde kanal ve pazar bazlı limitler, buffer ve stop-sell ayarlarıyla overbooking riski azaltılır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Overbooking riski nasıl azaltılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Overbooking riskini azaltmak için PMS’in tek veri kaynağı olması, manuel OTA müdahalelerinin kısıtlanması, kanal bazlı stok limitleri ve yoğun dönemler için buffer stratejileri uygulanması ve düzenli senkronizasyon kontrolleri yapılması gerekir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Kanal yönetimi gelir ve doluluk oranını nasıl etkiler?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Doğru kanal yönetimi sayesinde pazar bazlı fiyatlandırma stratejileri uygulanır, yüksek komisyonlu kanallara aşırı bağımlılık azaltılır, doğru kanallarda doğru fiyat ve stokla yer alınarak hem doluluk hem RevPAR artırılabilir."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({locale,namespace: "ChannelManagementPage",});
  const t2 = await getTranslations({locale,namespace: "ChannelManagementPage.h4Section",});

  const baseUrl = getBaseUrl();
  const pathnameKey = "/Services/pms/channelManagement";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const stepData = [1, 2, 3, 4].map((i) => ({
    id: i,
    image: [image1, image2, image3, image4][i - 1],
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
        name: locale === "tr" ? "PMS & OTA" : "PMS & OTA",
        url: `${baseUrl}${locale === "tr" ? "/tr/pms-ota" : "/en/pms-ota"}`,
      },

      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları (yeni standart)
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("ai_answer_text"),
    aiSource: t("aiSourceMention"),
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            introSubtitle={""}
            introDescription={""}
            cards={cards}
          />
          <VerticalSlider page="ChannelManagementPage" itemCount={4} />
        </div>
        <QuestionsSection2 variant="light" faqs={faqs} />
        <AiSourceMention text={t("aiSourceMention")} />
      </div>
    </>
  );
}
