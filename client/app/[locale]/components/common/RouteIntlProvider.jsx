import { NextIntlClientProvider } from "next-intl";

export const COMMON_CLIENT_MESSAGE_KEYS = new Set([
  "Header",
  "Footer",
  "CookiePopup",
  "LocaleSwitcher",
]);

export const HOME_CLIENT_MESSAGE_KEYS = new Set([
  ...COMMON_CLIENT_MESSAGE_KEYS,
  "Homepage",
  "AboutPage",
  "Blog",
]);

export const BLOG_CLIENT_MESSAGE_KEYS = new Set([
  ...COMMON_CLIENT_MESSAGE_KEYS,
  "Blog",
]);

export const CONTACT_CLIENT_MESSAGE_KEYS = new Set([
  ...COMMON_CLIENT_MESSAGE_KEYS,
  "ContactPage",
]);

export const ABOUT_CLIENT_MESSAGE_KEYS = new Set([
  ...COMMON_CLIENT_MESSAGE_KEYS,
  "AboutPage",
]);

export const VIDEO_CLIENT_MESSAGE_KEYS = new Set([
  ...COMMON_CLIENT_MESSAGE_KEYS,
  "Homepage",
]);

export function pickFaqClientMessages(messages) {
  return Object.fromEntries(
    Object.entries(messages || {}).filter(
      ([key]) =>
        COMMON_CLIENT_MESSAGE_KEYS.has(key) ||
        key === "faqChips" ||
        key.startsWith("Faq")
    )
  );
}

const SERVER_ONLY_NAMESPACES = new Set(["BlogPosts"]);

async function loadLocaleMessages(locale) {
  return (await import(`../../../../messages/${locale}.json`)).default;
}

function filterMessagesByKeys(messages, keys) {
  return Object.fromEntries(
    Object.entries(messages || {}).filter(([key]) => keys.has(key))
  );
}

export async function loadCommonClientMessages(locale) {
  const messages = await loadLocaleMessages(locale);
  return filterMessagesByKeys(messages, COMMON_CLIENT_MESSAGE_KEYS);
}

export async function loadHomeClientMessages(locale) {
  try {
    return (await import(`../../../../messages/home/${locale}.json`)).default;
  } catch {
    const messages = await loadLocaleMessages(locale);
    return filterMessagesByKeys(messages, HOME_CLIENT_MESSAGE_KEYS);
  }
}

export async function loadClientMessagesByKeys(locale, keys) {
  const messages = await loadLocaleMessages(locale);
  return filterMessagesByKeys(messages, keys);
}

export async function loadFaqClientMessages(locale) {
  const messages = await loadLocaleMessages(locale);
  return pickFaqClientMessages(messages);
}

export async function loadDefaultRouteClientMessages(locale) {
  const messages = await loadLocaleMessages(locale);
  return Object.fromEntries(
    Object.entries(messages || {}).filter(
      ([key]) => !key.startsWith("Faq") && !SERVER_ONLY_NAMESPACES.has(key)
    )
  );
}

export default function RouteIntlProvider({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
