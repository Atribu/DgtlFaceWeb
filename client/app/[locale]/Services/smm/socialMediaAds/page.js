import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { getTranslations } from "next-intl/server";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/smm/smmAds";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Sosyal Medya Reklam Yönetimi – Instagram & Facebook Reklam Uzmanlığı | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Instagram ve Facebook reklam kampanyalarını hedef kitlenize uygun şekilde optimize eder. Dönüşüm odaklı sosyal medya reklam stratejileriyle başarıya ulaşın.";

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
//       "description": "DGTLFACE, Instagram ve Facebook üzerinde Meta Ads odaklı sosyal medya reklam kampanyalarını strateji, hedefleme, kreatif üretimi, optimizasyon ve raporlama süreçleriyle yöneten, turizm ve hizmet odaklı bir performans pazarlama partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": ["Antalya","Türkiye","Europe"]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari/#webpage",
//       "url": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari",
//       "name": "Sosyal Medya Reklam Yönetimi – Instagram & Facebook Reklam Uzmanlığı | DGTLFACE",
//       "description": "DGTLFACE, Instagram ve Facebook reklam kampanyalarını hedef kitlenize uygun şekilde optimize eder. Dönüşüm odaklı sosyal medya reklam stratejileriyle başarıya ulaşın.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari/#service",
//       "name": "Sosyal Medya Reklam Yönetimi – Hedef Odaklı Performans Kampanyaları",
//       "url": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "sosyal medya reklam yönetimi, instagram reklam yönetimi, facebook reklam ajansı, meta ads optimizasyonu, sosyal medya reklam uzmanı, reklam hedefleme",
//       "description": "DGTLFACE, Instagram ve Facebook reklamlarını performans ve dönüşüm odaklı yönetir. Meta Pixel ve Conversion API kurulumu, gelişmiş hedefleme, Reels ve video kreatifleri, remarketing kurguları ve bütçe optimizasyonu ile rezervasyon, satış ve lead odaklı kampanyalar yürütür; sonuçları Looker Studio panelleriyle şeffaf bir şekilde raporlar.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "sosyal medya reklam yönetimi",
//         "instagram reklam yönetimi",
//         "facebook reklam ajansı",
//         "meta ads optimizasyonu",
//         "sosyal medya reklam uzmanı",
//         "reklam hedefleme",
//         "instagram reklamı nasıl verilir",
//         "meta ads kampanya optimizasyonu",
//         "satış artıran instagram reklam stratejileri",
//         "turizm instagram reklamları",
//         "oteller için sosyal medya reklamları",
//         "facebook pixel kurulumu",
//         "meta conversion api kurulumu",
//         "sosyal medya remarketing",
//         "reel reklam yönetimi",
//         "meta reklam bütçesi ayarlama",
//         "otel instagram reklamları",
//         "turizm meta ads",
//         "resort sosyal medya reklamları",
//         "otel crm reklam entegrasyonu",
//         "sosyal medya reklamları antalya",
//         "antalya facebook reklam ajansı",
//         "instagram reklam türkiye",
//         "antalya meta ads yönetimi"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari/#breadcrumb",
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
//           "name": "Sosyal Medya Yönetimi",
//           "item": "https://dgtlface.com/tr/sosyal-medya-yonetimi"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Sosyal Medya Reklamları",
//           "item": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/smm/sosyal-medya-reklamlari/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Instagram ve Facebook reklamları nasıl yönetilir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Instagram ve Facebook reklamları Meta Business Manager üzerinden kurulur; doğru kampanya hedefleri, hedef kitle segmentasyonu, kreatif testleri, Meta Pixel ve Conversion API entegrasyonu ile performans odaklı şekilde yönetilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Meta Ads kampanya optimizasyonu nasıl yapılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Meta Ads optimizasyonu; kampanya hedefi, bütçe dağılımı, hedef kitle segmentasyonu, kreatif A/B testleri, frekans kontrolü ve dönüşüm verilerine göre sürekli ayarlamalar yapılarak gerçekleştirilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için sosyal medya reklam stratejisi nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için reklam stratejisi; hedef pazarlar, sezon dönemleri, otel konsepti ve gelir hedeflerine göre tasarlanır; erken rezervasyon, high season ve son dakika kampanyaları, remarketing dizileri ve CRM entegrasyonu ile desteklenir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Meta Pixel ve Conversion API neden önemlidir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Meta Pixel tarayıcı tarafında, Conversion API sunucu tarafında veri toplar. İkisi birlikte kullanıldığında dönüşüm ölçümünün doğruluğu artar ve kampanya optimizasyonu çok daha sağlıklı yapılır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sosyal medya reklamları ile satış artırılır mı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Doğru hedefleme, güçlü kreatifler, uygun bütçe ve remarketing kurguları ile sosyal medya reklamları doğrudan satış, rezervasyon ve lead üretiminde güçlü bir performans kanalıdır."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "SmmAds" });
  const t2 = await getTranslations({ locale, namespace: "SmmAds.h4Section" });

    const baseUrl = getBaseUrl();
  const pathnameKey = "/Services/smm/smmAds";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
       
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

      // Türkçe yorum: Bu link sende "Sosyal Medya Yönetimi" sayfası.
      // Eğer sizde /tr/smm ise burayı ona göre değiştir.
      {
        name: locale === "tr" ? "Sosyal Medya Reklamları" : "Social Media Ads",
        url: `${baseUrl}${locale === "tr" ? "/tr/smm" : "/en/social-media-management"}`,
      },

      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları (yeni standart)
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("smmads_ai_answer_text"),
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
  header={t("smmads_subbanner_header")}
  header2={t("smmads_subbanner_header2")}
  text={t.raw("smmads_subbanner_text")}
    header3={t("smmads_subbanner_header3")}
  text2={t.raw("smmads_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("smmads_ai_answer_text")}/>
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
      <VerticalSlider page="SmmAds" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

