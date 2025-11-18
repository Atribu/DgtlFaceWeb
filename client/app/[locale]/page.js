"use client";
import Section3 from "./Services/Section3/Section3";
// import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
// import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import BlocksYatay from "./components/Section3/BlocksYatay";
import Section4 from "./components/Section4/Section4";
import WhyUsSection from "./components/Section5/WhyUsSection";
// import ThreeAnimation from "./components/Square/ThreeAnimation";
import dynamic from "next/dynamic";
import Contact from "./components/Section6/ContactMain.jsx";
import QuestionsSection2 from "./components/subPageComponents/QuestionSection2";

const MyThreeScene = dynamic(() => import("./components/MtThreeScene"), {
  ssr: false,
});

const Section1 = dynamic(() => import("./components/Section1/Section"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center gap-[48px]">
        <MyThreeScene />
         <Section4 />
     
        <div className="flex gap-2 w-[95%] mt-20">
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-button relative flex border w-[80%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[14px] lg:text-[20px] font-semibold  leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
              Dijital Pazarlama Ajansı Değil, Uzun Vadeli Teknoloji Partneriniz
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              DGTLFACE, kendini yalnızca bir dijital pazarlama ajansı olarak
              değil; markanızın büyüme hedeflerine odaklanmış bir teknoloji
              partneri olarak konumlandırır. Strateji, kreatif üretim, medya
              satın alma, yazılım ve çağrı merkezi ekiplerini aynı masa
              etrafında toplayarak; kampanyalarınızı, web sitenizi, PMS–OTA
              altyapınızı ve müşteri iletişiminizi tek bir çatı altında yönetir.
              Böylece dağınık ajans yapılarının oluşturduğu veri kopukluğunu
              ortadan kaldırır, tüm kanallarda tutarlı bir marka deneyimi ve
              ölçülebilir sonuç üretiriz. Kararları sezgiyle değil, gerçek
              zamanlı veri ve raporlarla almanızı sağlarız.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-button relative flex border w-[80%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[14px] lg:text-[20px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
              Oteller ve Turizm Markaları İçin 360° Dijital Pazarlama Çözümleri
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              Otel ve turizm markaları, klasik ajans hizmetlerinden çok daha
              fazlasına ihtiyaç duyar: doluluk oranı, RevPAR, direkt rezervasyon
              oranı, OTA görünürlüğü ve misafir memnuniyeti gibi metrikler her
              gün değişir. DGTLFACE, bu dinamik yapıya uygun olarak; SEO , SEM ,
              Sosyal Medya Yönetimi , PMS & OTA Yönetimi , Çağrı Merkezi
              Hizmetleri ve Veri Analizi & Raporlama çözümlerini bir araya
              getirir. Tüm dijital kanallarda tek hedefe kilitleniriz: doğru
              misafiri, doğru zamanda, doğru kanaldan kazanmak.
            </p>
          </div>
        </div>

        <div className="flex gap-2 w-[95%] mb-20">
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-button relative flex border w-[80%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[14px] lg:text-[20px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
              Antalya Merkezli, Global Ölçekte Düşünen Dijital Pazarlama &
              Teknoloji Ekibi
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              Antalya merkezli bir dijital pazarlama, SEO, SEM ve otel dijital
              dönüşüm ajansı olarak; turizm ekosisteminin ritmini, sezon
              dinamiklerini, bölgesel hedef kitle davranışlarını ve rekabet
              koşullarını yakından biliyoruz. Ancak bakış açımız yalnızca lokal
              pazara değil, global misafir davranışlarına da uzanıyor. Çok dilli
              web siteleri, TR–EN–DE–RU çağrı merkezi hizmetleri, uluslararası
              reklam kampanyaları ve OTA iş birlikleriyle markanızı sadece
              bölgenizde değil, hedeflediğiniz tüm pazarlarda görünür kılıyoruz.
              Yerel içgörüyü, global performans bakış açısıyla birleştirerek
              ölçeklenebilir büyüme kurguları üretiyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-button relative flex border w-[80%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[14px] lg:text-[20px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
              Veri Odaklı Performans, Şeffaf Raporlama ve Sürekli Optimizasyon
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              DGTLFACE’te her kampanya, her kreatif ve her entegrasyon mutlaka
              bir veri katmanı ile desteklenir. Looker Studio Raporlama , SEM
              Reklam Raporlama , SEO Performans Raporlama ve çağrı merkezi KPI
              panelleri ile tüm kanallardaki performansınızı tek ekrandan takip
              edebilir hale getiriyoruz. Sadece rapor sunmuyor, veriyi
              okunabilir hale getirip “Bugün neyi değiştirmeliyiz ki yarın daha
              fazla satış / rezervasyon alalım?” sorusuna yanıt üretiyoruz.
              Böylece stratejileriniz statik değil, sürekli optimize edilen
              yaşayan yapılar haline geliyor.
            </p>
          </div>
        </div>


         <BlocksYatay />
        <Section3 />
        <Partners />
        <Section1 />
           <Section2 />

        <WhyUsSection />

        <QuestionsSection2 color="#140F25"/>
        
       
        {/* <ServicesCarousel/> */}
       
     
        <Contact />
      </div>
    </main>
  );
}
