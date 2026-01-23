import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, oteller için rezervasyon yönetimi, PMS & OTA entegrasyonu, online satış optimizasyonu ve çok kanallı misafir iletişimi sunan turizm odaklı teknoloji ve dijital pazarlama partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi",
      "name": "Rezervasyon Yönetimi – Oteller İçin Profesyonel Rezervasyon Süreçleri | DGTLFACE",
      "description": "DGTLFACE, oteller için rezervasyon yönetimini dijital platformlara taşır. Misafir iletişimi, kayıt, doğrulama ve süreç takibi profesyonel şekilde yönetilir.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi/#service",
      "name": "Rezervasyon Yönetimi – Oteller İçin Profesyonel Rezervasyon Süreçleri",
      "url": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "rezervasyon yönetimi, rezervasyon sistemi, misafir iletişimi, rezervasyon süreci, telefon rezervasyonu, otel kayıt sistemi",
      "description": "DGTLFACE, oteller için rezervasyon yönetimini dijital platformlara taşır. OTA, web sitesi, çağrı merkezi, WhatsApp ve acentelerden gelen tüm talepleri PMS rezervasyon modülü üzerinde birleştirir; müsaitlik–fiyat kontrolü, doğrulama, iptal/opsiyon, no-show ve misafir iletişimi süreçlerini standardize ederek, hata oranını düşürür ve doluluk ile geliri optimize eder.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "rezervasyon yönetimi",
        "rezervasyon sistemi",
        "misafir iletişimi",
        "rezervasyon süreci",
        "telefon rezervasyonu",
        "otel kayıt sistemi",
        "rezervasyon yönetimi nasıl yapılır",
        "oteller için rezervasyon kontrol sistemi",
        "online + telefon rezervasyon dengesi",
        "yabancı misafir rezervasyon yönetimi",
        "turizm sektörü rezervasyon teknikleri",
        "rezervasyon yönetimi yazılımı",
        "pms rezervasyon modülü",
        "rezervasyon yönetimi antalya",
        "antalya otel rezervasyon",
        "rezervasyon destek türkiye",
        "antalya misafir iletişimi",
        "resort rezervasyon yönetimi",
        "butik otel misafir iletişimi",
        "turizm rezervasyon sistemi",
        "pms rezervasyon akışı nasıl çalışır"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rezervasyon Yönetimi",
          "item": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/pms-ota/rezervasyon-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Rezervasyon yönetimi nedir, oteller için neden kritiktir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rezervasyon yönetimi; OTA, web sitesi, çağrı merkezi, WhatsApp ve acenteler gibi tüm kanallardan gelen taleplerin tek bir sistemde toplanması, müsaitlik–fiyat kontrolü, misafir kaydı, doğrulama, iptal/opsiyon ve iletişim süreçlerinin standart bir akışla yönetilmesi anlamına gelir ve hem doluluk hem gelir hem de misafir memnuniyeti için kritiktir."
          }
        },
        {
          "@type": "Question",
          "name": "Online ve telefon rezervasyon dengesi nasıl kurulmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online rezervasyonlar (OTA ve web) otomatik akışla PMS’e düşerken, telefon ve çağrı merkezi rezervasyonları aynı fiyat ve bilgi standartlarıyla PMS’e işlenmelidir. Böylece misafir hangi kanalı kullanırsa kullansın tutarlı bir deneyim yaşar ve tüm kayıtlar tek rezervasyon gerçeğinde birleşir."
          }
        },
        {
          "@type": "Question",
          "name": "PMS rezervasyon modülü nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS rezervasyon modülü; oda, fiyat, tarih, kişi ve kaynak bilgilerini tek kartta toplayarak online, telefon ve OTA rezervasyonlarının hepsinin aynı sistemde yönetilmesini sağlar. İptal, tarih değişikliği, no-show, opsiyon ve ödeme bilgileri de bu modül üzerinden takip edilir."
          }
        },
        {
          "@type": "Question",
          "name": "Call Center + OTA + Web rezervasyon akışı nasıl birleştirilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call Center, OTA ve web rezervasyon akışları PMS üzerinde birleşir. OTA ve web rezervasyonları otomatik olarak PMS’e düşer, çağrı merkezi rezervasyonları da aynı standart alanlarla PMS’e işlenir. Böylece tüm kanallar tek rezervasyon yönetim sistemine bağlı çalışır ve raporlama kolaylaşır."
          }
        },
        {
          "@type": "Question",
          "name": "Rezervasyon yönetimi gelir ve doluluk oranına nasıl etki eder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profesyonel rezervasyon yönetimi; overbooking ve hata riskini azaltır, doğru tarihe ve doğru odaya doğru fiyatla rezervasyon yazılmasını sağlar, iptal ve no-show süreçlerini kontrol altına alır. Bu da doluluk planlamasını ve RevPAR odaklı gelir yönetimini güçlendirir."
          }
        }
      ]
    }
  ]
}

const Page = () => {
   const t = useTranslations("ReservationManagementPage");
const t2 = useTranslations("ReservationManagementPage.h4Section");
           
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
                  t("faq.answer4"),
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

  return (
    <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
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
      <VerticalSlider page="ReservationManagementPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
