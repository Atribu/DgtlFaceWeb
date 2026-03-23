import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

const ROOT_FAQ_SLUG_MAP = {
  sss: { tr: "sss", en: "faq" },
  faq: { tr: "sss", en: "faq" },
  "hizmetlerimiz-sss": { tr: "hizmetlerimiz-sss", en: "services-faq" },
  "services-faq": { tr: "hizmetlerimiz-sss", en: "services-faq" },
};

function cleanFaqSlug(input) {
  return String(input || "").replace(/^\/+/, "");
}

export function findFaqSlugByNamespace(ns, locale) {
  if (!ns) return null;

  const suffix = locale === "en" ? "-faq" : "-sss";

  return (
    Object.keys(FAQ_MAP || {}).find(
      (slug) => FAQ_MAP[slug] === ns && slug.endsWith(suffix)
    ) || null
  );
}

export function getFaqLocaleSlug(slug, locale) {
  const cleanedSlug = cleanFaqSlug(slug);
  const rootMappedSlug = ROOT_FAQ_SLUG_MAP[cleanedSlug]?.[locale];

  if (rootMappedSlug) return rootMappedSlug;

  const namespace = FAQ_MAP?.[cleanedSlug];
  if (!namespace) return cleanedSlug;

  return findFaqSlugByNamespace(namespace, locale) || cleanedSlug;
}

export function getFaqDeptSegment(slug, locale) {
  const localizedSlug = getFaqLocaleSlug(slug, locale);
  return FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[localizedSlug] || null;
}

export function isFaqDetailSlug(slug, locale) {
  return Boolean(getFaqDeptSegment(slug, locale));
}

export function getFaqIndexHref(locale) {
  return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
}

export function getServicesFaqHref(locale) {
  return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
}

export function buildFaqHrefBySlug(slug, locale, deptSegment = null) {
  const localizedSlug = getFaqLocaleSlug(slug, locale);

  if (localizedSlug === "sss" || localizedSlug === "faq") {
    return getFaqIndexHref(locale);
  }

  if (
    localizedSlug === "hizmetlerimiz-sss" ||
    localizedSlug === "services-faq"
  ) {
    return getServicesFaqHref(locale);
  }

  const resolvedDeptSegment =
    deptSegment || FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[localizedSlug];

  if (resolvedDeptSegment) {
    return `/${locale}/${resolvedDeptSegment}/${localizedSlug}`;
  }

  return `/${locale}/${localizedSlug}`;
}
