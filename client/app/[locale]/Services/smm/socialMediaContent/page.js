import { getTranslations } from "next-intl/server";
import SubBanner from "@/app/[locale]/components/subPageComponents/SubBanner";
import AutoBreadcrumbs from "@/app/[locale]/components/common/AutoBreadcrumbs";
import { AiAnswerBlock } from "@/app/[locale]/components/common/AiAnswerBlock";
import { AiSourceMention } from "@/app/[locale]/components/common/AiSourceMention";
import H2LogoSection from "@/app/[locale]/components/subPageComponents/H2LogoSection";
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.webp"
import StepSection2New from "@/app/[locale]/components/subPageComponents/StepSection2New"
import VerticalSlider from "@/app/[locale]/components/subPageComponents/VerticalSlider"
import QuestionsSection2 from "@/app/[locale]/components/subPageComponents/QuestionSection2"
import LogoListSectionBlack from "@/app/[locale]/components/subPageComponents/LogoListSectionBlack"

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { buildServiceJsonLd } from "@/app/lib/jsonld/buildServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: og-map + seo-utils + canonical mapping key’i
  const pathnameKey = "/Services/smm/socialMediaContent";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Sosyal Medya İçerik Üretimi – Kreatif ve Çekici İçerikler | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, markanıza uygun sosyal medya içerikleri üretir. Kreatif tasarımlar, video içerikler ve Reels formatlarıyla etkileşiminizi artırın.";

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
//       "description": "DGTLFACE, markalar ve oteller için Instagram, Facebook, YouTube gibi platformlarda profesyonel sosyal medya içerik üretimi, grafik tasarım, Reels & kısa video ve içerik takvimi yönetimi sunan dijital pazarlama ve kreatif partnerdir.",
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
//       "@id": "https://dgtlface.com/tr/smm/icerik-uretimi/#webpage",
//       "url": "https://dgtlface.com/tr/smm/icerik-uretimi",
//       "name": "Sosyal Medya İçerik Üretimi – Kreatif ve Çekici İçerikler | DGTLFACE",
//       "description": "DGTLFACE, markanıza uygun sosyal medya içerikleri üretir. Kreatif tasarımlar, video içerikler ve Reels formatlarıyla etkileşiminizi artırın.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/smm/icerik-uretimi/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/smm/icerik-uretimi/#service",
//       "name": "Sosyal Medya İçerik Üretimi – Markanıza Özel Profesyonel Tasarımlar",
//       "url": "https://dgtlface.com/tr/smm/icerik-uretimi",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "sosyal medya içerik üretimi, içerik tasarımı, instagram içerik üretimi, reels içerik hizmeti, grafik içerik tasarımı, sosyal medya kreatifleri",
//       "description": "DGTLFACE, marka analizi, moodboard/stil belirleme, içerik takvimi, post & story tasarımı, Reels & kısa video üretimi ve caption yazarlığı adımlarıyla sosyal medya içerik üretimini uçtan uca yönetir. Otel ve turizm markaları için turizm içerik paketleri ve çok dilli sosyal medya içerikleri hazırlar.",
//       "areaServed": ["Antalya","Türkiye","Europe"],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "sosyal medya içerik üretimi",
//         "içerik tasarımı",
//         "instagram içerik üretimi",
//         "reels içerik hizmeti",
//         "grafik içerik tasarımı",
//         "sosyal medya kreatifleri",
//         "instagram için içerik üretme rehberi",
//         "oteller için sosyal medya içerikleri",
//         "sosyal medya tasarım trendleri 2025",
//         "reels içerik fikirleri",
//         "içerik takvimi nasıl hazırlanır",
//         "sosyal medya içeriği nasıl yazılır",
//         "profesyonel post tasarımı",
//         "otel içerik üretimi",
//         "turizm sektörüne özel sosyal medya içerikleri",
//         "grafik tasarım sosyal medya örnekleri",
//         "sosyal medya içerik antalya",
//         "antalya içerik üretimi",
//         "instagram tasarım hizmeti türkiye",
//         "antalya grafik tasarım"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/smm/icerik-uretimi/#breadcrumb",
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
//           "name": "Sosyal Medya İçerik Üretimi",
//           "item": "https://dgtlface.com/tr/smm/icerik-uretimi"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/smm/icerik-uretimi/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Sosyal medya içerik üretimi neleri kapsar?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Post ve story tasarımı, Reels & kısa video üretimi, görsel düzenleme, metin/caption yazarlığı ve içerik takvimi planlaması sosyal medya içerik üretiminin temel bileşenleridir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için sosyal medya içerikleri nasıl planlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Oda, tesis, deneyim, destinasyon ve sezonluk kampanyalar etrafında içerik kategorileri belirlenir; bu kategoriler için fotoğraf, video ve Reels içerikleri içeren aylık bir akış planı oluşturulur."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Reels için içerik üretim süreci nasıl işler?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Önce konsept ve fikirler belirlenir, ardından çekim veya mevcut görüntülerin seçimi yapılır. Daha sonra hook, müzik, altyazı ve montaj aşamaları tamamlanarak performans odaklı Reels içerikleri üretilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Aylık içerik paketi nasıl yapılandırılır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Markanın hedefi ve bütçesine göre aylık post, story ve Reels adetleri belirlenir; içerik takvimi hazırlanır ve tasarım/metin/video üretimi bu takvime göre planlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Çok dilli sosyal medya içerikleri nasıl hazırlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "TR–EN–DE–RU gibi diller için doğrudan çeviri yerine, her dilin kültürel tonu ve beklentilerini gözeten metinler yazılır; görsellerdeki metinler de dil bazlı olarak uyarlanır."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
   const t = await getTranslations({ locale, namespace: "SocialMediaContent" });
  const t2 = await getTranslations({ locale, namespace: "SocialMediaContent.h4Section" });

   const baseUrl = getBaseUrl();
    const pathnameKey = "/Services/smm/socialMediaContent";
    const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
        
           const stepData = [1,2,3,4].map(i => ({
             id: i,
             image: [image1,image2,image4,image3][i-1],
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
            }
        
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
      {
        name: locale === "tr" ? "Sosyal Medya" : "Social Media",
        url: `${baseUrl}${locale === "tr" ? "/tr/smm" : "/en/social-media-management"}`,
      },
      { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
    ],

    faqs,

    // 🤖 AI alanları
    aiQuestion: t("jsonld.pageName"),
    aiAnswer: t("socialmedia_ai_answer_text"),
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
  header={t("socialmedia_subbanner_header")}
  header2={t("socialmedia_subbanner_header2")}
  text={t.raw("socialmedia_subbanner_text")}
    header3={t("socialmedia_subbanner_header3")}
  text2={t.raw("socialmedia_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("socialmedia_ai_answer_text")}/>
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
      <VerticalSlider page="SocialMediaContent" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}


