import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
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
      "description": "DGTLFACE, Elektraweb ve diğer otel PMS sistemleri için kurulum, eğitim ve destek sunan; rezervasyon, oda & fiyat yönetimi ve otel operasyon süreçlerini dijitalleştiren turizm odaklı teknoloji ve dijital pazarlama partneridir.",
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
      "@id": "https://dgtlface.com/tr/pms-ota/pms-kurulum/#webpage",
      "url": "https://dgtlface.com/tr/pms-ota/pms-kurulum",
      "name": "Otel PMS Kurulum & Destek – Rezervasyon ve Operasyon Yönetimi | DGTLFACE",
      "description": "DGTLFACE, Elektraweb ve diğer PMS sistemleri için kurulum, eğitim ve destek sunar. Otel operasyonlarını dijital ve hızlı yönetin.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/pms-ota/pms-kurulum/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/pms-ota/pms-kurulum/#service",
      "name": "Otel PMS Kurulum & Destek – Rezervasyon ve Operasyon Yönetimi",
      "url": "https://dgtlface.com/tr/pms-ota/pms-kurulum",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "pms kurulumu, elektraweb kurulumu, otel pms eğitimi, pms destek hizmeti, otel operasyon sistemi, rezervasyon yazılımı",
      "description": "DGTLFACE, Elektraweb ve diğer otel PMS sistemleri için kurulum, modül yapılandırma, eğitim ve sürekli destek sunar. PMS kurulumu ile resepsiyon, rezervasyon, housekeeping, faturalama ve raporlama süreçleri otel yapısına göre dijitalleştirilir; PMS–OTA–Channel Manager entegrasyonlarıyla fiyat ve envanter tek merkezden yönetilir ve PMS performans raporları Looker Studio dashboard’larına taşınır.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "pms kurulumu",
        "elektraweb kurulumu",
        "otel pms eğitimi",
        "pms destek hizmeti",
        "otel operasyon sistemi",
        "rezervasyon yazılımı",
        "pms kurulumu nasıl yapılır",
        "elektraweb eğitim rehberi",
        "pms otel operasyon entegrasyonu",
        "pms fiyat yönetimi",
        "resepsiyon pms eğitimi",
        "multi-ota entegrasyon pms",
        "pms performans raporlama",
        "turizm işletmeleri için pms çözümleri",
        "pms modül kurulumu",
        "pms rezervasyon akışı nasıl çalışır",
        "resort pms kurulumu",
        "butik otel pms destek",
        "turizm pms eğitim hizmeti",
        "elektraweb uzman desteği",
        "pms kurulumu antalya",
        "elektraweb antalya",
        "pms eğitimi türkiye",
        "turizm pms destek antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/pms-ota/pms-kurulum/#breadcrumb",
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
          "name": "PMS Kurulum & Destek",
          "item": "https://dgtlface.com/tr/pms-ota/pms-kurulum"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/pms-ota/pms-kurulum/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "PMS (otel yönetim sistemi) nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS, otellerde rezervasyon, misafir, oda, fiyat ve operasyon süreçlerini tek sistemde toplayan, ön büro ve yönetim ekiplerinin günlük işlerini yönettiği temel otel yönetim yazılımıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Otel için PMS kurulumu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS kurulumu; otel tipinin ve süreçlerin analiz edilmesi, oda–fiyat–kanal–kullanıcı yapılandırmasının yapılması, OTA ve kanal yöneticisi entegrasyonlarının kurulması, personel eğitimi ve canlıya geçiş sürecinin planlanması adımlarıyla gerçekleştirilir."
          }
        },
        {
          "@type": "Question",
          "name": "Elektraweb kurulumu ve eğitimi nasıl işliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elektraweb kurulumunda otel ve oda bilgileri, fiyat şablonları, sezonlar ve kullanıcı rolleri tanımlanır; ardından resepsiyon, rezervasyon, yönetim ve diğer ekipler için rol bazlı uygulamalı eğitimler verilir ve ilk aylarda yakın destek sağlanır."
          }
        },
        {
          "@type": "Question",
          "name": "PMS üzerinden fiyat ve oda yönetimi nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS’te tanımlanan oda tipleri, sezonlar, fiyat planları ve kalış kuralları üzerinden fiyat ve envanter yönetilir; PMS–Channel Manager–OTA entegrasyonu sayesinde güncellemeler tüm satış kanallarına tek panelden dağıtılır."
          }
        },
        {
          "@type": "Question",
          "name": "PMS, OTA ve kanal yönetimiyle entegre mi çalışmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. PMS’in OTA ve kanal yöneticisiyle entegre çalışması; overbooking riskini azaltmak, fiyat–envanter tutarlılığını sağlamak ve operasyonu hızlandırmak için kritik öneme sahiptir."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("PmsSetupPage");
const t2 = useTranslations("PmsSetupPage.h4Section");
           
              const stepData = [1,2,3,4].map(i => ({
                id: i,
                image: [image1,image2,image3,image4][i-1],
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
               { title: t("h2Section.header1"),   text: t.raw("h2Section.text1")},
               { title: t("h2Section.header2"),  text: t.raw("h2Section.text2")},
               { title: t("h2Section.header3"), text: t.raw("h2Section.text3")},
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
       <SubBanner header={t("subbanner_header")} header2={t("subbanner_header2")} text={t.raw("subbanner_text")} header3={t("subbanner_header3")} text2={t.raw("subbanner_text2")}  buttonLink="/" buttonText={t("cta_talk_to_us")}/>
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
      <VerticalSlider page="PmsSetupPage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in PMS kurulum & eğitim süreçleri, Elektraweb ve otel yönetim yazılımlarıyla yaptığı entegrasyon projelerine ait dahili dokümantasyon ve saha deneyimlerinden derlenmiştir."/>
    </div>
  </>
  )
}

export default page
