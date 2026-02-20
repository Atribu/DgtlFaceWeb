"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocale } from "next-intl";
import { FAQ_ROUTE_MAP, FAQ_SLUG_DEPT_SEGMENT_MAP } from "../../faqRouteMap";

function normalizePathname(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function stripLocale(pathname, locale) {
  // ör: /tr/yazilim -> /yazilim
  if (!pathname) return "/";
  const normalizedPath = normalizePathname(pathname);
  const prefix = `/${locale}`;
  return normalizedPath.startsWith(prefix)
    ? normalizedPath.slice(prefix.length) || "/"
    : normalizedPath;
}

const EN_SERVICE_SEGMENT_ALIAS = {
  creative: "creative-design",
  sem: "search-engine-marketing",
  seo: "search-engine-optimization",
  smm: "social-media-management",
  software: "software-development",
};

function normalizeEnServicePath(pathname) {
  const match = pathname.match(/^\/en\/([^/]+)(\/.*)?$/);
  if (!match) return pathname;

  const [, section, rest = ""] = match;
  const canonicalSection = EN_SERVICE_SEGMENT_ALIAS[section];
  if (!canonicalSection) return pathname;

  let canonicalRest = rest;
  if (canonicalSection === "social-media-management") {
    canonicalRest = canonicalRest.replace(/^\/reeels-video(\/|$)/, "/reels-video$1");
  }

  return `/en/${canonicalSection}${canonicalRest}`;
}

function buildMatchCandidates(pathname, locale) {
  const normalizedPath = normalizePathname(pathname);
  const pathNoLocale = stripLocale(normalizedPath, locale);

  if (locale === "en") {
    const basePath = normalizedPath.startsWith("/en")
      ? normalizedPath
      : `/en${pathNoLocale === "/" ? "" : pathNoLocale}`;

    const canonicalEnPath = normalizeEnServicePath(basePath);
    return canonicalEnPath === basePath ? [basePath] : [basePath, canonicalEnPath];
  }

  return [pathNoLocale];
}

function findFaqTarget(pathCandidates) {
  return (
    FAQ_ROUTE_MAP.find((route) =>
      pathCandidates.some((pathCandidate) => route.match.test(pathCandidate))
    ) || null
  );
}

const FAQ_SLUG_ALIAS_MAP = {
  en: {
    "sss": "faq",
    "hizmetlerimiz-sss": "services-faq",
    "yazilim-sss": "software-development-faq",
    "web-sitesi-gelistirme-sss": "website-and-software-faq",
    "cms-entegrasyonu-sss": "cms-installation-faq",
    "kvkk-uyum-hizmeti-sss": "kvkk-compliance-service-faq",
    "sunucu-guvenlik-sss": "server-management-faq",
    "bakim-destek-sss": "website-maintenance-faq",
    "sem-sss": "search-engine-marketing-faq",
    "seo-sss": "search-engine-optimization-faq",
    "smm-sss": "social-media-management-faq",
    "creative-sss": "creative-design-faq",
    "cagri-merkezi-sss": "call-center-faq",
    "veri-analiz-ve-raporlama-sss": "digital-analysis-faq",
    "pms-ota-sss": "pms-ota-faq",
    "otel-dijital-pazarlama-sss": "hotel-digital-marketing-faq",
  },
};

const FAQ_BUTTON_TEXT = {
  tr: {
    short: "SSS",
    title: "Sık Sorulan Sorular",
    aria: "SSS sayfasına git",
  },
  en: {
    short: "FAQ",
    title: "Frequently Asked Questions",
    aria: "Go to FAQ page",
  },
};

function normalizeSlugByLocale(slug, locale) {
  return FAQ_SLUG_ALIAS_MAP?.[locale]?.[slug] || slug;
}

function buildFaqHrefBySlug(slug, locale) {
  const normalizedSlug = normalizeSlugByLocale(slug, locale);

  if (normalizedSlug === "sss" || normalizedSlug === "faq") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }

  if (normalizedSlug === "hizmetlerimiz-sss" || normalizedSlug === "services-faq") {
    return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
  }

  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[normalizedSlug];
  if (deptSegment) return `/${locale}/${deptSegment}/${normalizedSlug}`;

  return `/${locale}/${normalizedSlug}`;
}

export default function FloatingFaqButton() {
  const pathname = usePathname();
  const locale = useLocale();
  const text = FAQ_BUTTON_TEXT[locale] || FAQ_BUTTON_TEXT.tr;
  const pathCandidates = useMemo(
    () => buildMatchCandidates(pathname, locale),
    [pathname, locale]
  );

  const target = useMemo(() => findFaqTarget(pathCandidates), [pathCandidates]);

  // Bu sayfanın SSS eşleşmesi yoksa butonu hiç göstermeyebilirsin
  if (!target?.slug) return null;

  const href = buildFaqHrefBySlug(target.slug, locale);

  return (
    <div className="fixed z-[999] right-4 bottom-4 md:right-6 md:bottom-6">
      <Link
        href={href}
        aria-label={text.aria}
        className="group relative flex items-center gap-2 rounded-full px-[10px] py-[6px] shadow-[0_18px_45px_rgba(0,0,0,0.22)] bg-[#130116] border border-white/10 hover:opacity-95 transition"
      >
        {/* ikon baloncuk */}
        {/* yazı (mobilde kapatmak istersen hidden md:block yap) */}
        <span className="hidden md:block">
          <span className="block text-[12px] capitalize tracking-[0.07em] leading-none font-semibold font-inter bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-white">
            {text.title}
          </span>
          {/* <span className="block text-[14px] font-semibold text-white leading-tight max-w-[220px] truncate">
            {text.short}
          </span> */}
        </span>

             <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-white/15">
          <span className="text-[22px] font-bold bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
            ?
          </span>
        </span>

        {/* hover underline */}
        <span className="absolute left-2 right-2 -bottom-[6px] h-[2px] rounded-full bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] opacity-0 group-hover:opacity-80 transition" />
      </Link>
    </div>
  );
}
