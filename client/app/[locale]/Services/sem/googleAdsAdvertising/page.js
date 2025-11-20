import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import LogoListSection from '@/app/[locale]/components/subPageComponents/LogoListSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'

const stepData=[
  {
    id:1,
    image:image1,
    header:"Keyword and Audience Research Services",
    text:"Keyword and audience research are fundamental components of a successful digital marketing strategy. We conduct in-depth analysis of your market, competitors, and potential customers to identify the most effective keywords and audience segments for your campaigns."
  },
  {
    id:2,
    image:image2,
    header:"Ad Copy and Visual Design Services",
    text:"We create ads that not only catch the eye but also inspire action by combining the art of persuasive copywriting with effective visual design. Our team of creative professionals specialises in creating custom ad content that resonates with audiences across all digital platforms."
  },
  {
    id:3,
    image:image3,
    header:"Ad Campaign Creation Services",
    text:"Our team ensures your message is consistently shared across all platforms by leveraging various channels and tactics, including digital advertising, social media, PPC, email marketing, and more, to increase brand awareness and generate potential leads."
  },
  
  {
    id:4,
    image:image4,
    header:"Google Ads Targeting & Budget Management",
    text:"We design your Google Ads campaigns to target specific audiences, use relevant keywords, and capture the interest of potential customers. By optimising bids for keywords and adjusting spending based on campaign performance, we manage your budget to achieve the best possible return on investment."
  }
]
const page = () => {
   const t = useTranslations("GoogleAdsAdvertising");
   const t2 = useTranslations("GoogleAdsAdvertising.h4Section");

   const stepData = [1,2,3,4].map(i => ({
     id: i,
     image: [image1,image2,image3,image4][i-1],
     header: t(`googleadsadvertising_step${i}_header`),
     text:   t(`googleadsadvertising_step${i}_text`)
   }));

   const cards = [
    {
      widthClass: "w-[80%]",
      title: t2("card1title"),
      description: t2("card1description"),
    },
    {
      widthClass: "w-[75%]",
      title: t2("card2title"),
      description: t2("card2description"),
    },
    {
      widthClass: "w-[70%]",
      title: t2("card3title"),
      description: t2("card3description"),
    },

  ];

    const faqs = [
    {
      question: "DGTLFACE hangi tür işletmeler için Google Ads ve SEM hizmeti veriyor?",
      answer:
        "DGTLFACE, ağırlıklı olarak oteller ve turizm markaları ile çalışsa da; hizmet, sağlık, gayrimenkul, B2B ve e-ticaret alanlarında faaliyet gösteren markalar için de Google Ads ve dijital reklam yönetimi hizmeti sunar. Her sektörde temel prensibimiz aynıdır: dönüşüm odaklı, veriye dayalı ve uzun vadeli performans modeli kurmak.",
    },
    {
      question:
        "Sadece Google Ads mi yönetiyorsunuz, yoksa diğer reklam kanallarını da kapsıyor mu?",
      answer:
        "Ana odağımız Google Ads olsa da, çoğu projede Meta Ads (Instagram & Facebook), YouTube, Display ağları ve gerektiğinde diğer dijital reklam kanallarını da aynı strateji altında yönetiyoruz. Böylece kullanıcıların sizi sadece arama sonuçlarında değil, tüm dijital temas noktalarında görmesini sağlıyoruz.",
    },
    {
      question: "Google Ads kampanyalarıyla ne kadar sürede sonuç almaya başlarım?",
      answer:
        "Sektör, rekabet, bütçe ve hedeflere göre değişmekle birlikte, Google Ads kampanyalarında genellikle ilk 2–4 hafta optimizasyon ve test, sonraki dönemde ise ölçekleme ve performans artırma sürecine geçilir. DGTLFACE olarak bu süreci şeffaf raporlarla birlikte yönetir, hangi değişikliğin ne sonuç verdiğini düzenli olarak paylaşırız.",
    },

    {
      question: "Bütçem küçükse de profesyonel Google Ads yönetimi almalı mıyım?",
      answer:
        "Evet, özellikle küçük bütçelerde yanlış kurgulanmış kampanyalar çok hızlı şekilde boşa harcama yaratabilir. Profesyonel Google Ads yönetimi ile hem hedeflemeyi hem de teklif ve reklam metni optimizasyonunu doğru yaparak; bütçenizin her kuruşunu daha yüksek dönüşüm potansiyeli olan alanlara yönlendirebiliriz. Bu da küçük bütçelerde bile anlamlı sonuçlar almanızı sağlar.",
    },

    {
      question: "DGTLFACE ile çalışmaya başlamak için süreç nasıl işliyor?",
      answer:
        "Öncelikle hesaplarınızı ve mevcut durumunuzu hızlı bir ön analiz ile inceliyoruz. Ardından hedefleriniz, sezon planlarınız ve bütçe yapınıza göre bir SEM yol haritası çıkarıyoruz. Onayınız sonrası, kampanya kurulumları, dönüşüm takibi, Tag Manager ve raporlama panellerini devreye alıyor; ilk 30–60 günde agresif optimizasyon sürecini yönetiyoruz.",
    },

    {
      question: "Lokal olarak Antalya’da mısınız, uzaktan da çalışıyor musunuz?",
      answer:
        "Evet, DGTLFACE Antalya merkezli bir dijital reklam ve teknoloji ajansıdır. Antalya’daki oteller ve işletmelerle yüz yüze iletişim kurabildiğimiz gibi, Türkiye ve yurt dışındaki markalarla da tamamen online süreçler üzerinden çalışıyoruz. Raporlama, toplantı ve optimizasyon süreçleri, uzaktan da şeffaf ve düzenli şekilde ilerler.",
    },
  ];
   
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-x-hidden items-center justify-center pb-10'>
      <SubBanner
  header={t("googleadsadvertising_subbanner_header")}
  header2={t("googleadsadvertising_subbanner_header2")}
  text={t("googleadsadvertising_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2 data={stepData}/>
       <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <VerticalSlider/>
     <QuestionsSection2 color="#ffffff" faqs={faqs} />
    </div>
  )
}

export default page
