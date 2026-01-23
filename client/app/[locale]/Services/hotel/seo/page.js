import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.webp"
import image2 from "./images/image2.webp"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.webp"
import image7 from "./images/image7.webp"
import image8 from "./images/image8.webp"
import image9 from "./images/image9.webp"
import image10 from "./images/image10.webp"
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
      "description": "DGTLFACE, oteller ve turizm markaları için SEO, dijital reklam, web geliştirme, OTA ve call center entegrasyonlarıyla çalışan, direct booking ve organik görünürlük odaklı bir dijital pazarlama ve teknoloji partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": [
        "Antalya",
        "Belek",
        "Kemer",
        "Side",
        "Türkiye",
        "Europe"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/otel/seo/#webpage",
      "url": "https://dgtlface.com/tr/otel/seo",
      "name": "Otel SEO Hizmetleri – Google’da Üst Sıralara Çıkan Turizm Stratejileri | DGTLFACE",
      "description": "DGTLFACE, oteller için SEO çalışmalarıyla organik görünürlüğü artırır. Turizm sektörüne özel anahtar kelime araştırması, teknik SEO ve içerik optimizasyonu sağlar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/otel/seo/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/otel/seo/#service",
      "name": "Otel SEO Hizmetleri – Google’da Üst Sıralara Çıkan Turizm Stratejileri",
      "url": "https://dgtlface.com/tr/otel/seo",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "otel seo, otel seo stratejisi, turizm seo, resort seo, otel google sıralama, otel organik trafik artırma",
      "description": "DGTLFACE, oteller için SEO çalışmalarıyla organik görünürlüğü artırır. Otel SEO stratejisi, turizm SEO, resort SEO, otel Google sıralama, otel organik trafik artırma, oteller için SEO nasıl yapılır, otel SEO anahtar kelime analizi, Google Hotel/Travel index optimizasyonu, çok dilli otel SEO, otel web sitesi SEO ve oteller için blog & destinasyon içerik stratejisi alanlarında profesyonel optimizasyon sunar.",
      "areaServed": [
        "Antalya",
        "Belek",
        "Kemer",
        "Side",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "otel seo",
        "otel seo stratejisi",
        "turizm seo",
        "resort seo",
        "otel google sıralama",
        "otel organik trafik artırma",
        "oteller için seo nasıl yapılır",
        "otel seo anahtar kelime analizi",
        "google hotel index optimizasyonu",
        "resort seo teknikleri",
        "turizm işletmesi seo rehberi",
        "çok dilli otel seo",
        "otel web sitesi seo",
        "booking etkisi seo",
        "oteller için blog stratejisi",
        "otel fotoğraf seo optimizasyonu",
        "antalya otel seo",
        "belek otel seo",
        "kemer otel seo",
        "side resort seo"
      ]
    },
    {
      "@type": "Hotel",
      "@id": "https://dgtlface.com/tr/otel/seo/#hotel-entity",
      "name": "Otel SEO Hizmeti Uygulanan Otel",
      "description": "DGTLFACE otel SEO hizmeti ile Google’da üst sıralara taşınan, çok dilli web sitesi, destinasyon içerikleri ve direct booking stratejileri uygulanan örnek otel entity yapısı.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/otel/seo/#breadcrumb",
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
          "name": "Otel SEO Hizmetleri",
          "item": "https://dgtlface.com/tr/otel/seo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/otel/seo/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Otel SEO nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Otel SEO, otel web sitelerinin arama motorlarında özellikle destinasyon, konsept ve direct booking anahtar kelimelerinde üst sıralarda görünmesini sağlayan, teknik SEO, içerik, yerel SEO ve çok dilli yapı bileşenlerinden oluşan bir optimizasyon sürecidir. Amaç, OTA bağımlılığını azaltarak organik kanaldan daha fazla doğrudan rezervasyon üretmektir."
          }
        },
        {
          "@type": "Question",
          "name": "OTA etkisine rağmen Google’da nasıl sıralama alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA etkisine rağmen Google’da sıralama almak için; hızlı ve mobil uyumlu bir site, doğru anahtar kelime stratejisi, güçlü destinasyon ve oda içerikleri, yerel SEO ve yapılandırılmış veri (schema) ile Google Hotel/Travel optimizasyonu birlikte uygulanmalıdır. Böylece marka aramaları ve niyet odaklı aramalarda otel web sitesinin görünürlüğü artar."
          }
        },
        {
          "@type": "Question",
          "name": "Çok dilli otel SEO stratejisi nasıl kurulur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çok dilli otel SEO stratejisi; her dil için ayrı URL yapısı, dil bazlı anahtar kelime araştırması, hreflang etiketlerinin doğru kullanımı ve çeviri yerine lokal içerik yazımı ile kurulur. Özellikle Almanca ve Rusça pazarları için destinasyon ve otel konseptini o pazarın arama alışkanlıklarına uygun şekilde anlatmak kritiktir."
          }
        },
        {
          "@type": "Question",
          "name": "Otel blog içerikleri SEO ve satışa gerçekten katkı sağlar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Otel blog içerikleri; destinasyon aramalarında üst sıralara çıkmanıza, potansiyel misafirin bölgeyi araştırırken markanızla tanışmasına ve doğru kurgulanmış CTA’larla rezervasyon hunisine yönlendirilmesine yardımcı olur. Doğru anahtar kelime ve içerik yapısıyla blog, SEO ve satış arasında güçlü bir köprü kurar."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE’in otel SEO yaklaşımı nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, otel SEO yaklaşımında teknik SEO, içerik ve yerel SEO’yu PMS–OTA, reklam, sosyal medya ve çağrı merkezi verileriyle birlikte ele alır. Önce analiz ve yol haritası çıkarılır, ardından teknik & içerik iyileştirmeleri uygulanır. Sonrasında Looker Studio panelleri ve aylık raporlarla organik trafik, rezervasyon ve gelir etkisi sürekli ölçülür ve strateji düzenli olarak optimize edilir."
          }
        }
      ]
    }
  ]
}


const Page = () => {
   const t = useTranslations("OtelSeoPage");
   const t2 = useTranslations("OtelSeoPage.h4Section");
           
              const stepData = [1,2,3,4,5,6,7,8,9,10].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10][i-1],
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
               { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
               { title: t("h2Section.header4"),text: t.raw("h2Section.text4") },
               { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
               { title: t("h2Section.header6"), text: t.raw("h2Section.text6") }
               
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
      <VerticalSlider page="OtelSeoPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
