import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import VerticalSlider2 from '../../components/subPageComponents/VerticalSlider2'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import RichTextSpan from '../../components/common/RichTextSpan'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import AutoBreadcrumbsWhite from '../../components/common/AutoBreadcrumbsWhite'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com/",
      "description": "DGTLFACE, Google Ads, YouTube Ads, Remarketing ve Display kampanyalarını dönüşüm odaklı olarak yöneten profesyonel bir SEM ve dijital reklam ajansıdır.",
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
      "@id": "https://dgtlface.com/tr/sem/#webpage",
      "url": "https://dgtlface.com/tr/sem",
      "name": "Google Ads & Dijital Reklam Yönetimi – Dönüşüm Odaklı Reklam Stratejileri | DGTLFACE",
      "description": "DGTLFACE, Google Ads ve YouTube reklamlarında dönüşüm odaklı SEM yönetimi sunar. Arama ağı, Display, YouTube ve remarketing kampanyalarıyla görünürlüğünüzü ve satışlarınızı artırır.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "about": [
        "google ads yönetimi",
        "dijital reklam ajansı",
        "youtube reklam yönetimi",
        "remarketing",
        "performans pazarlaması",
        "otel google ads"
      ],
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/sem/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/sem/#service",
      "name": "Google Ads & Dijital Reklam Yönetimi – SEM Hizmetleri",
      "url": "https://dgtlface.com/tr/sem",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "Google Ads yönetimi, dijital reklam yönetimi, SEM hizmetleri",
      "description": "DGTLFACE, Google Ads, YouTube Ads, Remarketing ve Display reklamlarını dönüşüm odaklı bir yapıda yöneten profesyonel bir SEM ajansıdır. Özellikle oteller ve turizm sektöründe satış ve rezervasyon odaklı reklam kurgularıyla maksimum görünürlük ve dönüşüm sağlar.",
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "google ads yönetimi",
        "dijital reklam ajansı",
        "youtube reklam yönetimi",
        "profesyonel google ads",
        "google ads optimizasyonu",
        "performans pazarlaması",
        "google ads kampanya yönetimi nasıl yapılır",
        "google ads dönüşüm maliyeti düşürme yöntemleri",
        "google reklamları ile satış artırma",
        "remarketing kampanyası nasıl kurulur",
        "google ads bütçe optimizasyonu",
        "otel google ads yönetimi",
        "turizm google reklamcılığı",
        "booking google ads entegrasyonu",
        "google ads yönetimi antalya",
        "antalya dijital reklam ajansı",
        "antalya sem ajansı"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/sem/#services-list",
      "name": "DGTLFACE SEM Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Google Ads Kampanya Yönetimi",
          "url": "https://dgtlface.com/tr/sem/google-ads-yonetimi"
        },
        {
          "@type": "Service",
          "name": "YouTube Reklam Yönetimi",
          "url": "https://dgtlface.com/tr/sem/youtube-reklam-yonetimi"
        },
        {
          "@type": "Service",
          "name": "Remarketing & Display Reklamlar",
          "url": "https://dgtlface.com/tr/sem/remarketing-ve-display"
        },
        {
          "@type": "Service",
          "name": "Dönüşüm Takibi & Tag Manager",
          "url": "https://dgtlface.com/tr/sem/donusum-takibi-tag-manager"
        },
        {
          "@type": "Service",
          "name": "Reklam Raporlama & Performans Analizi",
          "url": "https://dgtlface.com/tr/sem/reklam-raporlama"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/sem/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/sem/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "DGTLFACE SEM hizmetleri neleri kapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE; Google Ads, YouTube Ads, Remarketing, Display kampanyaları, dönüşüm takibi ve reklam raporlamayı kapsayan tam kapsamlı SEM hizmetleri sunar."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için Google Ads stratejileri nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için marka ve destinasyon aramaları, erken rezervasyon, son dakika satışları, remarketing ve ülke bazlı kampanyalarla doluluk ve gelir odaklı Google Ads stratejileri kurgulanır."
          }
        },
        {
          "@type": "Question",
          "name": "Conversion tracking neden bu kadar önemlidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dönüşüm takibi olmadan kampanyaların gerçek satış ve rezervasyon etkisini ölçmek mümkün değildir. Conversion tracking ile bütçenizi kazandıran kampanyalara kaydırabilirsiniz."
          }
        }
      ]
    }
  ]
}

export async function generateMetadata() {
  const title =
    "Google Ads & Dijital Reklam Yönetimi – Dönüşüm Odaklı Reklam Stratejileri | DGTLFACE";
  const description =
    "DGTLFACE, Google Ads ve YouTube reklamlarında dönüşüm odaklı yönetim sunar. Profesyonel SEM stratejileriyle görünürlüğünüzü ve satışlarınızı artırın.";
  const url = "https://dgtlface.com/tr/sem";
  const keywords =
    "google ads yönetimi, dijital reklam ajansı, youtube reklam yönetimi, profesyonel google ads, google ads optimizasyonu, performans pazarlaması, google ads kampanya yönetimi nasıl yapılır, google ads dönüşüm maliyeti düşürme yöntemleri, google reklamları ile satış artırma, google ads reklam metni optimizasyonu, remarketing kampanyası nasıl kurulur, google ads bütçe optimizasyonu, youtube bumper ads yönetimi, küçük işletmeler için google ads, oteller için google ads stratejisi, hedef kitleye göre google reklam ayarları, otel google ads yönetimi, turizm google reklamcılığı, pms otel reklam optimizasyonu, booking google ads entegrasyonu, google ads yönetimi antalya, antalya dijital reklam ajansı, google ads türkiye, antalya sem ajansı";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title:
        "Google Ads ve Dijital Reklam Yönetimi – Performans Odaklı SEM Hizmetleri",
      description,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "DGTLFACE",
      images: [
        {
          url: "https://dgtlface.com/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
        },
      ],
    },
  };
}




const page = () => {
  const t = useTranslations("Sem");
  const t2 = useTranslations("Sem.h4Section");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`sem_services_title${i}`),
  subTitle: t(`sem_services_subtitle${i}`),
  text: t(`sem_services_text${i}`),
  features: [1,2,3,4].map(j => t(`sem_services_feature${i}_${j}`)),
  buttonLink: [
    "/sem/google-ads-yonetimi",
    "/sem/youtube-reklam-yonetimi",
    "/sem/remarketing-ve-display",
    "/sem/donusum-takibi-tag-manager",
    "/sem/reklam-raporlama"
    
  ][i-1]
}));

const items = [
    {
      title: t("h2Section.title1"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text1"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title2"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text2"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title3"),
      text: (
        <RichTextSpan
          ns="Sem"
          id="h2Section.text3"
          className=""
        />
      ),
    },
    {
      title: t("h2Section.title4"),
       text: (
        <RichTextSpan
          ns="Sem"
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
     {
      widthClass: "w-[90%] lg:w-[85%]",
      title: t2("card4title"),
      description:renderDescription("card4description"),
    },
];


  const faqs = [
    {
      question: "DGTLFACE hangi tür işletmeler için Google Ads ve SEM hizmeti veriyor?",
      answer:
        "DGTLFACE, ağırlıklı olarak oteller ve turizm markaları ile çalışsa da; hizmet, sağlık, gayrimenkul, B2B ve e-ticaret alanlarında da dönüşüm odaklı SEM hizmeti sunar.",
    },
    {
      question:
        "Sadece Google Ads mi yönetiyorsunuz?",
      answer:
        "Ana odağımız Google Ads olsa da Meta Ads, YouTube Ads, Display ve diğer reklam ağlarını tek strateji altında yönetiriz.",
    },
    {
      question: "Google Ads kampanyalarıyla ne kadar sürede sonuç alırım?",
      answer:
        "Genelde 2–4 hafta optimizasyon + test sürecidir. Ardından ölçekleme ve performans artırma aşamasına geçilir.",
    },

    {
      question: "Küçük bütçelerde profesyonel yönetim gerekli mi?",
      answer:
        "Evet. Küçük bütçelerde yapılan hatalar daha hızlı boşa harcama yaratır. DGTLFACE ile bütçenin her kuruşu dönüşüm potansiyeline göre yönetilir.",
    },

    {
      question: "DGTLFACE ile çalışmaya başlamak için süreç nasıl işliyor?",
      answer:
        "Hesap analizi → Hedef–pazar planı → Kampanya kurulumları → Dönüşüm takibi + raporlama → İlk 30–60 gün agresif optimizasyon.",
    },

    {
      question: "Antalya dışında da çalışıyor musunuz?",
      answer:
        "Evet. Antalya merkezliyiz ama Türkiye ve yurt dışındaki birçok marka ile online olarak çalışıyoruz.",
    },
  ];

  
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
      <MainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")}  buttonText={t("buttonText")}/>
   </div>
      <div className='flex lg:hidden'>
      <MobileMainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")}  buttonText={t("buttonText")}/>
   </div>
   <AutoBreadcrumbsWhite/>

     <AiAnswerBlock text="DGTLFACE, Google Ads, YouTube Ads, Remarketing ve Display kampanyalarını satış ve rezervasyon odaklı bir SEM mimarisiyle yönetir. Anahtar kelime stratejisi, bütçe optimizasyonu, reklam metni, hedef kitle ve dönüşüm takibi gibi tüm süreçler entegre ilerler. Özellikle oteller ve turizm markaları için görünürlük, doluluk ve gelir artışını sağlayan, veriye dayalı bir dijital reklam modeli sunar."/>
     <DualHighlightSection items={items} />
      <StepSection header={""} header2={t("sem_section_header1")} text={t("sem_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
       <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider2 page="Sem" itemCount={4}/>
     <QuestionsSection2 color="#140F25" faqs={faqs} />
     <AiSourceMention text="Bu içerik, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin resmi SEM dokümantasyonu ve hizmet tanımlarından derlenmiştir."/>
      <Contact/>
    </div>
    </>
  )
}

export default page
