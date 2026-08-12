"use client";

import Image from "next/image";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";
import { FaQuestion } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import Logo2 from "../Cookies/components/DgtlfaceLogoSvg";
import BlogSvg from "./svg/BlogSvg";
import HomeSvg from "./svg/HomeSvg";
import PersonSvg from "./svg/PersonSvg";
import PhoneSvg from "./svg/PhoneSvg";
import ServicesSvg from "./svg/ServicesSvg";

const ACCESSIBLE_LABELS = {
  tr: {
    closeMenu: "Ana menüyü kapat",
    toggleServices: "Alt hizmetleri göster veya gizle",
  },
  en: {
    closeMenu: "Close main menu",
    toggleServices: "Show or hide sub-services",
  },
};

export default function MobileSidebarContent({
  isMobileServicesOpen,
  onClose,
  onToggleServices,
  servicesConfig,
  servicesHref,
}) {
  const t = useTranslations("Header");
  const locale = useLocale();
  const accessibleLabels = ACCESSIBLE_LABELS[locale] || ACCESSIBLE_LABELS.tr;
  const showBlogNavigation = locale !== "en";

  return (
    <div className="flex lg:hidden flex-col w-[98%] h-[98%] items-center justify-start">
      <div className="flex lg:hidden w-[90%] items-center justify-between mt-8 mb-[32px]">
        <Logo2 className="flex lg:hidden" width={45} height={39} color="#ffffff" />

        <div className="flex gap-[5px] items-center justify-center h-full">
          <button className="gradient-border-button border flex itemx-center justify-center text-center gap-[5px] text-[12px] font-semibold leading-[120%] -tracking-[0.24px] text-white font-inter py-[8px] px-[14px] w-[44px] h-[30px]">
            EN
          </button>
          <button
            type="button"
            aria-label={accessibleLabels.closeMenu}
            onClick={onClose}
            className="flex text-[40px] text-stoneLight text-white"
          >
            <RxCross2 size={24} color="#fff" />
          </button>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center overflow-y-auto pb-4">
        <div className="w-[90%] items-start justify-center text-start gap-[8px] text-white font-inter leading-[120%] mb-[52px]">
          <h3 className="text-[16px] font-bold -tracking-[0.32px]">
            {t("tagline")}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-[16px] w-[90%] items-center justify-center">
          <Link
            prefetch={false}
            href="/"
            className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
          >
            <HomeSvg className="flex" width={32} height={32} />
            <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
              {t("home")}
            </p>
          </Link>

          <Link
            prefetch={false}
            href="/aboutus"
            className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
          >
            <PersonSvg className="flex" width={12} height={28} />
            <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
              {t("about_us")}
            </p>
          </Link>

          <div className="col-span-2">
            <div className="flex gradient-border-button p-[15px] items-center justify-between text-center h-[57px] w-full !bg-[#140015]">
              <NextLink
                prefetch={false}
                href={servicesHref}
                className="flex items-center gap-[12px] flex-1"
                onClick={onClose}
              >
                <ServicesSvg className="flex" width={32} height={32} />
                <p className="text-[14px] font-medium leading-normal -tracking-[0.3px] text-left">
                  {t("services")}
                </p>
              </NextLink>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleServices();
                }}
                className="ml-2 flex items-center justify-center rounded-full border border-white/40 w-8 h-8 shrink-0"
                aria-label={accessibleLabels.toggleServices}
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
            className={`col-span-2 w-full overflow-hidden transition-all duration-300 ease-out ${
              isMobileServicesOpen
                ? "max-h-[330px] mt-3 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="w-full">
              <div className="max-h-[320px] overflow-y-auto pr-1">
                <div className="grid grid-cols-2 gap-[10px]">
                  {servicesConfig.map((service) => (
                    <NextLink
                      prefetch={false}
                      key={service.key}
                      href={service.href}
                      className="group relative overflow-hidden flex flex-col items-center text-center gap-1 rounded-2xl px-2 py-2 transition-all duration-200"
                      onClick={onClose}
                    >
                      {service.label}
                    </NextLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {showBlogNavigation ? (
            <>
              <Link
                prefetch={false}
                href="/blogs"
                className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
              >
                <BlogSvg className="flex" width={34} height={34} />
                <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
                  {t("blog")}
                </p>
              </Link>

              <Link
                prefetch={false}
                href="/contact"
                className="flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
              >
                <PhoneSvg className="flex" width={30} height={30} />
                <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
                  {t("contact")}
                </p>
              </Link>
            </>
          ) : (
            <Link
              prefetch={false}
              href="/contact"
              className="col-span-2 flex gradient-border-button p-[15px] items-center justify-center text-center h-[57px] gap-[15px] !bg-[#140015]"
            >
              <PhoneSvg className="flex" width={30} height={30} />
              <p className="text-[14px] font-medium leading-normal -tracking-[0.3px]">
                {t("contact")}
              </p>
            </Link>
          )}

          <Link
            prefetch={false}
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
          <Link
            prefetch={false}
            href="tel:+905326451767"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
              <Image src="/gifs/phone.webp" alt="" width={29} height={29} unoptimized />
            </div>
            <p className="text-[12px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
              {t("phone")}
            </p>
          </Link>

          <Link
            prefetch={false}
            href="#contact"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center justify-center rounded-full bg-white p-[6.5px]">
              <Image src="/gifs/email.webp" alt="" width={29} height={29} unoptimized />
            </div>
            <p className="text-[12px] font-normal leading-[120%] -tracking-[0.2px] mt-[10px]">
              {t("mail")}
            </p>
          </Link>

          <Link
            prefetch={false}
            href="/contact"
            className="flex flex-col items-center justify-center text-center"
          >
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
  );
}
