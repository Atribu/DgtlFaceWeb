import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, Looker Studio veri raporlaması, benchmark analizleri, satış ve dönüşüm raporlarıyla oteller ve markalar için dijital performans analizi ve raporlama hizmeti sunan veri odaklı dijital pazarlama partneridir.",
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
      "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#webpage",
      "url": "https://dgtlface.com/tr/veri-analiz-ve-raporlama",
      "name": "Veri Analizi & Dijital Performans Raporlama – Looker Studio Uzmanlığı | DGTLFACE",
      "description": "DGTLFACE, Looker Studio veri raporlaması, benchmark analizleri, satış ve dönüşüm raporlarıyla dijital performansınızı ölçer ve geliştirir.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "veri analizi hizmeti",
        "dijital performans raporlama",
        "looker studio rapor",
        "satış analiz hizmeti",
        "dönüşüm analizi",
        "benchmark raporu",
        "otel satış raporlama",
        "turizm veri analizi"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#service",
      "name": "Veri Analizi & Dijital Performans Raporlama – Looker Studio Uzmanlığı",
      "url": "https://dgtlface.com/tr/veri-analiz-ve-raporlama",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "veri analizi hizmeti, dijital performans raporlama, Looker Studio raporlama, benchmark analizi, satış ve dönüşüm raporlama, KVKK veri güvenliği raporlama",
      "description": "DGTLFACE, SEO, SEM, SMM, web, PMS–OTA, çağrı merkezi ve satış verilerini Looker Studio dashboard’larında birleştirerek oteller ve markalar için dijital performans analizi ve raporlama hizmeti sunar.",
      "areaServed": ["Antalya","Türkiye","Europe"],
      "inLanguage": "tr-TR",
      "keywords": [
        "veri analizi hizmeti",
        "dijital performans raporlama",
        "looker studio rapor",
        "satış analiz hizmeti",
        "dönüşüm analizi",
        "benchmark raporu",
        "dijital performans nasıl ölçülür",
        "looker studio dashboard hazırlanması",
        "oteller için günlük satış raporu",
        "sosyal medya performans analizi",
        "seo performans analizi nasıl yapılır",
        "google analytics verileri nasıl yorumlanır",
        "meta ads rapor optimizasyonu",
        "reklam performans ölçümü",
        "oteller için benchmark analizi",
        "gelir artırma veri analizi",
        "turizm sektörü raporlama teknikleri",
        "kpi analizi nasıl yapılır",
        "looker studio otomatik rapor",
        "otel satış raporlama",
        "turizm veri analizi",
        "resort benchmark raporu",
        "pms veri analizi",
        "veri analizi antalya",
        "antalya dijital raporlama",
        "performans analizi türkiye",
        "looker studio antalya"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#services-list",
      "name": "DGTLFACE Raporlama Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Looker Studio Raporlama",
          "url": "https://dgtlface.com/tr/raporlama/looker-studio"
        },
        {
          "@type": "Service",
          "name": "Benchmark Analizi",
          "url": "https://dgtlface.com/tr/raporlama/benchmark-analizi"
        },
        {
          "@type": "Service",
          "name": "Satış ve Dönüşüm Raporları",
          "url": "https://dgtlface.com/tr/raporlama/satis-donusum"
        },
        {
          "@type": "Service",
          "name": "KVKK & Veri Güvenliği Raporlama",
          "url": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#breadcrumb",
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
          "name": "Veri Analizi & Raporlama",
          "item": "https://dgtlface.com/tr/veri-analiz-ve-raporlama"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/veri-analiz-ve-raporlama/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Raporlama için ekstra yeni bir yazılım mı almam gerekiyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle hayır. Mevcut kullandığınız sistemler (Google Analytics, Search Console, Google Ads, Meta Ads, PMS, OTA, çağrı merkezi vb.) üzerinden veri çekip Looker Studio gibi araçlarla dashboard’lar kuruyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Tüm raporları kendim mi takip edeceğim, yoksa özet sunuyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Panellere 7/24 erişiminiz olur; buna ek olarak periyodik özet raporlar ve toplantılarla veriyi yorumlar, bir sonraki adım için aksiyon önerileri sunarız."
          }
        },
        {
          "@type": "Question",
          "name": "Veri analizi ve raporlama sadece büyük oteller için mi anlamlı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Küçük ve orta ölçekli otellerde de doğru raporlama sayesinde bütçenin nereye harcandığını ve ne getirdiğini erken görmek son derece kritiktir."
          }
        },
        {
          "@type": "Question",
          "name": "Sadece raporlama hizmeti alabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, sadece raporlama ve veri analizi hizmeti alabilirsiniz; ancak en sağlıklı sonuçları raporlama ile SEO, SEM, SMM ve PMS & OTA süreçlerinin entegre yürütüldüğü projelerde alıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE ile raporlama projesine nasıl başlıyoruz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Önce hangi sistemleri kullandığınızı ve hangi soruları cevaplamak istediğinizi analiz ediyoruz. Ardından veri kaynakları, KPI seti ve dashboard yapısına göre bir raporlama yol haritası çıkarıyor, onay sonrası entegrasyon ve panel kurulumlarını gerçekleştiriyoruz."
          }
        }
      ]
    }
  ]
}

const Page = () => {
  const t = useTranslations("DigitalAnalysis");
     const t2 = useTranslations("DigitalAnalysis.h4Section");
      
                const faqs = [
              {
                question: t("faqs.question1"),
                answer:
                  t("faqs.answer1"),
              },
              {
                question: t("faqs.question2"),
                answer:
                  t("faqs.answer2"),
              },
              {
               question: t("faqs.question3"),
                answer:
                  t("faqs.answer3"),
              },
          
              {
              question: t("faqs.question4"),
                answer:
                  t("faqs.answer4"),
              },
          
              {
                question: t("faqs.question5"),
                answer:
                  t("faqs.answer5"),
              },
          
          
            ];
          
             const items = [
                 {
                   title: t("h2Section.title1"),
                   text: (
                     <RichTextSpan
                       ns="DigitalAnalysis"
                       id="h2Section.text1"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title2"),
                   text: (
                     <RichTextSpan
                       ns="DigitalAnalysis"
                       id="h2Section.text2"
                       className=""
                     />
                   ),
                 },
                 {
                   title: t("h2Section.title3"),
                   text: (
                     <RichTextSpan
                       ns="DigitalAnalysis"
                       id="h2Section.text3"
                       className=""
                     />
                   ),
                 },
                   {
                   title: t("h2Section.title4"),
                   text: (
                     <RichTextSpan
                       ns="DigitalAnalysis"
                       id="h2Section.text4"
                       className=""
                     />
                   ),
                 },
                 
               ];
          
               const renderDescription = (key) =>
            t2.rich(key, {
              // <br /> → satır atlat
              br: () => <><br /></>,
          
              // <ul> wrapper (JSON'da kullanırsan)
              ul: (chunks) => (
                <ul className="list-disc list-inside space-y-1 mt-2 grid grid-cols-3">
                  {chunks}
                </ul>
              ),
          
              // <li> → tek tek maddeler
              li: (chunks) => <li>{chunks}</li>,
          
              // istersen kalın da destekleyelim
              b: (chunks) => <span className="font-semibold">{chunks}</span>,
            });
          
          
               const cards = [
            {
              widthClass: "w-[90%] lg:w-[80%]",
              title: t2("card1title"),
              description: renderDescription("card1description"),
            },
            {
              widthClass: "w-[90%] lg:w-[75%]",
              title: t2("card2title"),
              description: renderDescription("card2description"),
            },
            {
              widthClass: "w-[90%] lg:w-[70%]",
              title: t2("card3title"),
              description: renderDescription("card3description"),
            },
          
          ];

  const servicesData = [1,2,3,4].map(i => ({
  id: i,
  title: t(`analysis_services_title${i}`),
  subTitle: t(`analysis_services_subtitle${i}`),
     text: t(`analysis_services_text${i}`),
  features: [1,2,3,4].map(j => t(`analysis_services_feature${i}_${j}`)),
  buttonLink: [
    "/raporlama/looker-studio",
    "/raporlama/benchmark-analizi",
    "/raporlama/satis-donusum",
    "/raporlama/kvkk-veri-guvenligi",
  ][i-1]
}));
  
  return (
  <>
  {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />


    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden'>
   <div className='hidden lg:flex'>
     <MainBanner header={t("analysis_banner_header")} text={t("analysis_banner_text")} span={t("analysis_banner_span")} buttonText={t("buttonText")}/>
   </div>

     <div className='flex lg:hidden'>
     <MobileMainBanner header={t("analysis_banner_header")} text={t("analysis_banner_text")} span={t("analysis_banner_span")} buttonText={t("buttonText")}/>
   </div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>
    <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
       <DualHighlightSection items={items}/>
<StepSection
  header={t("analysis_section_header1")}
  header2={t("analysis_section_header2")}
  text={t("analysis_section_text")}
  servicesData={servicesData}
  buttonText={t("buttonText")}
/>

<LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
        <VerticalSlider2 page="DigitalAnalysis" itemCount={4}/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
  </>
  )
}

export default Page
