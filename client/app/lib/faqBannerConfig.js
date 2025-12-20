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

    "seo-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

      "teknik-seo-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

      "icerik-seo-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

      "local-seo-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

      "backlink-yonetimi-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

      "seo-raporlama-sss": {
    mode: "children",
    title: "SEO",
    chips: [
      { label: "SEO (Genel)", href: "/seo-sss" },
      { label: "Teknik SEO", href: "/teknik-seo-sss" },
      { label: "İçerik SEO", href: "/icerik-seo-sss" },
      { label: "Local SEO", href: "/local-seo-sss" },
      { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
       { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
    ],
  },

    "smm-sss": {
    mode: "children",
    title: "SMM",
    chips: [
      { label: "SMM (Genel)", href: "/smm-sss" },
      { label: "İçerik Üretimi", href: "/icerik-uretimi-sss" },
      { label: "Planlama Strateji", href: "/planlama-strateji-sss" },
      { label: "Reels Video", href: "/reels-video-sss" },
      { label: "Sosyal Medya Reklamları", href: "/sosyal-medya-reklamlari-sss" },
       { label: "Analiz Raporlama", href: "/analiz-raporlama-sss" },
    ],
  },

      "yazilim-sss": {
    mode: "children",
    title: "YAZILIM",
    chips: [
      { label: "YAZILIM (Genel)", href: "/yazilim-sss" },
       { label: "Web Sitesi Geliştirme", href: "/web-sitesi-gelistirme-sss" },
      { label: "CMS Entegrasyonu", href: "/cms-entegrasyonu-sss" },
      { label: "KVKK Uyum Hizmeti", href: "/kvkk-uyum-hizmeti-sss" },
      { label: "Sunucu Güvenlik", href: "/sunucu-güvenlik-sss" },
      { label: "Bakım ve Güvenlik", href: "/bakim-destek-sss" },
    ],
  },

   "web-sitesi-gelistirme-sss": {
    mode: "children",
    title: "Web Sitesi Geliştirme",
    chips: [
      { label: "YAZILIM (Genel)", href: "/yazilim-sss" },
       { label: "Web Sitesi Geliştirme", href: "/web-sitesi-gelistirme-sss" },
      { label: "CMS Entegrasyonu", href: "/cms-entegrasyonu-sss" },
      { label: "KVKK Uyum Hizmeti", href: "/kvkk-uyum-hizmeti-sss" },
      { label: "Sunucu Güvenlik", href: "/sunucu-güvenlik-sss" },
      { label: "Bakım ve Güvenlik", href: "/bakim-destek-sss" },
    ],
  },
  
        "creative-sss": {
    mode: "children",
    title: "CREATIVE",
    chips: [
      { label: "CREATIVE (Genel)", href: "/creative-sss" },
       { label: "Grafik Motion Tasarım", href: "/grafik-motion-tasarim-sss" },
      { label: "UI/UX Dizayn", href: "/ui-ux-hizmeti-sss" },
      { label: "Video Prodüksiyon", href: "/video-ve-produksiyon-sss" },
      { label: "Etkinlik Prodüksiyon", href: "/etkinlik-produksiyonu-sss" },
      { label: "Kurumsal Hediye", href: "/kurumsal-hediye-sss" },
    ],
  },


  // ... SMM-SSS, Yazılım-SSS, Creative-SSS vs ekleyeceğiz (9 tane)
};
