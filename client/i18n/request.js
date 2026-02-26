import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {headers} from 'next/headers';
import {routing} from './routing';

const HOME_MESSAGE_KEYS = new Set([
  'Header',
  'Footer',
  'Homepage',
  'AboutPage',
  'CookiePopup',
  'LocaleSwitcher',
  'Blog'
]);

const localeMessagesCache = new Map();
const homepageMessagesCache = new Map();

function cleanPathname(input) {
  if (!input) return '';

  const raw = String(input).trim();
  if (!raw) return '';

  try {
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      return new URL(raw).pathname || '';
    }
  } catch {}

  if (!raw.startsWith('/')) return '';

  const pathname = raw.split('?')[0];
  return pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
}

function isHomepageRequestByValue(value, locale) {
  if (!value) return false;

  const pathname = cleanPathname(value);
  if (pathname === '/' || pathname === `/${locale}`) return true;

  const raw = String(value).split('?')[0];
  return raw === '/[locale]' || raw === '/[locale]/page';
}

async function isHomepageRequest(locale) {
  try {
    const headerList = await headers();
    const pathHeaders = [
      'next-url',
      'x-next-url',
      'x-pathname',
      'x-invoke-path',
      'x-matched-path',
      'x-nextjs-matched-path'
    ];

    return pathHeaders.some((key) =>
      isHomepageRequestByValue(headerList.get(key), locale)
    );
  } catch {
    return false;
  }
}

async function loadLocaleMessages(locale) {
  if (localeMessagesCache.has(locale)) {
    return localeMessagesCache.get(locale);
  }

  const loaded = (await import(`../messages/${locale}.json`)).default;
  localeMessagesCache.set(locale, loaded);
  return loaded;
}

function buildHomepageMessages(allMessages) {
  return allMessages && typeof allMessages === 'object'
    ? Object.fromEntries(
        Object.entries(allMessages).filter(([key]) => HOME_MESSAGE_KEYS.has(key))
      )
    : allMessages;
}

function getHomepageMessagesFromCache(locale) {
  const cacheKey = `${locale}:home`;
  if (homepageMessagesCache.has(cacheKey)) {
    return homepageMessagesCache.get(cacheKey);
  }
  return null;
}

function setHomepageMessagesCache(locale, messages) {
  const cacheKey = `${locale}:home`;
  homepageMessagesCache.set(cacheKey, messages);
  return messages;
}

async function loadHomepageMessages(locale) {
  const cached = getHomepageMessagesFromCache(locale);
  if (cached) return cached;

  // Sonraki adımda buraya namespace-split hafif dosyalar eklenecek.
  // Dosya yoksa mevcut davranışa güvenli fallback.
  try {
    const homeOnly = (await import(`../messages/home/${locale}.json`)).default;
    return setHomepageMessagesCache(locale, homeOnly);
  } catch {}

  const allMessages = await loadLocaleMessages(locale);
  return setHomepageMessagesCache(locale, buildHomepageMessages(allMessages));
}
 
export default getRequestConfig(async ({requestLocale, locale: explicitLocale}) => {
  // Typically corresponds to the ⁠ [locale] ⁠ segment
  const requested = explicitLocale ?? (await requestLocale);
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const homepageOnly = await isHomepageRequest(locale);
  const messages = homepageOnly
    ? await loadHomepageMessages(locale)
    : await loadLocaleMessages(locale);

  return {
    locale,
    // Homepage için minimal namespace seti; tespit başarısızsa otomatik full fallback.
    messages
  };
});