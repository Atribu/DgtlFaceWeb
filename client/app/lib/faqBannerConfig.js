// lib/faqBannerConfig.js

export const MAIN_SERVICES_CHIPS = [
  { label: "SEM", href: "/sem-sss" },
  { label: "SEO", href: "/seo-sss" },
  { label: "SMM", href: "/smm-sss" },
  { label: "YAZILIM", href: "/yazilim-sss" },
  { label: "CREATIVE", href: "/creative-sss" },
  { label: "ÇAĞRI MERKEZİ", href: "/cagri-merkezi-sss" },
  { label: "PMS & OTA", href: "/pms-ota-sss" },
  { label: "DİJİTAL ANALİZ", href: "/veri-analiz-ve-raporlama-sss" },
  { label: "HOTEL", href: "/otel-dijital-pazarlama-sss" },
];

// SSS sayfası slug’ına göre “baloncuk seti”
export const FAQ_BANNER_MAP = {
  // Bu ikisinde ana hizmetler kalsın:
  "sss": { mode: "main" },
  "hizmetlerimiz-sss": { mode: "main" },

  // Ana hizmet SSS örnekleri:
  "seo-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-hizmetleri" },
      { label: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" },
      { label: "İçerik SEO", href: "/seo-hizmetleri/icerik-seo" },
      { label: "Local SEO", href: "/seo-hizmetleri/local-seo" },
      { label: "Otel SEO", href: "/otel/seo" },
    ],
  },

  "sem-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem" },
      { label: "Google Ads", href: "/sem/google-ads-yonetimi" },
      { label: "YouTube Ads", href: "/sem/youtube-reklam-yonetimi" },
      { label: "Remarketing & Display", href: "/sem/remarketing-ve-display" },
      { label: "Dönüşüm Takibi", href: "/sem/donusum-takibi-tag-manager" },
      { label: "Raporlama", href: "/sem/reklam-raporlama" },
    ],
  },


  // ... SMM-SSS, Yazılım-SSS, Creative-SSS vs ekleyeceğiz (9 tane)
};
