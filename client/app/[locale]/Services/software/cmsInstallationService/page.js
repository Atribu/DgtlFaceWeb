import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
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
      "description": "DGTLFACE, kurumsal web siteleri için Next.js uyumlu CMS entegrasyonları, headless CMS, özel admin panelleri ve çok dilli içerik yönetimi çözümleri sunan dijital pazarlama ve teknoloji partneridir.",
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
      "@id": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu/#webpage",
      "url": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu",
      "name": "CMS Entegrasyonu – Kolay İçerik Yönetimi & Esnek Web Mimarisi | DGTLFACE",
      "description": "DGTLFACE, kullanıcı dostu CMS ve yönetim paneli entegrasyonlarıyla çok dilli, hızlı ve SEO uyumlu içerik yönetimi sunar. Web sitenizi kolayca yönetin.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu/#service",
      "name": "CMS Entegrasyonu – Kolay İçerik Yönetimi & Esnek Web Mimarisi",
      "url": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "cms entegrasyonu, içerik yönetim sistemi, headless cms, admin panel geliştirme, react cms, next.js cms",
      "description": "DGTLFACE, çok dilli, SEO uyumlu ve hızlı içerik yönetimi için Next.js uyumlu CMS entegrasyonları sunar. Admin panel geliştirme, headless CMS, özel içerik modülleri, rol bazlı yetkilendirme, SEO alanları ve PMS–CRM–rezervasyon gibi sistem entegrasyonlarıyla kurumsal web sitelerinizi esnek ve kolay yönetilebilir hâle getirir.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "cms entegrasyonu",
        "içerik yönetim sistemi",
        "react cms",
        "admin panel geliştirme",
        "headless cms",
        "çok dilli cms",
        "seo uyumlu cms",
        "kurumsal web sitesi içerik paneli",
        "nextjs cms",
        "kurumsal web sitesi geliştirme",
        "çok dilli web sitesi tasarımı",
        "cms paneli geliştirme",
        "responsive web sitesi",
        "web geliştirme ajansı",
        "cms güvenlik ayarları"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu/#breadcrumb",
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
          "name": "CMS & Yönetim Paneli Entegrasyonu",
          "item": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/yazilim/cms-entegrasyonu/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mevcut web siteme CMS sonradan eklenebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altyapı uygunsa mevcut web sitenize CMS sonradan entegre edilebilir; uygun değilse Next.js uyumlu headless CMS ile sıfırdan modüler ve ölçeklenebilir bir yapı kurulabilir. DGTLFACE, önce teknik analiz yaparak en doğru yolu önerir."
          }
        },
        {
          "@type": "Question",
          "name": "CMS kullanmak için teknik bilgi gerekir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. DGTLFACE’in kurduğu yönetim panelleri teknik bilgisi sınırlı kullanıcıların da rahatça kullanabileceği şekilde tasarlanır ve kısa bir eğitim ile içerik, blog, kampanya ve oda/kampanya modülleri kolayca yönetilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "CMS ile SEO yönetilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Title, meta description, URL yapısı, başlık hiyerarşisi, görsel ALT metni ve gerekirse schema alanları CMS paneline entegre edilerek SEO’nun günlük yönetimi içerik ekibine devredilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Çok dilli CMS sistemi kurmak zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGTLFACE, dil bazlı içerik modülleri, hreflang entegrasyonu ve SEO uyumlu URL yapıları ile TR–EN–DE–RU gibi çok dilli CMS mimarisini otomatikleştirilmiş şekilde kurar; içerik ekipleri diller arasında kolayca içerik oluşturabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Özel yönetim paneli yaptırmak maliyetli midir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maliyet; sayfa yapısı, modül sayısı, entegrasyon ihtiyaçları (PMS, CRM, rezervasyon, API vb.) ve çok dillilik gereksinimlerine göre değişir. DGTLFACE, teklif aşamasında tüm kalemleri şeffaf şekilde listeler ve orta–uzun vadede operasyon maliyetini azaltan bir CMS mimarisi tasarlar."
          }
        }
      ]
    }
  ]
}

const page = () => {
  const t = useTranslations("CMS");
 const t2 = useTranslations("CMS.h4Section");
         
            const stepData = [1,2,3,4,5,6,7].map(i => ({
              id: i,
              image: [image1,image2,image3,image1,image2,image3,image1][i-1],
              header: t(`h3Section.header${i}`),
              text:   t.raw(`h3Section.text${i}`),
              textHtml: t.raw(`h3Section.text${i}`) 
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
             { title: t("h2Section.header1"), text: t.raw("h2Section.text1") },
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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden justify-center items-center'>
     <SubBanner
  header={t("cms_subbanner_header")}
  header2={t("cms_subbanner_header2")}
 text={t.raw("cms_subbanner_text")}  
    header3={t("cms_subbanner_header3")}
 text2={t.raw("cms_subbanner_text2")}  
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}

/>
<AiAnswerBlock text={t("cms_ai_answer_text")}/>
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
      <VerticalSlider page="CMS" itemCount={3}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text="Bu bilgi, DGTLFACE’in CMS entegrasyonu, headless CMS, turizm yönetim panelleri ve Next.js/React tabanlı içerik kontrol sistemleri dokümantasyonundan derlenmiştir."/>
    </div>
   </>
  )
}

export default page
