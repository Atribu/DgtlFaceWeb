// app/lib/faqLocaleSwitch.js

import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

// Türkçe yorum: "/seo-sss" gibi değerler gelirse baştaki "/" kaldır
function cleanSlug(input) {
  return String(input || "").replace(/^\/+/, "");
}

// Türkçe yorum: EN'de TR slug geldiyse EN slug'a çevir (yazılım altları vb.)
const FAQ_SLUG_ALIAS_MAP = {
  en: {
    "yazilim-sss": "software-development-sss",
    "web-sitesi-gelistirme-sss": "website-and-software-sss",
    "cms-entegrasyonu-sss": "cms-installation-sss",
    "kvkk-uyum-hizmeti-sss": "kvkk-compliance-service-sss",
    "sunucu-guvenlik-sss": "server-management-sss",
    "bakim-destek-sss": "website-maintenance-sss",
  },
};

// Türkçe yorum: özel root slug dönüşümleri
const FAQ_ROOT_SLUG_MAP = {
  "sss": { tr: "sss", en: "faq" },
  "faq": { tr: "sss", en: "faq" },
  "hizmetlerimiz-sss": { tr: "hizmetlerimiz-sss", en: "services-faq" },
  "services-faq": { tr: "hizmetlerimiz-sss", en: "services-faq" },
};

function normalizeSlugByLocale(slug, locale) {
  return FAQ_SLUG_ALIAS_MAP?.[locale]?.[slug] || slug;
}

// Türkçe yorum: Aynı namespace'in locale'e göre doğru slug'ını bul (TR: -sss, EN: -faq)
function findSlugByNs(ns, locale) {
  if (!ns) return null;
  const suffix = locale === "en" ? "-faq" : "-sss";

  const match = Object.keys(FAQ_MAP || {}).find(
    (slug) => FAQ_MAP[slug] === ns && slug.endsWith(suffix)
  );

  return match || null;
}

// Türkçe yorum: slug + locale -> doğru faq href üret
export function buildFaqHrefBySlug(slug, locale) {
  const rootMapped = FAQ_ROOT_SLUG_MAP[slug]?.[locale];
  const normalizedSlug = rootMapped || normalizeSlugByLocale(slug, locale);

  // Türkçe yorum: segment map (örn en: digital-analysis, tr: raporlama)
  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[normalizedSlug];

  if (deptSegment) return `/${locale}/${deptSegment}/${normalizedSlug}`;

  // root sayfalar
  if (normalizedSlug === "sss" || normalizedSlug === "faq") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }
  if (normalizedSlug === "hizmetlerimiz-sss" || normalizedSlug === "services-faq") {
    return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
  }

  return `/${locale}/${normalizedSlug}`;
}

// Türkçe yorum: Mevcut pathname bir FAQ sayfası mı? ise target locale'e çevir
export function tryBuildFaqSwitchHref(pathname, currentLocale, targetLocale) {
  if (!pathname) return null;

  // "/tr/..." locale'yi ayıkla
  const parts = String(pathname).split("/").filter(Boolean);

  // Beklenen: [locale, ...rest]
  const rest = parts[0] === currentLocale ? parts.slice(1) : parts;

  if (rest.length === 0) return null;

  // /tr/hizmetlerimiz-sss gibi
  if (rest.length === 1) {
    const slugRaw = cleanSlug(rest[0]);

    // root slug ise direkt map
    if (FAQ_ROOT_SLUG_MAP[slugRaw]) {
      return buildFaqHrefBySlug(slugRaw, targetLocale);
    }

    // -sss / -faq ise faq sayfası kabul et
    if (slugRaw.endsWith("-sss") || slugRaw.endsWith("-faq")) {
      const ns = FAQ_MAP?.[slugRaw];
      const targetSlug = findSlugByNs(ns, targetLocale) || slugRaw;
      return buildFaqHrefBySlug(targetSlug, targetLocale);
    }

    return null;
  }

  // /tr/raporlama/satis-donusumu-sss gibi
  if (rest.length >= 2) {
    const slugRaw = cleanSlug(rest[rest.length - 1]);

    // -sss / -faq değilse FAQ değildir
    if (!(slugRaw.endsWith("-sss") || slugRaw.endsWith("-faq"))) return null;

    const ns = FAQ_MAP?.[slugRaw];
    const targetSlug = findSlugByNs(ns, targetLocale) || slugRaw;

    return buildFaqHrefBySlug(targetSlug, targetLocale);
  }

  return null;
}
