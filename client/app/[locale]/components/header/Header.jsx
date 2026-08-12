"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LangSwitcher from "@/LangSwitcher";
import { Link } from "@/i18n/navigation";
import Logo from "./svg/DgtlFaceLogo";
import Logo2 from "../Cookies/components/DgtlfaceLogoSvg";
import { getLocalizedHref } from "@/app/lib/localized-route-hrefs";

const MobileSidebarContent = dynamic(
  () => import("./MobileSidebarContent"),
  { ssr: false, loading: () => null }
);

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

const ACCESSIBLE_LABELS = {
  tr: {
    home: "DGTLFACE ana sayfa",
    openMenu: "Ana menüyü aç",
  },
  en: {
    home: "DGTLFACE home page",
    openMenu: "Open main menu",
  },
};

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const accessibleLabels = ACCESSIBLE_LABELS[locale] || ACCESSIBLE_LABELS.tr;
  const showBlogNavigation = locale !== "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderMobileMenu, setShouldRenderMobileMenu] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const toggleMenu = () => {
    const nextIsOpen = !isMenuOpen;

    if (nextIsOpen) setShouldRenderMobileMenu(true);
    setIsMenuOpen(nextIsOpen);
  };
  const [isOpen, setIsOpen] = useState(false); // Sadece mega menü açık/kapalı
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);

  const openTimer = useRef(null);
  

  const [activeService, setActiveService] = useState(null);
const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const shouldHydrateServicesConfig = isOpen || isMobileServicesOpen;
  const servicesHref = getLocalizedHref("/Services", locale);
  const servicesConfig = useMemo(() => {
    if (!shouldHydrateServicesConfig) return [];

    return SERVICE_MENU_CONFIG.map((service) => ({
      key: service.key,
      label: t(service.labelKey),
      href: getLocalizedHref(service.href, locale),
      subLinks: service.subLinks.map((item) => ({
        label: t(item.labelKey),
        href: getLocalizedHref(item.href, locale),
      })),
    }));
  }, [locale, shouldHydrateServicesConfig, t]);



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
          <Link prefetch={false} href="/" aria-label={accessibleLabels.home}>
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
  <NextLink
    prefetch={false}
    href={servicesHref}
    className="hover:text-gray-300"
  >
    {t("services")}
  </NextLink>

  {/* Hover buffer */}
  <div className="absolute top-full left-0 w-full h-2" />

  {/* MEGA MENÜ */}
  {isMounted && isOpen && (
    <div
      className="hidden lg:block absolute top-[calc(100%+8px)] 4xl:top-[calc(100%+10px)] left-[50%] -translate-x-[38%] xl:left-[50%] xl:-translate-x-[40.8%] 2xl:-translate-x-[42.4%] 3xl:-translate-x-[43.2%] 4xl:-translate-x-[44.8%] w-[98.8vw] z-10"
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
    <NextLink prefetch={false}


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
    </NextLink>

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
          <NextLink prefetch={false}
            href={item.href}
            className="inline-flex px-3 py-[6px] rounded-xl hover:bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 hover:text-white transition-colors duration-150"
          >
            {item.label}
          </NextLink>
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
              {showBlogNavigation && (
                <li>
                  <Link prefetch={false} href="/blogs" className="hover:text-gray-300">
                    {t("blog")}
                  </Link>
                </li>
              )}
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
              type="button"
              aria-label={accessibleLabels.openMenu}
              onClick={toggleMenu}
              className="gradient-border-button flex py-[8px] px-[14px] w-[60px] h-[30px] items-center justify-center text-center rounded-[11px] border text-white"
            >
              {t("menu")}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR MENU */}
      <div
        ref={menuRef}
        onTransitionEnd={(event) => {
          if (
            event.target === event.currentTarget &&
            event.propertyName === "transform" &&
            !isMenuOpen
          ) {
            setShouldRenderMobileMenu(false);
          }
        }}
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
        {shouldRenderMobileMenu && (
          <MobileSidebarContent
            isMobileServicesOpen={isMobileServicesOpen}
            onClose={() => setIsMenuOpen(false)}
            onToggleServices={() =>
              setIsMobileServicesOpen((previous) => !previous)
            }
            servicesConfig={servicesConfig}
            servicesHref={servicesHref}
          />
        )}
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
