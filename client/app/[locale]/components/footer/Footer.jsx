import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "./Icons/fc.jsx"
import Instagram from "./Icons/instagram.jsx"
import Linkedin from "./Icons/linkedin.jsx"
import WhatsApp from "./Icons/whatsapp.jsx"
import Youtube from "./Icons/youtube.jsx"
import Logo from "../header/svg/DgtlFaceLogo.jsx"
import sutunlar from "./images/sutunlar.png"
import { PiYoutubeLogo } from "react-icons/pi";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations("Footer")

  return (
    <footer className="bg-[#140f25] text-white py-12 relative overflow-y-hidden">
      <div className="absolute z-[1] inset-0 bg-[#140F25]/40 flex md:hidden"></div>
      <div className="container mx-auto px-4 lg:px-0">
        {/* Üst bölüm: Logo ve Navigasyon */}
        <div className="flex flex-col md:hidden justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 z-[20]">
          <Logo className="w-52 flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-12" />
          </div>
          <Image src={sutunlar} width={sutunlar.width} height={sutunlar.height} alt="sutunlar" className="absolute top-32  md:bottom-0 md:left-1/2 md:-translate-x-1/2"/>
          {/* Navigasyon Linkleri */}
          <div className="flex flex-col md:flex-row gap-8 z-[20] mt-10">
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
          </div>
        </div>

         <div className="hidden md:flex md:flex-row justify-between items-start h-[300px]">
          <div className="flex flex-col items-center justify-center gap-10 w-[33%] mt-20">
            
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

          <div className="flex flex-col items-enter justify-center gap-10 w-[33%]">
            <div className="flex flex-col items-center justify-start text-center gap-5 font-inter text-white z-[50] h-full">
              <h3 className="text-[48px] xl:text-[52px] font-bold leading-[110%] -tracking-[1.12px] capitalize">Let's Get To <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#547ccf] to-[#a754cf]">Work</span></h3>
              <p className="text-[16px] font-noral leading-[140%] -tracking-[0.32px] w-[90%]">We are ready to take the first steps in the next creative endeavour. A tap of the button below will start our collaborative journey.</p>
            </div>
       <Image
  src={sutunlar}
  width={sutunlar.width}
  height={sutunlar.height}
  alt="sutunlar"
  className="absolute bottom-20 md:bottom-0 md:left-1/2 md:-translate-x-1/2 z-[20]"
  style={{
    maskImage: 'linear-gradient(to top, transparent 0%, black 50%)',
    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)'
  }}
/>
          </div>
          
          {/* Navigasyon Linkleri */}
          <div className="flex flex-col  gap-10 z-[20] mt-20 w-[33%]">
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
        <div className="mt-16 flex justify-center md:justify-start gap-6 z-50">
          <Link href="https://www.instagram.com/dgtlface/" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Instagram className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://tr.linkedin.com/company/dgtlface" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Linkedin className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <WhatsApp className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://www.facebook.com/dgtlface" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Facebook className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://www.youtube.com/@dgtlface" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-[2px] border-white rounded-full bg-transparent w-9 h-9 z-[20]">
                <PiYoutubeLogo size={21} />
          </Link>
        </div>
          </div>
        </div>

      

        {/* Alt bölüm: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-400 md:mt-40 z-[50]">
          © {new Date().getFullYear()} DGTLFACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
