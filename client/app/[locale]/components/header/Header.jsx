"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/LangSwitcher";
import Link from "next/link";
import Logo from "./svg/DgtlFaceLogo";
import Logo2 from "../Cookies/components/DgtlfaceLogoSvg";
import { RxCross2 } from "react-icons/rx";
import HomeSvg from "./svg/HomeSvg";
import ServicesSvg from "./svg/ServicesSvg";
import PersonSvg from "./svg/PersonSvg";
import BlogSvg from "./svg/BlogSvg";
import PhoneSvg from "./svg/PhoneSvg";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isOpen, setIsOpen] = useState(false); // Sadece mega menü açık/kapalı
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);

  const [activeService, setActiveService] = useState(null);

  // 9 ana departman + alt sayfa linkleri
  const servicesConfig = [
  {
    key: "creative",
    label: t("creative"),
    href: "/Services/creative",
    subLinks: [
      { label: t("creative_corporate_gift"), href: "/Services/creative/corporateGift" },
      { label: t("creative_uiux"), href: "/Services/creative/uiUxDesign" },
      { label: t("creative_video"), href: "/Services/creative/videoProduction" },
    ],
  },
  {
    key: "call_center",
    label: t("call_center"),
    href: "/Services/callcenter",
    subLinks: [
      { label: t("callcenter_multilang"), href: "/Services/callcenter/callLanguages" },
      { label: t("callcenter_message"), href: "/Services/callcenter/messageManagement" },
      { label: t("callcenter_aftersales"), href: "/Services/callcenter/aftersalesSupport" },
    ],
  },
  {
    key: "pms_ota_management",
    label: t("pms_ota_management"),
    href: "/Services/pms",
    subLinks: [
      { label: t("pms_installation"), href: "/Services/pms/pmsInstallation" },
      { label: t("pms_ota_contract"), href: "/Services/pms/otaContract" },
      { label: t("pms_reservation"), href: "/Services/pms/reservationManagement" },
      { label: t("pms_channel"), href: "/Services/pms/channelManagement" },
      { label: t("pms_web_payment"), href: "/Services/pms/webPayment" },
    ],
  },
  {
    key: "sem",
    label: t("search_engine_marketing"),
    href: "/Services/sem",
    subLinks: [
      { label: t("sem_google_ads"), href: "/Services/sem/googleAdsAdvertising" },
      { label: t("sem_youtube"), href: "/Services/sem/youtubeAdvertising" },
      { label: t("sem_remarketing"), href: "/Services/sem/remarketingDisplay" },
      { label: t("sem_tag_manager"), href: "/Services/sem/tagManager" },
      { label: t("sem_reporting"), href: "/Services/sem/performanceAnalysis" },
    ],
  },
  {
    key: "seo",
    label: t("search_engine_optimization"),
    href: "/Services/seo",
    subLinks: [
      { label: t("seo_technical"), href: "/Services/seo/technicalSeo" },
      { label: t("seo_content"), href: "/Services/seo/contentSeo" },
      { label: t("seo_local"), href: "/Services/seo/localSeo" },
      { label: t("seo_backlink"), href: "/Services/seo/backlinkSeo" },
      { label: t("seo_reporting"), href: "/Services/seo/seoReporting" },
    ],
  },
  {
    key: "smm",
    label: t("social_media_marketing"),
    href: "/Services/smm",
    subLinks: [
      { label: t("smm_reels"), href: "/Services/smm/reelsVideo" },
      { label: t("smm_ads"), href: "/Services/smm/socialMediaAds" },
      { label: t("smm_content"), href: "/Services/smm/socialMediaContent" },
      { label: t("smm_planning"), href: "/Services/smm/socialMediaPlanning" },
      { label: t("smm_reporting"), href: "/Services/smm/socialMediaReporting" },
    ],
  },
  {
    key: "software",
    label: t("information_technology_software"),
    href: "/Services/software",
    subLinks: [
      { label: t("software_website"), href: "/Services/software/websiteAndSoftware" },
      { label: t("software_maintenance"), href: "/Services/software/websiteMaintanceService" },
      { label: t("software_server"), href: "/Services/software/serverManagementService" },
      { label: t("software_cms"), href: "/Services/software/cmsInstallationService" },
      { label: t("software_kvkk"), href: "/Services/software/kvkk" },
    ],
  },
  {
    key: "digital_analysis",
    label: t("digital_analysis_reporting"),
    href: "/Services/digitalAnalysis",
    subLinks: [
      { label: t("digital_ads_reporting"), href: "/Services/digitalAnalysis/advertisingReportingService" },
      { label: t("digital_call_reporting"), href: "/Services/digitalAnalysis/callReportingService" },
      { label: t("digital_sales_analysis"), href: "/Services/digitalAnalysis/digitalSalesAnalysis" },
      { label: t("digital_market_research"), href: "/Services/digitalAnalysis/onlineMarketResearchService" },
    ],
  },
  {
    key: "hotel",
    label: t("hotel"), // tr.json → "Otel Dijital Dönüşüm"
    href: "/Services/hotel",
    subLinks: [
      { label: t("hotel_seo"), href: "/Services/hotel/seo" },
      { label: t("hotel_social"), href: "/Services/hotel/socialMedia" },
      { label: t("hotel_ads"), href: "/Services/hotel/adsManagement" },
      { label: t("hotel_ota"), href: "/Services/hotel/otaManagement" },
      { label: t("hotel_pms"), href: "/Services/hotel/pmsIntegration" },
      { label: t("hotel_callcenter"), href: "/Services/hotel/callCenter" },
    ],
  },
];

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
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-screen text-white fixed h-[80px] z-[999] top-0 flex items-center justify-center lg:mt-[42px] ">
      <div className="bg-[#150016]/90 lg:rounded-[50px] h-full w-full max-w-[1400px] flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[1300px] px-4 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <Logo className="w-auto hidden xl:flex" width={200} height={54} />
            <Logo className="w-auto hidden lg:flex xl:hidden" width={180} height={40} />
            <Logo2 className="flex lg:hidden" width={42} height={36} color="#fff" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gradient-border-nav flex-row items-center justify-center text-center px-4 xl:px-[50px] py-[10px] border border-[#547dcf]">
            <ul className="hidden md:flex gap-6 items-center justify-center font-inter28 text-[16px] font-semibold leading-[22.4px] tracking-[-0.32px] m-0">
              <li>
                <a
                  href="/"
                  className="bg-gradient-to-r hover:from-purple-500/50 hover:via-indigo-500/50 hover:to-blue-400/50 hover:bg-clip-text hover:text-transparent"
                >
                  {t("home")}
                </a>
              </li>

              {/* SERVICES + MEGA DROPDOWN */}
            <li
  className="relative"
  onMouseEnter={() => {
    setIsOpen(true);
    if (!activeService && servicesConfig.length > 0) {
      setActiveService(servicesConfig[0].key);
    }
  }}
  onMouseLeave={() => {
    setIsOpen(false);
    setActiveService(null);
  }}
  ref={dropdownRef}
>
  <Link href="/Services">
    <button className="hover:text-gray-300 focus:outline-none">
      {t("services")}
    </button>
  </Link>

  {/* Hover buffer */}
  <div className="absolute top-full left-0 w-full h-2" />

  {/* MEGA MENÜ */}
  {isMounted && isOpen && (
    <div
      className="hidden lg:block absolute top-[calc(100%+8px)] left-[50%] -translate-x-[43.5%] w-[98vw] z-10"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveService(null);
      }}
    >
      <div className="w-full py-[10px] px-0 rounded-[24px] shadow-lg border gradient-subTitle-div backdrop-blur-2xl !bg-[#080612]/80">
        {/* 9 SÜTUNLUK GRID */}
        <div className="flex gap-1">
          {servicesConfig.map((service) => (
            <div
              key={service.key}
              className="group flex flex-col items-center text-center gap-1"
            >
              {/* Üst başlık (tıklanır → kendi sayfası) */}
              <Link
                href={service.href}
                className={`items-center gap-0 rounded-full px-2 py-[6px] text-[14px] font-semibold -tracking-[0.28px] transition-colors duration-150 ${
                  activeService === service.key
                    ? "bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/85"
                }`}
                onMouseEnter={() => setActiveService(service.key)}
              >
                {service.label}
              </Link>

              {/* Alt linkler – hover ile aşağı doğru açılan alan */}
              {service.subLinks && service.subLinks.length > 0 && (
                <div
                  className="w-full overflow-hidden max-h-0 group-hover:max-h-[260px] transition-[max-height,margin-top] duration-300 ease-in-out mt-0 group-hover:mt-2"
                >
                  <ul className="flex flex-col gap-1 text-[12px] text-white/75">
                    {service.subLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-flex px-2 py-1 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-150"
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
                <a href="/aboutus" className="hover:text-gray-300">
                  {t("about_us")}
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-gray-300">
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

          {/* LANGUAGE + PHONE (DESKTOP) */}
          <div className="hidden lg:flex gap-2 xl:gap-4 items-center justify-around">
            <LangSwitcher />
            <Link
              href="tel:+905326451767"
              className="hidden lg:inline-block w-[180px] xl:w-[219px] py-[7px] xl:py-[10px] justify-center whitespace-nowrap hover:bg-[#140F25] text-[#140F25] bg-[#fff] rounded-[20px] font-inter28 text-[15px] xl:text-[18px] font-bold leading-[21.6px] tracking-[-0.36]"
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
        <div className="flex lg:hidden flex-col w-[98%] h-[100%] items-center justify-start ">
          <div className="flex lg:hidden w-[90%] items-center justify-between mt-8 mb-[68px]">
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

          <div className="w-[90%] items-start justify-center text-start gap-[8px] text-white font-inter leading-[120%] mb-[52px]">
            <h3 className="text-[16px] font-bold -tracking-[0.32px]">
              {t("tagline")}
            </h3>
            <p className="text-[12px] font-normal -tracking-[0.24px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
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
                <Image src="/gifs/phone.gif" alt="Phone GIF" width={29} height={29} />
              </div>
              <p className="text-[10px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
                {t("phone")}
              </p>
            </Link>

            <Link href="#contact" className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
                <Image src="/gifs/email.gif" alt="Phone GIF" width={29} height={29} />
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
          background-color: rgba(20, 15, 37, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .gradient-border-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
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
