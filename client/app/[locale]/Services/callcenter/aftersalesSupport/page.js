import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import { useTranslations } from "next-intl";
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, oteller ve markalar için satış sonrası müşteri destek, şikayet yönetimi, çok kanallı iletişim ve CRM/PMS entegrasyonlu çağrı merkezi çözümleri sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek/#webpage",
      "url": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek",
      "name": "Satış Sonrası Müşteri Destek – Çok Kanallı Destek Çözümleri | DGTLFACE",
      "description": "DGTLFACE, satış sonrası destek süreçlerinizi profesyonel ekiplerle yönetir. Müşteri soruları, bilgi talepleri ve sorun çözümü için çok kanallı destek sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek/#service",
      "name": "Satış Sonrası Müşteri Destek – Çok Kanallı Destek Çözümleri",
      "url": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "müşteri destek merkezi, satış sonrası hizmet, müşteri hizmetleri, destek hattı, çağrı sonrası takip, müşteri iletişim yönetimi",
      "description": "DGTLFACE, satış sonrası müşteri destek süreçlerini profesyonel ekiplerle yönetir. Telefon, WhatsApp, e-posta, DM, OTA mesajları ve web chat üzerinden gelen soru, şikayet ve talepleri çok kanallı iletişim modeliyle karşılar; şikayet yönetimi, çağrı sonrası CRM entegrasyonu, memnuniyet ölçümü ve otel/turizm projelerinde PMS destek süreçleriyle marka sadakati ve müşteri memnuniyetini artırır.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "müşteri destek merkezi",
        "satış sonrası hizmet",
        "müşteri hizmetleri",
        "destek hattı",
        "çağrı sonrası takip",
        "müşteri iletişim yönetimi",
        "müşteri şikayet yönetimi nasıl yapılır",
        "satış sonrası destek örnekleri",
        "müşteri sorun çözme teknikleri",
        "oteller için satış sonrası süreç",
        "turizm müşteri yönetimi",
        "çağrı sonrası crm entegrasyonu",
        "müşteri memnuniyeti artırma yöntemleri",
        "satış sonrası destek kanalları",
        "otel satış sonrası destek",
        "turizm müşteri memnuniyeti",
        "resort customer care",
        "booking sonrası misafir iletişimi",
        "müşteri destek antalya",
        "antalya çağrı merkezi",
        "satış sonrası destek türkiye",
        "antalya müşteri hizmetleri"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek/#breadcrumb",
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
          "name": "Çağrı Merkezi Hizmetleri",
          "item": "https://dgtlface.com/tr/cagri-merkezi-hizmetleri"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Satış Sonrası Destek",
          "item": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/satis-sonrasi-destek/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Satış sonrası destek nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Satış sonrası destek; misafir veya müşterilerin satın alma veya konaklama sonrasında ilettiği soru, şikayet, talep ve önerilerin telefon, WhatsApp, e-posta, DM, web chat ve OTA mesajları üzerinden profesyonel şekilde yönetilmesi, çözümlenmesi ve takip edilmesi sürecidir."
          }
        },
        {
          "@type": "Question",
          "name": "Otellerde satış sonrası süreç nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Otellerde satış sonrası süreç; konaklama öncesi ve sonrası iletişim, şikayet ve talep yönetimi, memnuniyet aramaları, yorum davetleri ve tekrar rezervasyon önerileri gibi adımları içerir ve marka sadakatini doğrudan etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "Çok kanallı müşteri desteği nasıl kurgulanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çok kanallı müşteri desteğinde telefon, WhatsApp, e-posta, sosyal medya mesajları, yorumlar, web chat ve OTA mesajları tek bir iletişim mimarisinde birleşir; tüm kanallar için ortak ton, SLA ve çözüm prosedürleri tanımlanır."
          }
        },
        {
          "@type": "Question",
          "name": "CRM entegrasyonu nasıl yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Satış sonrası çağrı ve mesaj kayıtları, konu, sonuç ve aksiyon bilgileriyle birlikte CRM veya PMS sistemine işlenir; böylece misafir geçmişi, tekrarlayan şikayetler ve VIP/riskli profiller tek ekrandan takip edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Misafir geri dönüş toplama yöntemleri nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Misafir geri bildirimleri; konaklama sonrası aramalar, kısa anketler, e-posta/WhatsApp linkleri, OTA ve Google yorum davetleri ile toplanabilir ve bu veriler memnuniyet ve hizmet iyileştirme süreçlerinde kullanılabilir."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("AfterSalesSupportPage");

const t2 = useTranslations("AfterSalesSupportPage.h4Section");
           
              const stepData = [1,2,3,4,5].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5][i-1],
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
      
    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden items-center justify-center'>
     <SubBanner
  header={t("subbanner_header")}
  header2={t("subbanner_header2")}
  text={t.raw("subbanner_text")}
    header3={t("subbanner_header3")}
  text2={t.raw("subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AiAnswerBlock text={t("ai_answer_text")}/>
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
     <AiSourceMention text="Bu bilgi, DGTLFACE’in satış sonrası müşteri destek operasyonları, turizm misafir memnuniyeti süreçleri ve CRM–Çağrı Merkezi entegrasyon modellerinden derlenmiştir."/>
    </div>
    </>
  )
}

export default page
