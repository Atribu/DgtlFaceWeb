import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
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

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/callcenter/reservationSupport";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Otel Rezervasyon Çağrı Merkezi – Satış Odaklı Rezervasyon Yönetimi | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi hizmeti sunar. Satış artıran, müşteri memnuniyetini yükselten profesyonel destek sağlar.";

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
//       "description": "DGTLFACE, oteller ve turizm tesisleri için çok dilli rezervasyon çağrı merkezi ve satış destek hizmetleri sunan, PMS ve OTA entegrasyonlu çalışan bir dijital pazarlama ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi/#webpage",
//       "url": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi",
//       "name": "Otel Rezervasyon Çağrı Merkezi – Satış Odaklı Rezervasyon Yönetimi | DGTLFACE",
//       "description": "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi hizmeti sunar. Satış artıran, müşteri memnuniyetini yükselten profesyonel destek sağlar.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi/#service",
//       "name": "Otel Rezervasyon Çağrı Merkezi – Satış Odaklı Rezervasyon Yönetimi",
//       "url": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "otel rezervasyon çağrı merkezi, otel satış destek hattı, telefonla rezervasyon hizmeti, çok dilli rezervasyon süreci, resort rezervasyon merkezi",
//       "description": "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi hizmeti sunar. Telefon, WhatsApp, OTA ve web kanallarından gelen talepleri TR–EN–DE–RU dillerinde yönetir; PMS entegrasyonlu oda ve fiyat kontrolü, satış odaklı script’ler, inbound ve outbound rezervasyon aramaları, Booking ve Expedia rezervasyon desteği ile doğrudan rezervasyon ve gelir artışı sağlar.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "otel rezervasyon çağrı merkezi",
//         "otel satış destek hattı",
//         "otel müşteri temsilcisi",
//         "rezervasyon yönetimi",
//         "telefonla rezervasyon hizmeti",
//         "resort rezervasyon merkezi",
//         "oteller için rezervasyon destek hizmeti",
//         "rezervasyon telefon hattı yönetimi",
//         "otel müşteri taleplerinin yönetimi",
//         "yabancı misafir rezervasyon desteği",
//         "booking rezervasyon destek hattı",
//         "expedia müşteri destek yönetimi",
//         "oda satış oranlarını artırma yöntemleri",
//         "turizm rezervasyon yönetimi",
//         "çok dilli rezervasyon süreci",
//         "resort rezervasyon hattı",
//         "villa & butik otel rezervasyon destek",
//         "agency-to-hotel call center",
//         "turist rezervasyon destek hattı",
//         "rezervasyon merkezi antalya",
//         "antalya otel destek hattı",
//         "turizm çağrı merkezi türkiye",
//         "antalya resort call center"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi/#breadcrumb",
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
//           "name": "Çağrı Merkezi Hizmetleri",
//           "item": "https://dgtlface.com/tr/cagri-merkezi-hizmetleri"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Otel Rezervasyon Çağrı Merkezi",
//           "item": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/cagri-merkezi/rezervasyon-destegi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Otel rezervasyon çağrı merkezi tam olarak ne yapıyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Otel rezervasyon çağrı merkezi; oda müsaitliği, fiyat ve kampanya bilgisi sunar, rezervasyonu tamamlar, iptal ve değişiklik taleplerini yönetir ve misafirlerin rezervasyonla ilgili sorularını çok dilli olarak yanıtlar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Hangi dillerde rezervasyon desteği sağlıyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel rezervasyon ve misafir destek hizmeti sağlar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Telefonla rezervasyon dönüşümünü nasıl artırıyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Satış odaklı script’ler, alternatif tarih ve oda önerileri, kampanya bilgileri, cross-sell ve upsell akışları ile her çağrıyı bir satış fırsatı olarak ele alıyor ve dönüşüm oranlarını artırıyoruz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "PMS entegrasyonlu rezervasyon yönetimi mümkün mü?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. PMS ile entegrasyon sayesinde oda müsaitliği ve fiyatlar anlık kontrol edilir, rezervasyonlar mümkün olduğunca doğrudan PMS’e işlenir ve overbooking riskleri azaltılır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Booking ve Expedia rezervasyon destek çağrılarını da yönetiyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Booking, Expedia ve diğer OTA kanallarından gelen rezervasyon sorularını ve değişiklik taleplerini çağrı merkezi ekranlarımızdan takip ederek, misafir taleplerine hızlı ve çok dilli yanıt veriyoruz."
//           }
//         }
//       ]
//     }
//   ]
// }

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "HotelReservationCallCenterPage" });
        const t2 = await getTranslations({ locale, namespace: "HotelReservationCallCenterPage.h4Section" });

           const baseUrl = getBaseUrl();
                       const pathnameKey = "/Services/callcenter/reservationSupport";
                       const canonicalUrl = getCanonicalUrl(pathnameKey, locale);


              const stepData = [1,2,3,4,5].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5][i-1],
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
               { title: t("h2Section.header4"), text: t.raw("h2Section.text4") }
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
                                                   ? "Çağrı Merkezi Hizmetleri"
                                                   : "Call Center Services",
                                               url: `${baseUrl}${locale === "tr" ? "/tr/cagri-merkezi" : "/en/call-center"}`,
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
      <VerticalSlider page="HotelReservationCallCenterPage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

