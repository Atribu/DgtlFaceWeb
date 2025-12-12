import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'
import { AiAnswerBlock } from '@/app/[locale]/components/common/AiAnswerBlock'
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
      "description": "DGTLFACE, KVKK uyumlu web altyapıları, veri güvenliği, çerez ve kullanıcı izin yönetimi, PMS–OTA–çağrı merkezi veri akışları için teknik ve altyapı odaklı çözümler sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti/#webpage",
      "url": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti",
      "name": "KVKK Uyumlu Web Çözümleri – Güvenli Veri Yönetimi | DGTLFACE",
      "description": "DGTLFACE, KVKK uyumlu yazılım çözümleri geliştirir. Veri güvenliği, çerez yönetimi ve kullanıcı izin sistemleriyle web sitenizi yasal hale getirir.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti/#service",
      "name": "KVKK Uyumlu Web Çözümleri – Güvenli Veri Yönetimi",
      "url": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "kvkk uyum hizmeti, kvkk uyumlu yazılım, veri güvenliği yönetimi, çerez politikası entegrasyonu, privacy policy geliştirme, kullanıcı izin sistemi",
      "description": "DGTLFACE, KVKK uyumlu yazılım çözümleri geliştirir. Veri güvenliği, çerez yönetimi, kullanıcı izin sistemi, loglama, erişim kontrolü ve sunucu güvenliği gibi teknik tedbirlerle web sitesi, CMS, rezervasyon ve PMS–OTA entegrasyonlarını KVKK ile uyumlu hale getirir. Bu hizmet teknik ve altyapı odaklıdır, hukuki danışmanlık yerine geçmez.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "kvkk uyum hizmeti",
        "kvkk uyumlu yazılım",
        "veri güvenliği yönetimi",
        "çerez politikası entegrasyonu",
        "privacy policy geliştirme",
        "kullanıcı izin sistemi",
        "kvkk web sitesi nasıl yapılır",
        "çerez yönetim paneli geliştirme",
        "web sitesi kvkk uyumluluğu",
        "gizlilik politikası oluşturma",
        "kişisel veri işleme sistemi",
        "oteller için kvkk uyumu",
        "turizm kvkk gereklilikleri",
        "data privacy teknik gereksinimler",
        "kullanıcı verisi saklama standartları",
        "kvkk teknik tedbirler rehberi",
        "otel kvkk uyumu",
        "pms veri güvenliği",
        "ota kvkk entegrasyonu",
        "otel verisi güvenlik uyumu",
        "kvkk hizmeti antalya",
        "antalya veri güvenliği",
        "kvkk yazılım türkiye",
        "antalya kvkk ajansı"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti/#breadcrumb",
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
          "name": "KVKK Uyum Hizmeti",
          "item": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/yazilim/kvkk-uyum-hizmeti/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "KVKK uyumlu web sitesi ne demektir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KVKK uyumlu web sitesi; kişisel verilerin yasal çerçeveye uygun şekilde toplandığı, işlendiği, saklandığı ve raporlandığı; çerez ve kullanıcı izin yönetimi, loglama, erişim kontrolü ve veri saklama politikalarının teknik olarak tanımlandığı altyapı anlamına gelir."
          }
        },
        {
          "@type": "Question",
          "name": "Çerez yönetim paneli nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çerez yönetim paneli, kullanılan çerezleri kategorize eder; kullanıcıya kabul et, reddet veya tercihleri yönet seçenekleri sunar ve verilen izinleri loglayarak gerektiğinde ispatlanabilir bir KVKK uyumlu izin yapısı oluşturur."
          }
        },
        {
          "@type": "Question",
          "name": "Kullanıcı izin sistemleri nasıl tasarlanmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kullanıcı izin sistemi, çerez ve kişisel veri işleme izinlerini ayrı ayrı, ayırt edilebilir ve kayıt altına alınabilir biçimde toplamalı; tercih değişikliklerini işleyebilmeli ve bu süreci loglarla denetlenebilir kılmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için KVKK uyumu neden kritik?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oteller; pasaport, iletişim, rezervasyon ve ödeme bilgileri gibi hassas misafir verilerini işlediği için KVKK uyumu ve veri güvenliği daha kritiktir. PMS, OTA, web rezervasyon ve çağrı merkezi arasındaki veri akışlarının teknik olarak doğru yönetilmesi gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Çerez banner’ı tek başına yeterli midir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Çerez banner’ı KVKK uyumunun sadece küçük bir parçasıdır. Veri envanteri, saklama süreleri, kullanıcı hakları, loglama, sunucu ve güvenlik tedbirleri gibi ek teknik ve operasyonel katmanlar da gereklidir."
          }
        }
      ]
    }
  ]
}

const page = () => {
   const t = useTranslations("KVKK");
    const t2 = useTranslations("KVKK.h4Section");
            
               const stepData = [1,2,3,4,5,6,7,8].map(i => ({
                 id: i,
                 image: [image1,image2,image3,image1,image2,image3,image1,image2][i-1],
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
                { title: t("h2Section.header4"), text: t.raw("h2Section.text4") }
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
  header={t("kvkk_subbanner_header")}
  header2={t("kvkk_subbanner_header2")}
  text={t.raw("kvkk_subbanner_text")}
    header3={t("kvkk_subbanner_header3")}
  text2={t.raw("kvkk_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
<AutoBreadcrumbs/>
<AiAnswerBlock text={t("kvkk_ai_answer_text")}/>
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
      <VerticalSlider page="KVKK" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in KVKK uyumlu yazılım geliştirme, data privacy odaklı web projeleri ve turizm/otel veri güvenliği süreçlerine ilişkin dahili dokümantasyonundan derlenmiştir. (Hukuki danışmanlık değil, teknik/altyapı perspektifidir.)"/>
    </div>
   </>
  )
}

export default page
