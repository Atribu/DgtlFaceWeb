import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, remarketing ve display kampanyalarınızla daha önce ilgi göstermiş kullanıcıları geri kazanmanıza yardımcı olan; özellikle oteller ve turizm markaları için yeniden hedefleme ve GDN optimizasyonu sunan performans pazarlama partneridir.",
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
      "@id": "https://dgtlface.com/tr/sem/remarketing-ve-display/#webpage",
      "url": "https://dgtlface.com/tr/sem/remarketing-ve-display",
      "name": "Remarketing & Display Reklam Yönetimi – Yeniden Hedefleme Uzmanlığı | DGTLFACE",
      "description": "DGTLFACE, remarketing ve display kampanyalarınızla daha önce ilgi göstermiş kullanıcıları geri kazanır. Yeniden hedefleme stratejileriyle dönüşümlerinizi artırın.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "remarketing",
        "remarketing yönetimi",
        "google display reklamları",
        "yeniden hedefleme kampanyası",
        "dönüşüm artırma stratejileri",
        "display advertising",
        "otel remarketing",
        "turizm display reklamcılığı"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/sem/remarketing-ve-display/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/remarketing-ve-display/#service",
      "name": "Remarketing & Display Reklam Yönetimi – Yeniden Hedefleme Uzmanlığı",
      "url": "https://dgtlface.com/tr/sem/remarketing-ve-display",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "remarketing yönetimi, google display reklamları, yeniden hedefleme kampanyası, dönüşüm artırma stratejileri, display advertising",
      "description": "DGTLFACE, remarketing ve display kampanyalarını; siteyi ziyaret etmiş, teklif almış, sepeti terk etmiş veya rezervasyon sürecinden dönmüş kullanıcıları yeniden hedefleyecek şekilde kurgular. Google Display Network, YouTube, Meta ve OTA kaynaklı trafiği segmentlere ayırarak her aşamada farklı mesaj ve teklif sunar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "remarketing",
        "remarketing yönetimi",
        "google display reklamları",
        "yeniden hedefleme kampanyası",
        "dönüşüm artırma stratejileri",
        "display advertising",
        "remarketing nasıl yapılır",
        "google analytics remarketing listesi",
        "display reklam optimizasyonu",
        "sepeti terk eden müşterileri geri kazanma yöntemleri",
        "oteller için remarketing stratejileri",
        "remarketing kampanya ayarları",
        "google display network gdn optimizasyon",
        "youtube remarketing nasıl yapılır",
        "otel remarketing kampanyası",
        "dönüşüm hunisi remarketing stratejisi",
        "otel remarketing",
        "turizm display reklamcılığı",
        "otel yeniden hedefleme kampanyası",
        "booking remarketing taktikleri",
        "remarketing antalya",
        "display reklam antalya",
        "remarketing türkiye",
        "antalya dijital reklam ajansı"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/remarketing-ve-display/#breadcrumb",
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
          "name": "Remarketing & Display Reklamlar",
          "item": "https://dgtlface.com/tr/sem/remarketing-ve-display"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/remarketing-ve-display/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Remarketing nedir ve nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remarketing, sitenizi ziyaret etmiş veya markanızla etkileşime geçmiş ancak henüz dönüşüm gerçekleştirmemiş kullanıcıların, belirli listeler üzerinden yeniden hedeflenmesidir."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için remarketing stratejileri nasıl kurulmalıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oda detayına bakıp rezervasyon yapmayanlar, fiyat sorgulayıp çıkanlar, belirli ülkelerden gelenler ve OTA üzerinden sizi görmüş kullanıcılar farklı remarketing segmentlerine ayrılır; her segment için özel mesaj ve teklifler kullanılır."
          }
        },
        {
          "@type": "Question",
          "name": "Sepeti terk eden kullanıcılar nasıl geri kazanılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sepeti veya rezervasyon adımını terk eden kullanıcılar için fiyat hatırlatma, indirim, sınırlı kontenjan ve sosyal kanıt içeren kreatifler kullanılır; bu kampanyalar dönüşüm hunisinin alt katmanına özel kurgulanır."
          }
        },
        {
          "@type": "Question",
          "name": "Google Display Network optimizasyonu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doğru hedefleme, kaliteli placement seçimi, frekans kontrolü, farklı kreatif versiyonların test edilmesi ve düşük performanslı gösterim alanlarının saf dışı bırakılması ile GDN optimizasyonu yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE remarketing sonuçlarını nasıl raporlar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remarketing ve display kampanyaları; dönüşüm, frekans, gösterim, tıklama, ROAS ve funnel metriklerini içeren Looker Studio panelleriyle raporlanır; böylece hangi segmentin ne kadar dönüşüm ürettiği net olarak görülebilir."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("RemarketingDisplay");
     const t2 = useTranslations("RemarketingDisplay.h4Section");

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

    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden items-center justify-center'>
<div className='flex flex-col items-center justify-center gap-5'>
      <SubBanner
  header={t("remarketing_subbanner_header")}
  header2={t("remarketing_subbanner_header2")}
  text={t.raw("remarketing_subbanner_text")}
  header3={t("remarketing_subbanner_header3")}
  text2={t.raw("remarketing_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text="DGTLFACE, remarketing ve display reklam yönetimiyle sitenizle daha önce etkileşime geçmiş kullanıcıları segmentlere ayırarak yeniden hedefler. Google Display Network, YouTube, Meta ve OTA trafiğini; sepeti terk eden, oda bakan veya teklif alıp vazgeçen kitleler için ayrı mesajlarla geri kazanır. Bu yapı, özellikle oteller ve turizm markaları için dönüşüm oranını ve ROAS’ı anlamlı şekilde yükselten güçlü bir yeniden hedefleme katmanı sunar."/>
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
      <VerticalSlider page="RemarketingDisplay" itemCount={4}/>
    </div>
     
   
     <QuestionsSection2 variant="light" faqs={faqs} />
      <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin remarketing ve display reklam yönetimi hizmet dokümantasyonundan ve performans pazarlama süreçlerinden derlenmiştir."/>
    </div>
</>
  )
}

export default page
