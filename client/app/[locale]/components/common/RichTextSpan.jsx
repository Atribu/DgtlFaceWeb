// components/common/RichTextSpan.jsx

import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { Link as LocalizedLink } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const STATIC_PATH_PREFIXES = ["/downloads", "/images", "/og", "/api", "/_next"];

const LEGACY_LOCALIZED_PATH_TO_INTERNAL = {
  "/call-center-services": "/Services/callcenter",
  "/data-analysis-and-reporting": "/Services/digitalAnalysis",
  "/hotel-digital-marketing": "/Services/hotel",
  "/otel-dijital-pazarlama": "/Services/hotel",
  "/pms-auta-management": "/Services/pms",
  "/pms-ota-yonetimi": "/Services/pms",
  "/reporting": "/Services/digitalAnalysis",
  "/reporting/benchmark-analysis":
    "/Services/digitalAnalysis/onlineMarketResearchService",
  "/reporting/kvkk-data-security": "/Services/digitalAnalysis/kvkkDataSecurity",
  "/reporting/looker-studio": "/Services/digitalAnalysis/lookerStudio",
  "/reporting/sales-conversion": "/Services/digitalAnalysis/digitalSalesAnalysis",
  "/sem/advertising-reporting": "/Services/sem/performanceAnalysis",
  "/sem/google-ads-management": "/Services/sem/googleAdsAdvertising",
  "/software/cms-integration": "/Services/software/cmsInstallationService",
  "/software/server-security": "/Services/software/serverManagementService",
  "/software/website-development": "/Services/software/websiteAndSoftware",
  "/seo-hizmetleri": "/Services/seo",
  "/sosyal-medya-yonetimi": "/Services/smm",
  "/web-ve-yazilim-hizmetleri": "/Services/software",
  "/creative-ve-tasarim": "/Services/creative",
  "/cagri-merkezi-hizmetleri": "/Services/callcenter",
  "/veri-analiz-ve-raporlama": "/Services/digitalAnalysis",
};

const LOCALIZED_PATH_TO_INTERNAL = Object.entries(routing.pathnames || {}).reduce(
  (acc, [internalPath, localizedValue]) => {
    if (typeof localizedValue === "string") {
      acc.set(localizedValue, internalPath);
      return acc;
    }

    for (const locale of Object.keys(localizedValue || {})) {
      const localizedPath = localizedValue?.[locale];
      if (localizedPath) {
        acc.set(localizedPath, internalPath);
      }
    }

    return acc;
  },
  new Map(Object.entries(LEGACY_LOCALIZED_PATH_TO_INTERNAL))
);

function isSpecialHref(rawHref) {
  return /^(#|mailto:|tel:|javascript:)/i.test(rawHref);
}

function isStaticPath(pathname) {
  return STATIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function withLocalePrefix(locale, pathname) {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

function getLocalizedRoutePath(internalPath, locale) {
  const localizedValue = routing.pathnames?.[internalPath];
  if (!localizedValue) return null;

  if (typeof localizedValue === "string") {
    return localizedValue;
  }

  return localizedValue?.[locale] || null;
}

function resolveRichTextHref(rawHref, locale) {
  const normalizedLocale = locale === "en" ? "en" : "tr";

  if (typeof rawHref !== "string" || !rawHref.trim()) return "#";

  const href = rawHref.trim();

  if (
    isSpecialHref(href) ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

  // Relative values like "looker-studio" are left untouched in this first pass
  // so we don't accidentally change a non-route reference.
  if (!href.startsWith("/")) return href;

  const pathname = normalizePath(href);
  if (isStaticPath(pathname)) return pathname;

  const directLocalizedPath = getLocalizedRoutePath(pathname, normalizedLocale);
  if (directLocalizedPath) {
    return withLocalePrefix(normalizedLocale, directLocalizedPath);
  }

  const unprefixedPath = pathname.replace(/^\/(tr|en)(?=\/|$)/, "") || "/";
  const internalPath =
    LOCALIZED_PATH_TO_INTERNAL.get(pathname) ||
    LOCALIZED_PATH_TO_INTERNAL.get(unprefixedPath);

  if (internalPath) {
    const localizedPath = getLocalizedRoutePath(internalPath, normalizedLocale);
    if (localizedPath) {
      return withLocalePrefix(normalizedLocale, localizedPath);
    }
  }

  return pathname;
}

export default function RichTextSpan({ ns, id, className = "" }) {
  const t = useTranslations(ns);
  const locale = useLocale();

  return (
    <span className={className}>
      {t.rich(id, {
        b: (chunks) => <span className="font-semibold">{chunks}</span>,
        strong: (chunks) => <span className="font-semibold">{chunks}</span>,
        br: () => <br />,
        ul: (chunks) => (
          <ul className="list-disc list-inside space-y-1 mt-2">
            {chunks}
          </ul>
        ),
        li: (chunks) => <li>{chunks}</li>,

        a: (chunks) => (
          <NextLink
            href={resolveRichTextHref(chunks?.props?.href, locale)}
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </NextLink>
        ),

        callPerformance: (chunks) => (
          <LocalizedLink
            href="/Services/callcenter/callPerformance"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
        lookerStudio: (chunks) => (
          <LocalizedLink
            href="/Services/digitalAnalysis/lookerStudio"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
      })}
    </span>
  );
}
