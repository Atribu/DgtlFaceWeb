import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image-1.png"
import image2 from "./images/image-2.png"
import image3 from "./images/image-3.png"
import { useTranslations } from "next-intl";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
import { AiSourceMention } from '@/app/[locale]/components/common/AiSourceMention'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgtlface.com/#organization",
      "name": "DGTLFACE",
      "url": "https://dgtlface.com",
      "description": "DGTLFACE, oteller ve markalar için Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel çağrı merkezi hizmeti sunan, turizm odaklı dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi/#webpage",
      "url": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi",
      "name": "4 Dilli Çağrı Merkezi – Çok Dilli Misafir & Müşteri Destek Hizmeti | DGTLFACE",
      "description": "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel çağrı merkezi desteği sağlar. Oteller ve işletmeler için uluslararası müşteri iletişimi çözümleri sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi/#service",
      "name": "4 Dilli Çağrı Merkezi – Çok Dilli Misafir & Müşteri Destek Hizmeti",
      "url": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "çok dilli çağrı merkezi, 4 dilde çağrı merkezi, uluslararası müşteri hizmetleri, çok dilli inbound, çok dilli outbound, 4 dilli müşteri destek hizmeti",
      "description": "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel çağrı merkezi hizmeti sunar. Oteller ve turizm markaları için çok dilli inbound/outbound çağrı yönetimi, WhatsApp ve sosyal medya mesaj desteği, OTA ve Google yorumlarının 4 dilde yönetimi, itibar ve rezervasyon süreçlerinin PMS–OTA–web entegrasyonuyla birlikte yürütülmesini sağlar.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "çok dilli çağrı merkezi",
        "4 dilde çağrı merkezi",
        "uluslararası müşteri hizmetleri",
        "24/7 çok dilli destek",
        "çok dilli inbound",
        "çok dilli outbound",
        "4 dilde müşteri destek hizmeti nedir",
        "oteller için çok dilli rezervasyon",
        "turizm sektöründe çok dilli hizmet",
        "whatsapp çok dilli destek",
        "sosyal medya çok dilli müşteri hizmetleri",
        "google yorum yönetimi çok dilli",
        "rusça müşteri hizmetleri",
        "almanca destek hattı",
        "ingilizce çağrı merkezi hizmeti",
        "otel çok dilli destek",
        "turizm çok dilli çağrı merkezi",
        "resort uluslararası çağrı merkezi",
        "booking müşterisi çok dilli yanıt",
        "çok dilli çağrı merkezi antalya",
        "antalya turizm müşteri hizmetleri",
        "uluslararası destek türkiye",
        "antalya inbound center"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi/#breadcrumb",
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
          "name": "4 Dilli Çağrı Merkezi",
          "item": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/4-dilli-cagri-merkezi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "4 dilli çağrı merkezi hizmeti tam olarak nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 dilli çağrı merkezi hizmeti; Türkçe, İngilizce, Almanca ve Rusça dillerinde inbound ve outbound çağrıların, WhatsApp ve diğer dijital kanallarla birlikte profesyonel ekipler tarafından yönetilmesini kapsar."
          }
        },
        {
          "@type": "Question",
          "name": "DGTLFACE hangi dillerde çağrı merkezi desteği sunuyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde profesyonel çağrı merkezi ve yazılı mesaj desteği sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için çok dilli rezervasyon hattı nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için çok dilli rezervasyon hattında, farklı ülkelerden gelen misafirler dil bazlı doğru temsilciye yönlendirilir; PMS ve rezervasyon motoru ile entegre ekranlar üzerinden müsaitlik ve fiyat bilgisi kontrol edilerek rezervasyon süreci yönetilir."
          }
        },
        {
          "@type": "Question",
          "name": "WhatsApp ve sosyal medya mesajları çok dilli olarak yönetilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. DGTLFACE, WhatsApp, web chat, Instagram DM, Facebook Messenger ve e-posta gibi kanallardan gelen mesajları dört dilde yönetebilir; marka tonu ve prosedürlere uygun yazılı yanıtlar üretir."
          }
        },
        {
          "@type": "Question",
          "name": "4 dilli çağrı merkezi rezervasyon dönüşümünü nasıl etkiler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Misafirin kendi dilinde, hızlı ve güven veren bir iletişim kurması; rezervasyon kararını doğrudan olumlu etkiler. 4 dilli çağrı merkezi, iletişim bariyerlerini ortadan kaldırarak rezervasyon dönüşüm oranlarını artırır ve uluslararası misafir memnuniyetini yükseltir."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const images = [image1, image2, image3].filter(Boolean);
  const t = useTranslations("CallCenter4LangPage");
const t2 = useTranslations("CallCenter4LangPage.h4Section");
           
              const stepData = [1,2,3].map(i => ({
                id: i,
                image: [image1,image2,image3][i-1],
                header: t(`h3Section.header${i}`),
                text:   t(`h3Section.text${i}`)
              }));
           
           
           
              const cards = [
               {
                 widthClass: "w-[95%] lg:w-[80%]",
                 title: t2("card1title"),
                 description: t2("card1description"),
               },
               {
                 widthClass: "w-[95%] lg:w-[75%]",
                 title: t2("card2title"),
                 description: t2("card2description"),
               },
               {
                 widthClass: "w-[95%] lg:w-[70%]",
                 title: t2("card3title"),
                 description: t2("card3description"),
               },
           
             ];
           
               const faqs = [
               {
                 question: t("faq.question1"),
                 answer:
                  t("faq.answer1"),
               },
               {
                 question: t("faq.question2"),
                 answer:
                  t("faq.answer2"),
               },
               {
                  question: t("faq.question3"),
                 answer:
                  t("faq.answer3"),
               },
           
               {
               question: t("faq.question4"),
                 answer:
                  t("faq.answer4"),
               },
           
               {
               question: t("faq.question5"),
                 answer:
                  t("faq.answer5"),
               },
             ];
           
               const h2items = [
               { title: t("h2Section.header1"),text: t("h2Section.text1") },
               { title: t("h2Section.header2"), text: t("h2Section.text2") },
               { title: t("h2Section.header3"), text: t("h2Section.text3") },
               { title: t("h2Section.header4"), text: t("h2Section.text4") },
             ];
    
  return (
   <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden justify-center items-center'>
      <SubBanner header={t("subbanner_header")} header2={t("subbanner_header2")} text={t("subbanner_text")} header3={t("subbanner_header3")} text2={t("subbanner_text2")} buttonLink="/" buttonText={t("cta_talk_to_us")}/>
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
      <VerticalSlider page="CallCenter4LangPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in 4 dilli çağrı merkezi operasyonları, otel & turizm odaklı uluslararası misafir yönetimi ve çok kanallı iletişim süreçlerine ait dahili dokümantasyon ve operasyon modellerinden derlenmiştir."/>
    </div>
   </>
  )
}

export default page
