import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations, useLocale } from "next-intl";
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
  const pathnameKey = "/Services/seo/backlinkSeo";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Backlink Yönetimi – Dijital Otorite ve Güven Sinyali Artırma | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, güçlü backlink stratejileriyle sitenizin otoritesini artırır. Güvenilir ve etkili bağlantılarla Google sıralamalarınızı yükseltin.";

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
//       "description": "DGTLFACE, güçlü backlink stratejileriyle sitelerin dijital otoritesini artıran ve turizm odaklı doğal backlink profilleri kuran bir SEO ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/seo/backlink-yonetimi/#webpage",
//       "url": "https://dgtlface.com/tr/seo/backlink-yonetimi",
//       "name": "Backlink Yönetimi – Dijital Otorite ve Güven Sinyali Artırma | DGTLFACE",
//       "description": "DGTLFACE, güçlü backlink stratejileriyle sitenizin otoritesini artırır. Güvenilir ve etkili bağlantılarla Google sıralamalarınızı yükseltin.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/seo/backlink-yonetimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/seo/backlink-yonetimi/#service",
//       "name": "Backlink Yönetimi ve Dijital Otorite Geliştirme",
//       "url": "https://dgtlface.com/tr/seo/backlink-yonetimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "backlink yönetimi, backlink oluşturma, link inşası stratejisi, dijital otorite artırma, kaliteli backlink, backlink analizi",
//       "description": "DGTLFACE, backlink yönetimini sektör odaklı otorite inşası olarak ele alır. Backlink analizi, kötü backlink temizleme, içerik tabanlı link kazanımı ve turizm/otel odaklı doğal backlink setleriyle domain otoritesini güçlendirir.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "backlink yönetimi",
//         "backlink oluşturma",
//         "link inşası stratejisi",
//         "dijital otorite artırma",
//         "kaliteli backlink",
//         "backlink analizi",
//         "backlink nasıl alınır",
//         "kaliteli backlink nereden bulunur",
//         "kötü backlink temizleme yöntemleri",
//         "oteller için backlink stratejisi",
//         "turizm sitelerine backlink",
//         "sektörel kaynaklardan backlink",
//         "backlink analiz araçları",
//         "link juice optimizasyonu",
//         "domain otorite artırma",
//         "backlink outreach teknikleri",
//         "otel backlink çalışması",
//         "turizm backlink stratejisi",
//         "ota backlink bağlantıları",
//         "resort backlink profili",
//         "backlink antalya",
//         "antalya seo ajansı",
//         "backlink çalışması türkiye",
//         "antalya dijital otorite"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/seo/backlink-yonetimi/#breadcrumb",
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
//           "name": "SEO Hizmetleri",
//           "item": "https://dgtlface.com/tr/seo-hizmetleri"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Backlink & Dijital Otorite Yönetimi",
//           "item": "https://dgtlface.com/tr/seo/backlink-yonetimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/seo/backlink-yonetimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Backlink nedir ve neden önemlidir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Backlink, başka sitelerden sizin sitenize verilen bağlantıdır ve Google için dijital otorite ve güven sinyali taşır. Kaliteli backlink profili, sıralamaları ve görünürlüğü güçlendirir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Kaliteli backlink nasıl bulunur?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Sektörel bloglar, haber siteleri, rehber siteleri, iş ortaklıkları ve dernek/oda siteleri gibi, markanız ve sektörünüzle alakalı güvenilir kaynaklardan alınan linkler kaliteli backlink olarak değerlendirilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Zararlı backlink’ler SEO’ya zarar verir mi?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Spam, alakasız veya düşük kaliteli sitelerden gelen backlink’ler sıralamaları olumsuz etkileyebilir ve algoritma güncellemelerinde risk oluşturabilir. Gerekirse temizlenmeli veya disavow edilmelidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için özel backlink stratejisi nasıl olmalıdır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oteller için backlink stratejisi; destinasyon portalları, seyahat blogları, otel rehberleri ve turizm odaklı sitelerden alınan doğal ve GEO odaklı bağlantılara dayanmalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Backlink profilini nasıl raporluyorsunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Backlink raporlarında domain otoritesi, link sayısı, anchor text dağılımı, toxic score ve kazanılan yeni bağlantılar detaylı şekilde gösterilir."
//           }
//         }
//       ]
//     }
//   ]
// }

const Page = () => {
  const locale = useLocale();
    const baseUrl = getBaseUrl();
  
     const pathnameKey = "/Services/seo/backlinkSeo";
    const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

  const t = useTranslations("BacklinkSeo");
   const t2 = useTranslations("BacklinkSeo.h4Section");
       
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
               { name: locale === "tr" ? "Ana Sayfa" : "Home", url: `${baseUrl}/${locale}` },
               { name: "SEO", url: `${baseUrl}${locale === "tr" ? "/tr/seo" : "/en/search-engine-optimization"}` },
               { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
             ],
         
             faqs,
         
             // 🤖 AI alanları (yeni standart)
             aiQuestion: t("jsonld.pageName"),
             aiAnswer: t("aiAnswerBlock"),
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
  header={t("backlinkseo_subbanner_header")}
  header2={t("backlinkseo_subbanner_header2")}
  text={t.raw("backlinkseo_subbanner_text")}
    header3={t("backlinkseo_subbanner_header3")}
  text2={t.raw("backlinkseo_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("aiAnswerBlock")}/>
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
      <VerticalSlider page="BacklinkSeo" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
   </>
  )
}

export default Page
