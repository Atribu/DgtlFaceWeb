import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.webp"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
import image7 from "./images/image7.png"
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

export async function generateMetadata({ params }) {
  const { locale } = params;

  // Türkçe yorum: seo-utils + og-map + canonical mapping key’i
  const pathnameKey = "/Services/software/serverManagementService";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title ||
    "Sunucu Yönetimi & Web Güvenliği – Performans ve Koruma | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, güvenli sunucu yönetimi ve web güvenliği hizmetleri sunar. SSL, firewall, DDoS koruması ve performans optimizasyonuyla altyapınızı korur ve hızlandırır.";

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
//       "description": "DGTLFACE, oteller ve markalar için güvenli sunucu yönetimi, web güvenliği, SSL, firewall, DDoS koruması, uptime ve performans optimizasyonu sunan dijital pazarlama ve teknoloji partneridir.",
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
//       "@id": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik/#webpage",
//       "url": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik",
//       "name": "Sunucu Yönetimi & Web Güvenliği – Performans ve Koruma | DGTLFACE",
//       "description": "DGTLFACE, güvenli sunucu yönetimi ve web güvenliği hizmetleri sunar. SSL, firewall, DDoS koruması ve performans optimizasyonuyla altyapınızı korur ve hızlandırır.",
//       "inLanguage": "tr-TR",
//       "isPartOf": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "breadcrumb": {
//         "@id": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik/#breadcrumb"
//       }
//     },
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik/#service",
//       "name": "Sunucu Yönetimi & Web Güvenliği – Performans ve Koruma",
//       "url": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik",
//       "provider": {
//         "@id": "https://dgtlface.com/#organization"
//       },
//       "serviceType": "web güvenliği, sunucu yönetimi, ssl kurulumu, firewall yapılandırma, ddos koruması, hosting güvenliği",
//       "description": "DGTLFACE, güvenli sunucu yönetimi ve web güvenliği hizmetleri sunar. SSL kurulumu, firewall yapılandırma, DDoS koruması, hosting ve database güvenliği, uptime ve performans optimizasyonu ile oteller ve markalar için kesintisiz ve güvenli dijital altyapılar kurar. PMS–OTA–rezervasyon sistemleri ve KVKK uyumlu veri saklama politikalarıyla entegre çalışır.",
//       "areaServed": [
//         "Antalya",
//         "Türkiye",
//         "Europe"
//       ],
//       "inLanguage": "tr-TR",
//       "keywords": [
//         "web güvenliği",
//         "sunucu yönetimi",
//         "ssl kurulumu",
//         "firewall yapılandırma",
//         "ddos koruması",
//         "hosting güvenliği",
//         "sunucu güvenliği nasıl sağlanır",
//         "ssl sertifikası nasıl kurulur",
//         "ddos saldırıları nasıl engellenir",
//         "web güvenlik duvarı nedir",
//         "oteller için sunucu güvenliği",
//         "turizm sitelerine güvenlik",
//         "uptime optimizasyonu",
//         "hosting performansı artırma",
//         "database güvenliği",
//         "next.js güvenlik optimizasyonu",
//         "otel web güvenliği",
//         "pms sunucu güvenliği",
//         "ota sistem güvenliği",
//         "rezervasyon güvenlik yapısı",
//         "sunucu hizmeti antalya",
//         "antalya web güvenliği",
//         "sunucu yönetimi türkiye",
//         "antalya hosting hizmeti"
//       ]
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik/#breadcrumb",
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
//           "name": "Web & Yazılım Hizmetleri",
//           "item": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Sunucu Yönetimi ve Web Güvenliği",
//           "item": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik"
//         }
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Sunucu güvenliği nasıl sağlanır?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Sunucu güvenliği; güçlü şifre ve erişim politikaları, güncel yazılım ve güvenlik yamaları, firewall ve WAF kullanımı, gereksiz servis ve portların kapatılması, loglama ve izleme sistemlerinin aktif olması ve düzenli yedekleme gibi birden fazla güvenlik katmanının birlikte uygulanmasıyla sağlanır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "SSL sertifikası neden önemlidir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SSL sertifikası, kullanıcı ile sunucu arasındaki trafiği şifreleyerek veri güvenliğini sağlar, tarayıcılarda güvenli ibaresi gösterir ve Google için bir sıralama sinyali olduğu için SEO açısından da kritik öneme sahiptir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DDOS saldırıları nasıl engellenir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DDOS saldırıları tamamen sıfırlanamayabilir ancak firewall, CDN tabanlı koruma, rate limiting, IP bazlı kurallar ve sürekli izleme kullanılarak etkisi minimize edilebilir ve sistemin ayakta kalma oranı artırılabilir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Oteller için rezervasyon sistemi güvenliği nasıl olmalı?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Otellerin rezervasyon sistemlerinde form verileri şifrelenmeli, PMS–OTA–web arasındaki trafik güvenli bağlantılarla yönetilmeli, erişim yetkileri sınırlandırılmalı ve hassas verilere erişen kullanıcılar loglanmalıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "DGTLFACE sunucu yönetimi süreçlerini nasıl işletir?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE, önce mevcut altyapı analizi yapar, ardından konfigürasyon, güvenlik katmanları, izleme ve yedekleme standartlarını uygular. Sonrasında bakım ve destek modeliyle uptime, performans, loglar ve güvenlik uyarılarını düzenli olarak izleyerek gerektiğinde kapasite ve güvenlik ayarlarını günceller."
//           }
//         }
//       ]
//     }
//   ]
// }


export default async function Page({ params: { locale } }) {
  const baseUrl = getBaseUrl();
    const pathnameKey = "/Services/software/serverManagementService";
    const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

        const t = await getTranslations({ locale, namespace: "ServerSecurity" });
     const t2 = await getTranslations({ locale, namespace: "ServerSecurity.h4Section" });
         
            const stepData = [1,2,3,4,5,6,7].map(i => ({
              id: i,
              image: [image1,image2,image3,image4, image5,image6,image7,][i-1],
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
             { title: t("h2Section.header1"), text: t.raw("h2Section.text1"), },
             { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
             { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
             { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
              { title: t("h2Section.header5"), text: t.raw("h2Section.text5") }
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
           
                
                    {name: locale === "tr" ? "Web & Yazılım Hizmetleri" : "Web & Software Services",
                                 url: `${baseUrl}${locale === "tr" ? "/tr/yazilim" : "/en/software-development"}`,
                               },
           
                 { name: t("jsonld.breadcrumbName"), url: canonicalUrl },
               ],
           
               faqs,
           
               // 🤖 AI alanları (yeni standart)
               aiQuestion: t("jsonld.pageName"),
               aiAnswer: t("server_ai_answer_text"),
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
  header={t("server_subbanner_header")}
  header2={t("server_subbanner_header2")}
  text={t.raw("server_subbanner_text")}
    header3={t("server_subbanner_header3")}
  text2={t.raw("server_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("server_ai_answer_text")}/>
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
      <VerticalSlider page="ServerSecurity" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}


