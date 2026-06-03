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
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";
import FaqPrompt from '@/app/[locale]/components/common/FaqPrompt'

export async function generateMetadata({ params }) {
  const { locale } = await params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/creative/corporateGift";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Kurumsal Hediye Tasarımı – Markanıza Özel Premium Ürünler | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, markanıza özel kurumsal hediye tasarımları, baskı ürünleri, promosyon çalışmaları ve kişisel tasarım ürünleri sunar.";

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
//       "description": "DGTLFACE, markalar ve özellikle oteller için premium kurumsal hediyeler, özel baskı ürünleri, marka hediye paketleri ve turizm odaklı promosyon çözümleri tasarlayan creative tasarım partneridir.",
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
//       "@id": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi/#webpage",
//       "url": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi",
//       "name": "Kurumsal Hediye Tasarımı – Markanıza Özel Premium Ürünler | DGTLFACE",
//       "description": "DGTLFACE, markanıza özel kurumsal hediye tasarımları, baskı ürünleri, promosyon çalışmaları ve kişisel tasarım ürünleri sunar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi/#service",
//       "name": "Kurumsal Hediye Tasarımı – Markanıza Özel Premium Ürünler",
//       "url": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "kurumsal hediye tasarımı, promosyon tasarımı, özel baskı ürünleri, marka hediye paketi, kurumsal promosyon, premium hediye tasarımı",
//       "description": "DGTLFACE, markalara özel kurumsal hediye tasarımı hizmeti sunar. Premium kurumsal hediyeler, özel baskı ürünleri, marka hediye kutuları, oteller için oda içi welcome setleri, VIP misafir ve iş ortakları için hediye paketleri, çalışan ve B2B segmentleri için kişiselleştirilebilir promosyon ürünleri tasarlanır. Tasarım, baskı ve ambalaj süreçleri uçtan uca koordine edilerek fiziksel ve dijital marka deneyimiyle uyumlu çözümler üretilir.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "kurumsal hediye tasarımı",
//         "promosyon tasarımı",
//         "özel baskı ürünleri",
//         "marka hediye paketi",
//         "kurumsal promosyon",
//         "premium hediye tasarımı",
//         "kurumsal hediye örnekleri",
//         "premium kurumsal hediye tasarımları",
//         "oteller için kurumsal hediyeler",
//         "turizm promosyon ürünleri",
//         "marka hediye kutusu tasarımı",
//         "kişiselleştirilmiş kurumsal hediye",
//         "baskı tasarım ürünleri",
//         "kurumsal hediye katalog",
//         "çalışan hediyesi fikirleri",
//         "otel kurumsal hediye tasarımı",
//         "resort promosyon ürünleri",
//         "turizm hediye tasarımı",
//         "otel özel baskı ürünleri",
//         "kurumsal hediye antalya",
//         "antalya baskı tasarım",
//         "promosyon tasarım türkiye",
//         "antalya kurumsal tasarım ajansı"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi/#breadcrumb",
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
//           "name": "Kurumsal Hediye Tasarımı",
//           "item": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/creative/kurumsal-hediye-tasarimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Kurumsal hediye tasarımı neleri kapsar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Kurumsal hediye tasarımı; hedef kitle ve bütçeye uygun ürün seçimi, marka kimliğine uygun grafik tasarım, baskı ve malzeme seçimleri, hediye kutusu ve ambalaj tasarımı ile teslim ve kullanım önerilerine kadar tüm süreci kapsar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için hangi tür hediyeler tasarlıyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için oda içi welcome setleri, VIP hediye kutuları, spa ve restoran temalı hediyeler, destinasyon odaklı özel ürünler ve tur operatörleri ile iş ortakları için kurumsal hediye paketleri tasarlıyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Ürünleri siz mi tedarik ediyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "İhtiyaca göre yalnızca tasarım hizmeti verebileceğimiz gibi, tedarikçi seçimi, baskı ve üretim koordinasyonu dahil uçtan uca süreci de yönetebiliyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hediyeleri kişiselleştirebiliyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet, birçok üründe isim, oda numarası, özel mesaj veya tarih gibi kişisel detaylarla özelleştirme yapılabilir; bu da özellikle VIP misafir, yönetici ve iş ortakları için hediyenin etkisini artırır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Kurumsal hediyeleri sosyal medyada nasıl kullanabilirim?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Kurumsal hediyeler; unboxing videoları, story ve reels konseptleri, kampanya kurguları ve kullanıcı paylaşımlarını teşvik eden içerik fikirleri ile sosyal medyada güçlü bir görünürlük ve etkileşim aracı olarak kullanılabilir."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "CorporateGiftsPage" });
    const t2 = await getTranslations({ locale, namespace: "CorporateGiftsPage.h4Section" });

      const baseUrl = getBaseUrl();
      const pathnameKey = "/Services/creative/corporateGift";
      const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
           
              const stepData = [1,2,3,4,5,6].map(i => ({
                id: i,
                image: [image3,image2,image1,image4,image5,image6][i-1],
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
        <SubBanner header={t('subbanner_header')}
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
      <VerticalSlider page="CorporateGiftsPage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <FaqPrompt
            namespace="CorporateGiftsPage.faqPrompt"
             faqSlug="kurumsal-hediye-tasarimi-sss"
                                                 />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

