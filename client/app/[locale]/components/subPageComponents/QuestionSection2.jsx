"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";
import PlusSvg from "./PlusSvg ";

const QuestionsSection2 = ({ color , faqs }) => {
  const t = useTranslations("AboutPage");

  // Eğer dışarıdan faqs gelmezse, mevcut metinleri default olarak kullan
  const defaultFaqs = [
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
    {
      question:
        "Otel dijital pazarlama sürecinde hangi metriklere odaklanıyorsunuz?",
      answer:
        "Oteller için; doluluk oranı, direkt rezervasyon oranı, oda başı gelir (RevPAR), kanal bazlı satış dağılımı, web sitesi dönüşüm oranı, çağrı merkezi performansı, OTA görünürlüğü ve misafir memnuniyeti gibi metrikleri takip ediyoruz. Bu verileri Looker Studio panelleriyle birleştirerek yönetim ekibinizin hızlı ve doğru kararlar almasını sağlıyoruz.",
    },
    {
      question:
        "DGTLFACE ile çalışmak için minimum bütçe veya sözleşme süresi var mı?",
      answer:
        "Bütçe ve süreler markanın hedeflerine, hacmine ve ihtiyaç duyduğu hizmet kapsamına göre değişiyor. Bazı müşterilerimizle kampanya bazlı kısa dönem projeler, bazılarıyla ise 12 ay ve üzeri iş ortaklıkları yürütüyoruz. Temel hedefimiz, ayırdığınız bütçeyi gider değil, ölçülebilir yatırım haline getirmek.",
    },
    {
      question: "Hangi dillerde hizmet veriyorsunuz?",
      answer:
        "Dijital pazarlama, SEO, SEM ve yazılım tarafında ağırlıklı olarak Türkçe ve İngilizce çalışıyoruz. Otel ve çağrı merkezi projelerinde ise Türkçe, İngilizce, Almanca ve Rusça dillerinde misafir ve müşteri iletişimi yönetiyoruz.",
    },
  ];

  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  // Tek state ile hangi sorunun açık olduğunu tutalım
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full items-center justify-center gap-[70px] lg:gap-[168px] font-inter -mt-10">
      <div
        className={`flex flex-col w-[100%] lg:w-[50%] items-center justify-center text-center gap-[10px] lg:gap-[16px]`}
      >
        <h2
          className={`text-[22px] lg:text-[24px] font-bold leading-[120%] -tracking-[0.48px] lg:-tracking-[0.64px] mb-[14px] lg:mb-[16px]  text-${color}`}
        >
          DGTLFACE Hakkında{" "}
          <span className="bg-gradient-to-r from-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
            {t("aboutpage_s4_faq_span1")}
          </span>
        </h2>

        {/* SORU – CEVAP LİSTESİ */}
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`
                flex flex-col overflow-hidden cursor-pointer
                transition-[max-height,transform] duration-700 ease-in-out 
                px-[20px] lg:px-[32px] py-[14.5px] 
                w-[90%] md:w-[650px] lg:w-[720px]
                border gradient-border-button rounded-[20px]
                !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px]  text-${color}
                ${
                  isOpen
                    ? "max-h-[260px] translate-y-0"
                    : "max-h-[51px] translate-y-[-10px]"
                }
              `}
            >
              <div
                className={`flex w-full justify-between items-start  text-${color}`}
              >
                <h3 className="flex whitespace-nowrap text-left">
                  {item.question}
                </h3>
                <PlusSvg
                  className={`transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  width={19}
                  height={18}
                />
              </div>

              <div className="flex items-start text-start justify-center mt-4">
                <p className={`w-[98%] text-${color}`}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsSection2;
