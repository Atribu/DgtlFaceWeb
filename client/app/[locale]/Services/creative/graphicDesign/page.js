import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "@/app/[locale]/components/subPageComponents/images/image1.png"
import image2 from "@/app/[locale]/components/subPageComponents/images/image2.png"
import image3 from "@/app/[locale]/components/subPageComponents/images/image3.png"
import image4 from "@/app/[locale]/components/subPageComponents/images/image4.png"
import {useTranslations} from 'next-intl';
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
      "description": "DGTLFACE, markalar ve özellikle oteller için grafik tasarım, sosyal medya tasarımı, kampanya kreatifleri ve turizm odaklı motion graphic çözümleri sunan creative tasarım ve prodüksiyon partneridir.",
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
      "@id": "https://dgtlface.com/tr/creative/grafik-motion-tasarim/#webpage",
      "url": "https://dgtlface.com/tr/creative/grafik-motion-tasarim",
      "name": "Grafik & Motion Tasarım – Markanızı Güçlendiren Kreatif Çözümler | DGTLFACE",
      "description": "DGTLFACE, grafik tasarım ve motion design hizmetleriyle markanız için etkileyici görsel içerikler üretir. Sosyal medya, web ve reklam için profesyonel tasarımlar sunar.",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@id": "https://dgtlface.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://dgtlface.com/tr/creative/grafik-motion-tasarim/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dgtlface.com/tr/creative/grafik-motion-tasarim/#service",
      "name": "Grafik & Motion Tasarım – Markanızı Güçlendiren Kreatif Çözümler",
      "url": "https://dgtlface.com/tr/creative/grafik-motion-tasarim",
      "provider": {
        "@id": "https://dgtlface.com/#organization"
      },
      "serviceType": "grafik tasarım, motion graphic, sosyal medya tasarımı, profesyonel grafik tasarım, creative design, marka tasarım hizmeti",
      "description": "DGTLFACE, grafik tasarım ve motion design hizmetleriyle markalar için etkileyici görsel içerikler üretir. Sosyal medya post ve story tasarımları, kampanya kreatifleri, web banner’ları, otel ve turizm odaklı görsel paketler ile animasyonlu motion içerikler sunar; renk paleti, tipografi ve layout seçimlerini marka kimliği ve dijital pazarlama stratejisiyle entegre olarak kurgular.",
      "areaServed": [
        "Antalya",
        "Türkiye",
        "Europe"
      ],
      "inLanguage": "tr-TR",
      "keywords": [
        "grafik tasarım",
        "motion graphic",
        "sosyal medya tasarımı",
        "profesyonel grafik tasarım",
        "creative design",
        "motion graphic nedir",
        "sosyal medya için grafik tasarım",
        "grafik tasarım trendleri 2025",
        "oteller için grafik tasarım",
        "turizm reklam tasarımları",
        "marka için görsel iletişim",
        "kampanya tasarımı nasıl yapılır",
        "grafik tasarım örnekleri",
        "renk paleti seçimi",
        "tipografi tasarım rehberi",
        "otel grafik tasarımı",
        "resort sosyal medya tasarımları",
        "turizm grafik paketleri",
        "otel motion graphic",
        "grafik tasarım antalya",
        "antalya creative tasarım",
        "motion graphic türkiye",
        "antalya tasarım ajansı"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgtlface.com/tr/creative/grafik-motion-tasarim/#breadcrumb",
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
          "name": "Creative Tasarım & Prodüksiyon",
          "item": "https://dgtlface.com/tr/creative-ve-tasarim"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Grafik & Motion Tasarım",
          "item": "https://dgtlface.com/tr/creative/grafik-motion-tasarim"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgtlface.com/tr/creative/grafik-motion-tasarim/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Grafik & motion tasarım tam olarak neyi kapsıyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grafik & motion tasarım; statik görseller, kampanya kreatifleri, sosyal medya post ve story tasarımları, web banner’ları, kurumsal dokümanlar ve animasyonlu (motion) içeriklerin marka kimliğine uygun şekilde üretilmesini kapsar."
          }
        },
        {
          "@type": "Question",
          "name": "Sosyal medya için sadece post mu tasarlıyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Postların yanında story, reels cover, highlight kapakları, kampanya görselleri ve kısa motion videolar için de tasarım ve şablon setleri hazırlıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Oteller için özel tasarımlar yapıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Otel ve turizm markaları için oda, restoran, spa, etkinlik, destinasyon ve kampanya odaklı grafik tasarım paketleri ve sosyal medya görsel setleri üretiyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Mevcut logoma ve kurumsal kimliğime uyum sağlayabilir misiniz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Mevcut marka rehberinize göre tasarım yapabilir veya ihtiyaç halinde kurumsal kimliğinizi güncelleyecek yeni renk, tipografi ve kompozisyon önerileri sunabiliriz."
          }
        },
        {
          "@type": "Question",
          "name": "Animasyonlu (motion) içerikler nerelerde kullanılabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Animasyonlu motion içerikler sosyal medya Reels ve story’lerde, YouTube ve reklam videolarında intro/outro olarak, web sitelerinde açıklayıcı animasyonlar şeklinde ve otel tanıtım videolarında ara geçiş veya kampanya duyurusu olarak kullanılabilir."
          }
        }
      ]
    }
  ]
}

const Page = () => {
  const t = useTranslations("GraphicMotion");
    const t2 = useTranslations("GraphicMotion.h4Section");
           
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
                  t("faq.answer1"),
               },
               {
                 question: t.raw("faq.question2"),
                 answer:
                  t("faq.answer2"),
               },
               {
                  question: t.raw("faq.question3"),
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

    <div className='flex flex-col gap-[80px] lg:gap-[100px] bg-[#080612] overflow-hidden justify-center items-center'>
<div className='flex flex-col items-center justify-center gap-5'>
        <SubBanner  header={t('creative_subbanner_header')}
  header2={t('creative_subbanner_header2')}
  text={t.raw('creative_subbanner_text')}
    header3={t('creative_subbanner_header3')}
  text2={t.raw('creative_subbanner_text2')}
  buttonLink="/" buttonText={t("cta_talk_to_us")}/>
  <AutoBreadcrumbs/>
  <AiAnswerBlock text={t("creative_ai_answer_text")}/>
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
      <VerticalSlider page="GraphicMotion" itemCount={4}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
     <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
