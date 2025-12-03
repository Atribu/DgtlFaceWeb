import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
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
      "description": "DGTLFACE, oteller için OTA yönetimi, dijital reklam, SEO, sosyal medya, PMS–OTA entegrasyonu ve çağrı merkezi hizmetleri sunan, rezervasyon ve gelir odaklı çalışan bir dijital pazarlama ve turizm teknoloji partneridir.",
      "logo": "https://dgtlface.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": [
        "Antalya",
        "Belek",
        "Side",
        "Kemer",
        "Alanya",
        "Türkiye",
        "Europe"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#webpage",
      "url": "https://dgtlface.com/tr/otel/ota-yonetimi",
      "name": "Otel OTA Yönetimi – Booking, Expedia & Agoda Optimizasyonu | DGTLFACE",
      "description": "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA platformlarının performansını optimize eder. Otel OTA yönetimi, booking optimizasyonu, Expedia satış artırma, otel envanter yönetimi, OTA fiyat stratejisi ve turizm OTA çözümleriyle doluluk, görünürlük ve geliri artırır.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#service",
      "name": "Otel OTA Yönetimi – Booking, Expedia & Agoda Optimizasyonu",
      "url": "https://dgtlface.com/tr/otel/ota-yonetimi",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "otel ota yönetimi, booking optimizasyonu, expedia satış artırma, otel envanter yönetimi, ota fiyat stratejisi, turizm ota çözümleri",
      "description": "DGTLFACE, oteller için Booking, Expedia, Agoda ve diğer OTA platformlarının performansını optimize eder. Otel OTA yönetimi, booking optimizasyonu, Expedia satış artırma, otel envanter yönetimi, OTA fiyat stratejisi, turizm OTA çözümleri, OTA satış analizi, OTA fiyat kontrol sistemi, OTA yorum yönetimi ve OTA vs direkt kanal denge stratejileriyle doluluk, görünürlük ve geliri artırır.",
      "areaServed": [
        "Antalya",
        "Belek",
        "Side",
        "Kemer",
        "Alanya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "otel ota yönetimi",
        "booking optimizasyonu",
        "expedia satış artırma",
        "otel envanter yönetimi",
        "ota fiyat stratejisi",
        "turizm ota çözümleri",
        "booking görünürlük artırma teknikleri",
        "expedia sıralama artırma yolları",
        "ota fiyat kontrol sistemi",
        "resort ota stratejisi",
        "butik otel ota yönetimi",
        "booking.com dönüşüm oranı artırma",
        "ota satış analizi nasıl yapılır",
        "ota fiyat karşılaştırması",
        "antalya booking yönetimi",
        "belek ota optimizasyon",
        "kemer expedia yönetimi",
        "alanya ota reklam stratejisi",
        "resort ota optimizasyon",
        "butik otel booking pazarlama",
        "villa ota yönetimi"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#breadcrumb",
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
          "name": "Otel Dijital Pazarlama",
          "item": "https://dgtlface.com/tr/otel-dijital-pazarlama"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "OTA Yönetimi",
          "item": "https://dgtlface.com/tr/otel/ota-yonetimi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/otel/ota-yonetimi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "OTA yönetimi tam olarak nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA yönetimi; Booking, Expedia, Agoda gibi online seyahat ajanslarında fiyat, envanter, içerik, kampanya ve yorum süreçlerinin PMS ve channel manager ile entegre şekilde yönetilmesidir. Amaç, doluluğu ve görünürlüğü artırırken komisyon ve overbooking riskini kontrol altında tutmaktır."
          }
        },
        {
          "@type": "Question",
          "name": "Booking ve Expedia sıralaması nasıl yükseltilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking ve Expedia sıralamasını iyileştirmek için içerik doluluk oranı, görsel kalitesi, rekabetçi fiyat, kampanya kullanımı, yorum sayısı ve puanı, iptal/no-show oranı ve cevap hızı gibi faktörler optimize edilmelidir. DGTLFACE, bu alanları veriyle analiz edip OTA bazlı aksiyon planları uygular."
          }
        },
        {
          "@type": "Question",
          "name": "OTA fiyat stratejisi nasıl belirlenir ve rate parity nasıl korunur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTA fiyat stratejisi PMS merkezde olacak şekilde tasarlanır. Tüm sezon ve fiyat planları PMS’te tanımlanır; Channel Manager üzerinden OTA’lara dağıtılır. Paritenin bozulmaması için OTA panelinden rastgele manuel müdahaleden kaçınılır, özel avantajlar fiyat yerine paket ve ek hizmet üzerinden kurgulanır."
          }
        },
        {
          "@type": "Question",
          "name": "Overbooking nasıl önlenir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Overbooking riskini azaltmak için PMS, Channel Manager ve OTA eşleştirmeleri doğru kurgulanmalı, envanter tek kaynaktan yönetilmeli, kritik dönemlerde buffer oda stratejisi kullanılmalı ve stop-sale limitleri iyi tanımlanmalıdır. DGTLFACE, teknik akış ve operasyon süreçlerini bu prensiplere göre yapılandırır."
          }
        },
        {
          "@type": "Question",
          "name": "OTA yönetimi sadece büyük oteller için mi mantıklıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Az odalı butik oteller ve villalar için OTA yönetimi daha da kritiktir; çünkü her rezervasyonun toplam doluluk ve gelir üzerindeki etkisi çok daha yüksektir. Küçük oteller için daha sade ama titiz bir OTA stratejisi, kârlılığı ve risk kontrolünü doğrudan etkiler."
          }
        }
      ]
    }
  ]
}


const page = () => {
   const t = useTranslations("OtaManagementPage");
   const t2 = useTranslations("OtaManagementPage.h4Section");
           
              const stepData = [1,2,3,4,5,6,7].map(i => ({
                id: i,
                image: [image1,image2,image1,image2,image1,image1,image2][i-1],
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
                 { title: t("h2Section.header5"), text: t("h2Section.text5") }
               
             ];

  return (
  <>
  <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden items-center justify-center'>
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
      <VerticalSlider page="OtaManagementPage" itemCount={5}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in OTA optimizasyon projeleri, Booking & Expedia performans yönetimi ve turizm satış teknolojileri dokümantasyonundan derlenmiştir."/>
    </div>
  </>
  )
}

export default page
