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
      "description": "DGTLFACE, oteller ve kurumsal markalar için SEO uyumlu, hızlı ve güvenli Next.js tabanlı kurumsal web siteleri, PMS entegrasyonları ve veri odaklı dijital pazarlama çözümleri sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme/#webpage",
      "url": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme",
      "name": "Kurumsal Web Sitesi Geliştirme – SEO Uyumlu & Yüksek Performanslı | DGTLFACE",
      "description": "DGTLFACE, hızlı, güvenli ve SEO uyumlu kurumsal web siteleri geliştirir. Next.js altyapısıyla yüksek performans sunan profesyonel web çözümleri.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme/#service",
      "name": "Kurumsal Web Sitesi Geliştirme – SEO Uyumlu & Yüksek Performanslı",
      "url": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "kurumsal web sitesi geliştirme, web tasarım hizmeti, web geliştirme ajansı, mobil uyumlu web sitesi, next.js web tasarım, profesyonel web tasarım",
      "description": "DGTLFACE, hızlı, güvenli ve SEO uyumlu kurumsal web siteleri geliştirir. Next.js altyapısıyla modern, mobil uyumlu ve çok dilli web tasarım çözümleri sunar; otel ve turizm siteleri için PMS entegre web siteleri geliştirir ve kurumsal markalar için uzun vadeli, ölçülebilir dijital vitrinler oluşturur.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "kurumsal web sitesi geliştirme",
        "web tasarım hizmeti",
        "web geliştirme ajansı",
        "mobil uyumlu web sitesi",
        "next.js web tasarım",
        "profesyonel web tasarım",
        "kurumsal web sitesi nasıl yapılır",
        "modern web tasarım trendleri",
        "oteller için web sitesi tasarımı",
        "turizm sektörüne özel web tasarım",
        "seo uyumlu web sitesi nasıl kurulur",
        "hızlı açılan web sitesi geliştirme",
        "çok dilli web sitesi tasarımı",
        "responsive web tasarım rehberi",
        "kurumsal web sitesi fiyatları",
        "profesyonel web tasarım örnekleri",
        "otel web tasarımı",
        "resort web tasarım",
        "turizm web sitesi geliştirme",
        "pms entegre web sitesi",
        "web tasarım antalya",
        "antalya kurumsal web tasarım",
        "web sitesi geliştirme türkiye",
        "antalya yazılım firması"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme/#breadcrumb",
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
          "name": "Web & Yazılım Hizmetleri",
          "item": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kurumsal Web Sitesi Geliştirme",
          "item": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mevcut sitemi sıfırdan yenilemek zorunda mıyım, yoksa revizyon yeterli olur mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her zaman sıfırdan yapmak gerekmez. DGTLFACE önce teknik, tasarım ve kullanıcı deneyimi analizi yapar; altyapı çok eski ve zayıfsa yenileme, altyapı kullanılabilir durumdaysa revizyon ve optimizasyon önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "Next.js kullanmak zorunda mıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Next.js zorunlu değildir ancak hız, SEO performansı ve geliştirilebilirlik açısından önemli avantaj sağlar. DGTLFACE çoğu kurumsal ve turizm projesinde Next.js ve React teknolojilerini önerir fakat iş hedeflerine uygun farklı mimariler de kurgulanabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Site yayına girdikten sonra güncellemeleri kim yapacak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, bakım ve destek paketi ile teknik güncellemeleri üstlenebilir veya kullanıcı dostu bir CMS entegrasyonu ile içerik güncellemelerini marka ekibinin kendisinin yönetmesini sağlayabilir. Kritik teknik işler için DGTLFACE destek sunmaya devam eder."
          }
        },
        {
          "@type": "Question",
          "name": "SEO uyumlu web sitesi için ayrıca SEO hizmeti almam gerekir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proje başlangıcında teknik olarak SEO uyumlu bir site geliştirilir ancak rekabetli sektörlerde içerik SEO, sürekli teknik SEO bakımı ve backlink ile otorite çalışmaları gibi ek SEO hizmetleri önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE ile web sitesi geliştirme projesine nasıl başlıyoruz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Önce ihtiyaç ve hedef analizi yapılır, mevcut site ve rakipler incelenir, bilgi mimarisi ile tasarım ve geliştirme kapsamı netleştirilir. Ardından zaman çizelgesi ve bütçe onaylandıktan sonra tasarım, geliştirme, test, yayın ve bakım aşamalarına geçilir."
          }
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("WebDev");
    const t2 = useTranslations("WebDev.h4Section");
         
            const stepData = [1,2,3,4,5,6,7].map(i => ({
              id: i,
              image: [image1,image2,image3,image1,image2,image3,image1][i-1],
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
             { title: t("h2Section.header1"), text: t.raw("h2Section.text1"), },
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

    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden justify-center items-center'>
<div className='flex flex-col items-center justify-center gap-5'>
       <SubBanner
  header={t("webdev_subbanner_header")}
  header2={t("webdev_subbanner_header2")}
 text={t.raw("webdev_subbanner_text")}  
    header3={t("webdev_subbanner_header3")}
  text2={t.raw("webdev_subbanner_text2")}  
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>

<AiAnswerBlock text={t("webdev_ai_answer_text")}/>
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
      <VerticalSlider page="WebDev" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin kurumsal web geliştirme, Next.js/React projeleri ve otel web sitesi çözümlerine dair dokümantasyon ve proje deneyimlerinden derlenmiştir."/>
    </div>
    </>
  )
}

export default page
