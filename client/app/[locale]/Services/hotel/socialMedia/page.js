import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "../images/image2.png"
import image2 from "./images/image2.webp"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
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
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const pathnameKey = "/Services/hotel/socialMedia";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Otel Sosyal Medya Yönetimi – Turizm İçin Profesyonel Instagram & Reels | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için Instagram, Reels, TikTok ve Facebook sosyal medya yönetimi sunar. Turizm sektörüne özel içerik üretimi, planlama, influencer iş birlikleri ve rezervasyon odaklı sosyal medya stratejileri geliştirir.";

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
//       "description": "DGTLFACE, oteller ve turizm markaları için sosyal medya, SEO, reklam, web geliştirme, OTA ve call center entegrasyonlarını yöneten, rezervasyon ve gelir odaklı çalışan bir dijital pazarlama ve teknoloji partneridir.",
//       "logo": "https://dgtlface.com/logo.png",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": [
//         "Antalya",
//         "Belek",
//         "Kemer",
//         "Side",
//         "Alanya",
//         "Türkiye",
//         "Europe"
//       ]
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://dgtlface.com/tr/otel/sosyal-medya/#webpage",
//       "url": "https://dgtlface.com/tr/otel/sosyal-medya",
//       "name": "Otel Sosyal Medya Yönetimi – Turizm İçin Profesyonel Instagram & Reels | DGTLFACE",
//       "description": "DGTLFACE, oteller için Instagram, Reels, TikTok ve Facebook sosyal medya yönetimi sunar. Turizm sektörüne özel içerik üretimi, planlama, influencer iş birlikleri ve rezervasyon odaklı sosyal medya stratejileri geliştirir.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/otel/sosyal-medya/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/otel/sosyal-medya/#service",
//       "name": "Otel Sosyal Medya Yönetimi – Turizm İçin Profesyonel Instagram & Reels",
//       "url": "https://dgtlface.com/tr/otel/sosyal-medya",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "otel sosyal medya, otel instagram yönetimi, resort social media, turizm sosyal medya, hotel content production",
//       "description": "DGTLFACE, oteller için Instagram, Reels, TikTok ve Facebook sosyal medya yönetimi sunar. Otel sosyal medya stratejisi, resort social media, turizm sosyal medya, otel Instagram yönetimi, hotel content production, otel Reels fikirleri, oteller için Instagram stratejisi, Reels ile oda satış artırma, otel sosyal medya içerik üretimi, resort için video çekimi, all inclusive oteller için sosyal medya, hotel influencer marketing ve sosyal medya ile rezervasyon artırma odaklı çözümler geliştirir.",
//       "areaServed": [
//         "Antalya",
//         "Belek",
//         "Kemer",
//         "Side",
//         "Alanya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "otel sosyal medya",
//         "resort social media",
//         "turizm sosyal medya",
//         "otel instagram yönetimi",
//         "hotel content production",
//         "otel reels fikirleri",
//         "oteller için instagram stratejisi",
//         "reels ile oda satış artırma",
//         "otel sosyal medya içerik üretimi",
//         "resort için video çekimi",
//         "all inclusive oteller için sosyal medya",
//         "hotel influencer marketing",
//         "otel fotoğraf çekimi",
//         "sosyal medya ile rezervasyon artırma",
//         "turizm sosyal medya taktikleri",
//         "luxury hotel instagram",
//         "resort sosyal medya paketleri",
//         "butik otel sosyal medya",
//         "aquapark otel sosyal medya yönetimi",
//         "antalya resort sosyal medya",
//         "belek hotel instagram",
//         "kemer otel sosyal medya",
//         "alanya hotel reels"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/otel/sosyal-medya/#breadcrumb",
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
//           "name": "Otel Dijital Pazarlama",
//           "item": "https://dgtlface.com/tr/otel-dijital-pazarlama"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Otel Sosyal Medya Yönetimi",
//           "item": "https://dgtlface.com/tr/otel/sosyal-medya"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/otel/sosyal-medya/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Oteller için sosyal medya yönetimi neyi kapsar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için sosyal medya yönetimi; strateji oluşturma, içerik ve Reels üretimi, paylaşım takvimi, yorum ve DM yönetimi, reklam entegrasyonu ve performans raporlamasını kapsar. Amaç, sosyal medyayı sadece beğeni alanı değil, marka algısı ve rezervasyon üreten bir kanal haline getirmektir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Reels ile oda satışı gerçekten artar mı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Doğru kurgulanmış Reels içerikleri; oda, tesis ve deneyimi kısa ve etkileyici şekilde anlattığında, doğru hedefleme ve net bir yönlendirme (web rezervasyon linki, WhatsApp veya call center) ile birleştiğinde rezervasyon talebini ciddi şekilde artırabilir. Reels, özellikle keşif ve karar öncesi ilham aşamasında çok güçlü bir araçtır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Otel sosyal medyası ile rezervasyon nasıl tetiklenir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Rezervasyon tetiklemek için; deneyim odaklı görseller, paket ve konsept anlatımları, kampanyalar ve güçlü call-to-action’lar birlikte kullanılmalıdır. Sosyal medya içerikleri, web rezervasyon motoru, OTA sayfaları veya çağrı merkezi gibi satış noktalarına net linkler ve mesaj akışlarıyla bağlanmalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE otel sosyal medya sürecini nasıl yönetir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, otel sosyal medya sürecinde önce mevcut hesapları ve hedef pazarları analiz eder, ardından içerik ve Reels stratejisi, aylık içerik takvimi ve reklam planını oluşturur. Üretim, paylaşım, DM/yorum yönetimi ve performans raporlaması tek çatı altında yönetilir; sosyal medya verileri rezervasyon ve gelir verileriyle birlikte analiz edilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece içerik üretiyorsunuz, yoksa çekim ve prodüksiyon da var mı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "İhtiyaca göre hem dijital içerik ve Reels fikri üretebiliyor hem de sahada fotoğraf ve video çekimi yapabiliyoruz. Creative ve video prodüksiyon ekibiyle birlikte; oda, tesis, destinasyon ve deneyim odaklı görsel arşiv oluşturup bunu sosyal medya, web ve OTA kanallarında kullanıma hazır hale getiriyoruz."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
   const t = await getTranslations({locale,namespace: "OtelSocialMediaPage",});
    const t2 = await getTranslations({locale,namespace: "OtelSocialMediaPage.h4Section",});

      const baseUrl = getBaseUrl();
      const pathnameKey = "/Services/hotel/socialMedia";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale); 

           
              const stepData = [1,2,3,4,5,6,7].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6,image2][i-1],
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
               { title: t("h2Section.header3"), text: t.raw("h2Section.text3") }
               
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
                                  name: locale === "tr" ? "Otel Dijital Dönüşüm" : "Hotel Digital Marketing",
                                  url: `${baseUrl}${locale === "tr" ? "/tr/otel" : "/en/hotel"}`,
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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center'>
<div className='flex flex-col items-center justify-center gap-5'>
         <SubBanner
  header={t("subbanner_header")}
  header2={t("subbanner_header2")}
  text={t.raw("subbanner_text")}
    header3={t("subbanner_header3")}
  text2={t.raw("subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
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
      <VerticalSlider page="OtelSocialMediaPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

