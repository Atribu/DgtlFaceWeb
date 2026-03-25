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
const BLOG_MESSAGE_KEYS = new Set([
  'Header',
  'Footer',
  'CookiePopup',
  'LocaleSwitcher',
  'Blog'
]);
const FAQ_MESSAGE_KEYS = new Set([
  'Header',
  'Footer',
  'CookiePopup',
  'LocaleSwitcher',
  'faqChips'
]);
const SERVICE_SHARED_MESSAGE_KEYS = [
  'Header',
  'Footer',
  'Homepage',
  'AboutPage',
  'CookiePopup',
  'LocaleSwitcher'
];
const SERVICE_ROUTE_NAMESPACE_MAP = new Map([
  ['/Services', 'ServicesPage'],
  ['/Services/callcenter', 'Callcenter'],
  ['/Services/callcenter/aftersalesSupport', 'AfterSalesSupportPage'],
  ['/Services/callcenter/callLanguages', 'CallCenter4LangPage'],
  ['/Services/callcenter/callPerformance', 'CallCenterPerformancePage'],
  ['/Services/callcenter/messageManagement', 'SocialMediaMessageManagementPage'],
  ['/Services/callcenter/reservationSupport', 'HotelReservationCallCenterPage'],
  ['/Services/creative', 'CreativePage'],
  ['/Services/creative/corporateGift', 'CorporateGiftsPage'],
  ['/Services/creative/eventProduction', 'EventProductionPage'],
  ['/Services/creative/graphicDesign', 'GraphicMotion'],
  ['/Services/creative/uiUxDesign', 'UiUxPage'],
  ['/Services/creative/videoProduction', 'VideoPage'],
  ['/Services/digitalAnalysis', 'DigitalAnalysis'],
  ['/Services/digitalAnalysis/digitalSalesAnalysis', 'SalesConversionReportingPage'],
  ['/Services/digitalAnalysis/kvkkDataSecurity', 'KvkkSecurityPage'],
  ['/Services/digitalAnalysis/lookerStudio', 'LookerStudioReportingPage'],
  ['/Services/digitalAnalysis/onlineMarketResearchService', 'BenchmarkAnalysisPage'],
  ['/Services/hotel', 'Hotel'],
  ['/Services/hotel/adsManagement', 'OtelAdsPage'],
  ['/Services/hotel/callCenter', 'HotelCallCenter'],
  ['/Services/hotel/otaManagement', 'OtaManagementPage'],
  ['/Services/hotel/pmsIntegration', 'PmsIntegrationPage'],
  ['/Services/hotel/seo', 'OtelSeoPage'],
  ['/Services/hotel/socialMedia', 'OtelSocialMediaPage'],
  ['/Services/pms', 'Pms'],
  ['/Services/pms/channelManagement', 'ChannelManagementPage'],
  ['/Services/pms/otaContract', 'OtaIntegrationPage'],
  ['/Services/pms/pmsInstallation', 'PmsSetupPage'],
  ['/Services/pms/reservationManagement', 'ReservationManagementPage'],
  ['/Services/pms/webPayment', 'OnlineSalesOptimizationPage'],
  ['/Services/sem', 'Sem'],
  ['/Services/sem/googleAdsAdvertising', 'GoogleAdsAdvertising'],
  ['/Services/sem/performanceAnalysis', 'PerformanceAnalysis'],
  ['/Services/sem/remarketingDisplay', 'RemarketingDisplay'],
  ['/Services/sem/tagManager', 'TagManager'],
  ['/Services/sem/youtubeAdvertising', 'YoutubeAdvertising'],
  ['/Services/seo', 'Seo'],
  ['/Services/seo/backlinkSeo', 'BacklinkSeo'],
  ['/Services/seo/contentSeo', 'ContentSeo'],
  ['/Services/seo/localSeo', 'LocalSeo'],
  ['/Services/seo/seoReporting', 'SeoReporting'],
  ['/Services/seo/technicalSeo', 'TechnicalSeo'],
  ['/Services/smm', 'Smm'],
  ['/Services/smm/reelsVideo', 'ReelsVideo'],
  ['/Services/smm/socialMediaAds', 'SmmAds'],
  ['/Services/smm/socialMediaContent', 'SocialMediaContent'],
  ['/Services/smm/socialMediaPlanning', 'SocialMediaStrategy'],
  ['/Services/smm/socialMediaReporting', 'SmmAnalyticsReporting'],
  ['/Services/software', 'Software'],
  ['/Services/software/cmsInstallationService', 'CMS'],
  ['/Services/software/kvkk', 'KVKK'],
  ['/Services/software/serverManagementService', 'ServerSecurity'],
  ['/Services/software/websiteAndSoftware', 'WebDev'],
  ['/Services/software/websiteMaintanceService', 'SoftwareMaintenance']
]);

const localeMessagesCache = new Map();
const homepageMessagesCache = new Map();
const blogMessagesCache = new Map();
const faqMessagesCache = new Map();
const serviceMessagesCache = new Map();

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

function stripLocalePrefix(pathname, locale) {
  if (!pathname) return '';

  const prefix = `/${locale}`;
  if (!pathname.startsWith(prefix)) return pathname;

  const stripped = pathname.slice(prefix.length);
  return stripped || '/';
}

function isBlogRequestByValue(value, locale) {
  if (!value) return false;

  const pathname = cleanPathname(value);
  const pathNoLocale = stripLocalePrefix(pathname, locale);

  return (
    pathNoLocale === '/blogs' ||
    pathNoLocale === '/bloglar' ||
    /^\/[^/]+\/bloglar$/.test(pathNoLocale) ||
    /^\/[^/]+\/blog\/[^/]+$/.test(pathNoLocale)
  );
}

function isFaqRequestByValue(value, locale) {
  if (!value) return false;

  const pathname = cleanPathname(value);
  const pathNoLocale = stripLocalePrefix(pathname, locale);

  return (
    pathNoLocale === '/faq' ||
    pathNoLocale === '/sss' ||
    pathNoLocale === '/services-faq' ||
    pathNoLocale === '/hizmetlerimiz-sss' ||
    /(?:^|\/)[^/]+-(faq|sss)$/.test(pathNoLocale)
  );
}

function normalizeServicePath(pathname) {
  if (!pathname) return '';
  return pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
}

function getServiceNamespaceByPath(pathname, locale) {
  const normalizedPath = normalizeServicePath(pathname);

  for (const [internalPath, namespace] of SERVICE_ROUTE_NAMESPACE_MAP) {
    const localizedPath = routing?.pathnames?.[internalPath]?.[locale];

    if (
      normalizedPath === internalPath ||
      normalizedPath === normalizeServicePath(localizedPath)
    ) {
      return namespace;
    }
  }

  return null;
}

function getServiceNamespaceByValue(value, locale) {
  if (!value) return null;

  const pathname = cleanPathname(value);
  const pathNoLocale = stripLocalePrefix(pathname, locale);
  return getServiceNamespaceByPath(pathNoLocale, locale);
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

async function getRequestKind(locale) {
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

    const values = pathHeaders
      .map((key) => headerList.get(key))
      .filter(Boolean);

    if (values.some((value) => isHomepageRequestByValue(value, locale))) {
      return 'home';
    }

    if (values.some((value) => isBlogRequestByValue(value, locale))) {
      return 'blog';
    }

    if (values.some((value) => isFaqRequestByValue(value, locale))) {
      return 'faq';
    }

    const serviceNamespace = values
      .map((value) => getServiceNamespaceByValue(value, locale))
      .find(Boolean);

    if (serviceNamespace) {
      return {
        kind: 'service',
        serviceNamespace
      };
    }
  } catch {}

  return {kind: 'default'};
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

function buildFilteredMessages(allMessages, allowedKeys) {
  return allMessages && typeof allMessages === 'object'
    ? Object.fromEntries(
        Object.entries(allMessages).filter(([key]) => allowedKeys.has(key))
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

async function loadBlogMessages(locale) {
  const cacheKey = `${locale}:blog`;
  if (blogMessagesCache.has(cacheKey)) {
    return blogMessagesCache.get(cacheKey);
  }

  const allMessages = await loadLocaleMessages(locale);
  const messages = buildFilteredMessages(allMessages, BLOG_MESSAGE_KEYS);
  blogMessagesCache.set(cacheKey, messages);
  return messages;
}

async function loadFaqMessages(locale) {
  const cacheKey = `${locale}:faq`;
  if (faqMessagesCache.has(cacheKey)) {
    return faqMessagesCache.get(cacheKey);
  }

  const allMessages = await loadLocaleMessages(locale);
  const messages = buildFilteredMessages(allMessages, FAQ_MESSAGE_KEYS);
  faqMessagesCache.set(cacheKey, messages);
  return messages;
}

async function loadServiceMessages(locale, serviceNamespace) {
  const cacheKey = `${locale}:service:${serviceNamespace}`;
  if (serviceMessagesCache.has(cacheKey)) {
    return serviceMessagesCache.get(cacheKey);
  }

  const allowedKeys = new Set([
    ...SERVICE_SHARED_MESSAGE_KEYS,
    serviceNamespace
  ]);

  const allMessages = await loadLocaleMessages(locale);
  const messages = buildFilteredMessages(allMessages, allowedKeys);
  serviceMessagesCache.set(cacheKey, messages);
  return messages;
}
 
export default getRequestConfig(async ({requestLocale, locale: explicitLocale}) => {
  // Typically corresponds to the ⁠ [locale] ⁠ segment
  const requested = explicitLocale ?? (await requestLocale);
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const requestInfo = await getRequestKind(locale);
  const messages =
    requestInfo.kind === 'home'
      ? await loadHomepageMessages(locale)
      : requestInfo.kind === 'blog'
        ? await loadBlogMessages(locale)
        : requestInfo.kind === 'faq'
          ? await loadFaqMessages(locale)
          : requestInfo.kind === 'service' && requestInfo.serviceNamespace
            ? await loadServiceMessages(locale, requestInfo.serviceNamespace)
            : await loadLocaleMessages(locale);

  return {
    locale,
    // Homepage için minimal namespace seti; tespit başarısızsa otomatik full fallback.
    messages
  };
});
