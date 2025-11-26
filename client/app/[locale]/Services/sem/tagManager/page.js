import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, Google Tag Manager, GA4, Meta Conversion API, WhatsApp–telefon izleme ve otel rezervasyon tracking süreçlerinde uzman bir dönüşüm takip ve veri analizi partneridir.",
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
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#webpage",
      "url": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager",
      "name": "Dönüşüm Takibi & Google Tag Manager Kurulumu – Veri Odaklı Reklam Yönetimi | DGTLFACE",
      "description": "DGTLFACE, Google Tag Manager ve dönüşüm takip kurulumu ile reklam verilerinizi doğru ölçmenizi sağlar. GA4, Meta CAPI, telefon ve rezervasyon ölçümlemeleri sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {"@id": "https://dgtlface.com/#organization"},
      "breadcrumb": {"@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#breadcrumb"}
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#service",
      "name": "Dönüşüm Takibi & Google Tag Manager Kurulumu",
      "url": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager",
      "provider": {"@id": "https://dgtlface.com/#organization"},
      "serviceType": "dönüşüm takibi, google tag manager kurulumu, google analytics dönüşüm izleme, analytics 4 conversion setup, gelişmiş e-ticaret izleme, reklam performans ölçümü",
      "description": "DGTLFACE, GA4–GTM dönüşüm takibi, Meta Conversion API, WhatsApp–telefon ölçümü, otel rezervasyon tracking ve cross-domain yapılandırmalarıyla veri doğruluğu sağlar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "dönüşüm takibi",
        "tag manager kurulumu",
        "google analytics dönüşüm izleme",
        "conversion tracking",
        "gelişmiş e-ticaret izleme",
        "reklam performans ölçümü",
        "google tag manager nasıl kurulur",
        "dönüşüm izleme hataları nasıl çözülür",
        "google analytics ile dönüşüm takibi",
        "facebook conversion api kurulumu",
        "meta ads dönüşüm takibi",
        "otel rezervasyon dönüşüm izlemesi",
        "çağrı izleme nasıl yapılır",
        "telefon dönüşüm takibi",
        "analytics 4 conversion setup",
        "cross-domain takip yöntemi",
        "otel rezervasyon dönüşüm takibi",
        "pms dönüşüm entegrasyonu",
        "turizm analytics 4 kurulumu",
        "booking-to-ga4 tracking",
        "tag manager antalya",
        "dönüşüm takibi antalya",
        "analytics kurulumu türkiye",
        "sem analizi antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem","position": 1,"name": "Ana Sayfa","item": "https://dgtlface.com/tr/"},
        {"@type": "ListItem","position": 2,"name": "SEM – Dijital Reklam Yönetimi","item": "https://dgtlface.com/tr/sem"},
        {"@type": "ListItem","position": 3,"name": "Dönüşüm Takibi & GTM","item": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Dönüşüm takibi neden önemlidir?",
          "acceptedAnswer": {"@type": "Answer","text": "Reklamların gerçekten satış üretip üretmediğini anlamak için dönüşüm takibi şarttır."}
        },
        {
          "@type": "Question",
          "name": "Google Tag Manager kurulumu nasıl yapılır?",
          "acceptedAnswer": {"@type": "Answer","text": "Tag planı → etiket kurulumu → tetikleyiciler → test → yayın aşamalarıyla kurulur."}
        },
        {
          "@type": "Question",
          "name": "GA4 dönüşüm izleme yöntemleri nelerdir?",
          "acceptedAnswer": {"@type": "Answer","text": "Event tabanlı takip, conversion event tanımı, cross-domain ve rezervasyon funnel kurulumları kullanılır."}
        },
        {
          "@type": "Question",
          "name": "Otellerde rezervasyon dönüşümü nasıl izlenir?",
          "acceptedAnswer": {"@type": "Answer","text": "PMS entegrasyonu, booking-to-GA4 tracking ve rezervasyon motoru event kurgusu ile ölçülür."}
        },
        {
          "@type": "Question",
          "name": "Telefon / WhatsApp dönüşümleri nasıl ölçülür?",
          "acceptedAnswer": {"@type": "Answer","text": "Click-to-call event’leri, call tracking ve WhatsApp chat-start ölçümleri kullanılır."}
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("WebTraffic");

   const stepData = [1,2,3].map(i => ({
  id: i,
  image: [image1,image2,image3][i-1],
  header: t(`webtraffic_step${i}_header`),
  text:   t(`webtraffic_step${i}_text`)
}));
  
  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
     <SubBanner
  header={t("webtraffic_subbanner_header")}
  header2={t("webtraffic_subbanner_header2")}
  text={t("webtraffic_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AiAnswerBlock text="DGTLFACE, Google Tag Manager ve GA4 dönüşüm takibi ile reklamlarınızın gerçek performansını görünür hale getirir. Form gönderimi, rezervasyon, telefon araması, WhatsApp tıklaması ve cross-domain rezervasyon işlemleri dahil tüm aksiyonlar doğru şekilde ölçülür. Meta Conversion API, call tracking, PMS entegrasyonu ve booking-to-GA4 tracking gibi gelişmiş yapılarla veri akışı kusursuz hale getirilir. Böylece kararlar tahmine değil, net verilere dayanır."/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
   </>
  )
}

export default page
