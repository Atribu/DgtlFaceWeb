// app/lib/seo-utils.js
import { seoConfig } from '../../i18n/seoConfig'; 

export function getSeoData(pathname, locale) {
  const pageSeo = seoConfig[pathname];
  const seoData = (pageSeo && pageSeo[locale]) ? pageSeo[locale] : {
    title: "DGTLFACE | Dijital Pazarlama ve Yazılım Çözümleri",
    description: "Turizm odaklı dijital ajansınız.",
  };
  return seoData;
}