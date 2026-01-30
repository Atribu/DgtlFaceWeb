import React from 'react'
import { routing } from "@/i18n/routing";
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
import MobileMainBanner from '../components/subPageComponents/MobileMainBanner.jsx'
import LogoListSection from '../components/subPageComponents/LogoListSection.jsx'
import StepSection from '../components/subPageComponents/StepSection.jsx'
import Section3Long from './Section3/Section3Long.jsx'
import { AiAnswerBlock } from '../components/common/AiAnswerBlock.jsx'
import VerticalSlider2 from '../components/subPageComponents/VerticalSlider2.jsx'
import RichTextSpan from '../components/common/RichTextSpan.jsx'
import { AiSourceMention } from '../components/common/AiSourceMention.jsx'
import AutoBreadcrumbsWhite from '../components/common/AutoBreadcrumbsWhite.jsx'
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd";

import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { getSeoData } from "@/app/lib/seo-utils";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const pathnameKey = "/Services";

  const base = getBaseUrl();
  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "DGTLFACE Hizmetlerimiz | Dijital Pazarlama & Teknoloji";
  const description =
    seoData?.description ||
    "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative ve otel dijital dönüşüm çözümlerini tek çatı altında sunar.";

  const canonical = getCanonicalUrl(pathnameKey, locale);
  const trUrl = getCanonicalUrl(pathnameKey, "tr");
  const enUrl = getCanonicalUrl(pathnameKey, "en");

  // ✅ OG locale’e göre map’ten gelsin
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  const ogImage = ogPath?.startsWith("http") ? ogPath : `${base}${ogPath}`;

  return {
    metadataBase: new URL(base),
    title,
    description,

    alternates: {
      canonical,
      languages: { tr: trUrl, en: enUrl },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "DGTLFACE",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Services hub JSON-LD (standart: Organization + WebSite + CollectionPage + Service + ItemList + Breadcrumb + FAQPage)
function buildServicesHubJsonLd({
  locale,
  baseUrl,
  pageUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
  keywords = [],
  breadcrumbName,
  faqItems = [],
  serviceItems = [],
  aiQuestion,
  aiAnswer,
  aiSource,
}) {
  const lang = locale === "tr" ? "tr-TR" : "en-US";

  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1) Organization
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "DGTLFACE",
        url: `${baseUrl}/`,
        logo: `${baseUrl}/logo.png`,
      },

      // 2) WebSite
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: "DGTLFACE",
        inLanguage: lang,
        publisher: { "@id": `${baseUrl}/#organization` },
      },

      // 3) WebPage (CollectionPage)
      {
        "@type": ["WebPage", "CollectionPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
        isPartOf: { "@id": `${baseUrl}/#website` },
        inLanguage: lang,
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },

        // Hub sayfada alt servisleri bağlamak faydalı:
        hasPart: serviceItems.map((s) => ({
          "@type": "WebPage",
          "@id": `${s.url}#webpage`,
          url: s.url,
          name: s.name,
        })),
      },

      // 4) Service (sayfanın sunduğu üst servis kümesi)
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceName,
        url: pageUrl,
        description: serviceDescription,
        provider: { "@id": `${baseUrl}/#organization` },
        inLanguage: lang,
        keywords,
      },

      // 5) ItemList (ana hizmet listesi)
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#services-list`,
        name: locale === "tr" ? "DGTLFACE Hizmet Kümeleri" : "DGTLFACE Service Clusters",
        itemListElement: serviceItems.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: s.url,
        })),
      },

      // 6) BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "tr" ? "Ana Sayfa" : "Home",
            item: locale === "tr" ? `${baseUrl}/tr/anasayfa` : `${baseUrl}/en/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: pageUrl,
          },
        ],
      },

      // 7) FAQPage
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },

      // 8) (Opsiyonel) AI Answer block - senin standartta kullanıyorsan:
      ...(aiAnswer
        ? [
            {
              "@type": "CreativeWork",
              "@id": `${pageUrl}#ai`,
              name: aiQuestion || (locale === "tr" ? "Yapay Zeka Özeti" : "AI Summary"),
              text: aiAnswer,
              isBasedOn: aiSource ? [aiSource] : undefined,
              inLanguage: lang,
            },
          ]
        : []),
    ],
  };
}



// ServicesPage JSON-LD (Hub / Collection Page)
// const servicesPageJsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     // 1) Organization
//     {
//       "@type": "Organization",
//       "@id": "https://dgtlface.com/#organization",
//       "name": "DGTLFACE",
//       "url": "https://dgtlface.com/",
//       "logo": "https://dgtlface.com/logo.png",
//       "description":
//         "DGTLFACE; SEO, SEM, sosyal medya, web & yazılım, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimiyle markalar ve oteller için uçtan uca dijital çözümler sunan bir teknoloji partneridir.",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Antalya",
//         "addressCountry": "TR"
//       },
//       "areaServed": ["Antalya", "Türkiye", "Europe", "Belek", "Kemer", "Side", "Alanya", "Bodrum"]
//     },

//     // 2) WebSite
//     {
//       "@type": "WebSite",
//       "@id": "https://dgtlface.com/#website",
//       "url": "https://dgtlface.com/",
//       "name": "DGTLFACE Dijital Pazarlama & Teknoloji Partneri",
//       "inLanguage": "tr-TR",
//       "publisher": { "@id": "https://dgtlface.com/#organization" }
//     },

//     // 3) WebPage (CollectionPage olarak güçlendiriyoruz)
//     {
//       "@type": ["WebPage", "CollectionPage"],
//       "@id": "https://dgtlface.com/tr/hizmetlerimiz/#webpage",
//       "url": "https://dgtlface.com/tr/hizmetlerimiz",
//       "name": "DGTLFACE Hizmetlerimiz: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Çözümleri",
//       "description":
//         "DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimini tek çatı altında sunar; markalar ve oteller için uçtan uca dijital çözümler sağlar.",
//       "isPartOf": { "@id": "https://dgtlface.com/#website" },
//       "about": [
//         "dijital pazarlama hizmetleri",
//         "seo sem smm entegrasyonu",
//         "web ve yazılım geliştirme",
//         "otel dijital dönüşüm çözümleri",
//         "pms ota yönetimi",
//         "çok dilli çağrı merkezi",
//         "veri analizi ve raporlama"
//       ],
//       "inLanguage": "tr-TR",
//       "publisher": { "@id": "https://dgtlface.com/#organization" },
//       "breadcrumb": { "@id": "https://dgtlface.com/tr/hizmetlerimiz/#breadcrumb" },
//       // Hub sayfa olduğu için alt kümeleri “hasPart” ile ilişkilendirmek iyi olur:
//       "hasPart": [
//         { "@id": "https://dgtlface.com/tr/creative/#service" },
//         { "@id": "https://dgtlface.com/tr/callcenter/#service" },
//         { "@id": "https://dgtlface.com/tr/pms-ota/#service" },
//         { "@id": "https://dgtlface.com/tr/seo/#service" },
//         { "@id": "https://dgtlface.com/tr/sem/#service" },
//         { "@id": "https://dgtlface.com/tr/smm/#service" },
//         { "@id": "https://dgtlface.com/tr/software/#service" },
//         { "@id": "https://dgtlface.com/tr/raporlama/#service" },
//         { "@id": "https://dgtlface.com/tr/otel/#service" }
//       ]
//     },

//     // 4) “Hizmetler” üst servisi (Service)
//     {
//       "@type": "Service",
//       "@id": "https://dgtlface.com/tr/hizmetlerimiz/#service",
//       "name": "DGTLFACE Hizmet Kümeleri – Entegre Dijital Pazarlama ve Teknoloji",
//       "url": "https://dgtlface.com/tr/hizmetlerimiz",
//       "provider": { "@id": "https://dgtlface.com/#organization" },
//       "serviceType":
//         "dijital pazarlama hizmetleri, SEO, SEM, sosyal medya yönetimi, web & yazılım, creative prodüksiyon, çağrı merkezi, PMS & OTA yönetimi, veri analizi & raporlama",
//       "areaServed": ["Antalya", "Türkiye", "Europe"],
//       "inLanguage": "tr-TR"
//     },

//     // 5) Ana hizmet kümeleri listesi (ItemList)
//     {
//       "@type": "ItemList",
//       "@id": "https://dgtlface.com/tr/hizmetlerimiz/#services-list",
//       "name": "DGTLFACE Ana Hizmet Kümeleri",
//       "itemListElement": [
//         { "@type": "ListItem", "position": 1, "name": "Yaratıcı & Marka Stratejisi", "url": "https://dgtlface.com/tr/creative" },
//         { "@type": "ListItem", "position": 2, "name": "Çağrı Merkezi & Destek", "url": "https://dgtlface.com/tr/callcenter" },
//         { "@type": "ListItem", "position": 3, "name": "PMS & OTA Yönetimi (Turizm)", "url": "https://dgtlface.com/tr/pms-ota" },
//         { "@type": "ListItem", "position": 4, "name": "SEO (Arama Motoru Optimizasyonu)", "url": "https://dgtlface.com/tr/seo" },
//         { "@type": "ListItem", "position": 5, "name": "SEM (Performans Reklamcılığı)", "url": "https://dgtlface.com/tr/sem" },
//         { "@type": "ListItem", "position": 6, "name": "SMM (Sosyal Medya Pazarlaması)", "url": "https://dgtlface.com/tr/smm" },
//         { "@type": "ListItem", "position": 7, "name": "BT Çözümleri & Yazılım Geliştirme", "url": "https://dgtlface.com/tr/software" },
//         { "@type": "ListItem", "position": 8, "name": "Dijital Analiz & Raporlama", "url": "https://dgtlface.com/tr/raporlama" },
//         { "@type": "ListItem", "position": 9, "name": "Otel Dijital Pazarlama & Dönüşüm", "url": "https://dgtlface.com/tr/otel" }
//       ]
//     },

//     // 6) BreadcrumbList
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://dgtlface.com/tr/hizmetlerimiz/#breadcrumb",
//       "itemListElement": [
//         { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://dgtlface.com/tr/" },
//         { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://dgtlface.com/tr/hizmetlerimiz" }
//       ]
//     },

//     // 7) FAQPage (senin ServicesPage.faq alanından)
//     {
//       "@type": "FAQPage",
//       "@id": "https://dgtlface.com/tr/hizmetlerimiz/#faq",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "DGTLFACE hangi alanlarda dijital pazarlama hizmetleri sunuyor?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DGTLFACE; SEO, SEM (Google Ads & performans reklamcılığı), sosyal medya yönetimi, web & yazılım geliştirme, creative tasarım & prodüksiyon, çok dilli çağrı merkezi, PMS & OTA yönetimi ve veri analizi & raporlama alanlarında hizmet sunar."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Dijital pazarlama hizmetleriniz sadece otellere mi yönelik?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Odak noktamız otel ve turizm sektörü olsa da; hizmet, sağlık, gayrimenkul ve B2B gibi farklı sektörlerde de projeler yürütüyoruz. Temel yaklaşımımız entegre, veri odaklı ve uzun vadeli büyüme modelidir."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Entegre dijital pazarlama mimarisi ne demek?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "SEO, SEM, sosyal medya, web, çağrı merkezi, PMS–OTA ve raporlama gibi bileşenlerin tek bir strateji ve veri katmanı altında birlikte çalışmasıdır."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Sadece tek bir hizmet alabilir miyim? (örneğin sadece SEO veya sadece Google Ads)",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet, sadece belirli bir hizmet için de çalışabiliriz. Ancak en verimli sonuçları, birden fazla hizmetin koordineli yürütüldüğü entegre yapılarda elde ederiz."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Antalya dışında da hizmet veriyor musunuz?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Evet. Antalya merkezliyiz; Türkiye ve yurtdışında birçok marka ile tamamen online olarak toplantı, raporlama ve optimizasyon süreçlerini yürütüyoruz."
//           }
//         }
//       ]
//     }
//   ]
// };


const Page = ({ params }) => {
   const { locale } = params;
  const t = useTranslations("ServicesPage");
  const t2 = useTranslations("ServicesPage.h4Section");

const base = getBaseUrl();
const pathnameKey = "/Services";
const canonicalUrl = getCanonicalUrl(pathnameKey, locale);

const pageUrl = canonicalUrl;

const faqItems = Array.from({ length: 5 }, (_, i) => {
  const idx = i + 1;
  return { question: t(`faq.question${idx}`), answer: t.raw(`faq.answer${idx}`) };
});

const serviceItems = [
  { name: "SEO", url: `${base}/${locale}${locale === "tr" ? "/seo" : "/search-engine-optimization"}` },
  { name: "SEM", url: `${base}/${locale}${locale === "tr" ? "/sem" : "/search-engine-marketing"}` },
  { name: "SMM", url: `${base}/${locale}${locale === "tr" ? "/smm" : "/social-media-management"}` },
  { name: "Software", url: `${base}/${locale}${locale === "tr" ? "/yazilim" : "/software-development"}` },
  { name: "Creative", url: `${base}/${locale}${locale === "tr" ? "/creative" : "/creative-design"}` },
  { name: "Call Center", url: `${base}/${locale}${locale === "tr" ? "/cagri-merkezi" : "/call-center"}` },
  { name: "PMS & OTA", url: `${base}/${locale}/pms-ota` },
  { name: "Hotel", url: `${base}/${locale}${locale === "tr" ? "/otel" : "/hotel"}` },
  { name: "Digital Analysis", url: `${base}/${locale}${locale === "tr" ? "/raporlama" : "/digital-analysis"}` },
];

const jsonLd = buildServicesHubJsonLd({
  locale,
  baseUrl: base,
  pageUrl: canonicalUrl,
  pageName: t("jsonld.pageName"),
  pageDescription: stripHtml(t("jsonld.pageDescription")).slice(0, 300),
  serviceName: t("jsonld.serviceName"),
  serviceDescription: stripHtml(t("aiAnswerBlock")),
  keywords: t.raw("jsonld.keywords"),
  breadcrumbName: t("jsonld.breadcrumbName"),
  faqItems,
  serviceItems,
  aiQuestion: locale === "tr"
    ? "DGTLFACE bu sayfada ne sunuyor?"
    : "What does DGTLFACE offer on this page?",
  aiAnswer: t("aiAnswerBlock"),
  aiSource: t("aiSourceMention"),
});



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
    widthClass: "w-[90%] lg:  w-[70%]",
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



  return (
   <>
    {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
    <div className='flex flex-col overflow-hidden gap-[30px] md:gap-[35px] lg:gap-[50px] items-center justify-center max-w-screen '>
      {/* <Section1 /> */}
      <div className='hidden lg:flex'>
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
      </div>

      <div className='flex lg:hidden'>
        <MobileMainBanner header={t("servicespage_s1_text1")} span={t("servicespage_s1_span1")} text={
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
      </div>

  <AutoBreadcrumbsWhite/>
     <AiAnswerBlock text={t("aiAnswerBlock")}/>
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

     <VerticalSlider2 page="ServicesPage" itemCount={4}/>

      <QuestionsSection2 color="#140F25" faqs={faqs} />
      <Section4 />
      <Section5 />
      <AiSourceMention text={t("aiSourceMention")}/>
      <ContactMain />
    </div>
   </>
  )
}

export default Page