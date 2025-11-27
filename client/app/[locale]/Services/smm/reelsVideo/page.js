import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
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
      "description": "DGTLFACE, markalar ve oteller için Instagram Reels, TikTok, Facebook Reels ve YouTube Shorts formatlarında kısa video içerikleri üreten, strateji, prodüksiyon ve performans odaklı bir dijital pazarlama ve kreatif partneridir.",
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
      "@id": "https://dgtlface.com/tr/smm/reels-video/#webpage",
      "url": "https://dgtlface.com/tr/smm/reels-video",
      "name": "Reels & Kısa Video İçerik Üretimi – Viral Video Stratejileri | DGTLFACE",
      "description": "DGTLFACE, Instagram Reels ve kısa video içerikleri üretir. Viral stratejiler, kreatif fikirler ve profesyonel prodüksiyonla görünürlüğünüzü artırın.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/smm/reels-video/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/smm/reels-video/#service",
      "name": "Reels ve Kısa Video İçerik Üretimi – Viral İçeriklerle Etkileşimi Artırın",
      "url": "https://dgtlface.com/tr/smm/reels-video",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "reels video içerik, reel video üretimi, kısa video çekimi, sosyal medya video tasarımı, instagram reels ajansı, reels montaj hizmeti",
      "description": "DGTLFACE, Reels ve kısa video içeriklerini strateji, senaryo, çekim, montaj ve yayın adımlarını kapsayan tam bir prodüksiyon süreciyle üretir. Dikey format, güçlü hook, doğru müzik, altyazı ve kapak tasarımıyla hem organik hem reklam kampanyalarında yüksek performans hedefler; özellikle otel ve turizm markaları için deneyim ve destinasyon odaklı kısa videolar kurgular.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "reels video içerik",
        "reel video üretimi",
        "kısa video çekimi",
        "sosyal medya video tasarımı",
        "instagram reels ajansı",
        "reels montaj hizmeti",
        "viral reels nasıl yapılır",
        "instagram reels trendleri 2025",
        "reels içerik takvimi",
        "oteller için reels video çekimi",
        "turizm reels kampanyaları",
        "hızlı video içerik üretimi",
        "instagram algoritması reels",
        "reels kapak tasarımı",
        "sosyal medya için kısa video",
        "story & reel paketleri",
        "otel reels çekimi",
        "turizm video içeriği",
        "resort sosyal medya video",
        "otel tanıtım video paketleri",
        "reels çekimi antalya",
        "antalya video çekimi",
        "kısa video hizmeti türkiye",
        "antalya sosyal medya video"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/smm/reels-video/#breadcrumb",
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
          "name": "Reels & Video İçerik Üretimi",
          "item": "https://dgtlface.com/tr/smm/reels-video"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/smm/reels-video/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Reels içerik üretimi nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reels içerik üretimi; strateji, içerik fikri, senaryo, çekim veya mevcut görüntü seçimi, montaj, caption ve hashtag kurgusu ile yayın ve performans analizinden oluşan çok adımlı bir süreçtir."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için Reels stratejisi nasıl olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için Reels stratejisi; oda ve tesis turları, deneyim odaklı videolar, destinasyon görüntüleri ve kampanya Reels’lerinden oluşan dengeli bir karışıma dayanmalı ve rezervasyon funnel’ı ile bağlanmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Viral Reels için nelere dikkat edilmeli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Güçlü bir hook, kısa ve akıcı kurgu, doğru müzik veya trend ses, net mesaj, kaydetme ve paylaşmayı teşvik eden içerik ve doğru yayın zamanı viral potansiyeli artıran başlıca unsurlardır."
          }
        },
        {
          "@type": "Question",
          "name": "Reels performansı nasıl ölçülür?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reels performansı; erişim, izlenme, izlenme oranı, etkileşim, kaydetme, paylaşma, tıklama ve rezervasyon/satış katkısı gibi metrikler üzerinden ölçülür ve dashboard’larda raporlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Reels’i reklamda da kullanabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Organikte iyi performans gösteren Reels’ler Meta Ads kampanyalarında yaratıcı olarak kullanılabilir ve trafik, etkileşim veya dönüşüm amaçlı reklam setlerinde yüksek performans sağlayabilir."
          }
        }
      ]
    }
  ]
}

const page = () => {
    const t = useTranslations("ReelsVideo");
       const t2 = useTranslations("ReelsVideo.h4Section");
     
        const stepData = [1,2,3,4].map(i => ({
          id: i,
          image: [image1,image2,image3,image3][i-1],
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
         { title: t("h2Section.header1"), text: t("h2Section.text1") },
         { title: t("h2Section.header2"), text: t("h2Section.text2") },
         { title: t("h2Section.header3"), text: t("h2Section.text3") },
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
  header={t("reels_subbanner_header")}
  header2={t("reels_subbanner_header2")}
  text={t("reels_subbanner_text")}
    header3={t("reels_subbanner_header3")}
  text2={t("reels_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AiAnswerBlock text={t("reels_ai_answer_text")}/>
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
      <VerticalSlider page="ReelsVideo" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin Reels & kısa video prodüksiyonu, sosyal medya video stratejileri ve turizm odaklı SMM projelerine ait dokümantasyon ve saha deneyimlerinden derlenmiştir."/>
    </div>
  </>
  )
}

export default page
