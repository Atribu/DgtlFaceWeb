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
      "description": "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA kanallarını PMS ve channel manager altyapılarıyla entegre ederek fiyat, envanter ve rezervasyon akışını optimize eden turizm odaklı teknoloji ve dijital pazarlama partneridir.",
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
      "@id": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu/#webpage",
      "url": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu",
      "name": "OTA Entegrasyonu – Booking, Expedia, Agoda Bağlantıları | DGTLFACE",
      "description": "DGTLFACE, Booking, Expedia, Agoda ve diğer OTA kanallarını otelinizle entegre eder. Fiyat, envanter ve rezervasyon yönetiminde hata riskini azaltır, satışları artırır.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu/#service",
      "name": "OTA Entegrasyonu – Booking, Expedia, Agoda Bağlantıları",
      "url": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "ota entegrasyonu, booking entegrasyonu, expedia channel manager, ota fiyat yönetimi, online rezervasyon entegrasyonu, ota bağlantı sistemi",
      "description": "DGTLFACE, Booking, Expedia, Agoda ve diğer OTA kanallarını PMS ve channel manager altyapılarıyla entegre eder. Fiyat ve envanter verilerini tek merkezden senkronize ederek rate parity’yi korur, overbooking riskini azaltır ve çok kanallı rezervasyon akışını otomatik hale getirir. OTA performans raporları ve görünürlük analizleriyle oteller için online satış kanallarını optimize eder.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "ota entegrasyonu",
        "booking entegrasyonu",
        "expedia channel manager",
        "ota fiyat yönetimi",
        "online rezervasyon entegrasyonu",
        "ota bağlantı sistemi",
        "booking expedia nasıl entegre edilir",
        "ota fiyat eşitleme yöntemleri",
        "oteller için ota performans artırma",
        "envanter yönetimi rehberi",
        "fiyat senkronizasyon sorunları",
        "turizm online satış entegrasyonu",
        "çok kanallı rezervasyon yönetimi",
        "ota raporlama paneli",
        "resort ota entegrasyonu",
        "butik otel booking bağlantısı",
        "pms–ota ortak çalışma",
        "turizm ota stratejisi",
        "ota entegrasyon antalya",
        "booking bağlantı antalya",
        "online satış türkiye",
        "expedia entegrasyonu antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu/#breadcrumb",
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
          "name": "OTA Entegrasyonu",
          "item": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/pms-ota/ota-entegrasyonu/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "OTA entegrasyonu nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA entegrasyonu; otel PMS ve channel manager altyapınızın Booking, Expedia, Agoda gibi online seyahat acenteleriyle bağlanarak fiyat, envanter ve rezervasyon bilgilerinin otomatik ve gerçek zamanlı şekilde senkronize edilmesini sağlayan yapıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Booking.com ve Expedia otel hesabı nasıl bağlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking ve Expedia hesapları, PMS ve channel manager üzerinden oda ve fiyat tipleri doğru şekilde eşleştirilerek bağlanır; test rezervasyonlarıyla bağlantı ve akış doğrulandıktan sonra canlıya alınır."
          }
        },
        {
          "@type": "Question",
          "name": "PMS + Channel Manager + OTA üçlüsü nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS ana veri kaynağıdır; oda ve fiyat bilgileri channel manager’a iletilir, channel manager bu verileri tüm OTA kanallarına dağıtır. OTA rezervasyonları da channel manager üzerinden geri PMS’e düşerek tek bir rezervasyon gerçeği oluşturur."
          }
        },
        {
          "@type": "Question",
          "name": "OTA fiyat hataları ve overbooking nasıl engellenir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fiyat hatalarını ve overbooking’i önlemek için PMS’in tek kaynak olması, manuel müdahalelerin sınırlanması, fiyat ve envanter senkronizasyonunun düzenli test edilmesi ve kritik dönemlerde stok kısıtlama/buffer stratejilerinin uygulanması gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için OTA performansı nasıl ölçülür?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA performansı; kanal bazlı rezervasyon ve gelir, iptal ve no-show oranları, rezervasyon başı maliyet, pazar ve tarih bazlı dönüşüm oranları ile görünürlük ve sıralama metrikleri üzerinden ölçülür ve diğer kanallarla birlikte raporlanır."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("OtaIntegrationPage");

const t2 = useTranslations("OtaIntegrationPage.h4Section");
           
              const stepData = [1,2,3,4,5].map(i => ({
                id: i,
                image: [image1,image2,image1,image2,image1][i-1],
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
               { title: t("h2Section.header3"), text: t.raw("h2Section.text3") }
             ];
  
  return (
   <>
   <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
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
      <VerticalSlider page="AfterSalesSupportPage" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in OTA entegrasyon projeleri, Booking–Expedia bağlantı süreçleri ve PMS/Channel Manager yapılandırmalarına ilişkin operasyon dokümantasyonundan derlenmiştir."/>
    </div>
   </>
  )
}

export default page
