import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
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
      "description": "DGTLFACE, oteller ve markalar için Instagram DM, WhatsApp, web chat, OTA mesajları ve online yorumlar üzerinde çok kanallı ve çok dilli sosyal medya mesaj & yorum yönetimi hizmeti sunan çağrı merkezi ve dijital operasyon partneridir.",
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
      "@id": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi",
      "name": "Sosyal Medya Mesaj & Yorum Yönetimi – Çok Kanallı Destek | DGTLFACE",
      "description": "DGTLFACE, sosyal medya ve mesaj platformlarındaki tüm müşteri mesajlarını profesyonel olarak yönetir. WhatsApp, Instagram DM ve Web Chat üzerinden çok kanallı destek sağlar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi/#service",
      "name": "Sosyal Medya Mesaj & Yorum Yönetimi – Çok Kanallı Destek",
      "url": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "sosyal medya mesaj yönetimi, mesaj yönetimi hizmeti, instagram dm yönetimi, whatsapp müşteri hizmetleri, çok kanallı mesaj yönetimi, sosyal medya yorum yanıtı",
      "description": "DGTLFACE, sosyal medya ve mesaj platformlarındaki tüm müşteri mesajlarını profesyonel olarak yönetir. Instagram DM, WhatsApp Business, Facebook Messenger, web chat, Google/Yandex yorumları ve OTA mesaj kutularını tek panelde toplayarak TR–EN–DE–RU dillerinde yanıtlar. Çok kanallı mesaj yönetimi, itibar yönetimi, rezervasyon ve satış fırsatlarını çağrı merkezi standardında uçtan uca yönetir.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "sosyal medya mesaj yönetimi",
        "mesaj yönetimi hizmeti",
        "instagram dm yönetimi",
        "whatsapp müşteri hizmetleri",
        "çok kanallı mesaj yönetimi",
        "instagram mesaj yönetimi nasıl yapılır",
        "oteller için sosyal medya mesaj yönetimi",
        "whatsapp destek hattı kurma",
        "web chat müşteri hizmetleri",
        "sosyal medya şikayet yönetimi",
        "google yorum yanıtlama",
        "yandex yorum yanıtlama",
        "4 dilli mesaj yönetimi",
        "multichannel chatbox sistemi",
        "sosyal medya müşteri hizmetleri",
        "otel instagram mesaj yönetimi",
        "turizm whatsapp management",
        "resort dm yönetimi",
        "otel yorum yönetimi",
        "mesaj yönetimi antalya",
        "sosyal medya destek antalya",
        "instagram dm yönetimi türkiye",
        "antalya yorum yönetimi"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi/#breadcrumb",
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
          "name": "Sosyal Medya Mesaj Yönetimi",
          "item": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/cagri-merkezi/mesaj-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Sosyal medya mesaj yönetimi tam olarak nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sosyal medya mesaj yönetimi; Instagram DM, WhatsApp, web chat, yorumlar ve diğer dijital mesaj kanallarından gelen taleplerin zamanında, tutarlı ve profesyonel şekilde yanıtlanmasını sağlayan çok kanallı müşteri iletişimi sürecidir."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için Instagram DM ve WhatsApp nasıl yönetilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller için gelen DM ve WhatsApp mesajları tek panelde takip edilir; rezervasyon niyeti taşıyan talepler hızlıca çağrı merkezi veya rezervasyon hattına yönlendirilir, şikayet ve bilgi talepleri belirlenmiş prosedürlere göre yanıtlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Çok dilli mesaj yönetimi nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mesajlar TR–EN–DE–RU dillerine göre sınıflandırılır; her dil için eğitimli temsilciler ve uygun tonlama ile yanıt verilir, karmaşık konularda çok dilli çağrı merkezi ile sesli görüşmeye geçiş imkânı sağlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Google & OTA yorumlarına profesyonel yanıt nasıl verilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yorumlar dil ve duygu bazında analiz edilir; olumlu yorumlara teşekkür eden, olumsuzlarda çözüm odaklı ve empatik bir dil kullanan, marka tonu ile uyumlu yanıtlar hazırlanır ve süreç iç ekiplere raporlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Sosyal medya mesaj performansı nasıl raporlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mesaj hacmi, yanıt süresi, çözüm oranı, konu ve dil dağılımı ile rezervasyon veya satışa dönüşen konuşmalar düzenli olarak raporlanır ve dashboard’lar üzerinden takip edilir."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("SocialMediaMessageManagementPage");
const t2 = useTranslations("SocialMediaMessageManagementPage.h4Section");
           
              const stepData = [1,2,3,4,5].map(i => ({
                id: i,
                image: [image1,image2,image3,image1,image2,][i-1],
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
               { title: t("h2Section.header4"), text: t("h2Section.text4") }
             ];


  return (
<>
 <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden justify-center items-center'>
    <SubBanner
  header={t("subbanner_header")}
  header2={t("subbanner_header2")}
  text={t("subbanner_text")}
    header3={t("subbanner_header3")}
  text2={t("subbanner_text2")}
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
      <VerticalSlider page="SocialMediaMessageManagementPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in mesaj & yorum yönetimi operasyonlarına, otel & turizm odaklı çok kanallı iletişim süreçlerine ve sosyal medya destek modellerine ilişkin dahili dokümantasyonundan derlenmiştir."/>
    </div>
</>
  )
}

export default page
