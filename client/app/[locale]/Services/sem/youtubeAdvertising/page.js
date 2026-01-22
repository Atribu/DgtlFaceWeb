import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, YouTube reklamlarınızı hedef kitleye uygun optimize ederek görünürlük ve dönüşümlerinizi artıran; turizm ve otel odaklı YouTube video reklam stratejileri sunan profesyonel YouTube Ads ajansıdır.",
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
      "@id": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi",
      "name": "YouTube Reklam Yönetimi – Video Reklam Optimizasyonu | DGTLFACE",
      "description": "DGTLFACE, YouTube reklamlarınızı hedef kitleye uygun optimize ederek görünürlük ve dönüşümlerinizi artırır. Video reklam yönetiminde uzman ekiple çalışın.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "youtube reklam yönetimi",
        "youtube ads ajansı",
        "video reklam yönetimi",
        "youtube bumper ads",
        "youtube medya satın alma",
        "youtube remarketing",
        "turizm youtube kampanyaları",
        "otel youtube reklam kampanyası"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi/#service",
      "name": "YouTube Reklam Yönetimi – Video Reklam Optimizasyonu",
      "url": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "youtube reklam yönetimi, youtube ads ajansı, video reklam yönetimi, youtube bumper ads, youtube medya satın alma, youtube remarketing",
      "description": "DGTLFACE, YouTube reklamlarını marka bilinirliği, etkileşim ve rezervasyon/satış artırma odaklı olarak yönetir. Bumper, in-stream, discovery, Shorts ve remarketing video kampanyalarını hedef kitle, ülke ve segment bazında optimize eder; turizm ve otel markaları için yüksek etkileşim ve performans sağlar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "youtube reklam yönetimi",
        "youtube ads ajansı",
        "video reklam yönetimi",
        "youtube bumper ads",
        "youtube medya satın alma",
        "youtube remarketing",
        "youtube reklam bütçesi nasıl belirlenir",
        "youtube reklam hedefleme teknikleri",
        "video içeriklerle satış artırma",
        "marka bilinirliği artıran youtube reklamları",
        "turizm sektörü için youtube reklamları",
        "oteller için youtube video reklam",
        "youtube kampanya optimizasyon rehberi",
        "youtube reklam türleri nelerdir",
        "youtube reklam maliyetleri 2025",
        "youtube short ads yönetimi",
        "otel youtube reklam kampanyası",
        "turizm youtube kampanyaları",
        "otel video reklam stratejisi",
        "resort youtube reklam yönetimi",
        "youtube reklam yönetimi antalya",
        "antalya youtube reklam ajansı",
        "youtube ads türkiye",
        "antalya video reklam hizmeti"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi/#breadcrumb",
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
          "name": "YouTube Reklam Yönetimi",
          "item": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "YouTube reklamları oteller için etkili mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Doğru hedefleme, doğru video formatı ve doğru mesajla kurgulandığında YouTube; marka bilinirliğini artırır, güven oluşturur ve rezervasyon kararlarını olumlu yönde etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "YouTube reklam maliyeti nasıl belirleniyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hedef kitle, ülke, rekabet seviyesi, kullanılan video formatları ve kampanya hedeflerine göre bütçe planlaması yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "Hangi YouTube reklam türlerini kullanıyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bumper, skippable in-stream, non-skippable in-stream, in-feed video ads ve YouTube Shorts formatlarını; kampanya hedeflerine göre kombinasyon halinde kullanıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "YouTube hedefleme nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İlgi alanları, davranış segmentleri, özel amaçlı kitleler, arama niyeti, rakip kanal ve video hedeflemesi ile çok katmanlı bir hedefleme stratejisi kullanıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Kreatif üretimi de yapıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Creative & video prodüksiyon ekibimizle birlikte YouTube reklamlarına uygun senaryo, storyboard, çekim ve kurgu süreçlerini uçtan uca yönetebiliyoruz."
          }
        }
      ]
    }
  ]
}

const Page = () => {
   const t = useTranslations("YoutubeAdvertising");
   const t2 = useTranslations("YoutubeAdvertising.h4Section");

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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center'>
     <div className='flex flex-col items-center justify-center gap-5'>
      <SubBanner
   header={t("youtubeadvertising_subbanner_header")}
  header2={t("youtubeadvertising_subbanner_header2")}
  header3={t("youtubeadvertising_subbanner_header3")}
  text={t.raw("youtubeadvertising_subbanner_text")}
   text2={t.raw("youtubeadvertising_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs />
<AiAnswerBlock text={t("aiAnswerBlock")}/>
     </div>
         <H2LogoSection items={h2items} />
     <StepSection2New data={stepData} header={t("h3Section.header")}/>
       <LogoListSectionBlack
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <VerticalSlider page="YoutubeAdvertising" itemCount={3}/>
       <QuestionsSection2 variant="light" faqs={faqs} />
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
