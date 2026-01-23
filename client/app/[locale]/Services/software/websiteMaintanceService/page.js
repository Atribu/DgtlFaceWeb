import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import AutoBreadcrumbs from '@/app/[locale]/components/common/AutoBreadcrumbs'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, kurumsal web siteleri ve otel projeleri için web sitesi bakım, teknik destek, performans izleme, güvenlik ve Next.js bakım planı sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/yazilim/bakim-ve-destek/#webpage",
      "url": "https://dgtlface.com/tr/yazilim/bakim-ve-destek",
      "name": "Web Sitesi Bakım & Teknik Destek – Sürekli Performans ve Güvenlik | DGTLFACE",
      "description": "DGTLFACE, web sitesi bakım ve teknik destek hizmetleri sunar. Performans izleme, hata çözümü ve düzenli güncellemelerle sitenizi güçlendirir.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/yazilim/bakim-ve-destek/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/yazilim/bakim-ve-destek/#service",
      "name": "Web Sitesi Bakım & Teknik Destek – Sürekli Performans ve Güvenlik",
      "url": "https://dgtlface.com/tr/yazilim/bakim-ve-destek",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "web sitesi bakım, teknik destek hizmeti, web güncelleme, performans izleme, hataların giderilmesi, yazılım desteği",
      "description": "DGTLFACE, web sitesi bakım ve teknik destek hizmetiyle kurumsal ve otel web sitelerini hızlı, güvenli ve güncel tutar. Performans izleme, güvenlik ve versiyon güncellemeleri, hata giderme, kırık link temizliği, içerik ve görsel güncellemeleri ile Next.js bakım planı gibi süreçleri tek bir bakım modeli içinde yönetir; PMS–OTA entegrasyonlu yapılarda uptime ve entegrasyon sürekliliğini sağlar.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "web sitesi bakım",
        "teknik destek hizmeti",
        "web güncelleme",
        "performans izleme",
        "hataların giderilmesi",
        "yazılım desteği",
        "web sitesi bakım paketi nasıl olmalı",
        "teknik destek hizmetleri nelerdir",
        "oteller için web desteği",
        "turizm web sitesi bakım planı",
        "düzenli web site kontrolü",
        "kırık linkleri düzeltme",
        "uptime kontrol araçları",
        "web sitesi yavaşlama nedenleri",
        "içerik güncelleme hizmeti",
        "next.js bakım planı",
        "web bakım antalya",
        "teknik destek antalya",
        "web bakım türkiye",
        "antalya yazılım desteği"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/yazilim/bakim-ve-destek/#breadcrumb",
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
          "name": "Web Sitesi Bakım ve Teknik Destek",
          "item": "https://dgtlface.com/tr/yazilim/bakim-ve-destek"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/yazilim/bakim-ve-destek/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Web sitesi bakımı gerçekten gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Güvenlik, hız, hata giderme ve güncellemeler için düzenli bakım şarttır; aksi halde site zamanla yavaşlayabilir, bozulabilir ve güvenlik açıklarına maruz kalabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Bakım paketinde neler var?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bakım paketi; performans izleme, güvenlik kontrolleri, hata çözümü, kırık link temizliği, versiyon güncellemeleri ve ihtiyaç halinde içerik desteği gibi başlıkları kapsar. Proje özelinde kapsam netleştirilir."
          }
        },
        {
          "@type": "Question",
          "name": "Siteniz olmasa da bakım hizmeti verir misiniz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Başka ajansların geliştirdiği siteler için de kod ve altyapı analizi yaptıktan sonra uygun bir bakım ve teknik destek modeli oluşturabiliriz."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için özel bakım planı var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Otel ve turizm siteleri için sezonluk yoğunluk, kampanya dönemleri ve PMS–OTA entegrasyon ihtiyaçlarına göre özel bakım planları hazırlanır; yüksek sezonda uptime ve performans önceliklendirilir."
          }
        },
        {
          "@type": "Question",
          "name": "Bakım süresince site kapanır mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle hayır. Kritik işlemler mümkün olduğunca düşük trafik saatlerinde ve kontrollü şekilde yapılır; gerekli durumlarda kısa süreli bakım pencereleri önceden planlanır ve bilgilendirme yapılır."
          }
        }
      ]
    }
  ]
}

const Page = () => {
   const t = useTranslations("SoftwareMaintenance");
    const t2 = useTranslations("SoftwareMaintenance.h4Section");
            
               const stepData = [1,2,3].map(i => ({
                 id: i,
                 image: [image1,image2,image3][i-1],
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
                 { title: t("h2Section.header5"), text: t.raw("h2Section.text5") },
                  { title: t("h2Section.header6"), text: t.raw("h2Section.text6") }

              ];


  return (
<>
 <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center'>
<div className='flex flex-col items-center justify-center gap-5'>
        <SubBanner
  header={t("maintenance_subbanner_header")}
  header2={t("maintenance_subbanner_header2")}
  text={t.raw("maintenance_subbanner_text")}
    header3={t("maintenance_subbanner_header3")}
  text2={t.raw("maintenance_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("maintenance_ai_answer_text")}/>
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
      <VerticalSlider page="SoftwareMaintenance" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
</>
  )
}

export default Page
