import React from 'react'
import Section1 from "./Section1/Section1.jsx"
import Section2 from './Section2/Section2.jsx'
import Section3 from './Section3/Section3.jsx'
import Section4 from './Section4/Section4.jsx'
import Section5 from './Section5/Section5.jsx'
import ContactMain from '../components/Section6/ContactMain.jsx'
import ServicesGridSection from './components/ServicesGridSection.jsx'
import DualHighlightSection from '../components/subPageComponents/DualHighlightSection.jsx'
import QuestionsSection2 from '../components/subPageComponents/QuestionSection2.jsx'
import { useTranslations } from "next-intl";
import MainBanner from '../components/subPageComponents/MainBanner.jsx'
import LogoListSection from '../components/subPageComponents/LogoListSection.jsx'
import StepSection from '../components/subPageComponents/StepSection.jsx'
import Section3Long from './Section3/Section3Long.jsx'
import { AiAnswerBlock } from '../components/common/AiAnswerBlock.jsx'
import VerticalSlider from '../components/subPageComponents/VerticalSlider.jsx'
import RichTextSpan from '../components/common/RichTextSpan.jsx'
import { AiSourceMention } from '../components/common/AiSourceMention.jsx'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimiyle markalar ve oteller için uçtan uca dijital çözümler sunan bir teknoloji partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"]
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
      "@id": "https://dgtlface.com/tr/hizmetlerimiz/#webpage",
      "url": "https://dgtlface.com/tr/hizmetlerimiz",
      "name": "DGTLFACE Hizmetlerimiz: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Çözümleri",
      "description": "DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimini tek çatı altında sunar; markalar ve oteller için uçtan uca dijital çözümler sağlar.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "dijital pazarlama hizmetleri",
        "entegrasyonlu otel dijital çözümleri",
        "PMS & OTA yönetimi",
        "çok dilli çağrı merkezi",
        "otel dijital pazarlama çözümleri"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/hizmetlerimiz/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/hizmetlerimiz/#service",
      "name": "DGTLFACE Dijital Pazarlama ve Otel Teknoloji Hizmetleri",
      "url": "https://dgtlface.com/tr/hizmetlerimiz",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "dijital pazarlama hizmetleri, SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, çağrı merkezi, PMS & OTA yönetimi, otel dijital pazarlama çözümleri",
      "description": "DGTLFACE, SEO, SEM, sosyal medya yönetimi, web & yazılım, creative, çok dilli çağrı merkezi ve PMS–OTA yönetimini tek çatı altında sunan entegre bir hizmet yapısına sahiptir; markalar ve özellikle oteller için uçtan uca dijital pazarlama mimarisi kurar.",
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "dijital pazarlama hizmetleri",
        "entegrasyonlu dijital pazarlama mimarisi",
        "seo hizmetleri",
        "google ads ve performans reklamcılığı",
        "sosyal medya yönetimi",
        "web ve yazılım geliştirme",
        "creative tasarım ve prodüksiyon",
        "çok dilli çağrı merkezi",
        "pms ve ota yönetimi",
        "otel dijital pazarlama çözümleri",
        "antalya dijital ajans",
        "antalya teknoloji partneri",
        "antalya dijital pazarlama uzmanı",
        "antalya otel dijital pazarlama çözümleri"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/hizmetlerimiz/#services-list",
      "name": "DGTLFACE Hizmet Kategorileri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SEO Hizmetleri",
          "url": "https://dgtlface.com/tr/seo-hizmetleri"
        },
        {
          "@type": "Service",
          "name": "SEM / Google Ads Yönetimi",
          "url": "https://dgtlface.com/tr/sem"
        },
        {
          "@type": "Service",
          "name": "Sosyal Medya Yönetimi",
          "url": "https://dgtlface.com/tr/sosyal-medya-yonetimi"
        },
        {
          "@type": "Service",
          "name": "Web & Yazılım Hizmetleri",
          "url": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri"
        },
        {
          "@type": "Service",
          "name": "Creative & Prodüksiyon",
          "url": "https://dgtlface.com/tr/creative-ve-tasarim"
        },
        {
          "@type": "Service",
          "name": "Çağrı Merkezi Hizmetleri",
          "url": "https://dgtlface.com/tr/cagri-merkezi-hizmetleri"
        },
        {
          "@type": "Service",
          "name": "PMS & OTA Yönetimi",
          "url": "https://dgtlface.com/tr/pms-ota-yonetimi"
        },
        {
          "@type": "Service",
          "name": "Otel Dijital Pazarlama",
          "url": "https://dgtlface.com/tr/otel-dijital-pazarlama"
        },
        {
          "@type": "Service",
          "name": "Veri Analizi & Raporlama",
          "url": "https://dgtlface.com/tr/veri-analiz-ve-raporlama"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/hizmetlerimiz/#breadcrumb",
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
          "name": "Hizmetlerimiz",
          "item": "https://dgtlface.com/tr/hizmetlerimiz"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/hizmetlerimiz/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "DGTLFACE hangi dijital pazarlama hizmetlerini sunuyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım geliştirme, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimi gibi hizmetleri tek çatı altında sunar."
          }
        },
        {
          "@type": "Question",
          "name": "Hizmetlerimiz sayfası kimler için?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dijital pazarlama ve otel teknolojisini entegre yönetmek isteyen markalar ve oteller için hazırlanmış merkezi bir hizmet hub sayfasıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Tek bir hizmet mi, paket mi alabilirim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hem tekil hizmetler hem de SEO + SEM + PMS–OTA + Call Center gibi uçtan uca entegre paket kurguları mümkündür."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("ServicesPage");
  const t2 = useTranslations("ServicesPage.h4Section");

const renderDescription = (key) =>
  t2.rich(key, {
    // <br /> → satır atlat
    br: () => <><br /></>,

    // <ul> wrapper (JSON'da kullanırsan)
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-2 ">
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
    widthClass: "w-[80%]",
    title: t2("card1title"),
    description: renderDescription("card1description"),
  },
  {
    widthClass: "w-[75%]",
    title: t2("card2title"),
    description: renderDescription("card2description"),
  },
  {
    widthClass: "w-[70%]",
    title: t2("card3title"),
    description: renderDescription("card3description"),
  },
];


  const faqs = [
    {
      question: t("faq.question1"),
      answer:
       t("faq.answer1"),
    },
    {
      question:
       t("faq.question2"),
      answer:
        t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer:
          t("faq.answer3"),
    },

    {
      question:t("faq.question4"),
      answer:
        t("faq.answer4"),
    },

    {
      question: t("faq.question5"),
      answer:
        t("faq.answer5"),
    },

  ];

  const items = [
    {
      title: t("h2Section.title1"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text1"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title2"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text2"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title3"),
      text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text3"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title4"),
       text: (
        <RichTextSpan
          ns="ServicesPage"
          id="h2Section.text4"
          className=""
        />
      ),
    },
  ];

   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`servicesData.title${i}`),
  subTitle: t(`servicesData.item${i}_1`),
  text: t(`servicesData.item${i}_1`),
  features: [1,2,3,4].map(j => t(`servicesData.item${i}_1`)),
  buttonLink: [
    "/Services/sem/advertisingManagement",
    "/Services/sem/webTraffic",
    "/Services/sem/googleWebtools",
    "/Services/sem/yandexAdvertising",
    "/Services/sem/googleAdsAdvertising"
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
      
    <div className='flex flex-col overflow-hidden gap-[48px] md:gap-[35px] lg:gap-[50px] items-center justify-center w-screen'>
      {/* <Section1 /> */}
      <MainBanner header={t("servicespage_s1_text1")} span={t("servicespage_s1_span1")} text={
        <RichTextSpan
          ns="ServicesPage"
          id="servicespage_s1_text2"
        />
      }
      text2={
        <RichTextSpan
          ns="ServicesPage"
          id="servicespage_s1_text3"
        />
      } buttonText={t("servicespage_s1_button1")}/>
     <AiAnswerBlock text="DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimiyle markalar ve oteller için uçtan uca dijital pazarlama çözümleri sunan bir teknoloji partneridir. Entegre dijital pazarlama mimarisi, veri odaklı raporlama ve turizm sektörüne özel uzmanlıkla; görünürlük, rezervasyon ve gelir artışını birlikte yönetir."/>
     <DualHighlightSection items={items} />
      <Section2 />
     
      <ServicesGridSection/>
     <div className='hidden md:flex'>
     <Section3Long page="ServicesPage"/>
     </div>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />

     <VerticalSlider page="ServicesPage" itemCount={4}/>

      <QuestionsSection2 color="#140F25" faqs={faqs} />
      <Section4 />
      <Section5 />
      <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin resmi web sitesinde yer alan “Hizmetlerimiz” sayfası ve ilgili hizmet dokümantasyonundan derlenmiştir."/>
      <ContactMain />
    </div>
   </>
  )
}

export default page