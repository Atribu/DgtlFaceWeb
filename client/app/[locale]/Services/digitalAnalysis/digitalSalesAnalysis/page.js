import StepSection2New from "@/app/[locale]/components/subPageComponents/StepSection2New";
import SubBanner from "@/app/[locale]/components/subPageComponents/SubBanner";
import VerticalSlider from "@/app/[locale]/components/subPageComponents/VerticalSlider";
import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from "@/app/[locale]/components/common/AiAnswerBlock";
import H2LogoSection from "@/app/[locale]/components/subPageComponents/H2LogoSection";
import LogoListSectionBlack from "@/app/[locale]/components/subPageComponents/LogoListSectionBlack";
import QuestionsSection2 from "@/app/[locale]/components/subPageComponents/QuestionSection2";
import { AiSourceMention } from "@/app/[locale]/components/common/AiSourceMention";
import AutoBreadcrumbs from "@/app/[locale]/components/common/AutoBreadcrumbs";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, oteller ve markalar için satış ve dönüşüm raporlama, funnel analizi, kanal bazlı gelir analizi ve veri odaklı gelir stratejileri sunan turizm odaklı dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/raporlama/satis-donusum/#webpage",
      "url": "https://dgtlface.com/tr/raporlama/satis-donusum",
      "name": "Satış & Dönüşüm Raporlama – Gelir Artırıcı Veri Analizi | DGTLFACE",
      "description": "DGTLFACE, satış ve dönüşüm raporlarıyla reklam, web ve sosyal medya performansını analiz eder. Gelir artışı için veri odaklı kararlar alın.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/raporlama/satis-donusum/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/raporlama/satis-donusum/#service",
      "name": "Satış & Dönüşüm Raporlama – Gelir Artırıcı Veri Analizi",
      "url": "https://dgtlface.com/tr/raporlama/satis-donusum",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "satış dönüşüm raporu, dönüşüm analizi, satış raporu, funnel analizi, performans ölçümü, gelir analizi",
      "description": "DGTLFACE, satış ve dönüşüm raporlama hizmetiyle SEO, reklam, sosyal medya, OTA, PMS ve çağrı merkezi performansını tek bir satış hunisi üzerinde analiz eder. Satış dönüşüm raporu, dönüşüm analizi, satış raporu, funnel analizi, performans ölçümü ve gelir analizi üzerinden oteller ve markalar için kanal bazlı satış, ROAS, RevPAR ve kârlılık metriklerini görünür kılar ve veri odaklı gelir artırma stratejileri sunar.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "satış dönüşüm raporu",
        "dönüşüm analizi",
        "satış raporu",
        "funnel analizi",
        "performans ölçümü",
        "gelir analizi",
        "dönüşüm oranı nasıl artırılır",
        "satış hunisi analizi",
        "reklam dönüşüm raporu",
        "otel satış raporu hazırlama",
        "turizm satış analizleri",
        "rezervasyon dönüşüm analizi",
        "satış artırma veri taktikleri",
        "meta ads dönüşüm raporu",
        "google ads satış analizi",
        "crm satış verisi analizi",
        "otel satış dönüşüm analizi",
        "resort satış raporu",
        "turizm dönüşüm stratejisi",
        "pms satış verileri",
        "satış raporlama antalya",
        "antalya dönüşüm analizi",
        "satış performans türkiye",
        "antalya gelir analiz hizmeti"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/raporlama/satis-donusum/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Satış & Dönüşüm Raporlama",
          "item": "https://dgtlface.com/tr/raporlama/satis-donusum"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/raporlama/satis-donusum/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Satış & dönüşüm raporlama nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Satış ve dönüşüm raporlama; trafik, kullanıcı davranışı, dönüşüm aksiyonları ve gelir verilerini tek bir satış hunisi (funnel) üzerinde birleştirerek hangi kanalın ne kadar satış ve gelir ürettiğini gösteren, veri odaklı performans analizidir."
          }
        },
        {
          "@type": "Question",
          "name": "Dönüşüm oranı (conversion rate) nasıl hesaplanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dönüşüm oranı, belirli bir hedefi (örneğin rezervasyon veya satış) tamamlayan kullanıcı sayısının toplam ziyaretçi veya talep sayısına bölünmesiyle hesaplanır. Örneğin 1.000 ziyaretten 50’si rezervasyona dönerse dönüşüm oranı %5’tir."
          }
        },
        {
          "@type": "Question",
          "name": "OTA vs Web vs Call Center satışları nasıl karşılaştırılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA, web ve çağrı merkezi satışları kanal bazlı gelir, rezervasyon sayısı, komisyon ve kârlılık metrikleriyle birlikte raporlanır. Böylece hangi kanalın toplam ciroya değil, gerçek kârlılığa daha fazla katkı sağladığı karşılaştırılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Reklam harcamasının satışa etkisi nasıl ölçülür (ROAS, ROI)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Ads, Meta Ads ve diğer platformlardan gelen kampanya verileri GA4, PMS ve satış verileriyle birleştirilir. Harcanan bütçe ve üretilen gelir karşılaştırılarak ROAS ve ROI hesaplanır; böylece hangi kampanyanın gerçekten satış ve gelir getirdiği ortaya çıkar."
          }
        },
        {
          "@type": "Question",
          "name": "Satış raporu sadece ciro mu gösterir, yoksa kârlılık da analiz edilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profesyonel satış raporlamada sadece ciroya değil; kanal bazlı kârlılığa, komisyon ve maliyetlere, iptal ve no-show oranlarına da bakılır. DGTLFACE, satış & dönüşüm raporlarında hem gelir hem de kârlılık metriklerini analiz eder ve strateji önerileri sunar."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("SalesConversionReportingPage");
  const t2 = useTranslations("SalesConversionReportingPage.h4Section");
           
              const stepData = [1,2,3,4].map(i => ({
                id: i,
                image: [image1,image2,image1,image2][i-1],
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
                { title: t("h2Section.header4"), text: t.raw("h2Section.text4") },
                 { title: t("h2Section.header5"), text: t.raw("h2Section.text5") }
             ];


  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className="flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden items-center justify-center">
<div className="flex flex-col items-center justify-center gap-5">
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
      <VerticalSlider page="SalesConversionReportingPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in satış & dönüşüm analizi, otel satış raporlama, çok kanallı funnel incelemeleri ve gelir analizi projelerine ait iç dokümantasyon ve pratiklerinden derlenmiştir."/>
    </div>
   </>
  );
};

export default page;
