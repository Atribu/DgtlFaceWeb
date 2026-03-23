// app/lib/faqLocaleSwitch.js

import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import {
  buildFaqHrefBySlug as buildCanonicalFaqHrefBySlug,
  findFaqSlugByNamespace,
} from "@/app/lib/faq-url";

const FAQ_ROOT_SLUG_MAP = {
  sss: { tr: "sss", en: "faq" },
  faq: { tr: "sss", en: "faq" },
  "hizmetlerimiz-sss": { tr: "hizmetlerimiz-sss", en: "services-faq" },
  "services-faq": { tr: "hizmetlerimiz-sss", en: "services-faq" },
};

// Türkçe yorum: "/seo-sss" gibi değerler gelirse baştaki "/" kaldır
function cleanSlug(input) {
  return String(input || "").replace(/^\/+/, "");
}

// Türkçe yorum: slug + locale -> doğru faq href üret
export function buildFaqHrefBySlug(slug, locale) {
  return buildCanonicalFaqHrefBySlug(slug, locale);
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
      const targetSlug = findFaqSlugByNamespace(ns, targetLocale) || slugRaw;
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
    const targetSlug = findFaqSlugByNamespace(ns, targetLocale) || slugRaw;

    return buildFaqHrefBySlug(targetSlug, targetLocale);
  }

  return null;
}
