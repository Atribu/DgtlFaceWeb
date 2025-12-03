import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import { useTranslations } from "next-intl";
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, markalar ve oteller için sosyal medya stratejisi, içerik takvimi, hedef kitle analizi ve KPI planlaması sunan, Antalya merkezli bir sosyal medya ve dijital pazarlama partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe"]
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/smm/planlama-strateji/#webpage",
      "url": "https://dgtlface.com/tr/smm/planlama-strateji",
      "name": "Sosyal Medya Strateji ve İçerik Planlama – Profesyonel SMM Yönetimi | DGTLFACE",
      "description": "DGTLFACE, markanız için sosyal medya stratejisi oluşturur; içerik takvimi, hedefleme ve KPI planlamasıyla etkileşim ve görünürlük sağlar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/smm/planlama-strateji/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/smm/planlama-strateji/#service",
      "name": "Sosyal Medya Strateji ve İçerik Planlama – Etkili SMM Yönetimi",
      "url": "https://dgtlface.com/tr/smm/planlama-strateji",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "sosyal medya stratejisi, sosyal medya planlama, içerik takvimi, sosyal medya yönetimi stratejileri, kpi planlama, sosyal medya analiz",
      "description": "DGTLFACE, sosyal medya stratejisini marka analizi, hedef kitle segmentasyonu, içerik kategorileri, aylık planlama ve KPI belirleme süreçleriyle oluşturur. Aylık içerik takvimi; Reels, post, story, kampanya ve sezonluk temaları kapsar, özellikle otel ve turizm markaları için sezon ve destinasyon odaklı sosyal medya planları sunar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "sosyal medya stratejisi",
        "sosyal medya planlama",
        "içerik takvimi",
        "sosyal medya yönetimi stratejileri",
        "kpi planlama",
        "sosyal medya analiz",
        "sosyal medya stratejisi nasıl hazırlanır",
        "içerik planlama araçları",
        "30 günlük içerik takvimi örneği",
        "reels planlama yöntemleri",
        "oteller için sosyal medya stratejisi",
        "turizm markaları için kampanya planı",
        "sosyal medya kriz yönetimi",
        "sosyal medya kpi belirleme rehberi",
        "hedef kitle analiz yöntemleri",
        "içerik planlama excel şablonu",
        "otel sosyal medya stratejisi",
        "resort içerik planlama",
        "turizm içerik takvimi",
        "otel aylık planlama paketi",
        "sosyal medya strateji antalya",
        "antalya sosyal medya planlama",
        "sosyal medya danışmanlığı türkiye",
        "antalya içerik takvimi"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/smm/planlama-strateji/#breadcrumb",
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
          "name": "Sosyal Medya Yönetimi",
          "item": "https://dgtlface.com/tr/sosyal-medya-yonetimi"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Planlama ve Strateji",
          "item": "https://dgtlface.com/tr/smm/planlama-strateji"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/smm/planlama-strateji/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Sosyal medya stratejisi nasıl oluşturulur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sosyal medya stratejisi; marka analizi, hedef kitle tanımı, platform seçimi, içerik temaları, KPI planlaması ve aylık içerik takvimi adımlarıyla oluşturulur."
          }
        },
        {
          "@type": "Question",
          "name": "İçerik takvimi nasıl planlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aylık temalar ve kampanyalar belirlenir, sonrasında haftalık bazda hangi gün hangi formatta (post, story, Reels vb.) içerik çıkılacağı bir takvim üzerinde planlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Hedef kitle analizi neden önemlidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hedef kitle analizi; içerik tonunu, formatları, yayın saatlerini ve reklam hedeflemesini belirleyerek sosyal medya stratejisinin isabet oranını yükseltir."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için sosyal medya stratejisi nasıl olmalıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için strateji; sezon, hedef ülke pazarları, otel konsepti ve satış hedeflerine göre içerik kategorileri, kampanyalar ve rezervasyon odaklı funnel’lar etrafında kurgulanmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "30 günlük sosyal medya planı nasıl hazırlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Önce aylık hedef ve temalar belirlenir, ardından 30 gün için içerik kategorileri ve formatlar dağıtılır; iyi bir plan feed post, story, Reels ve kampanya içeriklerinin dengeli bir karışımını içerir."
          }
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("SocialMediaStrategy");
      const t2 = useTranslations("SocialMediaStrategy.h4Section");
        
           const stepData = [1,2,3].map(i => ({
             id: i,
             image: [image1,image2,image2][i-1],
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
            { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
            { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
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
  header={t("smstrategy_subbanner_header")}
  header2={t("smstrategy_subbanner_header2")}
  text={t.raw("smstrategy_subbanner_text")}
    header3={t("smstrategy_subbanner_header3")}
  text2={t.raw("smstrategy_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>

 <AiAnswerBlock text={t("smstrategy_ai_answer_text")}/>
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
      <VerticalSlider page="SocialMediaStrategy" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in sosyal medya strateji planlama, içerik takvimi oluşturma ve turizm odaklı SMM stratejisi dokümantasyonundan derlenmiştir."/>
    </div>
   </>
  )
}

export default page
