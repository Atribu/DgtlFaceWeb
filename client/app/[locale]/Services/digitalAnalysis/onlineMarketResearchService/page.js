import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, oteller ve markalar için benchmark analizi, rakip ve sektör performans karşılaştırması, OTA fiyat analizi, turizm fiyat karşılaştırması ve çok kanallı performans benchmark çözümleri sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/raporlama/benchmark-analizi/#webpage",
      "url": "https://dgtlface.com/tr/raporlama/benchmark-analizi",
      "name": "Benchmark Analizi – Rakip & Sektör Performans Karşılaştırması | DGTLFACE",
      "description": "DGTLFACE, haftalık ve aylık benchmark analizleriyle rakiplerinizi, fiyat stratejinizi ve sektör performansınızı karşılaştırır. Oteller için özel benchmark sistemi kurar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/raporlama/benchmark-analizi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/raporlama/benchmark-analizi/#service",
      "name": "Benchmark Analizi – Rakip & Sektör Performans Karşılaştırması",
      "url": "https://dgtlface.com/tr/raporlama/benchmark-analizi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "benchmark analizi, rakip analizi, fiyat karşılaştırma, performans benchmark, KPI benchmark, sektör analizi",
      "description": "DGTLFACE, haftalık ve aylık benchmark analizleriyle otel ve markaların performansını rakip ve sektör verileriyle kıyaslar. OTA fiyat karşılaştırmaları, doluluk ve talep trendleri, dijital reklam benchmark, pazar payı analizi ve fiyat optimizasyon raporlarıyla fiyatlandırma, kampanya, kanal ve satış stratejilerine veri odaklı yön verir.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "benchmark analizi",
        "rakip analizi",
        "fiyat karşılaştırma",
        "performans benchmark",
        "kpi benchmark",
        "sektör analizi",
        "benchmark analizi nasıl yapılır",
        "rakip performans raporu hazırlama",
        "oteller için benchmark sistemi",
        "turizm fiyat karşılaştırması",
        "satış performansı benchmark",
        "dijital reklam benchmark",
        "pazar payı analizi",
        "rakip veri takibi",
        "benchmark dashboard nasıl kurulur",
        "fiyat optimizasyon raporu",
        "otel benchmark raporu",
        "turizm sektörü benchmark",
        "resort fiyat analizi",
        "ota benchmark",
        "benchmark analizi antalya",
        "fiyat analizi antalya",
        "rakip raporlama türkiye",
        "benchmark hizmeti antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/raporlama/benchmark-analizi/#breadcrumb",
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
          "name": "Veri Analizi & Raporlama",
          "item": "https://dgtlface.com/tr/veri-analiz-ve-raporlama"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Benchmark Analizi",
          "item": "https://dgtlface.com/tr/raporlama/benchmark-analizi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/raporlama/benchmark-analizi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Benchmark analizi nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Benchmark analizi; doluluk, gelir, fiyat, dönüşüm, ROAS ve etkileşim gibi KPI’larınızı rakip ve sektör ortalamalarıyla kıyaslayarak güçlü ve zayıf yönlerinizi ortaya çıkaran, fiyatlandırma ve pazarlama stratejilerinize yön veren çok katmanlı performans karşılaştırma modelidir."
          }
        },
        {
          "@type": "Question",
          "name": "Rakip performansı nasıl ölçülür?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rakip performansı; seçilen rakip seti için OTA fiyatları, doluluk ve talep trendleri, dijital görünürlük (SEO, Ads, sosyal medya), yorum sayısı ve puanlar, kanal dağılımı ve kampanya davranışları gibi metrikler üzerinden ölçülür ve sizin KPI’larınızla kıyaslanır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için benchmark raporu nasıl hazırlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için benchmark raporu hazırlanırken; benzer segment ve lokasyondaki otellerden oluşan bir rakip seti tanımlanır, OTA ve PMS verileri, pazar raporları ve dijital performans verileri toplanır, Looker Studio benchmark dashboard’larında doluluk, ADR, RevPAR, fiyat ve kanal performansı birlikte görselleştirilir."
          }
        },
        {
          "@type": "Question",
          "name": "OTA fiyat karşılaştırması nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA fiyat karşılaştırması; belirli tarihler, oda tipleri ve pazarlar için sizin ve rakiplerinizin OTA fiyatlarının periyodik olarak takip edilmesi ve fiyat eğrilerinin doluluk ve talep verileriyle birlikte analiz edilmesiyle yapılır. Böylece fiyatınızın pazarın neresinde konumlandığı netleşir."
          }
        },
        {
          "@type": "Question",
          "name": "Benchmark analizi satış stratejisine nasıl yön verir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Benchmark analizi; hangi pazarda ve kanalda geri kaldığınızı, nerede güçlü olduğunuzu ve hangi fiyat aralığında daha verimli satış yaptığınızı göstererek satış stratejinize yön verir. Fiyat, kampanya, kanal seçimi ve pazarlama bütçesi kararları veriyle desteklenmiş hâle gelir."
          }
        }
      ]
    }
  ]
}

const page = () => {
    const t = useTranslations("BenchmarkAnalysisPage");
  
 const t2 = useTranslations("BenchmarkAnalysisPage.h4Section");
           
              const stepData = [1,2,3].map(i => ({
                id: i,
                image: [image1,image2,image1][i-1],
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
           
               const h2items = [
               { title: t("h2Section.header1"),text: t("h2Section.text1") },
               { title: t("h2Section.header2"), text: t("h2Section.text2") },
               { title: t("h2Section.header3"), text: t("h2Section.text3") }
             ];

  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />


    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden items-center justify-center'>
      <SubBanner
  header={t("subbanner_header")}
  header2={t("subbanner_header2")}
  text={t("subbanner_text")}
    header3={t("subbanner_header3")}
  text2={t("subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <AiAnswerBlock text={t("ai_answer_text")}/>
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
      <VerticalSlider page="BenchmarkAnalysisPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in benchmark raporlama, rakip karşılaştırma, OTA fiyat analizleri ve turizm sektörüne özel veri karşılaştırma süreçlerine ait iç dokümantasyon ve proje deneyimlerinden derlenmiştir."/>
    </div>
   </>
  )
}

export default page
