import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['tr', 'en', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix : "always",
   pathnames : {
    "/": {
      en: "/",
      tr: "/",
      ru: "/",
    }
  }
  })