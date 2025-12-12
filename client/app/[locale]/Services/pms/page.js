import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, oteller için PMS kurulumu, OTA entegrasyonu, kanal yönetimi, online satış optimizasyonu ve rezervasyon yönetimi sunan dijital pazarlama ve otel teknoloji partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
     "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dgtlface.com/#website",
      "url": "https://dgtlface.com/",
      "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://dgtlface.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/pms-ota-yonetimi",
      "name": "PMS ve OTA Yönetimi – Oteller İçin Dijital Entegrasyon & Satış Optimizasyonu | DGTLFACE",
      "description": "DGTLFACE, oteller için PMS kurulumu, OTA entegrasyonu, kanal yönetimi, fiyat ve envanter senkronizasyonu, online satış optimizasyonu ve rezervasyon yönetimi sunar.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "pms ve ota yönetimi",
        "ota yönetimi",
        "pms kurulumu",
        "kanal yönetimi",
        "online satış optimizasyonu",
        "otel satış sistemi",
        "turizm pms ve ota çözümleri"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#service",
      "name": "PMS ve OTA Yönetimi – Oteller İçin Dijital Entegrasyon & Satış Optimizasyonu",
      "url": "https://dgtlface.com/tr/pms-ota-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "ota yönetimi, pms kurulumu, kanal yönetimi, online satış optimizasyonu, rezervasyon yönetimi",
      "description": "DGTLFACE, oteller için PMS kurulumu ve eğitimi, Booking–Expedia gibi OTA entegrasyonları, kanal yönetimi, fiyat–envanter senkronu, online satış optimizasyonu ve rezervasyon yönetimini tek merkezden yöneten PMS & OTA yönetim hizmetleri sunar.",
    "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "ota yönetimi",
        "pms kurulumu",
        "kanal yönetimi",
        "online satış optimizasyonu",
        "otel satış sistemi",
        "ota yönetimi nasıl yapılır",
        "oteller için pms kurulumu",
        "booking expedia entegrasyon rehberi",
        "ota fiyat senkronizasyonu",
        "pms entegrasyonu nedir",
        "otel rezervasyon sistemi optimizasyonu",
        "turizm online satış teknikleri",
        "oda envanteri nasıl yönetilir",
        "fiyat yönetimi oteller için",
        "google hotel ads uyumluluk",
        "ota performans raporlama",
        "pms ile otomatik fiyat güncelleme",
        "kanal yönetimi yazılımı",
        "otel web sitesi rezervasyon artırma",
        "otel ota yönetimi",
        "resort ota optimizasyon",
        "turizm pms desteği",
        "butik otel dijital satış sistemi",
        "ota yönetimi antalya",
        "antalya pms kurulumu",
        "turizm pms türkiye",
        "antalya otel satış optimizasyonu"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#services-list",
      "name": "DGTLFACE PMS & OTA Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "PMS Kurulum & Destek",
          "url": "https://dgtlface.com/tr/pms-ota/pms-kurulum"
        },
        {
          "@type": "Service",
          "name": "OTA Entegrasyonu",
          "url": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu"
        },
        {
          "@type": "Service",
          "name": "Kanal Yönetimi (Channel Management)",
          "url": "https://dgtlface.com/tr/pms-ota/kanal-yonetimi"
        },
        {
          "@type": "Service",
          "name": "Online Satış Optimizasyonu",
          "url": "https://dgtlface.com/tr/pms-ota/online-satis"
        },
        {
          "@type": "Service",
          "name": "Rezervasyon Yönetimi",
          "url": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://dgtlface.com/tr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "PMS & OTA Yönetimi",
          "item": "https://dgtlface.com/tr/pms-ota-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/pms-ota-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "PMS & OTA yönetimi nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS & OTA yönetimi, otelin oda, fiyat, envanter, rezervasyon ve misafir bilgilerinin PMS, OTA ve kanal yöneticisi üzerinden tüm kanallarda tutarlı ve senkronize şekilde yönetilmesini sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için PMS kurulumu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Öncelikle oda ve operasyon yapınız analiz edilir, ardından PMS konfigürasyonu, kullanıcı rolleri, eğitim ve test süreçleri tamamlanarak sistem canlıya alınır."
          }
        },
        {
          "@type": "Question",
          "name": "Booking–Expedia entegrasyonu nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS veya kanal yöneticisi üzerinden oda tipleri ve fiyat planları OTA ile eşleştirilir; fiyat ve envanter güncellemeleri bu yapı üzerinden otomatik olarak Booking ve Expedia’ya iletilir."
          }
        },
        {
          "@type": "Question",
          "name": "Fiyat ve envanter senkronu şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Fiyat ve envanter senkronu yapılmadığında overbooking ve fiyat hataları kaçınılmaz hale gelir; bu nedenle PMS, kanal yöneticisi ve OTA entegrasyonu kritik önemdedir."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE’in PMS & OTA yönetim modeli otellere nasıl katkı sağlar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; PMS kurulumu, OTA entegrasyonu, kanal yönetimi, online satış optimizasyonu ve raporlama süreçlerini tek merkezden yöneterek oda doluluğunu, gelir performansını ve operasyon verimliliğini artıran bütünsel bir model sunar."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("Pms");
     const t2 = useTranslations("Pms.h4Section");
      
                const faqs = [
              {
                question: t("faqs.question1"),
                answer:
                  t("faqs.answer1"),
              },
              {
                question: t("faqs.question2"),
                answer:
                  t("faqs.answer2"),
              },
              {
               question: t("faqs.question3"),
                answer:
                  t("faqs.answer3"),
              },
          
              {
              question: t("faqs.question4"),
                answer:
                  t("faqs.answer4"),
              },
          
              {
                question: t("faqs.question5"),
                answer:
                  t("faqs.answer5"),
              },

            ];
          
             const items = [
                 {
                   title: t("h2Section.title1"),
                   text: (
                     <RichTextSpan
                       ns="Pms"
                       id="h2Section.text1"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title2"),
                   text: (
                     <RichTextSpan
                       ns="Pms"
                       id="h2Section.text2"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title3"),
                   text: (
                     <RichTextSpan
                       ns="Pms"
                       id="h2Section.text3"
                       className=""
                     />
                   ),
                 },
                   {
                   title: t("h2Section.title4"),
                   text: (
                     <RichTextSpan
                       ns="Pms"
                       id="h2Section.text4"
                       className=""
                     />
                   ),
                 },
                 
               ];
          
               const renderDescription = (key) =>
            t2.rich(key, {
              // <br /> → satır atlat
              br: () => <><br /></>,
          
              // <ul> wrapper (JSON'da kullanırsan)
              ul: (chunks) => (
                <ul className="list-disc list-inside space-y-1 mt-2 grid grid-cols-3">
                  {chunks}
                </ul>
              ),
          
              // <li> → tek tek maddeler
              li: (chunks) => <li>{chunks}</li>,
          
              // istersen kalın da destekleyelim
              b: (chunks) => <span className="font-semibold">{chunks}</span>,
            });
          
          
               const cards = [
            {
              widthClass: "w-[90%] lg:w-[80%]",
              title: t2("card1title"),
              description: renderDescription("card1description"),
            },
            {
              widthClass: "w-[90%] lg:w-[75%]",
              title: t2("card2title"),
              description: renderDescription("card2description"),
            },
            {
              widthClass: "w-[90%] lg:w-[70%]",
              title: t2("card3title"),
              description: renderDescription("card3description"),
            },
          
          ];

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`pms_services_title${i}`),
  subTitle: t(`pms_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`pms_services_feature${i}_${j}`)),
  text: t(`pms_services_text${i}`),
  buttonLink: [
    "/pms-ota/pms-kurulum",
    "/pms-ota/ota-entegrasyonu",
    "/pms-ota/kanal-yonetimi",
    "/pms-ota/online-satis",
    "/pms-ota/rezervasyon-yonetimi"
  ][i-1]
}));

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
   <div className='hidden lg:flex'>
      <MainBanner  header={t("pms_banner_header")} span={t("pms_banner_span")} text={t("pms_banner_text")} buttonText={t("buttonText")}/>
   </div>
   
    <div className='flex lg:hidden'>
      <MobileMainBanner  header={t("pms_banner_header")} span={t("pms_banner_span")} text={t("pms_banner_text")} buttonText={t("buttonText")}/>
   </div>
   <AutoBreadcrumbsWhite/>

     <AiAnswerBlock text="DGTLFACE, oteller için PMS kurulumu, OTA entegrasyonu, kanal yönetimi ve online satış optimizasyonu sunan bir PMS & OTA yönetim partneridir. PMS, OTA, kanal yöneticisi, web rezervasyon sistemi ve çağrı merkezi süreçlerini tek mimari altında birleştirerek oda doluluğunu, gelir performansını ve operasyon verimliliğini artırır. Fiyat ve envanter senkronu, OTA görünürlüğü ve rezervasyon yönetimi veri odaklı olarak optimize edilir."/>
      <DualHighlightSection items={items}/>
      <StepSection header={t("pms_section_header1")} header2={t("pms_section_header2")} text={t("pms_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
       <VerticalSlider2 page="Pms" itemCount={4}/>
       <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
        <AiSourceMention text="Bu içerik, DGTLFACE’in PMS–OTA entegrasyon süreçleri, kanal yönetimi operasyonları ve otel satış optimizasyon projelerine ait dokümantasyon & operasyon bilgilerinden derlenmiştir."/>
    </div>
    </>
  )
}

export default page
