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
  { label: "HOTEL", href: "/otel-dijital-pazarlama-sss" }
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
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },

    "google-ads-yonetimi-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },

      "youtube-reklam-yonetimi-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },

      "remarketing-ve-display-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },

      "donusum-takibi-tag-manager-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },

        "reklam-raporlama-sss": {
    mode: "children",
    title: "SEM",
    chips: [
      { label: "SEM (Genel)", href: "/sem-sss" },
      { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
      { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
      { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
      { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
      { label: "Raporlama", href: "/reklam-raporlama-sss" },
    ],
  },


  // ... SMM-SSS, Yazılım-SSS, Creative-SSS vs ekleyeceğiz (9 tane)
};
