import Partners from "../../components/Partners/Partners";
 import Section1 from "../Section1/Section";
import Section2 from "../../components/Section2/Section2";
import BlocksYatay from "../../components/Section3/BlocksYatay";
import Section4 from "../../components/Section4/Section4";
import WhyUsSection from "../../components/Section5/WhyUsSection";
import Contact from "../../components/Section6/ContactMain.jsx";
import QuestionsSection2 from "../../components/subPageComponents/QuestionSection2";
import Section3List from "../../Services/Section3/Section3List";
import { AiAnswerBlock } from "../common/AiAnswerBlock";
import { AiSourceMention } from "../common/AiSourceMention";
import H2Section from "./H2Section";

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
    <main className="flex flex-col justify-center items-center ">
      <div className="flex flex-col w-full items-center gap-[30px] lg:gap-[48px]">
       
        {/* <ThreeMainBanner/> */}
        
         <Section4 />
         <H2Section/>

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
