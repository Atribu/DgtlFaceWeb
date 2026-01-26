import React from "react";
import Image from "next/image";
import Link from "next/link";
import Instagram from "./Icons/instagram.jsx";
import Linkedin from "./Icons/linkedin.jsx";
import WhatsApp from "./Icons/whatsapp.jsx";
import Youtube from "./Icons/youtube.jsx";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../header/svg/DgtlFaceLogo.jsx";
import sutunlar from "./images/sutunlar.png";
import { PiYoutubeLogo } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  // ✅ Kurumsal linkler
  const corporateLinks = [
    { href: "/aboutus", label: t("link_about") },              
    { href: "/contact", label: t("link_contact") },            
    { href: "/faq", label: t("link_faq") ?? "SSS" },           
    { href: "/privacy", label: t("link_privacy_policy") },     
    { href: "/terms", label: t("link_terms_of_service") },    
    { href: "/blogs", label: t("link_blog") },
  ];

  // ✅ 9 departman + 10. olarak "Tüm Hizmetler"
  const serviceCategories = [
    { href: "/Services/sem", label: t("sem") },
     { href: "/Services/creative", label: t("creative") },
   { href: "/Services/pms", label: t("pms") },
      { href: "/Services/callcenter", label: t("callcenter") },
    { href: "/Services/smm", label: t("smm") },
    { href: "/Services/software", label: t("software") },
     { href: "/Services/seo", label: t("seo") },
        { href: "/Services/digitalAnalysis", label: t("reporting") },

    { href: "/Services/hotel", label:t("hotel") },
 
  ];

    const sssCategories = [
    { href: "/Services/sem", label: t("semSSS") },
     { href: "/Services/creative", label: t("creativeSSS") },
   { href: "/Services/pms", label: t("pmsSSS") },
      { href: "/Services/callcenter", label: t("callcenterSSS") },
    { href: "/Services/smm", label: t("smmSSS") },
    { href: "/Services/software", label: t("softwareSSS") },
     { href: "/Services/seo", label: t("seoSSS") },
        { href: "/Services/digitalAnalysis", label: t("reportingSSS") },

    { href: "/Services/hotel", label: t("hotelSSS") },
 
  ];

  // ✅ 5 + 5 olacak şekilde bölüyoruz
  const leftServices = serviceCategories.slice(0, 5);
  const rightServices = serviceCategories.slice(5, 10);

  const allServices = [...leftServices, ...rightServices];

    const leftServicesSSS = sssCategories.slice(0, 5);
  const rightServicesSSS = sssCategories.slice(5, 10);

  const allServicesSSS = [...leftServicesSSS, ...rightServicesSSS];

  return (
    <footer className="flex bg-[#140f25] text-white pb-4 pt-12 lg:pt-0 lg:pb-0 lg:py-4 relative overflow-y-hidden max-w-screen items-center justify-center lg:min-h-[360px]">
      <div className="absolute z-[1] inset-0 bg-[#140F25]/40 flex md:hidden"></div>
      <div className="container w-full px-4 lg:px-0 items-center justify-center">
        {/* MOBİL */}
        <div className="flex flex-col lg:hidden justify-center items-center h-[380px] w-full">
          <div className="flex flex-col items-center justify-start text-center gap-2 lg:gap-[14px] font-inter text-white z-[50] h-full">
            <p className="text-[16px] font-semibold leading-[120%] -tracking-[0.48px] capitalize">
              {t("header")}{" "}
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#547ccf] to-[#a754cf]">
                {t("span")}
              </span>
            </p>
            <p className="text-[12px] lg:text-[14px] font-noral leading-[130%] -tracking-[0.28px] w-[80%]">
              {t("text")}
            </p>
          </div>
          <div className="mb-6 md:mb-0 z-[20]"></div>
          <Image
            src={sutunlar}
            width={sutunlar.width}
            height={sutunlar.height}
             loading="lazy"
            alt="sutunlar"
            className="absolute top-36 md:bottom-0 md:left-1/2 md:-translate-x-1/2"
            style={{
              maskImage: "linear-gradient(to top, transparent 0%, black 50%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 50%)",
            }}
          />
          <Link
            href="/contact"
            className="hidden md:inline-flex z-[50] absolute top-[170px] max-w-[160px] whitespace-nowrap px-6 py-3 justify-center items-center gap-[10px] rounded-[22px] bg-white shadow-[0_0_50px_0_rgba(221,254,254,0.5),_0_0_4px_0_#FFF]"
          >
            <span className="text-[#140F25] text-[14px] font-bold leading-[120%] -tracking-[0.28px] font-inter">
              {t("buttonText")}
            </span>
          </Link>

          <div className="flex flex-col gap-1 items-center justify-center">
            <Logo className="w-36 flex z-[50]" />

            {/* ✅ Mobil: Kurumsal + Hizmetler (5+5 yine) */}
            <div className="flex flex-col w-[100%] items-center gap-4 text-xs z-[30] font-medium ">
              {/* Kurumsal */}
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-[13px] opacity-80">
                  {t("footer_block_corporate") ?? "Kurumsal"}
                </span>
                <div className="flex flex-wrap justify-center gap-3 font-semibold max-w-[290px]">
                  {corporateLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:underline text-[12px] opacity-80"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hizmetler 5 + 5 */}
              <div className="flex flex-col items-center gap-1">
              
                <div className="grid grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-[6px] max-w-[280px] text-[12px] opacity-90 font-medium">
  {allServices.map((cat, index) => (
    <Link
      key={cat.href}
      href={cat.href}
      className={`
        hover:underline
        ${index < 5 ? "col-span-2 md:col-span-1" : "col-span-1"}
      `}
    >
      {cat.label}
    </Link>
  ))}
</div>
              </div>
            </div>

            {/* Sosyal medya */}
            <div className="flex flex-col gap-5 z-[20] mt-4">
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
                  href="https://t.me/Dgtlfaceofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="flex z-[20] border-white border-[2px] rounded-full items-center justify-center p-2"
                >
                    <FaTelegramPlane size={15}/>
                </Link>
                    <Link
                  href="https://x.com/dgtlface"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="flex z-[20] border-white border-[2px] rounded-full items-center justify-center p-2"
                >
                   <FaXTwitter size={16}/>
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

        {/* DESKTOP */}
        <div className="hidden lg:flex lg:flex-row justify-between items-start h-[200px] xl:h-[240px] py-4">
          {/* ✅ Sol: Hizmetler 5+5 + logo */}
          <div className="flex flex-col items-center justify-between gap-10 w-[31%] mt-10 lg:mt-2 xl:mt-4 text-white font-medium">
            <div>
         <h4 className="text-[14px] font-semibold mb-2">
              {t("link_services")}
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-[4px] text-[13px] opacity-85">
                <div className="flex flex-col gap-[8px]">
                  {leftServices.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="hover:underline leading-[110%]"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-[8px] text-white">
                  {rightServices.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="hover:underline leading-[110%]"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
         <h4 className="text-[14px] font-semibold mb-2">
              {t("faq")}
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-[4px] text-[13px] opacity-85">
                <div className="flex flex-col gap-[8px]">
                  {leftServicesSSS.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="hover:underline leading-[110%]"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-[8px] text-white">
                  {rightServicesSSS.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="hover:underline leading-[110%]"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* <Logo className="w-44 flex" /> */}
          </div>

          {/* Orta: CTA bloğu (aynı) */}
          <div className="flex flex-col items-center justify-center gap-10 w-[39%] lg:-mt-4">
            <div className="flex flex-col items-center justify-start text-center gap-5 font-inter text-white z-[50] h-full">
              <p className="text-[24px] font-bold leading-[110%] -tracking-[1.12px] capitalize mt-2">
                {t("header")}{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#547ccf] to-[#a754cf]">
                  {t("span")}
                </span>
              </p>
              <p className="text-[16px] font-noral leading-[130%] -tracking-[0.32px] w-[90%]">
                {t("text")}
              </p>
                <Logo className="w-44 flex mt-10 -ml-4" />
            </div>
            <Image
              src={sutunlar}
              width={sutunlar.width}
              height={sutunlar.height}
               loading="lazy"
              alt="sutunlar"
              className="absolute bottom-[-50px] xl:bottom-[-70px] md:left-1/2 md:-translate-x-1/2 z-[20] xl:w-[255px]"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 50%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 50%)",
              }}
            />
            
          </div>

          {/* ✅ Sağ: Kurumsal + sosyal medya */}
          <div className="flex flex-col gap-8 z-[20] mt-10 xl:mt-4 w-[30%] items-center justify-center">
            <div>
              <h4 className="text-[14px] font-semibold mb-2">
                {t("footer_block_corporate") ?? "Kurumsal"}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[13px]">
                {corporateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

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
                  href="https://t.me/Dgtlfaceofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="flex z-[20] border-white border-[2px] rounded-full items-center justify-center p-2"
                >
                    <FaTelegramPlane size={15}/>
                </Link>
                
                     <Link
                  href="https://x.com/dgtlface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex z-[20] border-white border-[2px] rounded-full items-center justify-center p-2"
                >
                   <FaXTwitter size={16}/>
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

            <Link
              href="/contact"
              className="z-[50] flex xl:top-[220px] max-w-[160px] xl:max-w-[172px] whitespace-nowrap px-5 xl:px-6 py-2 xl:py-3 justify-center items-center gap-[10px] rounded-[22px] bg-white shadow-[0_0_50px_0_rgba(221,254,254,0.5),_0_0_4px_0_#FFF]"
            >
              <span className="text-[#140F25] text-[18px] font-bold leading-[120%] -tracking-[0.36px] font-inter">
                {t("buttonText")}
              </span>
            </Link>

            {/* <Link
              href="/contact"
              className="z-[50] absolute top-[190px] xl:top-[220px] max-w-[160px] xl:max-w-[172px] whitespace-nowrap inline-flex px-5 xl:px-6 py-2 xl:py-3 justify-center items-center gap-[10px] rounded-[22px] bg-white shadow-[0_0_50px_0_rgba(221,254,254,0.5),_0_0_4px_0_#FFF]"
            >
              <span className="text-[#140F25] text-[18px] font-bold leading-[120%] -tracking-[0.36px] font-inter">
                {t("buttonText")}
              </span>
            </Link> */}
          </div>
          
        </div>

        {/* Alt satır */}
        <div className="text-center text-sm text-gray-400 mt-10 lg:mt-20 z-[50]">
          © {new Date().getFullYear()} DGTLFACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
