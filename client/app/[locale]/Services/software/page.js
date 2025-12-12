import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import MobileMainBanner from '../../components/subPageComponents/MobileMainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import RichTextSpan from '../../components/common/RichTextSpan'
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'
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
      "description": "DGTLFACE; Next.js ve React teknolojileriyle yüksek hızlı, güvenli ve SEO uyumlu web siteleri geliştiren, oteller ve markalar için özel yazılım, CMS, sunucu yönetimi ve KVKK uyum hizmetleri sunan bir dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#webpage",
      "url": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri",
      "name": "Web Sitesi Tasarımı & Özel Yazılım Geliştirme – Next.js & React | DGTLFACE",
      "description": "DGTLFACE, Next.js ve React teknolojileriyle yüksek hızlı, güvenli ve SEO uyumlu web siteleri geliştirir. Özel yazılım, CMS, sunucu güvenliği, KVKK uyumu ve bakım & destek hizmetleri sunar.",
      "isPartOf": {
        "@id": "https://dgtlface.com/#website"
      },
      "inLanguage": "tr-TR",
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#breadcrumb"
      },
      "about": [
        "web yazılım ajansı",
        "Next.js geliştirme",
        "React web geliştirme",
        "kurumsal web tasarımı",
        "otel web sitesi geliştirme",
        "PMS uyumlu web geliştirme",
        "çok dilli web sitesi geliştirme",
        "web performans optimizasyonu"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#service",
      "name": "Web Sitesi Tasarımı & Özel Yazılım Geliştirme – Next.js & React",
      "url": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "web yazılım ajansı, web sitesi geliştirme, Next.js geliştirme, React web geliştirme, kurumsal web tasarımı, otel web sitesi geliştirme",
      "description": "DGTLFACE, Next.js ve React teknolojileriyle yüksek hızlı, güvenli ve SEO uyumlu web siteleri geliştirir. Oteller ve kurumsal markalar için çok dilli web siteleri, rezervasyon modülleri, CMS panelleri, KVKK uyumlu altyapılar, sunucu güvenliği ve bakım & destek hizmetleri sunar.",
      "areaServed": ["Antalya","Türkiye","Europe",  "Belek",
        "Kemer",
        "Side",
        "Alanya","Bodrum"],
      "inLanguage": "tr-TR",
      "keywords": [
        "web yazılım ajansı",
        "web sitesi geliştirme",
        "yazılım ajansı",
        "next.js geliştirme",
        "react web geliştirme",
        "kurumsal web tasarımı",
        "next.js seo uyumlu web sitesi",
        "react ile web sitesi nasıl yapılır",
        "hızlı web sitesi geliştirme",
        "seo uyumlu web tasarımı nasıl olmalı",
        "otel web sitesi tasarımı",
        "pms uyumlu web geliştirme",
        "turizm web yazılımı",
        "rezervasyon modülü web geliştirme",
        "cms paneli nasıl kurulur",
        "çok dilli web sitesi geliştirme",
        "web sitesi mobil uyumluluk testi",
        "web performans optimizasyonu",
        "web yazılım antalya",
        "antalya web tasarım ajansı",
        "yazılım geliştirme türkiye",
        "antalya react developer"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#services-list",
      "name": "DGTLFACE Web & Yazılım Hizmetleri",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Web Sitesi Geliştirme",
          "url": "https://dgtlface.com/tr/yazilim/web-sitesi-gelistirme"
        },
        {
          "@type": "Service",
          "name": "CMS & Panel Entegrasyonu",
          "url": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu"
        },
        {
          "@type": "Service",
          "name": "KVKK Uyumlu Web Çözümleri",
          "url": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti"
        },
        {
          "@type": "Service",
          "name": "Sunucu Yönetimi & Web Güvenliği",
          "url": "https://dgtlface.com/tr/yazilim/sunucu-guvenlik"
        },
        {
          "@type": "Service",
          "name": "Web Sitesi Bakım & Teknik Destek",
          "url": "https://dgtlface.com/tr/yazilim/bakim-ve-destek"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/web-ve-yazilim-hizmetleri/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Yeni bir web sitesi projesine başlarken süreç nasıl işliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Öncelikle mevcut durum ve hedeflerinizi anlamak için analiz ve keşif toplantısı yapıyoruz. Ardından bilgi mimarisi, tasarım dili, teknoloji seçimi, çok dilli yapı, SEO ve entegrasyon ihtiyaçlarını içeren bir yol haritası hazırlıyoruz. Onay sonrası tasarım, geliştirme, test, yayın ve bakım aşamalarını yönetiyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Sadece tasarım mı yapıyorsunuz, yoksa yazılım ve sunucu tarafını da siz mi yönetiyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, tasarım, frontend, backend, sunucu, güvenlik ve bakım süreçlerini uçtan uca yönetebilen bir ekip olarak çalışır. İsterseniz sadece belirli katmanlarda da destek olabiliriz; ancak en sağlıklı sonuçlar tüm katmanları aynı ekibin yönettiği projelerde elde edilir."
          }
        },
        {
          "@type": "Question",
          "name": "Web sitem SEO uyumlu olacak mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Web ve yazılım projelerimizde teknik SEO uyumu temel şarttır. Site mimarisi, URL yapısı, meta alanları, schema, çok dilli yapı ve performans optimizasyonu SEO ekibiyle birlikte planlanır ve uygulanır."
          }
        },
        {
          "@type": "Question",
          "name": "Mevcut web sitemi tamamen yenilemek zorunda mıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her zaman değil. Önce mevcut sitenizi teknik, tasarım ve kullanıcı deneyimi açısından analiz ediyoruz. Kimi projelerde kısmi revizyonlar yeterli olurken, bazılarında Next.js tabanlı yeni bir yapı daha mantıklı olabilir. Kararı veriye ve hedeflerinize göre birlikte alıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Bakım ve destek sürecinde neler yapıyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bakım ve destek kapsamında düzenli güvenlik güncellemeleri, performans iyileştirmeleri, içerik ve görsel güncellemeleri, hata tespiti ve çözümü, uptime takibi ve küçük geliştirmeler gibi süreçleri sürekli olarak yönetiyoruz."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("Software");
      const t2 = useTranslations("Software.h4Section");
  
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
                   ns="Software"
                   id="h2Section.text1"
                   className=""
                 />
               ),
             },
             {
               title: t("h2Section.title2"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text2"
                   className=""
                 />
               ),
             },
             {
               title: t("h2Section.title3"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text3"
                   className=""
                 />
               ),
             },
               {
               title: t("h2Section.title4"),
               text: (
                 <RichTextSpan
                   ns="Software"
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

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`software_services_title${i}`),
  subTitle: t(`software_services_subtitle${i}`),
     text: t(`software_services_text${i}`),
  features: [1,2,3,4,5].map(j => t(`software_services_feature${i}_${j}`)),
  buttonLink: [
     "/yazilim/web-sitesi-gelistirme",
    "/yazilim/cms-entegrasyonu",
    "/yazilim/kvkk-uyum-hizmeti",
    "/yazilim/sunucu-guvenlik",
    "/yazilim/bakim-ve-destek"
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

    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
<div className='hidden lg:flex'>
     <MainBanner header={t("software_banner_header")} span={t("software_banner_span")} text={
           <RichTextSpan
             ns="Software"
             id="software_banner_text"
           />
         }   buttonText={t("buttonText")}/>
</div>

<div className='flex lg:hidden'>
     <MobileMainBanner header={t("software_banner_header")} span={t("software_banner_span")} text={
           <RichTextSpan
             ns="Software"
             id="software_banner_text"
           />
         }   buttonText={t("buttonText")}/>
</div>
<AutoBreadcrumbsWhite/>

         <AiAnswerBlock text="DGTLFACE, Next.js ve React teknolojileriyle modern, hızlı, SEO uyumlu ve güvenli web siteleri geliştirir. Oteller için PMS–OTA entegrasyonlu rezervasyon altyapıları, kurumsal markalar için çok dilli ve yüksek performanslı web deneyimleri sunar. CMS entegrasyonu, KVKK uyumu, sunucu optimizasyonu ve sürekli bakım–destek hizmetleriyle uçtan uca bir web geliştirme ekosistemi sağlar. Tüm projelerde teknik SEO ve Core Web Vitals standartlarına tam uyum hedeflenir."/>
         <DualHighlightSection items={items}/>
<StepSection
  header={t("software_section_header1")}
  header2={t("software_section_header2")}
  text={t("software_section_text")}
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
      <VerticalSlider2 page="Software" itemCount={4}/>
      <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <Contact/>
      <AiSourceMention text="Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin web geliştirme, Next.js–React altyapısı, UI/UX süreçleri ve otel teknolojileri dokümantasyonundan derlenmiştir."/>
    </div>
    </>
  )
}

export default page
