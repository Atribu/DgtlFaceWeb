"use client";
import React, { useState, useRef, useEffect, use } from "react";
import { usePathname } from "next/navigation"; // Sayfa değişimini takip etmek için
import { useTranslations } from 'next-intl';
import LangSwitcher from '@/LangSwitcher';
import Link from "next/link";
import Logo from "./svg/DgtlFaceLogo";
import Logo2 from "../Cookies/components/DgtlfaceLogoSvg";
import DownArrow from "./svg/DownArrow";
import { RxCross2 } from "react-icons/rx";
import HomeSvg from "./svg/HomeSvg";
import ServicesSvg from "./svg/ServicesSvg";
import PersonSvg from "./svg/PersonSvg";
import BlogSvg from "./svg/BlogSvg";
import PhoneSvg from "./svg/PhoneSvg";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // Şu anki sayfanın yolunu al
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);
  const servicesMenuRef = useRef(null); // Yeni eklenen ref

  useEffect(() => {
    const handleScroll = () => {
      // scrollY ile ekran yüksekliği arasındaki oranı hesapla
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      // İlerleme 0 -> 1 arasında değişiyor; 0 = beyaz, 1 = siyah.
      const value = Math.floor(255 * (1 - progress));
      // Her RGB bileşeni için aynı değeri kullanarak gri tonlama elde ederiz.
      setColor(`rgb(${value}, ${value}, ${value})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);





  useEffect(() => {
    setIsServicesOpen(false)
    setIsMenuOpen(false);
  }, [pathname]); // pathname değiştiğinde sidebar kapanacak

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-screen lg:w-[61%] right-0 left-0 lg:left-auto lg:right-1/2 lg:rounded-[20px] lg:translate-x-1/2 bg-gray-900 text-white bg-transparent lg:mt-[42px] fixed h-[80.5px] lg:h-auto z-[999] flex items-center justify-center lg:gap-32 top-0 backdrop-blur-md" >
      {/* Logo Alanı */}
      <Link href="/"><Logo className="w-auto hidden lg:flex" width={219} height={54.454} /></Link>

      <div className="flex lg:hidden w-[90%] items-center justify-between h-full fixed mt-10" >
       <Link href="/">
       <Logo2 className="flex lg:hidden" width={36} height={30} color={color} style={{
        color, // dinamik olarak ayarlanan renk
        transition: "color 0.1s ease-out", }}/></Link>

        <div className="flex gap-[5px] items-center justify-center h-full">
          <div className="flex itemx-center justify-center text-center  gap-[5px] py-[8px] px-[14] text-[12px] font-semibold leading-[120%] -tracking-[0.24px] text-white font-inter">
            EN <DownArrow className="flex items-center" width={9} height={8} />
          </div>
          <button style={{
        color, // dinamik olarak ayarlanan renk
        transition: "color 0.1s ease-out", }}
            onClick={toggleMenu}
            className=" gradient-border-button flex py-[8px] px-[14px] w-[60px] h-[30px] items-center justify-center text-center rounded-[11px] border ">
             {t("menu")}
          </button>
        </div>
      </div>

      {/* 
        Menü (nav) => Tek bir sabit gradient border
        "gradient-border-nav" sınıfı ile.
      */}
      <nav className="hidden lg:flex gradient-border-nav flex-row items-center justify-center  text-center px-4 py-2 backdrop-blur-xl whitespace-nowrap">
        <ul className="hidden md:flex gap-6 items-center justify-center font-inter28 text-[16px] font-semibold leading-[22.4px] tracking-[-0.32px] m-0">
          <li>
            <a href="/" className="hover:text-gray-300">
             {t("home")}
            </a>
          </li>
          <li 
  className="relative"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
  ref={dropdownRef}
>
  <Link href="/Services">
    <button className="hover:text-gray-300 focus:outline-none">
      {t("services")}
    </button>
  </Link>
  
  {/* Görünmez geçiş alanı */}
  <div className="absolute top-full left-0 w-full h-2" />

  {isMounted && isOpen && (
    <div 
      className="hidden lg:flex absolute top-[calc(100%+8px)] right-1/2 translate-x-1/2 bg-transparent p-[27px] rounded shadow-lg z-10 border gradient-subTitle-div backdrop-blur-2xl !bg-gray-900 !bg-opacity-10 md:min-w-[640px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
    <div className="grid grid-cols-2 gap-4">
            <Link href="/Services/creative" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px] h-[42px]">
             {t("creative")}
            </Link>
            <Link href="/Services/callcenter" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
             {t("call_center")}
            </Link>
            <Link href="/Services/pms" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
             {t("pms_ota_management")}
            </Link>
            <Link href="/Services/sem" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
          {t("search_engine_marketing")}
            </Link> 
            <Link href="/Services/seo" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
              {t("search_engine_optimization")}
            </Link>
            <Link href="/Services/smm" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
             {t("social_media_marketing")}
            </Link>
            <Link href="/Services/software" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
           {t("information_technology_software")}
            </Link>
            <Link href="/Services/digitalAnalysis" className="hover:text-white bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            {t("digital_analysis_reporting")}
            </Link>
          </div>
    </div>
  )}
</li>
          <li>
            <a href="/aboutus" className="hover:text-gray-300">
               {t("about_us")}
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-300">
              {t("blog")}
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              {t("contact")}
            </a>
          </li>
        </ul>
        
      </nav>
      {/* {isMounted && isOpen && (
        <div   onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}  className="hidden lg:flex absolute top-[calc(100%+8px)] left-[18%] transform mt-2 bg-transparent p-[27px] rounded shadow-lg z-10 border gradient-subTitle-div backdrop-blur-2xl !bg-gray-900 !bg-opacity-10">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/Services/creative" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px] h-[42px]">
            Creative
            </Link>
            <Link href="/Services/callcenter" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Call Center
            </Link>
            <Link href="/Services/pms" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            PMS & OTA Managment
            </Link>
            <Link href="/Services/sem" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Search Engine Marketing
            </Link> 
            <Link href="/Services/seo" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Search Engine Optimization
            </Link>
            <Link href="/Services/smm" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Social Media Marketing
            </Link>
            <Link href="/Services/software" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Information Technology & Software
            </Link>
            <Link href="/Services/digitalAnalysis" className="hover:text-gray-300 bg-white/10 flex py-[16px] px-[32px] w-[280px] rounded-[14px] hover:bg-gradient-to-l  hover:from-purple-500/50  hover:via-indigo-500/50  hover:to-blue-400/50 backdrop-blur-2xl justify-center items-center text-[14px] font-bold leading-normal -tracking-[0.28px]  h-[42px]">
            Digital Analysis & Reporting
            </Link>
          </div>
        </div>
      )} */}

  <div className="flex gap-4 items-center justify-around">
         <LangSwitcher/>
      {/* Örnek Buton */}
      <Link href="tel:+905326451767" className="hidden lg:inline-block w-[219px] py-[16px] justify-center whitespace-nowrap hover:bg-[#140F25] text-[#140F25] bg-[#fff] rounded-[20px] font-inter28 text-[18px] font-bold leading-[21.6px] tracking-[-0.36]">
        +90 ( 0532 ) 645 17 67
      </Link>
  </div>

      <div
        ref={menuRef} // **Referans atadık**
        className={`
          fixed top-0 left-0 bottom-0
          w-full
          h-[100vh]
            bg-[#080612]
          z-[9999]
          transform transition-transform duration-300
          lg:hidden
         
          ${isMenuOpen ? "translate-x-0 " : "translate-x-full"}
        `}
      >
        {/* MENÜ LİNKLERİ */}
        <div className="flex lg:hidden flex-col w-[98%] h-[100%] items-center justify-start ">
          <div className="flex lg:hidden w-[90%] items-center justify-between mt-8 mb-[68px]">
            <Logo2 className="flex lg:hidden" width={45} height={39} color="#ffffff"/>

            <div className="flex gap-[5px] items-center justify-center h-full">
              <button className="gradient-border-button border flex itemx-center justify-center text-center  gap-[5px] text-[12px] font-semibold leading-[120%] -tracking-[0.24px] text-white font-inter py-[8px] px-[14px] w-[44px] h-[30px]">
                EN
              </button>
              <button
              onClick={toggleMenu}
              className="flex text-[40px] text-stoneLight text-white"
            >
              <RxCross2 size={24} color="#fff" />
            </button>
            </div>
           
          </div>

          <div className="w-[90%] items-start justify-center text-start gap-[8px] text-white font-inter leading-[120%] mb-[52px]">
            <h3 className="text-[16px] font-bold -tracking-[0.32px]">
              {" "}
             {t("tagline")}
            </h3>
            <p className="text-[12px] font-normal -tracking-[0.24px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[21px] w-[90%] items-center justify-center">
            <Link
              href="/"
              className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[62px] max-w-[153px] gap-[15px] !bg-[#140015]"
            >
              <HomeSvg className="flex" width={32} height={32} />
              <p className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
                 {t("home")}
              </p>
            </Link>

            <Link
              href="/Services"
              className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[62px] max-w-[153px] gap-[15px] !bg-[#140015]"
            >
              <ServicesSvg className="flex" width={32} height={32} />
              <p className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
                 {t("services")}
              </p>
            </Link>

            <Link
              href="/aboutus"
              className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[62px] max-w-[153px] gap-[15px] !bg-[#140015]"
            >
              <PersonSvg className="flex" width={12} height={28} />
              <p className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
                 {t("about_us")}
              </p>
            </Link>

            <Link
              href="/blog"
              className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[62px] max-w-[153px] gap-[15px] !bg-[#140015]"
            >
              <BlogSvg className="flex" width={34} height={34} />
              <p className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
                 {t("blog")}
              </p>
            </Link>

            <Link
              href="/contact"
              className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[62px] max-w-[153px] gap-[15px] !bg-[#140015]"
            >
              <PhoneSvg className="flex" width={30} height={30} />
              <p className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
                 {t("contact")}
              </p>
            </Link>
          </div>

          <div className="flex w-[90%] items-center justify-center gap-[33px] mt-[200px]">
            <Link href="tel:+905326451767" className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
  <Image
    src="/gifs/phone.gif"
    alt="Phone GIF"
    width={29}
    height={29}
  />
</div>
              <p className="text-[10px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                 {t("phone")}
              </p>
            </Link>

            <Link href="#contact" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
              <Image
    src="/gifs/email.gif"
    alt="Phone GIF"
    width={29}
    height={29}
  />
              </div>
              <p className="text-[10px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                 {t("mail")}
              </p>
            </Link>

            <Link href="/contact" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white py-[16px] px-[32px]">
                <p className="text-[14px] font-bold leading-[120%] -tracking-[0.28px] text-darkBlue whitespace-nowrap">
                   {t("get_in_touch")}
                </p>
              </div>
              <p className="text-[10px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                {t("let_us_call_you")}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-border-nav {
          border-radius: 20px;
          position: relative;
          border-radius: 20px; /* Kenarları yuvarla */
       
          --tw-text-opacity: 1;
          background-color: rgba(20, 15, 37, 0.1);
          backdrop-filter: blur(37.5px);
          -webkit-backdrop-filter: blur(13500px);
        }

        .gradient-border-nav::before {
          content: "";
          position: absolute;
          inset: 0; /* top:0, right:0, bottom:0, left:0 */
          border-radius: 20px;
          padding: 0.3px;

          /* Dört renkli sabit degrade */
          background: linear-gradient(
            90deg,
            #a754cf,
            #54b9cf,
            #547dcf,
            #a754cf
          );
          /* Sabit boyut, sabit konum => animasyon yok */
          background-size: 100%;
          background-position: 50% 50%;

          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
