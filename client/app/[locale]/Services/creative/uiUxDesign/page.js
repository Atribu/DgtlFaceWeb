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
import image7 from "./images/image7.webp"
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
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/creative/uiUxDesign";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "UI & UX Tasarımı – Kullanıcı Odaklı Dijital Deneyimler | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, kullanıcı deneyimi odaklı UI/UX tasarımıyla web sitelerinizi modern, hızlı ve dönüşüm odaklı hale getirir. Otel ve kurumsal projeler için profesyonel çözüm sunar.";

  const ogImage = getOgImageByPathnameKey(pathnameKey) || "/og/og-default.png";

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
//       "description": "DGTLFACE, web siteleri, otel rezervasyon arayüzleri, dashboard ve paneller için kullanıcı deneyimi (UX) ve arayüz (UI) tasarımı sunan, turizm ve hizmet odaklı bir creative & teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/creative/ui-ux-tasarim/#webpage",
//       "url": "https://dgtlface.com/tr/creative/ui-ux-tasarim",
//       "name": "UI & UX Tasarımı – Kullanıcı Odaklı Dijital Deneyimler | DGTLFACE",
//       "description": "DGTLFACE, kullanıcı deneyimi odaklı UI/UX tasarımıyla web sitelerinizi modern, hızlı ve dönüşüm odaklı hale getirir. Otel ve kurumsal projeler için profesyonel çözüm sunar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/creative/ui-ux-tasarim/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/creative/ui-ux-tasarim/#service",
//       "name": "UI & UX Tasarımı – Kullanıcı Odaklı Dijital Deneyimler",
//       "url": "https://dgtlface.com/tr/creative/ui-ux-tasarim",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "ui ux tasarım, kullanıcı deneyimi tasarımı, arayüz tasarım hizmeti, ux analizi, wireframe tasarım, prototipleme",
//       "description": "DGTLFACE, kullanıcı deneyimi (UX) ve arayüz (UI) tasarımı hizmetleriyle web siteleri, otel rezervasyon akışları, dashboard ve panelleri modern, sezgisel ve dönüşüm odaklı hale getirir. UX araştırması, wireframe, Figma prototipleri, mobil uyumlu UI kitleri ve PMS–OTA entegrasyonlu otel projelerine özel rezervasyon UX çözümleri sunar.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "ui ux tasarım",
//         "kullanıcı deneyimi tasarımı",
//         "arayüz tasarım hizmeti",
//         "ux analizi",
//         "wireframe tasarım",
//         "prototipleme",
//         "ui/ux tasarımı nasıl yapılır",
//         "kullanıcı odaklı tasarım prensipleri",
//         "oteller için ui ux tasarım",
//         "sezgisel arayüz tasarımı",
//         "web sitesi dönüşüm artırma",
//         "ux araştırma yöntemleri",
//         "mobil uyumlu ui tasarım",
//         "figma tasarım rehberi",
//         "ux writing örnekleri",
//         "kullanıcı testi nasıl yapılır",
//         "otel rezervasyon arayüzü",
//         "otel web ux tasarımı",
//         "pms uyumlu ui tasarımı",
//         "turizm mobil uygulama tasarımı",
//         "ui ux antalya",
//         "antalya ui tasarım",
//         "ux tasarım türkiye",
//         "antalya dijital tasarım"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/creative/ui-ux-tasarim/#breadcrumb",
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
//           "name": "UI & UX Tasarımı",
//           "item": "https://dgtlface.com/tr/creative/ui-ux-tasarim"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/creative/ui-ux-tasarim/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "UI/UX tasarımı nedir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "UI/UX tasarımı; kullanıcı arayüzünün görsel tasarımını (UI) ve kullanıcı yolculuğu, etkileşim, kullanılabilirlik gibi deneyim boyutunu (UX) birlikte ele alan tasarım sürecidir. Amaç, hem estetik hem işlevsel dijital deneyimler sunmaktır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Kullanıcı deneyimi neden bu kadar kritik?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Kullanıcı deneyimi; satış, rezervasyon ve lead performansını doğrudan etkilediği için kritiktir. Kötü UX, ziyaretçilerin aradığını bulamamasına, formları yarıda bırakmasına ve markadan kopmasına yol açabilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için rezervasyon akışı nasıl optimize edilir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Otel rezervasyon akışında tarih, kişi sayısı, oda ve fiyat seçimi gibi adımlar sadeleştirilir; gereksiz adımlar kaldırılır, mobil kullanım önceliklendirilir ve PMS/rezervasyon motoru entegrasyonlarıyla tutarlı, güven veren bir deneyim tasarlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Figma ile prototip nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Figma’da hazırlanan UI tasarımları tıklanabilir prototiplere dönüştürülür; kullanıcı gerçek bir siteyi kullanıyormuş gibi akışları deneyebilir. Bu sayede geliştirme öncesinde kullanıcı yolculuğu test edilip iyileştirilebilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE UI/UX sürecini nasıl yönetir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE; hedef ve kullanıcı analizi, UX araştırması, wireframe, UI tasarım (Figma), prototipleme, gerektiğinde kullanıcı testi ve geliştirici handoff adımlarını izler. Tasarımlar, web geliştirme ve SEO ekipleriyle entegre şekilde hayata geçirilir."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {

     const t = await getTranslations({ locale, namespace: "UiUxPage" });
        const t2 = await getTranslations({ locale, namespace: "UiUxPage.h4Section" });

        const baseUrl = getBaseUrl();
              const pathnameKey = "/Services/creative/uiUxDesign";
              const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
           
              const stepData = [1,2,3,4,5,6,7].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6,image7][i-1],
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
               { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
               { title: t("h2Section.header6"), text: t.raw("h2Section.text6") },
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
      
    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden justify-center items-center'>

<div className='flex flex-col items-center justify-center gap-5'>
        <SubBanner header={t("subbanner_header")} header2={t("subbanner_header2")} text={t.raw("subbanner_text")} header3={t("subbanner_header3")} text2={t.raw("subbanner_text2")} buttonLink="/" buttonText={t("cta_talk_to_us")}/>
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
      <VerticalSlider page="WebDev" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}
