// app/lib/og-map.js
export const OG_IMAGE_MAP = {
  "/": "/og/og-home.png",
  "/Services": "/og/og-services.png",

  "/Services/seo": "/og/og-seo.png",
  "/Services/sem": "/og/og-sem.png",
  "/Services/smm": "/og/og-smm.png",
  "/Services/software": "/og/og-software.png",
  "/Services/creative": "/og/og-creative.png",
  "/Services/callcenter": "/og/og-callcenter.png",
  "/Services/pms-ota": "/og/og-pms.png",
  "/Services/hotel": "/og/og-hotel.png",
  "/Services/digitalAnalysis": "/og/og-reporting.png",

  
   "/Services/sem/googleAdsAdvertising": "/og/dgtlface.com_tr_sem_google-ads-yonetimi.jpeg",
  "/Services/sem/youtubeAdvertising": "/og/dgtlface.com_tr_sem_youtube-reklam-yonetimi.jpeg",
  "/Services/sem/remarketingDisplay": "/og/dgtlface.com_tr_sem_remarketing-ve-display.jpeg",
  "/Services/sem/tagManager": "/og/dgtlface.com_tr_sem_donusum-takibi-tag-manager.jpeg",
  "/Services/sem/performanceAnalysis": "/og/dgtlface.com_tr_sem_reklam-raporlama.jpeg",
};

export function getOgImageByPathnameKey(pathnameKey) {
  return OG_IMAGE_MAP[pathnameKey] || "/og/og-default.png";
}
