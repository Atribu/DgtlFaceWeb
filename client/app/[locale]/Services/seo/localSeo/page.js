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
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, yerel SEO çalışmalarıyla oteller, restoranlar ve lokal işletmelerin Google Haritalar ve lokal aramalarda görünürlüğünü artıran dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/seo/yerel-seo/#webpage",
      "url": "https://dgtlface.com/tr/seo/yerel-seo",
      "name": "Yerel SEO Hizmetleri – Google Haritalar ve Lokal Aramalarda Üst Sıralar | DGTLFACE",
      "description": "DGTLFACE, yerel SEO çalışmalarıyla işletmenizin Google Haritalar ve lokal aramalarda görünürlüğünü artırır. Yerel müşteri dönüşümlerinizi yükseltin.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/seo/yerel-seo/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/seo/yerel-seo/#service",
      "name": "Yerel SEO Hizmetleri – Google Haritalar ve Lokal Aramalarda Üst Sıralar",
      "url": "https://dgtlface.com/tr/seo/yerel-seo",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "yerel seo, lokal seo hizmeti, google haritalar optimizasyonu, google my business yönetimi, yerel işletme seo, lokal sıralama artırma",
      "description": "DGTLFACE, Google Haritalar optimizasyonu, Google Business Profile yönetimi, yerel anahtar kelime stratejisi, local pack görünürlüğü ve yorum yönetimi ile işletmeler için yerel SEO hizmetleri sunar. Oteller, restoranlar ve turizm işletmeleri için telefon, rota ve rezervasyon dönüşümlerini artırmaya odaklanır.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "yerel seo",
        "lokal seo hizmeti",
        "google haritalar optimizasyonu",
        "yerel işletme seo",
        "google my business yönetimi",
        "lokal sıralama artırma",
        "google maps sıralama yükseltme",
        "google my business nasıl optimize edilir",
        "yerel aramalarda nasıl üst sıralara çıkılır",
        "oteller için yerel seo",
        "restoran yerel seo örnekleri",
        "lokal seo için yorum yönetimi",
        "google harita kaydı oluşturma",
        "yerel anahtar kelime araştırması",
        "antalya yerel seo rehberi",
        "local pack nedir",
        "otel yerel seo",
        "turizm yerel seo",
        "resort google maps optimizasyonu",
        "ota lokal seo",
        "yerel seo antalya",
        "antalya google maps optimizasyonu",
        "yerel seo türkiye",
        "antalya işletme seo"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/seo/yerel-seo/#breadcrumb",
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
          "name": "SEO Hizmetleri",
          "item": "https://dgtlface.com/tr/seo-hizmetleri"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Yerel SEO",
          "item": "https://dgtlface.com/tr/seo/yerel-seo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/seo/yerel-seo/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Yerel SEO nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yerel SEO, işletmenizin bulunduğu lokasyonda Google’da ve Google Haritalar’da üst sıralarda görünmesini sağlayan optimizasyon çalışmalarının bütünüdür."
          }
        },
        {
          "@type": "Question",
          "name": "Google Haritalar’da nasıl üst sıralara çıkılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doğru kategori seçimi, güncel içerik, güçlü fotoğraf setleri, düzenli yorumlar ve teknik lokal sinyallerle Google Haritalar sıralaması iyileştirilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Google Business Profile optimizasyonu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kategori, açıklama, hizmet alanı, fotoğraf, post ve hizmet alanlarının eksiksiz ve lokal anahtar kelimelere uygun şekilde doldurulması gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Yorumlar yerel SEO’yu etkiler mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, yorum sayısı, puan ortalaması ve yorumlara verilen cevaplar Google Haritalar sıralamasını doğrudan etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "Local Pack nedir ve nasıl girilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local Pack, Google arama sonuçlarında görünen 3’lü harita kutusudur. Güçlü profil optimizasyonu, lokal otorite ve yüksek yorum ortalaması ile bu alanda görünmek mümkündür."
          }
        }
      ]
    }
  ]
}

const Page = () => {
  const t = useTranslations("LocalSeo");

 const t2 = useTranslations("LocalSeo.h4Section");
     
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
    <div className='flex flex-col gap-5 items-center justify-center'>
      <SubBanner
  header={t("localseo_subbanner_header")}
  header2={t("localseo_subbanner_header2")}
  text={t.raw("localseo_subbanner_text")}
  header3={t("localseo_subbanner_header3")}
  text2={t.raw("localseo_subbanner_text2")}
  buttonLink="/"
   buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs />

<AiAnswerBlock text={t("localseo_ai_answer_text")}/>
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
      <VerticalSlider page="LocalSeo" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
