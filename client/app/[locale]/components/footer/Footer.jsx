import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "./Icons/fc.jsx";
import Instagram from "./Icons/instagram.jsx";
import Linkedin from "./Icons/linkedin.jsx";
import WhatsApp from "./Icons/whatsapp.jsx";
import Youtube from "./Icons/youtube.jsx";
import Logo from "../header/svg/DgtlFaceLogo.jsx";
import sutunlar from "./images/sutunlar.png";
import { PiYoutubeLogo } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex bg-[#140f25] text-white py-6 lg:py-4 relative overflow-y-hidden max-w-screen items-center justify-center">
      <div className="absolute z-[1] inset-0 bg-[#140F25]/40 flex md:hidden"></div>
      <div className="container w-full px-4 lg:px-0 items-center justify-center">
        {/* Üst bölüm: Logo ve Navigasyon (MOBİL GÖRÜNÜM) */}
        <div className="flex flex-col lg:hidden justify-center items-center h-[380px] w-full">
          <div className="flex flex-col items-center justify-start text-center gap-[14px] font-inter text-white z-[50] h-full">
              <h3 className="text-[24px] font-bold leading-[120%] -tracking-[0.48px] capitalize">
               {t("header")}{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#547ccf] to-[#a754cf]">
                  {t("span")}
                </span>
              </h3>
              <p className="text-[14px] font-noral leading-[130%] -tracking-[0.28px] w-[80%]">
               {t("text")}
              </p>
            </div>
          <div className="mb-6 md:mb-0 z-[20]"></div>
          <Image
            src={sutunlar}
            width={sutunlar.width}
            height={sutunlar.height}
            alt="sutunlar"
            // Mobil görünüm için top-16 -> top-36 olarak değiştirildi
            className="absolute top-36 md:bottom-0 md:left-1/2 md:-translate-x-1/2"
            style={{
              maskImage: "linear-gradient(to top, transparent 0%, black 50%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 50%)",
            }}
          />
          <Link
            href="/contact"
            className="z-[50] absolute top-[170px] max-w-[160px] whitespace-nowrap inline-flex px-6 py-3 justify-center items-center  gap-[10px] 
  rounded-[22px] 
  bg-white 
  shadow-[0_0_50px_0_rgba(221,254,254,0.5),_0_0_4px_0_#FFF] 
"
          >
            <span className="text-[#140F25] text-[14px] font-bold leading-[120%] -tracking-[0.28px] font-inter">
              {" "}
              {t("buttonText")}
            </span>
          </Link>

         <div className="flex flex-col gap-5">
           <Logo className="w-52 flex z-[50]" />
          {/* Navigasyon Linkleri */}
          <div className="flex flex-col gap-5 z-[20] ">
            
            {/* Orta bölüm: Sosyal Medya İkonları */}
            <div className="flex justify-center md:justify-center gap-[10px] z-50">
              <Link
                href="https://www.instagram.com/dgtlface/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Instagram className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://tr.linkedin.com/company/dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Linkedin className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="tel:+905326451767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <WhatsApp className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://www.facebook.com/dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Facebook className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://www.youtube.com/@dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-[2px] border-white rounded-full bg-transparent w-9 h-9 z-[20]"
              >
                <PiYoutubeLogo size={21} />
              </Link>
            </div>
          </div>
         </div>
        </div>

        {/* MASAÜSTÜ GÖRÜNÜM */}
        <div className="hidden lg:flex lg:flex-row justify-between items-start h-[200px] xl:h-[240px]">
          <div className="flex flex-col items-center justify-center gap-10 w-[30%] mt-10 xl:mt-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">
                {t("link_home")}
              </Link>
              <Link href="/aboutus" className="hover:underline">
                {t("link_about")}
              </Link>
              <Link href="/Services" className="hover:underline">
                {t("link_services")}
              </Link>
            </div>
            <Logo className="w-44 flex" />
          </div>

          <div className="flex flex-col items-center justify-center gap-10 w-[39%]">
            <div className="flex flex-col items-center justify-start text-center gap-5 font-inter text-white z-[50] h-full">
              <h3 className="text-[48px] xl:text-[52px] font-bold leading-[110%] -tracking-[1.12px] capitalize">
               {t("header")}{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#547ccf] to-[#a754cf]">
                 {t("span")}
                </span>
              </h3>
              <p className="text-[16px] font-noral leading-[140%] -tracking-[0.32px] w-[90%]">
               {t("text")}
              </p>
            </div>
            <Image
              src={sutunlar}
              width={sutunlar.width}
              height={sutunlar.height}
              alt="sutunlar"
              // Masaüstü görünüm için bottom-0 -> bottom-[-50px] olarak değiştirildi (veya daha düşük bir değer)
              className="absolute bottom-[-50px] xl:bottom-[-70px] md:left-1/2 md:-translate-x-1/2 z-[20] xl:w-[255px]"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 50%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 50%)",
              }}
            />
            <Link
              href="/contact"
              className="
z-[50]
absolute
top-[190px]
xl:top-[220px]
max-w-[160px]
xl:max-w-[172px] whitespace-nowrap
  inline-flex 
  px-6 xl:px-8 py-3 xl:py-4 
  justify-center 
  items-center 
  gap-[10px] 
  rounded-[22px] 
  bg-white 
  shadow-[0_0_50px_0_rgba(221,254,254,0.5),_0_0_4px_0_#FFF] 
"
            >
              <span className="text-[#140F25] text-[18px] font-bold leading-[120%] -tracking-[0.36px] font-inter">
                {" "}
               {t("buttonText")}
              </span>
            </Link>
          </div>

          {/* Navigasyon Linkleri */}
          <div className="flex flex-col gap-10 z-[20] mt-10 xl:mt-4 w-[30%]">
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="hover:underline">
                {t("link_contact")}
              </Link>
              <Link href="/privacy" className="hover:underline">
                {t("link_privacy_policy")}
              </Link>
              <Link href="/terms" className="hover:underline">
                {t("link_terms_of_service")}
              </Link>
            </div>
            {/* Orta bölüm: Sosyal Medya İkonları */}
            <div className="flex justify-center md:justify-center gap-[10px] z-50">
              <Link
                href="https://www.instagram.com/dgtlface/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Instagram className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://tr.linkedin.com/company/dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Linkedin className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="tel:+905326451767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <WhatsApp className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://www.facebook.com/dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex z-[20]"
              >
                <Facebook className="w-9 h-9 z-[20]" />
              </Link>
              <Link
                href="https://www.youtube.com/@dgtlface"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-[2px] border-white rounded-full bg-transparent w-9 h-9 z-[20]"
              >
                <PiYoutubeLogo size={21} />
              </Link>
            </div>
          </div>
        </div>

        {/* Alt bölüm: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-400 md:mt-16 z-[50]">
          © {new Date().getFullYear()} DGTLFACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}