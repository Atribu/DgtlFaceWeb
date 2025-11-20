"use client";

// import MyThreeScene from "./components/MtThreeScene";
import Partners from "../../components/Partners/Partners";
// import Section1 from "./components/Section1/Section";
import Section2 from "../../components/Section2/Section2";
import BlocksYatay from "../../components/Section3/BlocksYatay";
import Section4 from "../../components/Section4/Section4";
import WhyUsSection from "../../components/Section5/WhyUsSection";
import dynamic from "next/dynamic";
import Contact from "../../components/Section6/ContactMain.jsx";
import QuestionsSection2 from "../../components/subPageComponents/QuestionSection2";
import Section3 from "../../Services/Section3/Section3";
import Link from "next/link";

const MyThreeScene = dynamic(() => import("../../components/MtThreeScene"), {
  ssr: false,
});

const Section1 = dynamic(() => import("../../components/Section1/Section"), {
  ssr: false,
});

const faqs = [
    {
      question: "DGTLFACE hangi alanlarda hizmet veren bir dijital pazarlama ajansıdır?",
      answer:
        "DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative & prodüksiyon, çağrı merkezi hizmetleri, PMS & OTA yönetimi ve veri analizi & raporlama alanlarında çalışan, özellikle oteller ve turizm markalarına odaklanmış bir dijital pazarlama ve teknoloji partneridir.",
    },
    {
      question:
        "Sadece otellerle mi çalışıyorsunuz, yoksa farklı sektörlerle de çalışıyor musunuz?",
      answer:
        "Odak noktamız oteller ve turizm markaları olsa da hizmet, sağlık, gayrimenkul ve B2B alanlarında faaliyet gösteren farklı markalarla da çalışıyoruz. Ancak tüm projelerde, performans odaklı, veri bazlı ve uzun vadeli büyüme yaklaşımını koruyoruz.",
    },
    {
      question: "DGTLFACE ile çalışmaya nasıl başlıyoruz?",
      answer:
        "Önce kısa bir dijital durum analizi ve hedef toplantısı yapıyoruz. Ardından SEO, reklam, sosyal medya, web ve operasyon tarafında öncelikli ihtiyaçlarınızı netleştiriyor, size özel bir yol haritası ve teklif hazırlıyoruz. Onayınızın ardından 30–60 günlük ilk aksiyon planını devreye alıyor, düzenli raporlama döngüsüyle süreci şeffaf şekilde yönetiyoruz.",
    },
    // {
    //   question:
    //     "Otel dijital pazarlama sürecinde hangi metriklere odaklanıyorsunuz?",
    //   answer:
    //     "Oteller için; doluluk oranı, direkt rezervasyon oranı, oda başı gelir (RevPAR), kanal bazlı satış dağılımı, web sitesi dönüşüm oranı, çağrı merkezi performansı, OTA görünürlüğü ve misafir memnuniyeti gibi metrikleri takip ediyoruz. Bu verileri Looker Studio panelleriyle birleştirerek yönetim ekibinizin hızlı ve doğru kararlar almasını sağlıyoruz.",
    // },
    // {
    //   question:
    //     "DGTLFACE ile çalışmak için minimum bütçe veya sözleşme süresi var mı?",
    //   answer:
    //     "Bütçe ve süreler markanın hedeflerine, hacmine ve ihtiyaç duyduğu hizmet kapsamına göre değişiyor. Bazı müşterilerimizle kampanya bazlı kısa dönem projeler, bazılarıyla ise 12 ay ve üzeri iş ortaklıkları yürütüyoruz. Temel hedefimiz, ayırdığınız bütçeyi gider değil, ölçülebilir yatırım haline getirmek.",
    // },
    {
      question: "Hangi dillerde hizmet veriyorsunuz?",
      answer:
        "Dijital pazarlama, SEO, SEM ve yazılım tarafında ağırlıklı olarak Türkçe ve İngilizce çalışıyoruz. Otel ve çağrı merkezi projelerinde ise Türkçe, İngilizce, Almanca ve Rusça dillerinde misafir ve müşteri iletişimi yönetiyoruz.",
    },
  ];

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center gap-[48px]">
        <MyThreeScene />
         <Section4 />
     
        <div className="flex gap-2 w-[95%] mt-20 ">
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
              <h2 className="font-inter28">Dijital Pazarlama Ajansı Değil, Uzun Vadeli Teknoloji Partneriniz</h2>
            </button>
            <p className="text-[12px] w-[90%] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black  mt-[18px] lg:mt-0">
              DGTLFACE, kendini yalnızca bir <span className="font-bold">dijital pazarlama ajansı</span> olarak
              değil; markanızın büyüme hedeflerine odaklanmış bir <span className="font-bold">teknoloji
              partneri</span> olarak konumlandırır. Strateji, kreatif üretim, medya
              satın alma, yazılım ve çağrı merkezi ekiplerini aynı masa
              etrafında toplayarak; kampanyalarınızı, web sitenizi, PMS–OTA
              altyapınızı ve müşteri iletişiminizi tek bir çatı altında yönetir.
              Böylece dağınık ajans yapılarının oluşturduğu veri kopukluğunu
              ortadan kaldırır, tüm kanallarda <span className="font-bold">tutarlı bir marka deneyimi ve
              ölçülebilir sonuç</span> üretiriz. Kararları sezgiyle değil, gerçek
              zamanlı veri ve raporlarla almanızı sağlarız.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2> Oteller ve Turizm Markaları İçin 360° Dijital Pazarlama Çözümleri</h2>
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              Otel ve turizm markaları, klasik ajans hizmetlerinden çok daha
              fazlasına ihtiyaç duyar: <span className="font-bold">doluluk oranı, RevPAR, direkt rezervasyon
              oranı, OTA görünürlüğü ve misafir memnuniyeti</span> gibi metrikler her
              gün değişir. DGTLFACE, bu dinamik yapıya uygun olarak; <Link href="/Services/seo" className="text-[#58b5cf] font-semibold">SEO</Link> , <Link href="/Services/sem" className="text-[#8978cf] font-semibold">SEM</Link> ,
             <Link href="/Services/smm" className="text-[#58b5cf] font-semibold"> Sosyal Medya Yönetimi</Link> , <Link href="/Services/pms" className="text-[#58b5cf] font-semibold">PMS & OTA Yönetimi </Link>, <Link href="/Services/callcenter" className="text-[#58b5cf] font-semibold">Çağrı Merkezi
              Hizmetleri</Link> ve <Link href="/Services/digitalAnalysis" className="text-[#58b5cf] font-semibold">Veri Analizi & Raporlama</Link> çözümlerini bir araya
              getirir. Tüm dijital kanallarda tek hedefe kilitleniriz: doğru
              misafiri, doğru zamanda, doğru kanaldan kazanmak.
            </p>
          </div>
        </div>

        <div className="flex gap-2 w-[95%] mb-20 ">
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px]  lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2> Antalya Merkezli, Global Ölçekte Düşünen Dijital Pazarlama &
              Teknoloji Ekibi</h2>
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              Antalya merkezli bir <span className="font-bold">dijital pazarlama, SEO, SEM ve otel dijital
              dönüşüm ajansı</span> olarak; turizm ekosisteminin ritmini, sezon
              dinamiklerini, bölgesel hedef kitle davranışlarını ve rekabet
              koşullarını yakından biliyoruz. Ancak bakış açımız yalnızca lokal
              pazara değil, global misafir davranışlarına da uzanıyor. Çok dilli
              web siteleri, TR–EN–DE–RU çağrı merkezi hizmetleri, uluslararası
              reklam kampanyaları ve OTA iş birlikleriyle markanızı sadece
              bölgenizde değil, hedeflediğiniz tüm pazarlarda görünür kılıyoruz.
              Yerel içgörüyü, global performans bakış açısıyla birleştirerek
              <span className="font-bold"> ölçeklenebilir büyüme kurguları</span>  üretiyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[50%] text-center">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2> Veri Odaklı Performans, Şeffaf Raporlama ve Sürekli Optimizasyon</h2>
            </button>
            <p className="text-[12px] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-[18px] lg:mt-0">
              DGTLFACE’te her kampanya, her kreatif ve her entegrasyon mutlaka
              bir <span className="font-bold">veri katmanı</span> ile desteklenir. <Link href="/Services/digitalAnalysis" className="text-[#58b5cf] font-semibold">Looker Studio Raporlama</Link> , 
              <Link href="/Services/sem" className="text-[#58b5cf] font-semibold">SEM Reklam Raporlama</Link> , <Link href="/Services/seo" className="text-[#58b5cf] font-semibold">SEO Performans Raporlama</Link> ve çağrı merkezi KPI
              panelleri ile tüm kanallardaki performansınızı tek ekrandan takip
              edebilir hale getiriyoruz. Sadece rapor sunmuyor, veriyi
              okunabilir hale getirip <span className="">“Bugün neyi değiştirmeliyiz ki yarın daha
              fazla satış / rezervasyon alalım?”</span> sorusuna yanıt üretiyoruz.
              Böylece stratejileriniz statik değil, <span className="font-bold">sürekli optimize edilen
              yaşayan yapılar</span> haline geliyor.
            </p>
          </div>
        </div>


         <BlocksYatay />
        <Section3 page="Homepage"/>
        <Partners />
        <Section1 />
           <Section2 />

        <WhyUsSection />

          <QuestionsSection2 color="#140F25" faqs={faqs} />
        
       
        {/* <ServicesCarousel/> */}
       
     
        <Contact />
      </div>
    </main>
  );
}
