import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
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
      "description": "DGTLFACE, teknik SEO analiziyle web sitelerinin hız, mobil uyumluluk, taranabilirlik ve Core Web Vitals metriklerini optimize eden; oteller ve markalar için Next.js uyumlu teknik SEO danışmanlığı sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/seo/teknik-seo/#webpage",
      "url": "https://dgtlface.com/tr/seo/teknik-seo",
      "name": "Teknik SEO Analizi – Hız, Mobil Uyumluluk ve Site Altyapısı Optimizasyonu | DGTLFACE",
      "description": "DGTLFACE, teknik SEO analiziyle sitenizi hız, mobil uyumluluk ve taranabilirlik açısından optimize eder. Core Web Vitals iyileştirme ve Next.js teknik SEO desteği sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/seo/teknik-seo/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/seo/teknik-seo/#service",
      "name": "Teknik SEO Analizi – Hız, Mobil Uyumluluk ve Site Altyapısı Optimizasyonu",
      "url": "https://dgtlface.com/tr/seo/teknik-seo",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "teknik seo, teknik seo analizi, site hızı optimizasyonu, mobil uyumluluk testi, teknik seo danışmanı, core web vitals iyileştirme",
      "description": "DGTLFACE, teknik SEO analiziyle site hızı, Core Web Vitals, mobil uyumluluk, taranabilirlik, URL mimarisi, robots.txt, sitemap ve canonical yapılarını optimize eder. Next.js ve modern framework’lerde oluşan teknik SEO sorunlarını analiz eder, özellikle otel ve turizm siteleri için PMS–OTA entegrasyonunu da hesaba katar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "teknik seo",
        "teknik seo analizi",
        "site hızı optimizasyonu",
        "mobil uyumluluk testi",
        "teknik seo danışmanı",
        "core web vitals iyileştirme",
        "core web vitals nasıl iyileştirilir",
        "LCP CLS FID optimizasyonu",
        "teknik seo site mimarisi",
        "seo tarama hataları çözümleri",
        "kırık link temizleme yöntemleri",
        "canonical etiketler nasıl düzenlenir",
        "robots.txt nasıl yapılandırılır",
        "sitemap optimizasyonu",
        "next.js seo nasıl yapılır",
        "teknik seo checklist 2025",
        "otel teknik seo",
        "turizm teknik seo",
        "pms uyumlu teknik seo",
        "ota teknik seo",
        "teknik seo antalya",
        "antalya seo geliştirme",
        "teknik seo hizmet türkiye",
        "antalya site hızı optimizasyonu"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/seo/teknik-seo/#breadcrumb",
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
          "name": "Teknik SEO Analizi",
          "item": "https://dgtlface.com/tr/seo/teknik-seo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/seo/teknik-seo/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Teknik SEO nedir ve neden kritiktir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teknik SEO, sitenin hız, mobil uyumluluk, taranabilirlik ve altyapı mimarisi gibi teknik katmanlarının arama motorları ve kullanıcı deneyimi açısından optimize edilmesidir. Doğru teknik yapı olmadan içerik ve backlink çalışmalarının etkisi sınırlı kalır."
          }
        },
        {
          "@type": "Question",
          "name": "Core Web Vitals (LCP, CLS, INP) nasıl iyileştirilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HTML ve render akışı, görsel optimizasyonu, CSS/JS yükleme sırası, cache, CDN ve sunucu yanıt süresi üzerinde çalışılarak Core Web Vitals metrikleri iyileştirilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Next.js ile teknik SEO nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Next.js projelerinde routing, meta yönetimi, dinamik sayfalar, hreflang, image optimizasyonu ve SSR/SSG yapılandırmaları SEO uyumlu şekilde kurgulanmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için teknik SEO’da nelere dikkat edilmeli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çok dilli yapı, rezervasyon motoru entegrasyonu, OTA yönlendirmeleri, sezonluk performans ve PMS–OTA bağlantıları teknik SEO kurgusunda mutlaka dikkate alınmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Teknik SEO analizi ne kadar sürer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sitenin büyüklüğüne ve karmaşıklığına göre değişmekle birlikte, ilk kapsamlı teknik SEO analizi genellikle 3–7 gün içinde tamamlanır."
          }
        }
      ]
    }
  ]
}

const page = () => {
     const t = useTranslations("TechnicalSeo");
        const t2 = useTranslations("TechnicalSeo.h4Section");
     
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
         { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
         { title: t("h2Section.header2"), text: t.raw("h2Section.text2") },
         { title: t("h2Section.header3"), text: t.raw("h2Section.text3") },
         { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
        { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
       ];
        
  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden items-center justify-center'>
<div className='flex flex-col w-full items-center justify-center gap-5'>
<SubBanner
  header={t("technicalseo_subbanner_header")}
  header2={t("technicalseo_subbanner_header2")}
  text={t.raw("technicalseo_subbanner_text")}
  header3={t("technicalseo_subbanner_header3")}
  text2={t.raw("technicalseo_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>

<AutoBreadcrumbs />

<AiAnswerBlock text="DGTLFACE, teknik SEO analiziyle sitenizin hız, mobil uyumluluk, taranabilirlik ve Core Web Vitals metriklerini Google standartlarına göre optimize eder. Next.js ve modern framework’lerde oluşan teknik SEO sorunlarını analiz eder, URL mimarisi, robots.txt, sitemap, canonical ve hreflang yapılarını düzene sokar. Özellikle otel ve turizm sitelerinde PMS–OTA entegrasyonunu da hesaba katarak hem kullanıcı deneyimini hem Google sıralamalarını güçlendirir."/>
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
      <VerticalSlider page="TechnicalSeo" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin teknik SEO analiz ve optimizasyon süreçlerine ilişkin resmi dokümantasyonundan ve proje pratiklerinden derlenmiştir."/>
    </div>
   </>
  )
}

export default page
