import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
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
  const pathnameKey = "/Services/creative/videoProduction";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Video & Prodüksiyon Hizmetleri – Tanıtım, Reklam ve 360° Çekimler | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, marka hikâyenizi etkili şekilde anlatan profesyonel tanıtım videoları, reklam filmleri ve 360° çekimler üretir. Oteller ve markalar için kreatif video prodüksiyon sunar.";

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
//       "description": "DGTLFACE, oteller ve markalar için tanıtım videosu, reklam filmi, 360° tur, drone çekimi ve sosyal medya video içerikleri üreten profesyonel video prodüksiyon ve creative tasarım partneridir.",
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
//       "@id": "https://dgtlface.com/tr/creative/video-produksiyon/#webpage",
//       "url": "https://dgtlface.com/tr/creative/video-produksiyon",
//       "name": "Video & Prodüksiyon Hizmetleri – Tanıtım, Reklam ve 360° Çekimler | DGTLFACE",
//       "description": "DGTLFACE, marka hikâyenizi etkili şekilde anlatan profesyonel tanıtım videoları, reklam filmleri ve 360° çekimler üretir. Oteller ve markalar için kreatif video prodüksiyon sunar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/creative/video-produksiyon/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/creative/video-produksiyon/#service",
//       "name": "Video & Prodüksiyon Hizmetleri – Tanıtım, Reklam ve 360° Çekimler",
//       "url": "https://dgtlface.com/tr/creative/video-produksiyon",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "video prodüksiyon, reklam filmi çekimi, tanıtım videosu, 360 derece çekim, drone çekimi, video kurgu montaj",
//       "description": "DGTLFACE, profesyonel video prodüksiyon hizmetleri sunar. Oteller ve markalar için tanıtım filmi, reklam videosu, 360° tur ve drone çekimleri; senaryo ve storyboard geliştirme, çekim planı, lokasyon ve ekip organizasyonu, kurgu, color grading, ses tasarımı ve web, sosyal medya, reklam, OTA gibi farklı platformlara uygun formatlarda teslim süreçlerini kapsar.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "video prodüksiyon",
//         "reklam filmi çekimi",
//         "tanıtım videosu",
//         "360 derece çekim",
//         "drone çekimi",
//         "video kurgu montaj",
//         "oteller için tanıtım videosu",
//         "video prodüksiyon nasıl yapılır",
//         "drone çekim hizmeti",
//         "turizm video çekimi",
//         "otel tanıtım filmi örnekleri",
//         "kısa reklam videosu",
//         "360 sanal tur çekim teknikleri",
//         "video storyboard hazırlama",
//         "video senaryo yazımı",
//         "prodüksiyon ekipmanları",
//         "otel video prodüksiyon",
//         "resort video çekimi",
//         "turizm reklam filmi",
//         "otel drone çekimi",
//         "video prodüksiyon antalya",
//         "antalya drone çekim",
//         "reklam filmi türkiye",
//         "antalya video ajansı"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/creative/video-produksiyon/#breadcrumb",
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
//           "name": "Creative Tasarım & Prodüksiyon",
//           "item": "https://dgtlface.com/tr/creative-ve-tasarim"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Video & Prodüksiyon",
//           "item": "https://dgtlface.com/tr/creative/video-produksiyon"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/creative/video-produksiyon/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Video prodüksiyon hizmetleriniz neleri kapsıyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Video prodüksiyon; senaryo ve storyboard geliştirme, çekim planı, lokasyon ve ekip organizasyonu, profesyonel çekim, kurgu ve montaj, renk düzenleme, müzik–ses tasarımı ve farklı platformlara uygun formatlarda teslim süreçlerini kapsar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için tanıtım filmi nasıl planlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için tanıtım filmi planlanırken oda, havuz, restoran, spa, etkinlik ve destinasyon sahneleri dengeli bir hikaye içinde kurgulanır; hedef pazara göre tempo ve müzik seçilir, genellikle 1,5–3 dakikalık ana film ve sosyal medya için kısa versiyonlar hazırlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Drone ve 360° çekim otellerde nasıl kullanılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Drone çekimleri tesisin konumunu ve çevreyi havadan gösterirken, 360° çekimler oda, lobi, restoran gibi alanlar için interaktif sanal turlar üretmekte kullanılır. Bu görüntüler web sitesi, OTA sayfaları ve sunumlarda immersive bir deneyim sunar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Kısa reklam videoları sosyal medya için nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Sosyal medya reklam videoları 6–30 saniye aralığında, ilk 3 saniyede marka ve ana mesajı veren, dikey veya kare formatta, net CTA içeren ve platform guideline’larına uygun şekilde hazırlanır. Farklı açılış ve kapanışlarla A/B test için alternatifler üretilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çekim sonrasında hangi formatlarda teslim alırım?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Hazırlanan videolar web siteniz, sosyal medya kanallarınız, reklam platformları ve OTA sayfaları için uygun çözünürlük ve oranlarda; yatay, dikey veya kare formatta teslim edilir. Gerekirse uzun tanıtım, kısa reklam ve Reels/Shorts gibi versiyonlar ayrı ayrı sağlanır."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "VideoPage" });
      const t2 = await getTranslations({ locale, namespace: "VideoPage.h4Section" });

       const baseUrl = getBaseUrl();
            const pathnameKey = "/Services/creative/videoProduction";
            const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
              
                 const stepData = [1,2,3,4,5,6].map(i => ({
                   id: i,
                   image: [image1,image2,image3,image4,image5,image6][i-1],
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
                  { title: t("h2Section.header1"),text: t.raw("h2Section.text1") },
                  { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
                  { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
                  { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
                   { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
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
                                         ? "Creative Tasarım & Prodüksiyon Hizmetleri"
                                         : "Creative Design & Production Services",
                                     url: `${baseUrl}${locale === "tr" ? "/tr/creative" : "/en/creative-design"}`,
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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden'>
<div className='flex flex-col items-center justify-center gap-5'>
            <SubBanner  header={t('subbanner_header')}
  header2={t('subbanner_header2')}
  text={t.raw('subbanner_text')}
    header3={t('subbanner_header3')}
  text2={t.raw('subbanner_text2')}
  buttonLink="/" buttonText={t("cta_talk_to_us")}/>
  <AutoBreadcrumbs/>
  <AiAnswerBlock text={t("ai_answer_text")}/>
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
      <VerticalSlider page="VideoPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

