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
  "/smm/content-production": "/Services/smm/socialMediaContent",
  "/smm/planning-strategy": "/Services/smm/socialMediaPlanning",
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

export function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function normalizeLocale(locale) {
  return locale === "en" ? "en" : "tr";
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

export function getLocalizedHref(rawHref, locale) {
  const normalizedLocale = normalizeLocale(locale);

  if (typeof rawHref !== "string" || !rawHref.trim()) return "#";

  const href = rawHref.trim();

  if (
    isSpecialHref(href) ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

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

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function normalizeHtmlLinks(html, locale) {
  return String(html).replace(
    /<a\b([^>]*?)href=(["'])(.*?)\2([^>]*)>/gi,
    (_, beforeHref, _quote, hrefValue, afterHref) => {
      const href = getLocalizedHref(hrefValue, locale);
      return `<a${beforeHref}href="${escapeHtmlAttribute(href)}"${afterHref}>`;
    }
  );
}
