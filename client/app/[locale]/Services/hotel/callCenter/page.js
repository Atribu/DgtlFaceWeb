import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
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
      "description": "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi, PMS & OTA entegrasyonu, online satış ve dijital pazarlama süreçlerini birlikte yöneten turizm odaklı bir teknoloji ve performans partneridir.",
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
      "@id": "https://dgtlface.com/tr/otel/cagri-merkezi/#webpage",
      "url": "https://dgtlface.com/tr/otel/cagri-merkezi",
      "name": "Otel Rezervasyon Çağrı Merkezi – Çok Dilli Rezervasyon & Misafir Destek | DGTLFACE",
      "description": "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi hizmeti sunar. Hotel reservation call center, çok dilli otel destek, otel inbound/outbound, rezervasyon misafir iletişimi ve turizm call center modeliyle; telefon, WhatsApp, DM, OTA mesajları ve web formlarından gelen talepleri tek rezervasyon hunisinde toplar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/otel/cagri-merkezi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/otel/cagri-merkezi/#service",
      "name": "Otel Rezervasyon Çağrı Merkezi – Çok Dilli Rezervasyon & Misafir Destek",
      "url": "https://dgtlface.com/tr/otel/cagri-merkezi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "otel rezervasyon çağrı merkezi, hotel reservation call center, çok dilli otel destek, otel inbound/outbound, rezervasyon misafir iletişimi, turizm call center",
      "description": "DGTLFACE, oteller için çok dilli rezervasyon çağrı merkezi hizmeti sunar. TR–EN–DE–RU dillerinde inbound/outbound görüşmelerle; oteller için rezervasyon telefonu yönetimi, turist rezervasyon destek hattı, yabancı misafir rezervasyon yönetimi, resort müşteri hizmetleri, Booking ve Expedia rezervasyon destek süreçlerini yönetir. Telefon, WhatsApp, DM, web chat ve OTA mesajları PMS entegrasyonuyla tek rezervasyon ve raporlama akışında birleştirilir.",
      "areaServed": [
        "Antalya",
        "Belek",
        "Kemer",
        "Side",
        "Alanya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "otel rezervasyon çağrı merkezi",
        "hotel reservation call center",
        "çok dilli otel destek",
        "otel inbound/outbound",
        "rezervasyon misafir iletişimi",
        "turizm call center",
        "oteller için rezervasyon telefonu yönetimi",
        "turist rezervasyon destek hattı",
        "yabancı misafir rezervasyon yönetimi",
        "resort müşteri hizmetleri",
        "booking rezervasyon destek",
        "expedia rezervasyon çağrı merkezi",
        "resort call center",
        "luxury hotel support",
        "boutique hotel booking line",
        "spa hotel reservation desk",
        "antalya otel rezervasyon merkezi",
        "belek call center",
        "kemer otel destek",
        "alanya reservation center"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/otel/cagri-merkezi/#breadcrumb",
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
          "name": "Otel Dijital Pazarlama",
          "item": "https://dgtlface.com/tr/otel-dijital-pazarlama"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rezervasyon Çağrı Merkezi",
          "item": "https://dgtlface.com/tr/otel/cagri-merkezi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/otel/cagri-merkezi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Otel rezervasyon çağrı merkezi nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Otel rezervasyon çağrı merkezi; telefon, WhatsApp, DM, web chat ve OTA mesajlarından gelen rezervasyon ve misafir taleplerini TR–EN–DE–RU dillerinde karşılayan, PMS ve OTA ile entegre çalışan, satış ve misafir memnuniyeti odaklı profesyonel bir call center yapısıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Çok dilli call center nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çok dilli call center’da çağrılar misafirin dil tercihine göre doğru temsilciye yönlendirilir. Türkçe, İngilizce, Almanca ve Rusça dillerinde eğitimli temsilciler; script’ler ve PMS entegrasyonu ile rezervasyon, değişiklik, iptal ve bilgi taleplerini standart bir kalite seviyesinde yönetir."
          }
        },
        {
          "@type": "Question",
          "name": "Telefon rezervasyonları PMS’e otomatik işlenebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Uygun PMS entegrasyonu ile call center üzerinden alınan tüm rezervasyonlar PMS’e işlenir. Böylece müsaitlik, fiyat ve gelir raporları tek kaynaktan takip edilir; overbooking ve kayıt hataları azaltılır."
          }
        },
        {
          "@type": "Question",
          "name": "Otel çağrı merkezi 7/24 çalışabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İhtiyaca göre 08:00–01:00 gibi geniş zaman aralığında veya tam 7/24 hizmet modeli kurulabilir. Vardiya planlaması otelin hedef pazarları, zaman dilimleri ve çağrı yoğunluğuna göre yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE oteller için nasıl call center operasyonu kuruyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; mevcut çağrı ve rezervasyon akışını analiz eder, hedef KPI’ları belirler, çok dilli script ve süreç tasarımı yapar, PMS ve OTA entegrasyonlarını kurgular. Pilot dönem sonrası tam operasyon devreye alınır ve aylık performans raporlarıyla dönüşüm ve gelir etkisi düzenli olarak izlenir."
          }
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("HotelCallCenter");
   const t2 = useTranslations("HotelCallCenter.h4Section");
           
              const stepData = [1,2,3,4,5,6,7,8].map(i => ({
                id: i,
                image: [image1,image2,image1,image2,image1,image1,image2,image1][i-1],
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
      <VerticalSlider page="HotelCallCenter" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in otel çağrı merkezi, rezervasyon yönetimi, PMS/OTA entegrasyonu ve çok dilli misafir iletişimi süreçlerine ait resmi iç dokümantasyonundan derlenmiştir."/>
    </div>
  </>
  )
}

export default page
