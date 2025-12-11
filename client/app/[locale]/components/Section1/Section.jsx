"use client";
import React from "react";
import FireballExplosion from "./Animation/FireballExplosion";
import { useTranslations } from 'next-intl';
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";
import RichText from "../common/RichText";

const Section = () => {
  const t = useTranslations("Homepage.partners")

  return (
    <section className="flex flex-col w-[96%] md:w-[90%] items-center justify-center">
      {/* Sol Kısım: Metin */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] lg:gap-0">
        <div className="flex flex-col w-full md:w-1/2 lg:p-6 justify-center items-center md:items-start md:justify-start text-center md:text-start text-darkBlue gap-[6px] font-inter">
        <h2 className="text-[22px] lg:text-[24px]  font-semibold mb-[7px] lg:mb-4 font-inter28 leading-[120%] -tracking-[0.48px]">
         {t("tagline_main")}
        </h2>
        <h4 className="text-[16px] font-inter28 font-semibold mb-3 leading-[28.80px]">
          DGTLFACE  <span className="text-[16px]  font-inter28 font-semibold lg:font-normal leading-[120%] lg:leading-[25.20px] -tracking-[0.32px]"> –   {t("tagline_subtitle")}</span>
        </h4>
      <RichText
  t={t}
  messageKey="tagline_description"
  as="p"
  className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-[16px] font-normal w-[93%] lg:w-full"
/>
<RichText
  t={t}
  messageKey="tagline_span"
  as="p"
  className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-[16px] font-normal w-[93%] lg:w-full"
/>
      </div>

      {/* Sağ Kısım: Three.js Sahnesi */}
      <div className="flex relative lg:p-6 items-center justify-center h-[370px] md:h-auto">
        <div className="w-full max-w-[500px] h-auto relative overflow-hidden mt-4 ">
        <FireballExplosion />
        </div>
      </div>
      </div>

     <div className="flex flex-col relative z-[90] items-end justify-end w-full gap-10">
       <div className="w-[95%] lg:w-[80%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-1 lg:gap-2 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[20px] font-semibold font-inter leading-[120%] lg:leading-[130%]">
           Tüm Dijital Süreçler Tek Çatı Altında
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[6px] lg:gap-[10px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
        Farklı ajanslar ve kopuk raporlarla uğraşmazsınız.
DGTLFACE çatısında:
              </p>
      <ul className="grid grid-cols-1 lg:grid-cols-5 list-disc text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ml-4">
        <li>Web sitesi</li>
        <li>Reklam kampanyaları</li>
        <li>Sosyal medya içerikleri</li>
        <li>OTA performansı</li>
        <li>Çağrı merkezi operasyonları</li>
      </ul>
      <p className="text-justify justify-start text-[#140f25] lg:text-base font-bold  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
        tek mimariye bağlanır.
      </p>
            </div>
          </div>
           <div className="w-[95%] lg:w-[75%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-1 lg:gap-2 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[20px]  font-semibold font-inter leading-[120%] lg:leading-[130%]">
          Otel ve Turizm Markalarına Özel Uzmanlık
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[6px] lg:gap-[10px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
         Turizm sektörü karmaşıktır: <br></br>
sezonlar, pazarlar, fiyat dinamikleri ve misafir davranışları sürekli değişir. <br></br>
DGTLFACE tüm bu değişkenleri stratejiye gömerek ticari sonuçlar <span className="font-bold"> üreten bir model</span> kurar.
              </p>
        
        
            </div>
          </div>
           <div className="w-[95%] lg:w-[70%] px-[3%] relative xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-1 lg:gap-2 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[20px]  font-semibold font-inter leading-[120%] lg:leading-[130%]">
          Veri Odaklı Yönetim ve Şeffaf Raporlama
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[6px] lg:gap-[10px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
      Her aksiyonun arkasında gerçek veri ve net gerekçe vardır. 
Looker Studio panelleri ile:
              </p>
          <ul className="grid grid-cols-1 lg:grid-cols-5 list-disc text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] gap-2">
        <li>Doluluk</li>
        <li>Gelir</li>
        <li>Dönüşüm</li>
        <li>Reklam ROAS</li>
        <li className="">SEO görünürlüğü</li>
      </ul>
      <p className="text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
        tek panelde gösterilir.
      </p>
            </div>
              
          </div>
          <div className="w-[95%] lg:w-[85%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-1 lg:gap-2 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[20px]  font-semibold font-inter leading-[120%] lg:leading-[130%]">
          Performans Odaklı Creative & Video Prodüksiyon
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[6px] lg:gap-[10px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
         Creative üretimler sadece estetik değil; <br></br>
<b>rezervasyon ve satış dönüşümü</b> üretmek için tasarlanır.
              </p>
             
            </div>
          </div>
      
        
   <DgtlfaceLogoBlackHead width={720} height={720} className=" -scale-x-100 absolute z-1 opacity-20 right-[61%] -top-[2%]" color="#5dafcf"/>
     </div>
      
    </section>
  );
};

export default Section;
