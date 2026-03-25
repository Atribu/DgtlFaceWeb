import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { buildFaqHrefBySlug } from "@/app/lib/faq-url";
import { getCanonicalHost, getCanonicalProtocol } from "@/app/lib/site-url";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const LOCALES = new Set(routing.locales);
const LEGACY_LOCALES = new Set(["ru", "de"]);
const DEFAULT_LOCALE = routing.defaultLocale || "tr";
const FAQ_SLUGS = new Set(Object.keys(FAQ_MAP || {}));
const BLOG_SEGMENTS = new Set(Object.keys(BLOG_MAP || {}));
const CANONICAL_HOST = getCanonicalHost();
const CANONICAL_PROTOCOL = getCanonicalProtocol();

const LEGACY_EXACT_REDIRECTS = new Map([
  ["/home", "/tr"],
  ["/tiktok", "/tr"],
  ["/tr/anasayfa", "/tr"],
  ["/tr/seo-hizmetleri", "/tr/seo"],
  ["/tr/sosyal-medya-yonetimi", "/tr/smm"],
  ["/tr/web-ve-yazilim-hizmetleri", "/tr/yazilim"],
  ["/tr/creative-ve-tasarim", "/tr/creative"],
  ["/tr/cagri-merkezi-hizmetleri", "/tr/cagri-merkezi"],
  ["/tr/pms-ota-yonetimi", "/tr/pms-ota"],
  ["/tr/veri-analiz-ve-raporlama", "/tr/raporlama"],
  ["/tr/otel-dijital-pazarlama", "/tr/otel"],
  ["/tr/seo-hizmetleri-sss", "/tr/seo-sss"],
  ["/tr/sosyal-medya-yonetimi-sss", "/tr/smm-sss"],
  ["/tr/web-ve-yazilim-hizmetleri-sss", "/tr/yazilim-sss"],
  ["/tr/creative-ve-tasarim-sss", "/tr/creative-sss"],
  ["/tr/cagri-merkezi-hizmetleri-sss", "/tr/cagri-merkezi-sss"],
  ["/tr/pms-ota-yonetimi-sss", "/tr/pms-ota-sss"],
  ["/tr/hizmetler-sss", "/tr/hizmetlerimiz-sss"],
  ["/antalya-dijital-pazarlama-blog", "/tr/bloglar"],
  ["/tr/antalya-dijital-pazarlama-blog", "/tr/bloglar"],
  ["/antalya-dijital-pazarlama-hizmetleri", "/tr/hizmetlerimiz"],
  ["/tr/antalya-dijital-pazarlama-hizmetleri", "/tr/hizmetlerimiz"],
  ["/antalya-dijital-pazarlama-seo-hizmetleri", "/tr/seo"],
  ["/tr/antalya-dijital-pazarlama-seo-hizmetleri", "/tr/seo"],
  ["/tr/antalya-dijital-pazarlama-sem-hizmetleri", "/tr/sem"],
  ["/antalya-dijital-pazarlama-cagri-merkezi", "/tr/cagri-merkezi"],
  ["/tr/antalya-dijital-pazarlama-cagri-merkezi", "/tr/cagri-merkezi"],
  ["/antalya-dijital-pazarlama-analiz", "/tr/raporlama"],
  ["/tr/antalya-dijital-pazarlama-analiz", "/tr/raporlama"],
  ["/antalya-pazarlama-sistem-kurulumu", "/tr/pms-ota"],
  ["/tr/antalya-pazarlama-sistem-kurulumu", "/tr/pms-ota"],
  ["/tr/antalya-dijital-pazarlama-sosyal-medya-ajansi", "/tr/smm"],
  ["/tr/antalya-dijital-pazarlama-yazilim-hizmetleri", "/tr/yazilim"],
  ["/tr/antalya-dijital-pazarlama-yaraticilik-tasarim", "/tr/creative"],
  ["/tr/creative/kurumsal-hediye", "/tr/creative/kurumsal-hediye-tasarimi"],
  ["/tr/creative/kurumsal-hediye-sss", "/tr/creative/kurumsal-hediye-tasarimi-sss"],
  ["/tr/creative/ui-ux-hizmeti", "/tr/creative/ui-ux-tasarim"],
  ["/tr/creative/ui-ux-hizmeti-sss", "/tr/creative/ui-ux-tasarim-sss"],
  ["/tr/creative/video-ve-produksiyon", "/tr/creative/video-produksiyon"],
  ["/tr/creative/video-ve-produksiyon-sss", "/tr/creative/video-produksiyon-sss"],
  ["/en/services/call-center", "/en/call-center"],
  ["/en/services/digital-analysis", "/en/digital-analysis"],
  ["/en/services/digital-analysis/website-reporting", "/en/digital-analysis/looker-studio"],
  ["/en/services/sem/yandex-advertising", "/en/search-engine-marketing"],
]);

const UNSUPPORTED_LOCALE_EXACT_REDIRECTS = new Map([
  ["/", "/en"],
  ["/home", "/en"],
  ["/anasayfa", "/en"],
  ["/o-nas", "/en/about-us"],
  ["/kontakty", "/en/contact"],
  ["/uslugi", "/en/services"],
  ["/Services", "/en/services"],
]);

const UNSUPPORTED_LOCALE_SERVICE_REDIRECTS = new Map([
  ["seo", "/en/search-engine-optimization"],
  ["sem", "/en/search-engine-marketing"],
  ["smm", "/en/social-media-management"],
  ["creative", "/en/creative-design"],
  ["yazilim", "/en/software-development"],
  ["raporlama", "/en/digital-analysis"],
  ["cagri-merkezi", "/en/call-center"],
  ["pms-ota", "/en/pms-ota"],
  ["otel", "/en/hotel"],
  ["koll-centr", "/en/call-center"],
]);

const LEGACY_INTERNAL_ROUTE_MAP = {
  "/Services/smm/socialMediaManagement": {
    tr: "/tr/smm",
    en: "/en/social-media-management",
  },
  "/Services/smm/smmAds": {
    tr: "/tr/smm/sosyal-medya-reklamlari",
    en: "/en/social-media-management/social-media-ads",
  },
  "/Services/seo/offpageSeo": {
    tr: "/tr/seo/backlink-yonetimi",
    en: "/en/search-engine-optimization/backlink-seo",
  },
  "/Services/seo/onpageSeo": {
    tr: "/tr/seo/icerik-seo",
    en: "/en/search-engine-optimization/content-seo",
  },
  "/Services/seo/originalCopywriting": {
    tr: "/tr/seo/icerik-seo",
    en: "/en/search-engine-optimization/content-seo",
  },
  "/Services/sem/googleWebtools": {
    tr: "/tr/sem/donusum-takibi-tag-manager",
    en: "/en/search-engine-marketing/tag-manager",
  },
  "/Services/sem/webTraffic": {
    tr: "/tr/sem/donusum-takibi-tag-manager",
    en: "/en/search-engine-marketing/tag-manager",
  },
  "/Services/sem/yandexAdvertising": {
    tr: "/tr/sem",
    en: "/en/search-engine-marketing",
  },
  "/Services/sem/advertisingManagement": {
    tr: "/tr/sem",
    en: "/en/search-engine-marketing",
  },
  "/Services/sem/remarketingDisplay-faq": {
    tr: "/tr/sem/remarketing-ve-display-sss",
    en: "/en/search-engine-marketing/remarketing-and-display-faq",
  },
  "/Services/sem/remarketingDisplay-sss": {
    tr: "/tr/sem/remarketing-ve-display-sss",
    en: "/en/search-engine-marketing/remarketing-and-display-faq",
  },
  "/Services/sem/tagManager-sss": {
    tr: "/tr/sem/donusum-takibi-tag-manager-sss",
    en: "/en/search-engine-marketing/tag-manager-faq",
  },
  "/Services/software/pdpaCompliance": {
    tr: "/tr/yazilim/kvkk-uyum-hizmeti",
    en: "/en/software-development/kvkk-compliance-service",
  },
  "/Services/digitalAnalysis/websiteReportingService": {
    tr: "/tr/raporlama/looker-studio",
    en: "/en/digital-analysis/looker-studio",
  },
  "/Services/pms/hotelIdentification": {
    tr: "/tr/pms-ota/pms-kurulum",
    en: "/en/pms-ota/pms-integration",
  },
  "/Services/pms/reservationModule": {
    tr: "/tr/pms-ota/rezervasyon-yonetimi",
    en: "/en/pms-ota/reservation-management",
  },
  "/Services/pms/otaContract": {
    tr: "/tr/pms-ota/ota-entegrasyonu",
    en: "/en/pms-ota/ota-contract",
  },
  "/Services/callcenter/multipleChannels": {
    tr: "/tr/cagri-merkezi/mesaj-yonetimi",
    en: "/en/call-center/message-management",
  },
  "/Services/hotel/pmsIntegration": {
    tr: "/tr/otel/pms-entegrasyonu",
    en: "/en/hotel/pms-integration",
  },
};

const LEGACY_TR_SECTION_ROUTES = {
  "antalya-seo": {
    root: "/tr/seo",
    children: {
      "teknik-seo": "/tr/seo/teknik-seo",
      "site-disi-seo": "/tr/seo/backlink-yonetimi",
      "site-ici-seo": "/tr/seo/icerik-seo",
      "ozgun-metin-yazarligi": "/tr/seo/icerik-seo",
      "raporlama-hizmetleri": "/tr/seo/seo-raporlama",
    },
  },
  "antalya-sem": {
    root: "/tr/sem",
    children: {
      "google-ads-reklamlari": "/tr/sem/google-ads-yonetimi",
      "google-web-araclari": "/tr/sem/donusum-takibi-tag-manager",
      "web-trafik-takibi": "/tr/sem/donusum-takibi-tag-manager",
      "reklam-yonetimi": "/tr/sem",
      "yandex-reklamlari": "/tr/sem",
    },
  },
  "antalya-sosyal-medya": {
    root: "/tr/smm",
    children: {
      "planlama-hizmetleri": "/tr/smm/planlama-strateji",
      "icerik-hizmetleri": "/tr/smm/icerik-uretimi",
      "analiz-hizmetleri": "/tr/smm/analiz-raporlama",
      "raporlama-hizmetleri": "/tr/smm/analiz-raporlama",
    },
  },
  "antalya-yazilim": {
    root: "/tr/yazilim",
    children: {
      "web-sitesi-bakim": "/tr/yazilim/bakim-ve-destek",
      "kvkk-uyumlulugu": "/tr/yazilim/kvkk-uyum-hizmeti",
      "web-sitesi-ve-yazilim": "/tr/yazilim/web-sitesi-gelistirme",
      "sunucu-yonetimi": "/tr/yazilim/sunucu-guvenlik",
      "cms-kurulumu": "/tr/yazilim/cms-entegrasyonu",
    },
  },
  "antalya-tasarim": {
    root: "/tr/creative",
    children: {
      "video-ve-produksiyon": "/tr/creative/video-produksiyon",
      "kurumsal-hediye": "/tr/creative/kurumsal-hediye-tasarimi",
      "kurumsal-hediye-tasarimi": "/tr/creative/kurumsal-hediye-tasarimi",
      "ui-ux-hizmeti": "/tr/creative/ui-ux-tasarim",
      "ui-ux-tasarim": "/tr/creative/ui-ux-tasarim",
      "grafik-motion-tasarim": "/tr/creative/grafik-motion-tasarim",
      "etkinlik-produksiyonu": "/tr/creative/etkinlik-produksiyonu",
    },
  },
  "antalya-cagri-merkezi": {
    root: "/tr/cagri-merkezi",
    children: {
      "performans-analizi": "/tr/cagri-merkezi/performans-analizi",
      "cok-kanalli-satis-takibi": "/tr/cagri-merkezi/mesaj-yonetimi",
      "sozlesme-yonetimi": "/tr/cagri-merkezi/satis-sonrasi-destek",
      "rezervasyon-destek": "/tr/cagri-merkezi/rezervasyon-destegi",
      "cok-dilli-destek": "/tr/cagri-merkezi/4-dilli-cagri-merkezi",
    },
  },
  "antalya-analiz": {
    root: "/tr/raporlama",
    children: {
      "web-sitesi-raporlama": "/tr/raporlama/looker-studio",
      "reklam-raporlama": "/tr/raporlama/looker-studio",
      "dijital-satis-analizi": "/tr/raporlama/satis-donusum",
      "online-pazar-arastirmasi": "/tr/raporlama/benchmark-analizi",
    },
  },
  "antalya-pms": {
    root: "/tr/pms-ota",
    children: {
      "otel-tanimlama": "/tr/pms-ota/pms-kurulum",
      "rezervasyon-yonetimi": "/tr/pms-ota/rezervasyon-yonetimi",
      "rezervasyon-modulu": "/tr/pms-ota/rezervasyon-yonetimi",
      "ota-sozlesme": "/tr/pms-ota/ota-entegrasyonu",
      "web-odeme-sistemleri": "/tr/pms-ota/online-satis",
    },
  },
};

const TR_SEGMENT_ALIASES = {
  hotel: "otel",
  callcenter: "cagri-merkezi",
  "veri-analizi-raporlama": "raporlama",
};

function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function withLocalePrefix(locale, pathname) {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

function buildLocalizedRouteMaps() {
  const byInternalKey = new Map();
  const byExternalPath = new Map();

  for (const [pathnameKey, value] of Object.entries(routing.pathnames || {})) {
    if (pathnameKey.includes("[") || pathnameKey.includes("]")) continue;

    const localizedPaths =
      typeof value === "string"
        ? Object.fromEntries(routing.locales.map((locale) => [locale, value]))
        : value;

    byInternalKey.set(normalizePath(pathnameKey), localizedPaths);

    for (const locale of routing.locales) {
      const localizedPath = localizedPaths?.[locale];
      if (!localizedPath) continue;

      const normalizedLocalizedPath = normalizePath(localizedPath);
      const current = byExternalPath.get(normalizedLocalizedPath) || [];
      current.push({ locale, pathnameKey, localizedPath: normalizedLocalizedPath });
      byExternalPath.set(normalizedLocalizedPath, current);
    }
  }

  return { byInternalKey, byExternalPath };
}

const { byInternalKey, byExternalPath } = buildLocalizedRouteMaps();

function buildRedirectResponse(request, pathname) {
  const target = new URL(pathname, request.url);
  return NextResponse.redirect(target, 308);
}

function normalizeHostName(value) {
  return String(value || "").trim().replace(/:\d+$/, "").toLowerCase();
}

function getHostCanonicalResponse(request) {
  const rawCurrentHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    request.nextUrl.host;
  const currentHost = normalizeHostName(rawCurrentHost);
  const currentProtocol =
    request.headers.get("x-forwarded-proto") ||
    request.nextUrl.protocol.replace(/:$/, "");
  const canonicalHost = normalizeHostName(CANONICAL_HOST);

  const isManagedDomain =
    currentHost === "dgtlface.com" || currentHost === "www.dgtlface.com";

  if (!isManagedDomain) return null;

  if (currentHost === canonicalHost && currentProtocol === CANONICAL_PROTOCOL) {
    return null;
  }

  const target = request.nextUrl.clone();
  target.hostname = canonicalHost;
  target.port = "";
  target.protocol = `${CANONICAL_PROTOCOL}:`;
  return NextResponse.redirect(target, 308);
}

function getEmbeddedAbsoluteUrlPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const match = normalizedPath.match(/^\/(?:tr|en)?https?:\/\/[^/]+(\/.*)$/);
  return match ? normalizePath(match[1]) : null;
}

function stripNumericSuffixPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/").filter(Boolean);
  if (!parts.length) return normalizedPath;

  const lastPart = parts.at(-1);
  if (!/-\d+$/.test(lastPart)) return normalizedPath;

  parts[parts.length - 1] = lastPart.replace(/-\d+$/, "");
  return `/${parts.join("/")}`;
}

function getPrefixedCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/");
  const locale = parts[1];
  if (!LOCALES.has(locale)) return null;

  const restPath = normalizePath(`/${parts.slice(2).join("/")}`);
  const internalMatch = byInternalKey.get(restPath);
  if (internalMatch?.[locale]) {
    const localizedTarget = normalizePath(internalMatch[locale]);
    const candidate = withLocalePrefix(locale, localizedTarget);
    return candidate === normalizedPath ? null : candidate;
  }

  const externalMatches = byExternalPath.get(restPath) || [];
  const sameKeyDifferentLocale = externalMatches.find(
    (match) => match.locale !== locale && byInternalKey.get(match.pathnameKey)?.[locale]
  );

  if (sameKeyDifferentLocale) {
    const candidate = withLocalePrefix(
      locale,
      normalizePath(byInternalKey.get(sameKeyDifferentLocale.pathnameKey)[locale])
    );
    return candidate === normalizedPath ? null : candidate;
  }

  return null;
}

function getUnprefixedCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === "/") return null;

  const internalMatch = byInternalKey.get(normalizedPath);
  if (internalMatch?.[DEFAULT_LOCALE]) {
    return withLocalePrefix(DEFAULT_LOCALE, normalizePath(internalMatch[DEFAULT_LOCALE]));
  }

  const externalMatches = byExternalPath.get(normalizedPath) || [];
  if (externalMatches.length === 1) {
    return withLocalePrefix(externalMatches[0].locale, externalMatches[0].localizedPath);
  }

  return null;
}

function getDynamicCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/").filter(Boolean);
  if (!parts.length || LOCALES.has(parts[0]) || LEGACY_LOCALES.has(parts[0])) return null;

  if (parts.length === 1 && FAQ_SLUGS.has(parts[0])) {
    const slug = parts[0];
    const locale = slug.endsWith("-faq") ? "en" : "tr";
    return buildFaqHrefBySlug(slug, locale);
  }

  if (parts.length === 2 && FAQ_SLUGS.has(parts[1])) {
    const slug = parts[1];
    const locale = slug.endsWith("-faq") ? "en" : "tr";
    return buildFaqHrefBySlug(slug, locale);
  }

  if (parts.length === 2 && BLOG_SEGMENTS.has(parts[0]) && parts[1] === "bloglar") {
    return `/tr/${parts[0]}/bloglar`;
  }

  if (parts.length === 2 && BLOG_SEGMENTS.has(parts[0]) && parts[1] === "blog") {
    return `/tr/${parts[0]}/bloglar`;
  }

  if (
    parts.length === 3 &&
    BLOG_SEGMENTS.has(parts[0]) &&
    parts[1] === "blog" &&
    BLOG_MAP?.[parts[0]]?.[parts[2]]
  ) {
    return `/tr/${parts[0]}/blog/${parts[2]}`;
  }

  return null;
}

function getLocaleForLegacyPath(pathname) {
  const parts = normalizePath(pathname).split("/").filter(Boolean);
  const firstPart = parts[0];

  if (firstPart === "en") return "en";
  if (firstPart === "tr") return "tr";
  if (LEGACY_LOCALES.has(firstPart)) return "en";

  return DEFAULT_LOCALE;
}

function getLegacyInternalCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const servicesIndex = normalizedPath.indexOf("/Services");
  if (servicesIndex === -1) return null;

  const internalPath = normalizePath(normalizedPath.slice(servicesIndex));
  const locale = getLocaleForLegacyPath(normalizedPath);
  const mapping = LEGACY_INTERNAL_ROUTE_MAP[internalPath];
  if (!mapping) return null;

  return mapping[locale] || mapping[DEFAULT_LOCALE] || null;
}

function getLegacyTrSectionCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/").filter(Boolean);
  const partsWithoutLocale = parts[0] === "tr" ? parts.slice(1) : parts;
  const sectionConfig = LEGACY_TR_SECTION_ROUTES[partsWithoutLocale[0]];

  if (!sectionConfig) return null;
  if (partsWithoutLocale.length === 1) return sectionConfig.root;

  const childPath = partsWithoutLocale.slice(1).join("/");
  return sectionConfig.children?.[childPath] || null;
}

function getTrSegmentAliasPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/").filter(Boolean);
  if (parts[0] !== "tr") return null;

  const alias = TR_SEGMENT_ALIASES[parts[1]];
  if (!alias) return null;

  return `/${["tr", alias, ...parts.slice(2)].join("/")}`;
}

function getUnsupportedLocaleCanonicalPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split("/").filter(Boolean);
  if (!LEGACY_LOCALES.has(parts[0])) return null;

  const restPath = normalizePath(`/${parts.slice(1).join("/")}`);
  const exactRedirect = UNSUPPORTED_LOCALE_EXACT_REDIRECTS.get(restPath);
  if (exactRedirect) return exactRedirect;

  const restParts = restPath.split("/").filter(Boolean);
  if (restParts[0] === "uslugi") {
    const serviceRedirect = UNSUPPORTED_LOCALE_SERVICE_REDIRECTS.get(restParts[1] || "");
    if (serviceRedirect) return serviceRedirect;
  }

  return resolveCanonicalPath(restPath, { allowUnsupportedLocale: false });
}

function resolveCanonicalPath(pathname, { allowUnsupportedLocale = true } = {}) {
  const normalizedPath = normalizePath(pathname);

  const embeddedAbsoluteUrlPath = getEmbeddedAbsoluteUrlPath(normalizedPath);
  if (embeddedAbsoluteUrlPath && embeddedAbsoluteUrlPath !== normalizedPath) {
    return resolveCanonicalPath(embeddedAbsoluteUrlPath, { allowUnsupportedLocale });
  }

  const strippedNumericSuffixPath = stripNumericSuffixPath(normalizedPath);
  if (strippedNumericSuffixPath !== normalizedPath) {
    return resolveCanonicalPath(strippedNumericSuffixPath, { allowUnsupportedLocale });
  }

  const exactRedirect = LEGACY_EXACT_REDIRECTS.get(normalizedPath);
  if (exactRedirect) return exactRedirect;

  const legacyInternalCanonicalPath = getLegacyInternalCanonicalPath(normalizedPath);
  if (legacyInternalCanonicalPath) return legacyInternalCanonicalPath;

  const trSegmentAliasPath = getTrSegmentAliasPath(normalizedPath);
  if (trSegmentAliasPath && trSegmentAliasPath !== normalizedPath) {
    return trSegmentAliasPath;
  }

  const legacyTrSectionCanonicalPath = getLegacyTrSectionCanonicalPath(normalizedPath);
  if (legacyTrSectionCanonicalPath) return legacyTrSectionCanonicalPath;

  const prefixedCanonicalPath = getPrefixedCanonicalPath(normalizedPath);
  if (prefixedCanonicalPath) return prefixedCanonicalPath;

  const unprefixedCanonicalPath = getUnprefixedCanonicalPath(normalizedPath);
  if (unprefixedCanonicalPath) return unprefixedCanonicalPath;

  const dynamicCanonicalPath = getDynamicCanonicalPath(normalizedPath);
  if (dynamicCanonicalPath) return dynamicCanonicalPath;

  if (allowUnsupportedLocale) {
    const unsupportedLocaleCanonicalPath = getUnsupportedLocaleCanonicalPath(normalizedPath);
    if (unsupportedLocaleCanonicalPath) return unsupportedLocaleCanonicalPath;
  }

  return null;
}

export default function middleware(request) {
  const hostCanonicalResponse = getHostCanonicalResponse(request);
  if (hostCanonicalResponse) return hostCanonicalResponse;

  const pathname = normalizePath(request.nextUrl.pathname);
  const canonicalPath = resolveCanonicalPath(pathname);

  if (canonicalPath && canonicalPath !== pathname) {
    return buildRedirectResponse(request, canonicalPath);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|__nextjs.*|.*\\..*).*)",
};
