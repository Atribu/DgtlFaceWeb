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
  "/Services/pms": "/og/og-pms.png",
  "/Services/hotel": "/og/og-hotel.png",
  "/Services/digitalAnalysis": "/og/og-reporting.png",
};

export function getOgImageByPathnameKey(pathnameKey) {
  return OG_IMAGE_MAP[pathnameKey] || "/og/og-default.png";
}
