import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, Google Ads, Meta Ads, YouTube ve diğer dijital reklam kampanyalarınızın performansını Looker Studio dashboard’larında analiz eden veri odaklı dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#webpage",
      "url": "https://dgtlface.com/tr/sem/reklam-raporlama",
      "name": "Reklam Performans Raporlama – Veri Odaklı SEM Analizi | DGTLFACE",
      "description": "DGTLFACE, tüm reklam kampanyalarını Looker Studio ile analiz ederek dönüşümlerinizi artırır. Veri odaklı reklam raporlama ile doğru kararlar alın.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#service",
      "name": "Reklam Performans Raporlama & SEM Analizi",
      "url": "https://dgtlface.com/tr/sem/reklam-raporlama",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "reklam raporlama, sem performans analizi, google ads raporlama, meta ads raporlama, dijital performans dashboard, reklam analizi",
      "description": "DGTLFACE, Google Ads, Meta Ads, YouTube ve diğer dijital kampanyalarınızın verilerini Looker Studio üzerinde tek panelde birleştirerek reklam performans raporlama ve SEM analizi hizmeti sunar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "reklam raporlama",
        "sem performans analizi",
        "google ads raporlama",
        "meta ads raporlama",
        "dashboard oluşturma",
        "reklam analizi",
        "reklam performans raporu nasıl hazırlanır",
        "looker studio reklam raporu",
        "sem analizi nasıl yapılır",
        "google ads dönüşüm raporu",
        "youtube reklam raporu",
        "meta ads dönüşüm analizi",
        "oteller için reklam raporlama",
        "turizm reklam analizi",
        "reklam maliyeti optimizasyon raporu",
        "google ads raporlama şablonu",
        "otel reklam raporlaması",
        "turizm sektörü reklam analizi",
        "ota reklam performansı",
        "otel kampanya performansı",
        "reklam raporlama antalya",
        "sem raporlama türkiye",
        "dijital raporlama antalya",
        "reklam analizi antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#breadcrumb",
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
          "name": "Reklam Raporlama & Performans Analizi",
          "item": "https://dgtlface.com/tr/sem/reklam-raporlama"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/reklam-raporlama/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Reklam performans raporlamasında hangi metriklere bakmalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle tıklama, gösterim, CTR, dönüşüm sayısı, CPA, ROAS ve gerektiğinde gelir/rezervasyon metrikleri takip edilmelidir. Oteller için doluluk ve RevPAR da önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Raporları hangi sıklıkta hazırlıyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dashboard’lar canlıdır; bunun üzerine haftalık kısa özetler ve aylık detaylı rapor + aksiyon toplantıları öneriyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Tüm kanalları tek panelde görebilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Google Ads, Meta Ads, YouTube, GA4 ve gerektiğinde PMS/OTA verilerini Looker Studio üzerinde tek panelde birleştiriyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için özel reklam raporlaması yapıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Doluluk oranı, rezervasyon sayısı, kanal bazlı gelir, RevPAR ve OTA vs direkt kanal oranı gibi otel KPI’larını raporlara dahil ediyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE’in raporlama yaklaşımı klasik ajanslardan nasıl farklıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, raporu sadece veri tablosu olarak değil, yorum ve aksiyon önerileriyle bir karar destek dokümanı olarak sunar ve raporları ölçüm ve kampanya yönetimiyle entegre yürütür."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("YandexAdvertising");

  const stepData = [1,2,3].map(i => ({
    id: i,
    image: [image1,image2,image3][i-1],
    header: t(`yandexadvertising_step${i}_header`),
    text:   t(`yandexadvertising_step${i}_text`)
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
  header={t("yandexadvertising_subbanner_header")}
  header2={t("yandexadvertising_subbanner_header2")}
  text={t("yandexadvertising_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
   </>
  )
}

export default page
