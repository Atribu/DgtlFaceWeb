import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import LogoListSection from '@/app/[locale]/components/subPageComponents/LogoListSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, Google Ads kampanyalarını bütçe, hedefleme ve reklam optimizasyonuyla yöneten; oteller ve markalar için dönüşüm odaklı Google Ads yönetimi sunan dijital reklam ajansıdır.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe"]
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
      "@id": "https://dgtlface.com/tr/sem/google-ads-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/sem/google-ads-yonetimi",
      "name": "Google Ads Yönetimi – Uzman Kampanya Optimizasyonu | DGTLFACE",
      "description": "DGTLFACE, Google Ads’te bütçe, hedefleme ve reklam optimizasyonu ile dönüşümlerinizi artırır. Oteller ve markalar için profesyonel Google Ads yönetimi sunar.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "google ads yönetimi",
        "google reklam ajansı",
        "google ads profesyonel yönetim",
        "google ads optimizasyon hizmeti",
        "turizm google ads kampanyası",
        "otel google ads yönetimi"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/sem/google-ads-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/google-ads-yonetimi/#service",
      "name": "Google Ads Yönetimi – Uzman Kampanya Optimizasyonu",
      "url": "https://dgtlface.com/tr/sem/google-ads-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "google ads yönetimi, google reklam ajansı, google ads profesyonel yönetim, google ads optimizasyon hizmeti, turizm google ads kampanyası",
      "description": "DGTLFACE, Google Ads kampanyalarınızı sadece tıklama değil; satış ve rezervasyon odaklı bir yapıda yönetir. Anahtar kelime stratejisi, hedef kitle segmentasyonu, teklif optimizasyonu, reklam metni testleri ve dönüşüm takibi gibi süreçleri bütüncül bir performans modeli içinde yürütür.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "google ads yönetimi",
        "google reklam ajansı",
        "google ads profesyonel yönetim",
        "google advertising expert",
        "google ads optimizasyon hizmeti",
        "google reklam kampanyası",
        "google ads reklam maliyetini nasıl düşürürüm",
        "google ads dönüşüm oranı artırma teknikleri",
        "satış odaklı google reklam ayarları",
        "oteller için google ads",
        "turizm google ads kampanyası",
        "google ads anahtar kelime stratejileri",
        "google reklamlarında kalite puanı artırma",
        "google ads arama ağı optimizasyonu",
        "google reklam metni nasıl yazılır",
        "google ads hedef kitle optimizasyonu",
        "otel google ads yönetimi",
        "turizm sektöründe google reklamları",
        "otel satış artırma google ads",
        "booking entegrasyonlu google ads",
        "google ads antalya",
        "antalya google reklam ajansı",
        "google ads yönetimi türkiye",
        "antalya dijital pazarlama"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/google-ads-yonetimi/#breadcrumb",
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
          "name": "SEM – Dijital Reklam Yönetimi",
          "item": "https://dgtlface.com/tr/sem"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Google Ads Yönetimi",
          "item": "https://dgtlface.com/tr/sem/google-ads-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/google-ads-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "DGTLFACE’in Google Ads yönetim hizmeti neleri kapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; anahtar kelime stratejisi, kampanya ve reklam kurulumu, hedef kitle optimizasyonu, dönüşüm takibi, bütçe ve teklif (bid) optimizasyonu, reklam metni testleri ve performans raporlamasını kapsayan uçtan uca Google Ads yönetimi sunar."
          }
        },
        {
          "@type": "Question",
          "name": "Google Ads kampanya optimizasyonu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kampanya yapısı, anahtar kelime ve arama terimi analizleri, negatif kelime temizliği, teklif stratejileri, reklam metin testleri, cihaz/bölge/saat optimizasyonu ve açılış sayfası performansı birlikte değerlendirilerek yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için Google Ads stratejisi nasıl kurgulanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marka aramaları, destinasyon aramaları, konsept aramaları (family, adults-only vb.), kampanya ve sezon aramaları için ayrı kampanya setleri oluşturulur; her segment için farklı mesaj, teklif ve açılış sayfası kullanılır."
          }
        },
        {
          "@type": "Question",
          "name": "Google Ads bütçesi nasıl planlanmalı ve optimize edilmeli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bütçe, hedef pazar, sezon, oda fiyatları ve beklenen doluluk hedeflerine göre planlanır; performansı yüksek kampanyalara bütçe kaydırılır, düşük performanslı kombinasyonlar azaltılır veya kapatılır."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE ile Google Ads yönetimi klasik ajanslardan nasıl farklıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, Google Ads’i tek başına değil; SEO, SMM, web & rezervasyon, PMS–OTA ve çağrı merkezi süreçleriyle birlikte ele alır. Böylece sadece tıklama değil, gerçek satış ve rezervasyon verileri üzerinden optimizasyon yapılır."
          }
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("GoogleAdsAdvertising");
   const t2 = useTranslations("GoogleAdsAdvertising.h4Section");

   const stepData = [1,2,3,4,5].map(i => ({
     id: i,
     image: [image1,image2,image3,image4, image4][i-1],
     header: t(`h3Section.header${i}`),
     text:   t(`h3Section.text${i}`)
   }));



   const cards = [
    {
      widthClass: "w-[95%] lg:w-[80%]",
      title: t2("card1title"),
      description: t2("card1description"),
    },
    {
      widthClass: "w-[95%] lg:w-[75%]",
      title: t2("card2title"),
      description: t2("card2description"),
    },
    {
      widthClass: "w-[95%] lg:w-[70%]",
      title: t2("card3title"),
      description: t2("card3description"),
    },

  ];

    const faqs = [
    {
      question: t("faq.question1"),
      answer:
       t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer:
       t("faq.answer2"),
    },
    {
       question: t("faq.question3"),
      answer:
       t("faq.answer3"),
    },

    {
    question: t("faq.question4"),
      answer:
       t("faq.answer4"),
    },

    {
    question: t("faq.question5"),
      answer:
       t("faq.answer5"),
    },


  ];
   
  return (
    <>
     <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className='flex flex-col gap-[12px] lg:gap-[80px] bg-[#080612] overflow-x-hidden items-center justify-center pb-10'>

        <SubBanner
  header={t("googleadsadvertising_subbanner_header")}
  header2={t("googleadsadvertising_subbanner_header2")}
  header3={t("googleadsadvertising_subbanner_header3")}
  text={t("googleadsadvertising_subbanner_text")}
   text2={t("googleadsadvertising_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AiAnswerBlock text="DGTLFACE, Google Ads kampanyalarını sadece tıklama odağında değil; satış, rezervasyon ve gerçek dönüşüm odağında yönetir. Anahtar kelime stratejisi, negatif kelimeler, bütçe ve teklif (bid) optimizasyonu, reklam metni testleri ve kalite puanı iyileştirmesini bir arada ele alır. Özellikle otel ve turizm işletmeleri için oda doluluğu, rezervasyon ve gelir artışını hedefleyen arama ağı, marka ve remarketing kampanyaları kurgulanır ve Looker Studio panelleriyle şeffaf şekilde raporlanır."/>
 <StepSection2New data={stepData} header={t("h3.Section.header")}/>
      <div>
      <H2LogoSection  title1={t("googleadsadvertising_step5_header")}
       text1={t("googleadsadvertising_step5_text")}
        title2={t("googleadsadvertising_step6_header")}
         text2={t("googleadsadvertising_step6_text")}/>
      </div>

    <div>
         <LogoListSectionBlack
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <VerticalSlider page="GoogleAdsAdvertising" itemCount={3}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin resmi Google Ads yönetimi dokümantasyonu ve SEM hizmet tanımlarından derlenmiştir."/>
    </div>
    </>
  )
}

export default page
