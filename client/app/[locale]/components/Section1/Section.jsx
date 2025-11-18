"use client";
import React from "react";
import FireballExplosion from "./Animation/FireballExplosion";
import { useTranslations } from 'next-intl';
import DgtlFaceLogo from "../header/svg/DgtlFaceLogo";
import WebIcon from "../serviceblocks/Icons/BlockIcons/WebIcon";
import DgtlHeadV from "../serviceblocks/Icons/BlockIcons/BlockVerticalIcons/DgtlHeadV";
import DgtlfaceHeadBlack from "../serviceblocks/Icons/BlockIcons/BlockVerticalIcons/DgtlfaceHeadBlack";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";

const Section = () => {
  const t = useTranslations("Homepage.partners")

  return (
    <section className="flex flex-col w-[80%] items-center justify-center  ">
      {/* Sol Kısım: Metin */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[42px] lg:gap-0">
        <div className="flex flex-col w-full md:w-1/2 lg:p-6 text-start text-darkBlue gap-[8px] font-inter">
        <h2 className="text-[24px]  font-semibold mb-[7px] lg:mb-4 font-inter28 leading-[120%]  -tracking-[0.48px]">
         {t("tagline_main")}
        </h2>
        <h4 className="text-[16px] font-inter28 font-semibold mb-3 leading-[28.80px]">
          DGTLFACE  <span className="text-[16px]  font-inter28 font-bold lg:font-normal leading-[120%] lg:leading-[25.20px] -tracking-[0.32px]"> –   {t("tagline_subtitle")}</span>
        </h4>
        <p className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-[16px] font-normal w-full">
         {t("tagline_description")}
        </p>
      </div>

      {/* Sağ Kısım: Three.js Sahnesi */}
      <div className="flex relative lg:p-6 items-center justify-center h-[400px] md:h-auto">
        <div className="w-full max-w-[500px] h-auto relative overflow-hidden mt-4 ">
        <FireballExplosion />
        </div>
      </div>
      </div>

     <div className="flex flex-col relative z-[90] items-end justify-end w-full gap-10">
       <div className="w-[80%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[18px] font-bold font-inter leading-[120%] lg:leading-[28.80px]">
           Tüm Dijital Süreçler Tek Çatı Altında
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
          Farklı ajanslarla, farklı tedarikçilerle ve birbirinden kopuk raporlarla uğraşmak zorunda kalmazsınız. Web siteniz, reklam kampanyalarınız, sosyal medya içerikleriniz, OTA performansınız ve çağrı merkezi operasyonlarınız DGTLFACE çatısı altında entegre edilir. Böylece veri akışı hızlanır, optimizasyon kararları daha net alınır ve markanız dijitalde daha güçlü bir bütünlükle konumlanır.
              </p>
      
            </div>
          </div>
           <div className="w-[75%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[18px]  font-bold font-inter leading-[120%] lg:leading-[28.80px]">
           Otel ve Turizm Markalarına Özel Uzmanlık
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
          Turizm dünyasında her veri, her sezon ve her pazar farklı davranır. DGTLFACE, otel ve turizm dikeyinde çalışmanın getirdiği deneyimle doluluk oranı, RevPAR, kanal dağılımı, OTA skorları, yorum yönetimi ve misafir memnuniyeti gibi metrikleri stratejinin içine gömerek çalışır. Yani yalnızca dijitalde değil, otelinizin ticari sonuçlarında gerçek karşılığı olan bir model inşa ederiz.
              </p>
        
        
            </div>
          </div>
           <div className="w-[70%] px-[3%] relative xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[18px]  font-bold font-inter leading-[120%] lg:leading-[28.80px]">
          Veri Odaklı Yönetim ve Şeffaf Raporlama
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
        Tüm işlerinizi “hissettiğimiz gibi” değil, ölçtüğümüz gibi yönetiriz. Looker Studio panelleri, reklam raporları, SEO ve sosyal medya performans raporları, çağrı merkezi KPI tabloları ile kampanyalarınızın nereye gittiğini net biçimde görürsünüz. Böylece alınan her aksiyonun arkasında somut veri ve net bir gerekçe olur.
              </p>
        
            </div>
              
          </div>
          <div className="w-[85%] px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-80">
            <h4 className="w-full relative justify-start text-[#140f25] text-[18px]  font-bold font-inter leading-[120%] lg:leading-[28.80px]">
          Performans Odaklı Creative & Video Prodüksiyon
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className=" relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
         Creative ekiplerimiz, tasarım ve video prodüksiyon süreçlerini yalnızca estetik kaygıyla değil, performans hedefleriyle birlikte kurgular. Otel tanıtım videoları, reels içerikler, grafik tasarımlar, UI/UX projeleri ve etkinlik prodüksiyonları; marka algısını güçlendirirken aynı zamanda rezervasyon ve satış dönüşümüne hizmet edecek şekilde planlanır.
              </p>
             
            </div>
          </div>
      
        
   <DgtlfaceLogoBlackHead width={2200} height={2400} className=" -scale-x-100 absolute z-1 opacity-20 right-[63%] -top-[130%]" color="#5dafcf"/>
     </div>
      
    </section>
  );
};

export default Section;
