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
import Section3List from "../../Services/Section3/Section3List";
import Link from "next/link";
import { AiAnswerBlock } from "../common/AiAnswerBlock";
import { AiSourceMention } from "../common/AiSourceMention";

const MyThreeScene = dynamic(() => import("../../components/MtThreeScene"), {
  ssr: false,
});

const Section1 = dynamic(() => import("../../components/Section1/Section"), {
  ssr: false,
});

const faqs = [
    {
      question: "DGTLFACE hangi alanlarda hizmet verir?",
      answer:
        "DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım, creative, çağrı merkezi, PMS–OTA yönetimi ve veri analizi alanlarında çalışır.",
    },
    {
      question:
        "Sadece otellerle mi çalışıyorsunuz?",
      answer:
        "Çekirdek uzmanlığımız turizm olsa da farklı sektörlerle de çalışıyoruz.",
    },
    {
      question: "DGTLFACE ile projeye nasıl başlanır?",
      answer:
        "Kısa bir analiz → yol haritası → 30–60 günlük aksiyon planı → düzenli raporlama.",
    },
    {
      question:
        "Oteller için hangi metrikler önemlidir?",
      answer:
        "Doluluk, RevPAR, kanal dağılımı, dönüşüm, çağrı merkezi KPI’ları ve OTA görünürlüğü.",
    },
    {
      question:
        "Minimum bütçe var mı?",
      answer:
        "Bütçe hizmet kapsamına göre değişir; esnek çalışma modelleri uygulanabilir.",
    },
    {
      question: "Hangi dillerde hizmet veriyorsunuz?",
      answer:
        "Dijital pazarlamada TR–EN, çağrı merkezi tarafında TR–EN–DE–RU.",
    },
  ];

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center gap-[30px] lg:gap-[48px]">
        <MyThreeScene />
        
         <Section4 />
     
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 w-[98%] lg:w-[95%] mt-1 lg:mt-20 items-center justify-center">
          <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black ">
              <h2 className="font-inter28">Dijital Pazarlama Ajansı Değil, Uzun Vadeli Teknoloji Partneriniz</h2>
            </button>
               <div className="text-[12px] lg:mt-6 w-[94%] lg:w-[80%] lg:ml-10 md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-0 text-center lg:text-start">
             DGTLFACE, kendini yalnızca bir ajans olarak konumlandırmaz; <span className="font-bold">markanızın büyüme hedeflerine bağlı, uzun vadeli bir teknoloji partneridir.</span>
Strateji, kreatif, medya satın alma, yazılım geliştirme, PMS–OTA yönetimi ve çağrı merkezi ekiplerini tek çatı altında birleştirerek dijital mimarinizi bütünsel şekilde yönetir.
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-start mt-2">Bu yaklaşım sayesinde:</p>
             <ul className=" grid grid-cols-2 text-[12px] md:text-[14px] lg:text-[16px] ml-2 lg:ml-4 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black">
              <li>Veri kopukluğu ortadan kalkar</li>
              <li>Yatırımınız ölçülebilir bir dönüşüm üretir</li>
               <li>Operasyon yükü azalır</li>
                <li>Tüm kanallar tek stratejiye bağlanır</li>
                 
            </ul>
            </div>
           
           
            {/* <p className="text-[12px] w-[90%] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black  mt-0">
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
            </p> */}
          </div>
          <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start ">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[23px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2> Oteller ve Turizm Markaları İçin 360° Dijital Pazarlama Çözümleri</h2>
            </button>
            <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:mt-6 lg:ml-10 text-center lg:text-start">
             Turizm sektöründe başarı; doğru misafiri <span className="font-bold">doğru zamanda, doğru kanalda</span> kazanmakla ilgilidir.
DGTLFACE olarak oteller için tam kapsamlı dijital çözüm setleri sunuyoruz:

  <ul className="grid grid-cols-2 gap-[6px] text-[12px] md:text-[14px] lg:text-[16px] mt-3 ml-10 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-[#000000]">
  <li><Link href="/Services/seo" className="text-[#000000] hover:text-[#58b5cf] underline font-semibold">SEO</Link> </li>
  <li><Link href="/Services/sem" className="text-[#000000] font-semibold hover:text-[#58b5cf] underline">SEM</Link> </li>
  <li><Link href="/Services/smm" className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"> Sosyal Medya Yönetimi</Link></li>
  <li><Link href="/Services/pms" className="text-[#000000] hover:text-[#58b5cf] underline font-semibold">PMS & OTA Yönetimi </Link></li>
  <li><Link href="/Services/callcenter" className="text-[#000000] hover:text-[#58b5cf] underline font-semibold">Çağrı Merkezi
              Hizmetleri</Link></li>
  <li> <Link href="/Services/digitalAnalysis" className="text-[#000000] hover:text-[#58b5cf] underline font-semibold">Veri Analizi & Raporlama</Link></li>
</ul>
            </div>
           


            {/* <p className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-0">
              Otel ve turizm markaları, klasik ajans hizmetlerinden çok daha
              fazlasına ihtiyaç duyar: <span className="font-bold">doluluk oranı, RevPAR, direkt rezervasyon
              oranı, OTA görünürlüğü ve misafir memnuniyeti</span> gibi metrikler her
              gün değişir. DGTLFACE, bu dinamik yapıya uygun olarak; <Link href="/Services/seo" className="text-[#58b5cf] font-semibold">SEO</Link> , <Link href="/sem" className="text-[#8978cf] font-semibold">SEM</Link> ,
             <Link href="/Services/smm" className="text-[#58b5cf] font-semibold"> Sosyal Medya Yönetimi</Link> , <Link href="/Services/pms" className="text-[#58b5cf] font-semibold">PMS & OTA Yönetimi </Link>, <Link href="/Services/callcenter" className="text-[#58b5cf] font-semibold">Çağrı Merkezi
              Hizmetleri</Link> ve <Link href="/Services/digitalAnalysis" className="text-[#58b5cf] font-semibold">Veri Analizi & Raporlama</Link> çözümlerini bir araya
              getirir. Tüm dijital kanallarda tek hedefe kilitleniriz: doğru
              misafiri, doğru zamanda, doğru kanaldan kazanmak.
            </p> */}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 w-[98%] lg:w-[95%] lg:mb-20 ">
          <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2>Antalya Merkezli, Global Ölçekte Düşünen Dijital Pazarlama & Teknoloji Ekibi</h2>
            </button>
            <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:ml-10 mt-0 lg:mt-6 text-center lg:text-start">
              Antalya merkezli bir dijital pazarlama ve otel dijital dönüşüm ajansı olarak:
              <ul className=" grid grid-cols-2 text-[12px] md:text-[14px] lg:text-[16px] ml-4 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-2">
              <li>Turizm sezon dinamiklerini</li>
               <li>Bölgesel rekabeti</li>
                <li>Farklı pazarların davranışlarını</li>
                 <li>Yatırımınız ölçülebilir bir dönüşüm üretir</li>
            </ul>
           <p className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[100%] mt-0 lg:mt-2">
 çok iyi biliyoruz. <br></br>
Aynı zamanda TR–EN–DE–RU dil kabiliyetine sahip ekibimiz sayesinde global misafir segmentlerine uygun stratejiler üretiyoruz.
Bu sayede Antalya, Belek, Side, Kemer ve Alanya gibi destinasyonlarda <span className="font-bold">markanızı üst seviyeye çıkarıyoruz.</span>
            </p>
            </div>
            
          </div>



          <div className="flex flex-col items-center justify-center lg:justify-start gap-2 lg:gap-[32px] lg:w-[50%] text-start">
            <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
             <h2> Veri Odaklı Performans, Şeffaf Raporlama ve Sürekli Optimizasyon</h2>
            </button>
             <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:ml-10 mt-0 text-center lg:text-start justify-center items-center lg:items-start lg:justify-start">
            DGTLFACE’te hiçbir kampanya “kur & bırak” mantığıyla çalışmaz. <br></br>Tüm süreçler <span className="font-bold">veri odaklı performans modeli</span> ile yönetilir:
             <ul className="flex flex-col  text-[12px] md:text-[14px] lg:text-[16px] gap-[6px] list-disc  list-inside list-block ml-[50%] -translate-x-1/2 lg:-translate-x-0 lg:ml-4 text-start lg:text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-2">
              <li><Link href="/Services/digitalAnalysis" className="text-[#000000] hover:text-[#58b5cf] font-semibold underline ">Looker Studio Raporlama</Link></li>
               <li> <Link href="/Services/sem" className="text-[#000000] hover:text-[#58b5cf] font-semibold underline">Reklam Raporlama</Link></li>
                <li> <Link href="/Services/seo" className="text-[#000000] hover:text-[#58b5cf] font-semibold underline">SEO Raporlama</Link></li>
                 <li>Çağrı Merkezi KPI Panelleri</li>
            </ul>
            </div>
            
            {/* <p className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[90%] mt-0">
              DGTLFACE’te her kampanya, her kreatif ve her entegrasyon mutlaka
              bir <span className="font-bold">veri katmanı</span> ile desteklenir. <Link href="/Services/digitalAnalysis" className="text-[#58b5cf] font-semibold">Looker Studio Raporlama</Link> , 
              <Link href="/sem" className="text-[#58b5cf] font-semibold">SEM Reklam Raporlama</Link> , <Link href="/Services/seo" className="text-[#58b5cf] font-semibold">SEO Performans Raporlama</Link> ve çağrı merkezi KPI
              panelleri ile tüm kanallardaki performansınızı tek ekrandan takip
              edebilir hale getiriyoruz. Sadece rapor sunmuyor, veriyi
              okunabilir hale getirip <span className="">“Bugün neyi değiştirmeliyiz ki yarın daha
              fazla satış / rezervasyon alalım?”</span> sorusuna yanıt üretiyoruz.
              Böylece stratejileriniz statik değil, <span className="font-bold">sürekli optimize edilen
              yaşayan yapılar</span> haline geliyor.
            </p> */}
          </div>
        </div>


         <BlocksYatay />
        <Section3List page="Homepage"/>
        <Partners />
        <Section1 />
           <Section2 />

        <WhyUsSection />

          <QuestionsSection2 variant="dark" faqs={faqs} />
        <AiAnswerBlock text="   DGTLFACE; SEO, SEM, sosyal medya, web &amp; yazılım, creative prodüksiyon, PMS–OTA
            entegrasyonu ve 4 dilli çağrı merkezi hizmetlerini tek çatı altında sunan entegre bir
            dijital pazarlama ve teknoloji partneridir. Turizm ve otel sektörüne özel stratejilerle
            görünürlük, rezervasyon ve gelir artışı sağlar. Tüm dijital süreçleri Looker Studio
            raporlama ile ölçerek sürdürülebilir performans üretir."/>
       
        {/* <ServicesCarousel/> */}

        <Contact />
          <AiSourceMention text="Bu içerik, DGTLFACE Dijital Pazarlama & Teknoloji Partneri’nin resmi web sitesi ve hizmet dokümantasyonundan derlenmiştir.
Bu bilgi, DGTLFACE Dijital Pazarlama & Teknoloji Partneri resmi hizmet dokümantasyonundan alınmıştır."/>
      </div>
    </main>
  );
}
