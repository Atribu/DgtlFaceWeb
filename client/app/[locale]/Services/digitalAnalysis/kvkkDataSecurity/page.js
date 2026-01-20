import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.webp"
import image4 from "./images/image4.webp"
import image5 from "./images/image5.webp"
import image6 from "./images/image6.png"
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
      "description": "DGTLFACE, KVKK uyumlu veri işleme, veri güvenliği, çerez yönetimi ve teknik raporlama süreçleriyle oteller ve markalar için tam bir veri koruma ve denetlenebilirlik sağlayan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi/#webpage",
      "url": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi",
      "name": "KVKK & Veri Güvenliği – Profesyonel Veri Koruma Sistemleri | DGTLFACE",
      "description": "DGTLFACE, KVKK uyumlu veri işleme, raporlama, kullanıcı kayıt güvenliği ve veri analiz süreçleriyle tam bir veri koruma sağlar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi/#service",
      "name": "KVKK & Veri Güvenliği – Profesyonel Veri Koruma Sistemleri",
      "url": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "kvkk veri güvenliği, veri koruma sistemi, kişisel veri işleme, kvkk uyum raporu, data privacy, güvenli veri yönetimi",
      "description": "DGTLFACE, KVKK uyumlu veri işleme, raporlama, kullanıcı kayıt güvenliği ve veri analiz süreçleriyle tam bir veri koruma ve denetlenebilirlik sağlar. Veri koruma sistemi, kişisel veri işleme, KVKK uyum raporu, data privacy, güvenli veri yönetimi, oteller için KVKK raporu, turizm veri güvenliği, PMS data protection ve OTA veri güvenliği alanlarında veri akış haritaları, erişim logları ve KVKK teknik tedbir raporları sunar.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "kvkk veri güvenliği",
        "veri koruma sistemi",
        "kişisel veri işleme",
        "kvkk uyum raporu",
        "data privacy",
        "güvenli veri yönetimi",
        "kvkk uyumlu veri nasıl işlenir",
        "oteller için veri güvenliği",
        "turizm kvkk gereksinimleri",
        "rezervasyon veri güvenliği",
        "çerez yönetimi kvkk uyumu",
        "müşteri verisi koruma yöntemleri",
        "kvkk teknik tedbirler",
        "veri raporlama sistemi",
        "otel kvkk raporu",
        "turizm veri güvenliği",
        "pms data protection",
        "ota veri güvenliği",
        "kvkk antalya",
        "veri güvenliği türkiye",
        "antalya data privacy",
        "kvkk raporlama antalya"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi/#breadcrumb",
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
          "name": "KVKK & Veri Güvenliği Raporlama",
          "item": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/raporlama/kvkk-veri-guvenligi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "KVKK & veri güvenliği raporlaması nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KVKK ve veri güvenliği raporlaması; web, PMS, OTA, çağrı merkezi, CRM ve sunucu gibi sistemlerde işlenen kişisel verilerin akışını, saklama sürelerini, erişim yetkilerini, log kayıtlarını ve teknik tedbirleri analiz edip raporlayan, böylece hem yasal uyumu hem de veri güvenliği seviyesini görünür kılan bir denetim ve raporlama sürecidir."
          }
        },
        {
          "@type": "Question",
          "name": "Otellerde misafir verisi nasıl korunmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Otellerde misafir verileri; PMS ve OTA sistemlerinde rol bazlı yetkilendirme, şifreleme, erişim logları, sınırlı saklama süreleri, güvenli sunucu altyapısı ve KVKK’ya uygun veri işleme politikaları ile korunmalı, rezervasyon ve kimlik bilgileri hem dijital hem fiziksel ortamda yetkisiz erişime karşı güvence altına alınmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "PMS & OTA entegrasyonunda veri güvenliği nasıl sağlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMS ve OTA entegrasyonunda veri güvenliği; güvenli bağlantılar, IP veya VPN kısıtlamaları, erişim token’larının doğru yönetilmesi, sadece gerekli alanların paylaşılması, veri akışının loglanması ve entegrasyon hatalarının düzenli izlenmesiyle sağlanır. Böylece rezervasyon verisi üçüncü taraflarla kontrollü ve denetlenebilir şekilde paylaşılır."
          }
        },
        {
          "@type": "Question",
          "name": "Çerez yönetimi ve izin kayıtları nasıl raporlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çerez yönetimi ve izin kayıtları; kullanılan çerezlerin kategorileri, kullanıcı tercihleri, rıza verme ve değiştirme zamanları ile birlikte loglanır ve KVKK & veri güvenliği dashboard’larında özetlenir. Böylece hangi kullanıcıların hangi çerez kategorilerine izin verdiği ve bu izinlerin ne kadar süre saklandığı denetlenebilir hâle gelir."
          }
        },
        {
          "@type": "Question",
          "name": "Call Center & DM verileri KVKK’ya uygun şekilde nasıl saklanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call center ve DM verilerinin KVKK’ya uygun saklanması için; kayıtların ne amaçla tutulduğu ve ne kadar süre saklanacağı tanımlanmalı, erişim rol bazlı sınırlandırılmalı, loglama aktif olmalı ve saklama süresi sonunda kayıtlar silinmeli veya anonimleştirilmelidir. DGTLFACE, bu süreçleri veri akış haritaları ve uyum raporları ile görünür kılar."
          }
        }
      ]
    }
  ]
}

const Page = () => {
    const t = useTranslations("KvkkSecurityPage");
 const t2 = useTranslations("KvkkSecurityPage.h4Section");
           
              const stepData = [1,2,3,4,5,6].map(i => ({
                id: i,
                image: [image1,image2,image3,image4,image5,image6][i-1],
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
<div className='flex flex-col items-center justify-center gap-5'>
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
      <VerticalSlider page="KvkkSecurityPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in KVKK uyum raporlama, veri akışı analizi, PMS/OTA veri koruma süreçleri ve güvenlik denetimlerine dair iç teknik dokümantasyonundan derlenmiştir.
(Not: Bu hukuki danışmanlık değil, teknik KVKK değerlendirmesidir.)"/>
    </div>
    </>
  )
}

export default Page
