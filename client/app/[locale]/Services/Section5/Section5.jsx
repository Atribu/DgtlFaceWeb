"use client"; // İstemci taraflı bileşen olduğunu belirt
import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const Section5 = () => {
   const t = useTranslations('ServicesPage');
  // Kartlar için veri dizisi (6 adet)
  const testimonialsData = [
    {
      id: 1,
      name: "Ahmet Sönmez",
      role: "Melodie Hotel Satış Müdürü",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE ile çalışmaya başladıktan sonra otelimizin doğrudan rezervasyonları %40 arttı. Özellikle PMS ve OTA yönetimindeki uzmanlıkları, operasyonel yükümüzü inanılmaz hafifletti. Antalya'da turizm odaklı dijital ajans arayan herkese tavsiye ederim.",
    },
    {
      id: 2,
      name: "Elif Özcan",
      role: "E-Ticaret Marka Yöneticisi",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE, işimiz için ezber bozan bir etki yarattı. Hazırladıkları yeni SEM kampanyaları ile ROI'miz ilk ayda %55 yükseldi. Yaratıcılıkları ve veriye dayalı profesyonellikleri gerçekten eşsiz.",
    },
    {
      id: 3,
      name: "Murat Bilgiç",
      role: "Kurumsal İletişim Direktörü",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE ekibi inanılmaz yetenekli. Yeni kurumsal kimlik ve web sitesi projemiz beklentilerimizin çok ötesinde teslim edildi. Kurumsal imajımızı elit bir seviyeye taşıdılar.",
    },
    {
      id: 4,
      name: "Deniz Kaya",
      role: "Start-up Kurucu Ortağı",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE'in detaylara gösterdiği dikkat ve yenilikçi teknik SEO çözümleri sayesinde, sıfırdan kurduğumuz sitemiz 4 ay gibi kısa sürede hedef anahtar kelimelerde ilk sayfaya yerleşti. Başarımızın büyük bir kısmı onlara ait.",
    },
    {
      id: 5,
      name: "Cemil Arslan",
      role: "Mobil Uygulama Proje Yöneticisi",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE ile çalışmak harika bir deneyimdi. Geliştirdikleri UI/UX tasarımları hem estetik hem de işlevsel açıdan mükemmel. Kullanıcılarımızdan aldığımız geri bildirimler müthiş pozitif.",
    },
    {
      id: 6,
      name: "Berna Akın",
      role: "Eğitim Kurumu Pazarlama Uzmanı",
      image: "https://placehold.co/79x79",
      comment:
        "DGTLFACE'in veri odaklı sosyal medya stratejisi, marka bilinirliğimizi ve etkileşimimizi kısa sürede katladı. Her ay düzenli ve şeffaf raporlamaları sayesinde nereye yatırım yaptığımızı net bir şekilde görüyoruz.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Otomatik kaydırma efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000); // Her 3 saniyede bir kaydır

    return () => clearInterval(interval); // Temizle
  }, [testimonialsData.length]);

  // Aktif karta kaydırma
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth + 32; // Kart genişliği + gap
      containerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth', // Yumuşak kaydırma
      });
    }
  }, [activeIndex]);

  // Scrollbar'ı gizleme
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.scrollbarWidth = 'none'; // Firefox için
      container.style.msOverflowStyle = 'none'; // IE ve Edge için
      if (container.style.webkitScrollbar) {
        container.style.webkitScrollbar = 'none'; // Webkit tarayıcılar için
      }
    }
  }, []);

  return (
    <div className='flex flex-col items-center w-full  gap-4 lg:gap-8 overflow-visible '>
      {/* Başlık */}
      <div className="text-center justify-center gap-[3px] lg:gap-[8px]">
        <span className="text-[#140f25] text-[24px] lg:text-5xl font-bold font-inter leading-[120%] lg:leading-[57.60px] -tracking-[0.48px] lg:-tracking-[0.96px]">
         {t("servicespage_s5_header1")}
        </span>
        <span className="text-[#a754cf] text-[24px] lg:text-5xl font-bold font-inter leading-[120%] lg:leading-[57.60px] -tracking-[0.48px] lg:-tracking-[0.96px]">
           {t("servicespage_s5_span1")}.
        </span>
         {/* Açıklama */}
      <div className="md:w-[478px] text-center text-[#140f25] text-[14px] lg:text-lg font-normal font-inter leading-[130%] lg:leading-[25.20px] -tracking-[0.28px] lg:-tracking-normal">
        {t("servicespage_s5_text1")}.
      </div>
      </div>

     

      {/* Kartları Map ile Oluştur ve Yatay Kaydırma Ekle */}
      <div
        ref={containerRef}
        className="flex flex-row items-center gap-8 w-full overflow-x-auto px-8 scroll-smooth hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }} // Yumuşak kaydırma
      >
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-[45px] bg-white rounded-[25px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] flex flex-col justify-center items-start gap-2 w-[100%] md:w-[500px] flex-shrink-0 border"
            style={{ minHeight: '200px', height: '30%' }} // Kart yüksekliğini sabitle
          >
            <div className="flex justify-start items-start text-start gap-12">
              <div className="md:w-[269px] items-start text-start">
                <div className="flex flex-row items-start text-start">
                  <span className="text-[#140f25] text-[20px] lg:text-[32px] font-bold font-inter leading-[120%] lg:leading-[38.40px] -tracking-[0.4px]">
                    {testimonial.name.split(" ")[0]} <span className='text-[#54b9cf] '>{testimonial.name.split(" ")[1]}</span>
                  </span>
                </div>
                <div className="text-black text-[12px] lg:text-lg font-normal font-inter leading-[25.20px]">
                  {testimonial.role}
                </div>
              </div>
              <img
                className="w-[38px] h-[38px] lg:w-[79px] lg:h-[79px] rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
            </div>
            <div className="w-full items-start text-start text-[#140c29] text-sm font-normal font-inter leading-[120%] lg:leading-tight">
              {testimonial.comment}
            </div>
          </div>
        ))}
      </div>

      {/* Noktalar (Dots) */}
      <div className="flex gap-2 mt-1 lg:mt-4">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-[#a754cf]' : 'bg-[#e0e0e0]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section5;