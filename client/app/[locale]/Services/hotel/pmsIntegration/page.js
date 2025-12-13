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
      "description": "DGTLFACE, oteller için PMS entegrasyonu, OTA yönetimi, kanal yönetimi, web rezervasyon sistemleri, çağrı merkezi ve dijital pazarlama süreçlerini entegre eden, rezervasyon ve operasyon odaklı bir turizm teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/otel/pms-entegrasyonu/#webpage",
      "url": "https://dgtlface.com/tr/otel/pms-entegrasyonu",
      "name": "Otel PMS Entegrasyonu – Rezervasyon & Operasyon Sistemleri | DGTLFACE",
      "description": "DGTLFACE, otel PMS entegrasyonu ile operasyon, rezervasyon, satış ve oda yönetimi süreçlerini hızlandırır. Elektraweb PMS, PMS hotel system, otel operasyon sistemi, PMS eğitim, PMS teknik destek, PMS entegrasyonu nasıl yapılır, otel PMS modülleri ve PMS rezervasyon yürütme sistemi gibi alanlarda profesyonel entegrasyon ve destek sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/otel/pms-entegrasyonu/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/otel/pms-entegrasyonu/#service",
      "name": "Otel PMS Entegrasyonu – Rezervasyon & Operasyon Sistemleri",
      "url": "https://dgtlface.com/tr/otel/pms-entegrasyonu",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "otel pms entegrasyonu, elektraweb pms, pms hotel system, otel operasyon sistemi, pms eğitim, pms teknik destek",
      "description": "DGTLFACE, otel PMS entegrasyonu ile operasyon, rezervasyon, satış ve oda yönetimi süreçlerini hızlandırır. Elektraweb PMS ve diğer sistemlerde; PMS kurulumu, kanal yönetimi + PMS uyumu, OTA entegrasyonu, PMS rezervasyon yürütme sistemi, resort PMS yönetimi, butik otel PMS destek ve operasyon yükünü azaltan PMS özellikleriyle oteller için entegre çözümler sunar.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "otel pms entegrasyonu",
        "elektraweb pms",
        "pms hotel system",
        "otel operasyon sistemi",
        "pms eğitim",
        "pms teknik destek",
        "pms entegrasyonu nasıl yapılır",
        "otel pms modülleri",
        "elektraweb pms eğitim rehberi",
        "resort pms yönetimi",
        "butik otel pms destek",
        "operasyon yükünü azaltan pms özellikleri",
        "kanal yönetimi + pms uyumu",
        "pms rezervasyon yürütme sistemi",
        "resort pms",
        "turizm pms entegrasyonu",
        "luxury hotel pms",
        "villa pms entegrasyonu",
        "elektraweb antalya",
        "pms entegrasyon türkiye",
        "antalya pms uzmanı",
        "turizm pms destek antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/otel/pms-entegrasyonu/#breadcrumb",
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
          "name": "PMS Entegrasyonu",
          "item": "https://dgtlface.com/tr/otel/pms-entegrasyonu"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/otel/pms-entegrasyonu/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "PMS entegrasyonu nedir, otel için neden kritiktir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS entegrasyonu; otel PMS sisteminin OTA, kanal yöneticisi, web rezervasyon motoru, çağrı merkezi, muhasebe ve raporlama araçlarıyla otomatik veri alışverişi yapacak şekilde bağlanmasıdır. Böylece rezervasyon, oda, fiyat ve gelir verileri tek merkezde toplanır, overbooking ve fiyat hataları azalır, operasyon ve raporlama verimli hâle gelir."
          }
        },
        {
          "@type": "Question",
          "name": "PMS, OTA ve kanal yönetimi ile nasıl entegre çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS fiyat ve envanterin ana kaynağıdır. Channel Manager, PMS’ten aldığı oda ve fiyat bilgilerini tüm OTA kanallarına dağıtır; OTA’lardan gelen rezervasyonları tekrar PMS’e aktarır. Doğru kurgulanmış bir PMS + Channel Manager + OTA akışı, hem fiyat hem stok yönetimini tek kaynaktan kontrol etmenizi sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "Web sitesi rezervasyon sistemi PMS’e nasıl bağlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web rezervasyon motoru, PMS veya aradaki entegrasyon katmanı üzerinden bağlanır. Böylece web sitesinden gelen tüm rezervasyonlar otomatik olarak PMS’e düşer, müsaitlik ve fiyat güncellemeleri PMS tarafındaki verilere göre yönetilir. DGTLFACE, bu akışı rezervasyon hunisi ve raporlama ile uyumlu kurar."
          }
        },
        {
          "@type": "Question",
          "name": "Çağrı merkezi rezervasyonları PMS’e otomatik işlenebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Çağrı merkezi ve rezervasyon hattı için PMS tabanlı veya PMS ile entegre çalışan arayüzler tasarlanabilir. Böylece telefon, WhatsApp veya OTA mesajları üzerinden alınan rezervasyonlar da standart şekilde PMS’e kaydedilir ve tüm raporlama aynı veri seti üzerinden yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "Elektraweb PMS ile hangi entegrasyonlar yapılabiliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elektraweb PMS; OTA ve channel manager entegrasyonları, web rezervasyon sistemleri, çağrı merkezi, muhasebe ve raporlama araçlarıyla entegre çalışabilir. DGTLFACE, Elektraweb için kurulum, mapping, test ve eğitim süreçlerini uçtan uca yöneterek otelinizin dijital omurgasını bu sistem üzerine inşa eder."
          }
        }
      ]
    }
  ]
}


const page = () => {
   const t = useTranslations("PmsIntegrationPage");
   const t2 = useTranslations("PmsIntegrationPage.h4Section");
           
              const stepData = [1,2,3,4,5,6,7].map(i => ({
                id: i,
                image: [image1,image2,image1,image2,image1,image1,image2][i-1],
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
      <VerticalSlider page="PmsIntegrationPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in otel PMS entegrasyon projeleri, Elektraweb ve benzeri sistemlerle yaptığı dijital entegrasyon çalışmalarına ait dahili dokümantasyon ve saha tecrübelerinden derlenmiştir."/>
    </div>
  </>
  )
}

export default page
