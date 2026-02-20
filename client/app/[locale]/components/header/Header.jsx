"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/LangSwitcher";
import {Link} from "@/i18n/navigation";
import Logo from "./svg/DgtlFaceLogo";
import Logo2 from "../Cookies/components/DgtlfaceLogoSvg";
import { RxCross2 } from "react-icons/rx";
import HomeSvg from "./svg/HomeSvg";
import ServicesSvg from "./svg/ServicesSvg";
import PersonSvg from "./svg/PersonSvg";
import BlogSvg from "./svg/BlogSvg";
import PhoneSvg from "./svg/PhoneSvg";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa6";

const SERVICE_MENU_CONFIG = [
  {
    key: "sem",
    labelKey: "search_engine_marketing",
    href: "/Services/sem",
    subLinks: [
      { labelKey: "sem_google_ads", href: "/Services/sem/googleAdsAdvertising" },
      { labelKey: "sem_youtube", href: "/Services/sem/youtubeAdvertising" },
      { labelKey: "sem_remarketing", href: "/Services/sem/remarketingDisplay" },
      { labelKey: "sem_tag_manager", href: "/Services/sem/tagManager" },
      { labelKey: "sem_reporting", href: "/Services/sem/performanceAnalysis" },
    ],
  },
  {
    key: "seo",
    labelKey: "search_engine_optimization",
    href: "/Services/seo",
    subLinks: [
      { labelKey: "seo_technical", href: "/Services/seo/technicalSeo" },
      { labelKey: "seo_content", href: "/Services/seo/contentSeo" },
      { labelKey: "seo_local", href: "/Services/seo/localSeo" },
      { labelKey: "seo_backlink", href: "/Services/seo/backlinkSeo" },
      { labelKey: "seo_reporting", href: "/Services/seo/seoReporting" },
    ],
  },
  {
    key: "smm",
    labelKey: "social_media_marketing",
    href: "/Services/smm",
    subLinks: [
      { labelKey: "smm_content", href: "/Services/smm/socialMediaContent" },
      { labelKey: "smm_planning", href: "/Services/smm/socialMediaPlanning" },
      { labelKey: "smm_ads", href: "/Services/smm/socialMediaAds" },
      { labelKey: "smm_reels", href: "/Services/smm/reelsVideo" },
      { labelKey: "smm_reporting", href: "/Services/smm/socialMediaReporting" },
    ],
  },
  {
    key: "software",
    labelKey: "information_technology_software",
    href: "/Services/software",
    subLinks: [
      { labelKey: "software_website", href: "/Services/software/websiteAndSoftware" },
      { labelKey: "software_cms", href: "/Services/software/cmsInstallationService" },
      { labelKey: "software_kvkk", href: "/Services/software/kvkk" },
      { labelKey: "software_server", href: "/Services/software/serverManagementService" },
      { labelKey: "software_maintenance", href: "/Services/software/websiteMaintanceService" },
    ],
  },
  {
    key: "creative",
    labelKey: "creative",
    href: "/Services/creative",
    subLinks: [
      { labelKey: "creative_graphic", href: "/Services/creative/graphicDesign" },
      { labelKey: "creative_uiux", href: "/Services/creative/uiUxDesign" },
      { labelKey: "creative_video", href: "/Services/creative/videoProduction" },
      { labelKey: "creative_event", href: "/Services/creative/eventProduction" },
      { labelKey: "creative_corporate_gift", href: "/Services/creative/corporateGift" },
    ],
  },
  {
    key: "call_center",
    labelKey: "call_center",
    href: "/Services/callcenter",
    subLinks: [
      { labelKey: "callcenter_multilang", href: "/Services/callcenter/callLanguages" },
      { labelKey: "callcenter_reservation", href: "/Services/callcenter/reservationSupport" },
      { labelKey: "callcenter_performance", href: "/Services/callcenter/callPerformance" },
      { labelKey: "callcenter_message", href: "/Services/callcenter/messageManagement" },
      { labelKey: "callcenter_aftersales", href: "/Services/callcenter/aftersalesSupport" },
    ],
  },
  {
    key: "pms_ota_management",
    labelKey: "pms_ota_management",
    href: "/Services/pms",
    subLinks: [
      { labelKey: "pms_installation", href: "/Services/pms/pmsInstallation" },
      { labelKey: "pms_ota_contract", href: "/Services/pms/otaContract" },
      { labelKey: "pms_channel", href: "/Services/pms/channelManagement" },
      { labelKey: "pms_web_payment", href: "/Services/pms/webPayment" },
      { labelKey: "pms_reservation", href: "/Services/pms/reservationManagement" },
    ],
  },
  {
    key: "digital_analysis",
    labelKey: "digital_analysis_reporting",
    href: "/Services/digitalAnalysis",
    subLinks: [
      { labelKey: "digital_ads_reporting", href: "/Services/digitalAnalysis/lookerStudio" },
      { labelKey: "digital_market_research", href: "/Services/digitalAnalysis/onlineMarketResearchService" },
      { labelKey: "digital_sales_analysis", href: "/Services/digitalAnalysis/digitalSalesAnalysis" },
      { labelKey: "digital_call_reporting", href: "/Services/digitalAnalysis/kvkkDataSecurity" },
    ],
  },
  {
    key: "hotel",
    labelKey: "hotel",
    href: "/Services/hotel",
    subLinks: [
      { labelKey: "hotel_seo", href: "/Services/hotel/seo" },
      { labelKey: "hotel_social", href: "/Services/hotel/socialMedia" },
      { labelKey: "hotel_ads", href: "/Services/hotel/adsManagement" },
      { labelKey: "hotel_ota", href: "/Services/hotel/otaManagement" },
      { labelKey: "hotel_pms", href: "/Services/hotel/pmsIntegration" },
      { labelKey: "hotel_callcenter", href: "/Services/hotel/callCenter" },
    ],
  },
];

const Header = () => {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isOpen, setIsOpen] = useState(false); // Sadece mega menü açık/kapalı
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);

  const openTimer = useRef(null);
  

  const [activeService, setActiveService] = useState(null);
    // 🔹 MOBİL "Hizmetler" paneli için
    const [mobileMenuView, setMobileMenuView] = useState("main"); // "main" | "services"
const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const shouldHydrateServicesConfig = isOpen || isMobileServicesOpen;
  const servicesConfig = useMemo(() => {
    if (!shouldHydrateServicesConfig) return [];

    return SERVICE_MENU_CONFIG.map((service) => ({
      key: service.key,
      label: t(service.labelKey),
      href: service.href,
      subLinks: service.subLinks.map((item) => ({
        label: t(item.labelKey),
        href: item.href,
      })),
    }));
  }, [shouldHydrateServicesConfig, t]);



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
    setIsMenuOpen(false);
    setIsOpen(false);
  setIsMobileServicesOpen(false);   
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-screen text-white fixed h-[66px] z-[999] top-0 flex items-center justify-center lg:mt-[6px] xl:mt-[7px]">
      <div className="bg-[#150016]/90 lg:rounded-[50px] h-full w-full max-w-[1400px] flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[1300px] px-4 lg:px-8">
          {/* Logo */}
          <Link prefetch={false} href="/">
            <Logo className="w-auto hidden xl:flex" width={180} height={40} />
            <Logo className="w-auto hidden lg:flex xl:hidden" width={170} height={35} />
            <Logo2 className="flex lg:hidden" width={42} height={36} color="#fff" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gradient-border-nav flex-row items-center justify-center text-center px-4 xl:px-[50px] py-[10px] border border-[#547dcf] rounded-[20px]">
            <ul className="hidden md:flex gap-6 items-center justify-center font-inter28 text-[16px] font-semibold leading-[22.4px] tracking-[-0.32px] m-0">
              <li>
                <Link prefetch={false}
                  href="/"
                  className="bg-gradient-to-r hover:from-purple-500/50 hover:via-indigo-500/50 hover:to-blue-400/50 hover:bg-clip-text hover:text-transparent"
                >
                  {t("home")}
                </Link>
              </li>

              {/* SERVICES + MEGA DROPDOWN */}
            <li
  className="relative"

  onMouseEnter={() => {
  openTimer.current = setTimeout(() => {
    setIsOpen(true);
    if (!activeService) setActiveService("sem");
  }, 120);
}}
onMouseLeave={() => {
  clearTimeout(openTimer.current);
  setIsOpen(false);
  setActiveService(null);
}}
  ref={dropdownRef}
>
  <Link prefetch={false} href="/Services">
    <button className="hover:text-gray-300 focus:outline-none">
      {t("services")}
    </button>
  </Link>

  {/* Hover buffer */}
  <div className="absolute top-full left-0 w-full h-2" />

  {/* MEGA MENÜ */}
  {isMounted && isOpen && (
    <div
      className="hidden lg:block absolute top-[calc(100%+8px)] 4xl:top-[calc(100%+10px)] left-[50%] -translate-x-[38%] xl:left-[50%] xl:-translate-x-[40.8%] 2xl:-translate-x-[41.3%] 3xl:-translate-x-[43.2%] 4xl:-translate-x-[44.8%] w-[98.8vw] z-10"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveService(null);
      }}
    >
      <div className="w-[100%] py-[10px] px-0 rounded-[16px] shadow-lg border gradient-subTitle-div backdrop-blur-2xl !bg-[#080612]/90">
        {/* 9 SÜTUNLUK GRID */}
      <div className="flex justify-between lg:grid lg:grid-cols-5 gap-3 xl:flex xl:flex-row">
     {servicesConfig.map((service) => (
  <div
    key={service.key}
   className="group flex flex-col items-center text-center gap-2 3xl:min-w-[170px]"
  >

    {/* Üst başlık */}
    <Link prefetch={false}


      href={service.href}
      className={`items-center gap-0 rounded-xl px-[6px] xl:px-2 py-1 xl:py-[6px] text-[14px] font-semibold -tracking-[0.28px] transition-colors duration-150 bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 text-white leading-snug break-words line-clamp-2 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]
hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset]
 ${
        activeService === service.key
          ? "bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 text-transparent bg-clip-text"
          : " bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 text-white"
      }`}
      onMouseEnter={() => setActiveService(service.key)}
    >
      {service.label}
    </Link>

{service.subLinks && service.subLinks.length > 0 && (
  <div
    className={`relative overflow-hidden w-full mt-2 rounded-xl p-1 transition-colors
    ${activeService === service.key ? "bg-white/[0.04]" : "bg-transparent"}`}
  >
    {/* Spotlight */}
    <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 w-[320px] h-[310px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 rounded-full blur-2xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),rgba(99,102,241,0.52),transparent)]" />










    </div>

    {/* Ring */}
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <ul className="relative z-10 flex flex-col gap-2 text-[12px] text-white/80">
      {service.subLinks.map((item) => (
        <li key={item.href}>
          <Link prefetch={false}
            href={item.href}
            className="inline-flex px-3 py-[6px] rounded-xl hover:bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 hover:text-white transition-colors duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

  </div>
))}

        </div>
      </div>
    </div>
  )}
</li>

              <li>
                <Link prefetch={false} href="/aboutus" className="hover:text-gray-300">
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/blogs" className="hover:text-gray-300">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/contact" className="hover:text-gray-300">
                  {t("contact")}
                </Link>
              </li>
                   <li>
                <Link prefetch={false} href="/sss" className="hover:text-gray-300">
                  {t("sss")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* LANGUAGE + PHONE (DESKTOP) */}
          <div className="hidden lg:flex gap-2 xl:gap-4 items-center justify-around">
            <LangSwitcher />
            <Link prefetch={false}
              href="tel:+905326451767"
              className="hidden lg:inline-block max-w-[200px] xl:w-[219px] py-[7px] xl:py-[10px] justify-center whitespace-nowrap hover:bg-[#140F25] text-[#140F25] bg-[#fff] rounded-[20px] font-inter28 text-[14px] xl:text-[16px] font-bold leading-[21.6px] tracking-[-0.36]"
            >
              +90 ( 0532 ) 645 17 67
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden gap-[8px] items-center justify-center h-full">
            <LangSwitcher />
            <button
              onClick={toggleMenu}
              className="gradient-border-button flex py-[8px] px-[14px] w-[60px] h-[30px] items-center justify-center text-center rounded-[11px] border text-white"
            >
              {t("menu")}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR MENU (değiştirmedim) */}
      <div
        ref={menuRef}
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
        <div className="flex lg:hidden flex-col w-[98%] h-[98%] items-center justify-start ">
          <div className="flex lg:hidden w-[90%] items-center justify-between mt-8 mb-[32px]">
            <Logo2 className="flex lg:hidden" width={45} height={39} color="#ffffff" />

            <div className="flex gap-[5px] items-center justify-center h-full">
              <button className="gradient-border-button border flex itemx-center justify-center text-center  gap-[5px] text-[12px] font-semibold leading-[120%] -tracking-[0.24px] text-white font-inter py-[8px] px-[14px] w-[44px] h-[30px]">
                EN
              </button>
              <button onClick={toggleMenu} className="flex text-[40px] text-stoneLight text-white">
                <RxCross2 size={24} color="#fff" />
              </button>
            </div>
          </div>

  <div className="flex-1 w-full flex flex-col items-center overflow-y-auto pb-4">
           <div className="w-[90%] items-start justify-center text-start gap-[8px] text-white font-inter leading-[120%] mb-[52px]">
  <h3 className="text-[16px] font-bold -tracking-[0.32px]">
    {t("tagline")}
  </h3>
  <p className="text-[12px] font-normal -tracking-[0.24px]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </p>
</div>

{/* === MAIN VIEW vs SERVICES VIEW === */}

<div className="grid grid-cols-2 gap-[16px] w-[90%] items-center justify-center">
        {/* 1. satır: Home + About */}
        <Link prefetch={false}
          href="/"
          className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
        >
          <HomeSvg className="flex" width={32} height={32} />
          <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
            {t("home")}
          </p>
        </Link>

        <Link prefetch={false}
          href="/aboutus"
          className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
        >
          <PersonSvg className="flex" width={12} height={28} />
          <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
            {t("about_us")}
          </p>
        </Link>

        {/* 2. satır: HİZMETLER (full width, col-span-2) */}
        <div className="col-span-2">
          <div
            className="flex gradient-border-button p-[15px] items-center justify-between text-center h-[57px] w-full !bg-[#140015]"
          >
            {/* Sol taraf: ikon + yazı → /Services'e gider */}
            <Link prefetch={false}
              href="/Services"
              className="flex items-center gap-[12px] flex-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <ServicesSvg className="flex" width={32} height={32} />
              <p className="text-[14px] font-medium leading-normal -tracking-[0.3px] text-left">
                {t("services")}
              </p>
            </Link>

            {/* Sağ taraf: ok → sadece paneli aç/kapa */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileServicesOpen((prev) => !prev);
              }}
              className="ml-2 flex items-center justify-center rounded-full border border-white/40 w-8 h-8 shrink-0"
              aria-label="Alt hizmetleri göster"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`
            col-span-2 w-full
            overflow-hidden
            transition-all duration-300 ease-out
            ${isMobileServicesOpen ? "max-h-[330px] mt-3 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="w-full">

            <div className="max-h-[320px] overflow-y-auto pr-1">
              <div className="grid grid-cols-2 gap-[10px]">
                {servicesConfig.map((service) => (
                  <Link prefetch={false}
                    key={service.key}
                    href={service.href}
                      className="group relative overflow-hidden flex flex-col items-center text-center gap-1 rounded-2xl px-2 py-2 transition-all duration-200"

                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. satır: Blog + Contact */}
        <Link prefetch={false}
          href="/blogs"
          className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
        >
          <BlogSvg className="flex" width={34} height={34} />
          <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
            {t("blog")}
          </p>
        </Link>

        <Link prefetch={false}
          href="/contact"
          className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
        >
          <PhoneSvg className="flex" width={30} height={30} />
          <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
            {t("contact")}
          </p>
        </Link>

              <Link prefetch={false}
          href="/sss"
          className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015] col-span-2"
        >
          <FaQuestion className="flex" size="30" color="#ffffff" />
          <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
            {t("sss")}
          </p>
        </Link>
      </div>


    <div className="flex w-[90%] items-center justify-center gap-[33px] mt-[200px]">
            <Link prefetch={false} href="tel:+905326451767" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
                <Image src="/gifs/phone.gif" alt="Phone GIF" width={29} height={29} />
              </div>
              <p className="text-[12px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                {t("phone")}
              </p>
            </Link>

            <Link prefetch={false} href="#contact" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
                <Image src="/gifs/email.gif" alt="Phone GIF" width={29} height={29} />
              </div>
              <p className="text-[12px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                {t("mail")}
              </p>
            </Link>

            <Link prefetch={false} href="/contact" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white py-[16px] px-[32px]">
                <p className="text-[14px] font-bold leading-[120%] -tracking-[0.28px] text-darkBlue whitespace-nowrap">
                  {t("get_in_touch")}
                </p>
              </div>
              <p className="text-[12px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                {t("let_us_call_you")}
              </p>
            </Link>
          </div>

</div>

        </div>

      </div>

      <style jsx>{`
        .gradient-border-nav {
         border-radius:20px;
          position: relative;
          background-color: rgba(20, 15, 37, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .gradient-border-nav::before {
          content: "";
          border-radius:20px;
          position: absolute;
          inset: 0;
          padding: 0.3px;
          background: linear-gradient(90deg, #a754cf, #54b9cf, #547dcf, #a754cf);
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
