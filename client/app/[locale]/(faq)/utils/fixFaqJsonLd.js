import { buildFaqHrefBySlug } from "@/app/lib/faq-url";
import { FAQ_MAP } from "../faqMap";
import { routing } from "@/i18n/routing";

const SITE_ORIGIN = "https://dgtlface.com";
const ROOT_FAQ_SLUGS = new Set(["sss", "faq", "hizmetlerimiz-sss", "services-faq"]);

// Türkçe yorum: faqJsonLdMap içindeki eski root FAQ slug'ları yeni canonical slug'a taşı.
const FAQ_SLUG_ALIAS_TO_CANONICAL = {
  "seo-hizmetleri-sss": "seo-sss",
  "web-ve-yazilim-hizmetleri-sss": "yazilim-sss",
  "cagri-merkezi-hizmetleri-sss": "cagri-merkezi-sss",
  "pms-ota-yonetimi-sss": "pms-ota-sss",
};

// Türkçe yorum: Eski servis hub alias'larını routing.js internal key'lerine eşleştir.
const SERVICE_ALIAS_TO_INTERNAL = {
  "/seo-hizmetleri": "/Services/seo",
  "/web-ve-yazilim-hizmetleri": "/Services/software",
  "/cagri-merkezi-hizmetleri": "/Services/callcenter",
  "/pms-ota-yonetimi": "/Services/pms",
  "/veri-analiz-ve-raporlama": "/Services/digitalAnalysis",
  "/otel-dijital-pazarlama": "/Services/hotel",
};

const INTERNAL_KEY_BY_LOCALIZED_PATH = new Map();

for (const [internalKey, localizedPathnames] of Object.entries(routing.pathnames || {})) {
  if (!localizedPathnames || typeof localizedPathnames !== "object") continue;
  for (const localizedPath of Object.values(localizedPathnames)) {
    if (typeof localizedPath === "string") {
      INTERNAL_KEY_BY_LOCALIZED_PATH.set(localizedPath, internalKey);
    }
  }
}

function withLocalePrefix(pathname, locale) {
  if (!pathname || pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathname}`;
}

function toCanonicalFaqPath(pathname, locale) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length !== 2) return null;

  const slug = segments[1];
  const canonicalSlug = FAQ_SLUG_ALIAS_TO_CANONICAL[slug] || slug;

  if (!FAQ_MAP[canonicalSlug] && !ROOT_FAQ_SLUGS.has(canonicalSlug)) {
    return null;
  }

  return buildFaqHrefBySlug(canonicalSlug, locale);
}

function toCanonicalServicePath(pathname, locale) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length < 2) return null;

  const localizedPath = `/${segments.slice(1).join("/")}`;
  const internalKey =
    SERVICE_ALIAS_TO_INTERNAL[localizedPath] ||
    INTERNAL_KEY_BY_LOCALIZED_PATH.get(localizedPath) ||
    null;

  if (!internalKey) return null;

  const localizedTarget = routing.pathnames?.[internalKey]?.[locale];
  if (typeof localizedTarget !== "string") return null;

  return withLocalePrefix(localizedTarget, locale);
}

function normalizeSiteUrl(rawUrl, locale) {
  let parsedUrl;

  try {
    parsedUrl = new URL(rawUrl);
  } catch {
    return rawUrl;
  }

  if (parsedUrl.origin !== SITE_ORIGIN) {
    return rawUrl;
  }

  const faqPath = toCanonicalFaqPath(parsedUrl.pathname, locale);
  if (faqPath) {
    return `${SITE_ORIGIN}${faqPath}${parsedUrl.search}${parsedUrl.hash}`;
  }

  const servicePath = toCanonicalServicePath(parsedUrl.pathname, locale);
  if (servicePath) {
    return `${SITE_ORIGIN}${servicePath}${parsedUrl.search}${parsedUrl.hash}`;
  }

  const localeAdjustedPathname = parsedUrl.pathname.replace(/^\/(tr|en)(?=\/|$)/, `/${locale}`);
  return `${SITE_ORIGIN}${localeAdjustedPathname}${parsedUrl.search}${parsedUrl.hash}`;
}

function normalizeJsonLdValue(value, locale) {
  if (typeof value === "string") {
    return value.replace(
      /https:\/\/dgtlface\.com\/(?:tr|en)\/[A-Za-z0-9\-/_#.%]+/g,
      (matchedUrl) => normalizeSiteUrl(matchedUrl, locale)
    );
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeJsonLdValue(item, locale));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        normalizeJsonLdValue(nestedValue, locale),
      ])
    );
  }

  return value;
}

// Türkçe yorum: JSON-LD alanlarını locale + canonical route bazında düzelt.
export function fixFaqJsonLdLocale(baseJsonLd, locale) {
  if (!baseJsonLd) return null;

  const data = normalizeJsonLdValue(baseJsonLd, locale);

  data.inLanguage = locale;
  if (locale === "tr") data.dgLanguage = "TR";
  if (locale === "en") data.dgLanguage = "EN";

  return data;
}
