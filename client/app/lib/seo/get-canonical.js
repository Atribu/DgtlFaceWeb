// lib/seo/get-canonical.js
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/app/lib/site-url";

export function getBaseUrl() {
  return getSiteUrl();
}

export function getLocalizedPath(pathnameKey, locale) {
  const mapped = routing?.pathnames?.[pathnameKey]?.[locale];
  // mapped varsa "/sem/..." gibi gelir. yoksa fallback: pathnameKey
  return mapped || pathnameKey;
}

export function getCanonicalUrl(pathnameKey, locale) {
  const base = getBaseUrl();
  const localizedPath = getLocalizedPath(pathnameKey, locale);
  // localePrefix always → "/tr" + localizedPath
  return `${base}/${locale}${localizedPath}`;
}
