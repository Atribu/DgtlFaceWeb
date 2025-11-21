import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import QuestionsSection2 from '../../components/subPageComponents/QuestionSection2'

export async function generateMetadata() {
  const title =
    "Google Ads & Dijital Reklam Yönetimi – Dönüşüm Odaklı Reklam Stratejileri | DGTLFACE";
  const description =
    "DGTLFACE, Google Ads ve YouTube reklamlarında dönüşüm odaklı yönetim sunar. Profesyonel SEM stratejileriyle görünürlüğünüzü ve satışlarınızı artırın.";
  const url = "https://dgtlface.com/tr/sem";
  const keywords =
    "google ads yönetimi, dijital reklam ajansı, youtube reklam yönetimi, profesyonel google ads, google ads optimizasyonu, performans pazarlaması, google ads kampanya yönetimi nasıl yapılır, google ads dönüşüm maliyeti düşürme yöntemleri, google reklamları ile satış artırma, google ads reklam metni optimizasyonu, remarketing kampanyası nasıl kurulur, google ads bütçe optimizasyonu, youtube bumper ads yönetimi, küçük işletmeler için google ads, oteller için google ads stratejisi, hedef kitleye göre google reklam ayarları, otel google ads yönetimi, turizm google reklamcılığı, pms otel reklam optimizasyonu, booking google ads entegrasyonu, google ads yönetimi antalya, antalya dijital reklam ajansı, google ads türkiye, antalya sem ajansı";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title:
        "Google Ads ve Dijital Reklam Yönetimi – Performans Odaklı SEM Hizmetleri",
      description,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "DGTLFACE",
      images: [
        {
          url: "https://dgtlface.com/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
        },
      ],
    },
  };
}




const page = () => {
  const t = useTranslations("Sem");
  const t2 = useTranslations("Sem.h4Section");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`sem_services_title${i}`),
  subTitle: t(`sem_services_subtitle${i}`),
  text: t(`sem_services_text${i}`),
  features: [1,2,3,4].map(j => t(`sem_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/sem/advertisingManagement",
    "/Services/sem/webTraffic",
    "/Services/sem/googleWebtools",
    "/Services/sem/yandexAdvertising",
    "/Services/sem/googleAdsAdvertising"
  ][i-1]
}));

const items = [
    {
      title: "SEM Nedir? DGTLFACE’in Dönüşüm Odaklı Reklam Yaklaşımı",
      text: `SEM (Search Engine Marketing), arama motorlarında ve bağlı ağlarda reklam vererek hedef kitlenizin satın alma niyetine en yakın anda görünür olmanızı sağlar. DGTLFACE olarak SEM’i; Google Ads arama kampanyaları, Display reklamlar, YouTube video kampanyaları, remarketing ve dönüşüm takibi ile birlikte ele alırız. Bütçenizi rastgele tıklamalara değil, ölçülebilir sonuçlara ve dönüşüm maliyeti optimizasyonuna odaklarız. Reklam metinlerinden açılış sayfalarına, teklif stratejisinden dönüşüm aksiyonlarına kadar tüm süreci tek bir performans mimarisi içinde yönetir; kampanyalarınızı “kur ve unut” yerine, sürekli test edilen ve gelişen canlı bir sistem haline getiririz.`,
    },
    {
      title: "Oteller ve Turizm Markaları İçin Özel SEM Stratejileri",
      text: `Otel ve turizm sektöründe Google Ads, yalnızca “daha fazla tıklama” değil, daha fazla doluluk ve daha yüksek oda geliri demektir. DGTLFACE, otel google ads yönetimi, turizm google reklamcılığı, PMS ve OTA entegrasyonlu kampanyalar gibi dikey odaklı kurgularla çalışır.
“Oteller için Google Ads stratejisi nasıl olmalı, google reklamları ile satış nasıl artırılır, rez ervasyon dönüşüm maliyeti nasıl düşürülür?” gibi soruların tamamını; sezon, pazar, hedef ülke ve oda tiplerine göre ayrı analiz ederiz. Alışveriş dönemleri, erken rezervasyon kampanyaları, son dakika satışları, marka & generic anahtar kelime dengesi ve remarketing kurgularıyla oteliniz için uçtan uca bir dijital reklam motoru kurarız.`,
    },
    {
      title: "Veri ve Dönüşüm Odaklı Reklam Yönetimi: Ölçmediğimizi Yönetmeyiz",
      text: `SEM’de başarı, yalnızca tıklama sayısıyla değil; dönüşüm sayısı ve dönüşüm maliyeti ile ölçülür. DGTLFACE olarak dönüşüm takibi, Google Tag Manager, Google Analytics 4 ve çağrı/rezervasyon izleme süreçlerini kusursuz hale getirmeden reklam bütçesini büyütmeyiz. Form doldurma, online rezervasyon, telefon araması, WhatsApp tıklaması gibi tüm aksiyonları takip eder; “Google Ads dönüşüm maliyeti düşürme yöntemleri, reklamdan gelen satışları nasıl doğru ölçeriz, remarketing kampanyası nasıl kurulur?” gibi kritik sorulara veriye dayalı cevap üretiriz. Bu sayede reklam bütçeniz karanlık bir kutu olmaktan çıkar, tamamen şeffaf bir performans yatırımına dönüşür.`,
    },
    {
      title: "Google Ads Kanal Kırılımı: Arama, Görüntülü Reklamlar ve YouTube",
      text: `Google Ads ekosistemi; arama ağı, Display (görüntülü) ağ, YouTube, Discovery ve remarketing gibi farklı kanallardan oluşur. DGTLFACE, her kanalı farklı bir amaç için kullanır:

Arama Ağı → Satış / rezervasyon odaklı, niyet yüksek, performans kampanyaları

Display & Discovery → Marka bilinirliği, yeniden hedefleme ve üst hunide görünürlük

YouTube → Video ile hikâye anlatımı, marka algısı ve remarketing destek

Remarketing → Sepeti terk eden, siteyi ziyaret edip ayrılan veya videoyu izleyip dönüşmeyen kullanıcıları geri kazanma

Bu yapı sayesinde, “Google reklamları ile satış artırma, display reklam optimizasyonu, YouTube bumper ads yönetimi” gibi ihtiyaçların tamamını tek bir strateji altında toplarız.`,
    },
  ];


  const cards = [
    {
      widthClass: "w-[90%] lg:w-[80%]",
      title: t2("card1title"),
      description: t2("card1description"),
    },
    {
      widthClass: "w-[90%] lg:w-[75%]",
      title: t2("card2title"),
      description: t2("card2description"),
    },
    {
      widthClass: "w-[90%] lg:w-[70%]",
      title: t2("card3title"),
      description: t2("card3description"),
    },
    {
      widthClass: "w-[90%] lg:w-[85%]",
      title: t2("card4title"),
      description: t2("card4description"),
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
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[60px] overflow-hidden'>
     <MainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")} buttonText={t("buttonText")}/>
     <DualHighlightSection items={items} />
      <StepSection header={""} header2={t("sem_section_header1")} text={t("sem_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
       <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider page="Sem" itemCount={4}/>
     <QuestionsSection2 color="#140F25" faqs={faqs} />
      <Contact/>
    </div>
  )
}

export default page
