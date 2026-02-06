// TR route -> FAQ slug
// Not: match'leri en spesifikten en genele doğru yaz (ilk eşleşen kazanır)

export const FAQ_ROUTE_MAP = [
  // -----------------------------
  // PMS / OTA
  // -----------------------------
  { match: /^\/pms-ota\/pms-kurulum(\/.*)?$/, slug: "pms-kurulum-sss" },
  { match: /^\/pms-ota\/ota-entegrasyonu(\/.*)?$/, slug: "ota-entegrasyonu-sss" },
  { match: /^\/pms-ota\/rezervasyon-yonetimi(\/.*)?$/, slug: "rezervasyon-yonetimi-sss" },
  { match: /^\/pms-ota\/kanal-yonetimi(\/.*)?$/, slug: "kanal-yonetimi-sss" },
  { match: /^\/pms-ota\/online-satis(\/.*)?$/, slug: "online-satis-sss" },
  { match: /^\/pms-ota(\/.*)?$/, slug: "pms-ota-sss" },


  { match: /^\/en\/pms-ota\/pms-integration(\/.*)?$/, slug: "pms-integration-faq" },
  { match: /^\/en\/pms-ota\/ota-contract(\/.*)?$/, slug: "ota-contract-faq" },
  { match: /^\/en\/pms-ota\/reservation-management(\/.*)?$/, slug: "reservation-management-faq" },
  { match: /^\/en\/pms-ota\/channel-management(\/.*)?$/, slug: "channel-management-faq" },
  { match: /^\/en\/pms-ota\/web-payment(\/.*)?$/, slug: "web-payment-faq" },
  { match: /^\/en\/pms-ota(\/.*)?$/, slug: "pms-ota-faq" },

  // -----------------------------
  // Call Center
  // -----------------------------
  { match: /^\/cagri-merkezi\/4-dilli-cagri-merkezi(\/.*)?$/, slug: "4-dilli-cagri-merkezi-sss" },
  { match: /^\/cagri-merkezi\/performans-analizi(\/.*)?$/, slug: "performans-analizi-sss" },
  { match: /^\/cagri-merkezi\/mesaj-yonetimi(\/.*)?$/, slug: "mesaj-yonetimi-sss" },
  { match: /^\/cagri-merkezi\/satis-sonrasi-destek(\/.*)?$/, slug: "satis-sonrasi-destek-sss" },
  { match: /^\/cagri-merkezi\/rezervasyon-destegi(\/.*)?$/, slug: "rezervasyon-destegi-sss" },
  { match: /^\/cagri-merkezi(\/.*)?$/, slug: "cagri-merkezi-sss" },


    { match: /^\/en\/call-center\/multilingual-call-center(\/.*)?$/, slug: "multilingual-call-center-faq" },
  { match: /^\/en\/call-center\/performance-analysis(\/.*)?$/, slug: "performance-analysis-faq" },
  { match: /^\/en\/call-center\/message-management(\/.*)?$/, slug: "message-management-faq" },
  { match: /^\/en\/call-center\/after-sales-support(\/.*)?$/, slug: "after-sales-support-faq" },
  { match: /^\/en\/call-center\/reservation-support(\/.*)?$/, slug: "reservation-support-faq" },
  { match: /^\/en\/call-center(\/.*)?$/, slug: "call-center-faq" },

  // -----------------------------
  // Creative
  // -----------------------------
  { match: /^\/creative\/kurumsal-hediye(\/.*)?$/, slug: "kurumsal-hediye-tasarimi-sss" },
  { match: /^\/creative\/etkinlik-produksiyonu(\/.*)?$/, slug: "etkinlik-produksiyonu-sss" },
  { match: /^\/creative\/video-produksiyon(\/.*)?$/, slug: "video-produksiyon-sss" },
  { match: /^\/creative\/ui-ux-tasarim(\/.*)?$/, slug: "ui-ux-tasarim-sss" },
  { match: /^\/creative\/grafik-motion-tasarim(\/.*)?$/, slug: "grafik-motion-tasarim-sss" },
  { match: /^\/creative(\/.*)?$/, slug: "creative-sss" },


  // English
 { match: /^\/en\/creative-design\/corporate-gift(\/.*)?$/, slug: "corporate-gift-faq" },
  { match: /^\/en\/creative-design\/event-production(\/.*)?$/, slug: "event-production-faq" },
  { match: /^\/en\/creative-design\/video-production(\/.*)?$/, slug: "video-production-faq" },
  { match: /^\/en\/creative-design\/ui-ux-design(\/.*)?$/, slug: "ui-ux-design-faq" },
  { match: /^\/en\/creative-design\/graphic-motion-design(\/.*)?$/, slug: "graphic-motion-design-faq" },
  { match: /^\/en\/creative-design(\/.*)?$/, slug: "creative-design-faq" },


  // -----------------------------
  // Raporlama
  // -----------------------------
  { match: /^\/raporlama\/looker-studio(\/.*)?$/, slug: "looker-studio-sss" },
  { match: /^\/raporlama\/kvkk-veri-guvenligi(\/.*)?$/, slug: "kvkk-veri-guvenligi-sss" },
  { match: /^\/raporlama\/satis-donusum(\/.*)?$/, slug: "satis-donusumu-sss" },
  { match: /^\/raporlama\/benchmark-analizi(\/.*)?$/, slug: "benchmark-analiz-sss" },
  { match: /^\/raporlama(\/.*)?$/, slug: "veri-analiz-ve-raporlama-sss" },


  { match: /^\/en\/digital-analysis\/looker-studio(\/.*)?$/, slug: "looker-studio-faq" },
  { match: /^\/en\/digital-analysis\/kvkk-data-security(\/.*)?$/, slug: "kvkk-data-security-faq" },
  { match: /^\/en\/digital-analysis\/digital-sales-analysis(\/.*)?$/, slug: "digital-sales-analysis-faq" },
  { match: /^\/en\/digital-analysis\/benchmark-analysis(\/.*)?$/, slug: "benchmark-analysis-faq" },
  { match: /^\/en\/digital-analysis(\/.*)?$/, slug: "digital-analysis-faq" },

  // -----------------------------
  // SEM
  // -----------------------------
  { match: /^\/sem\/youtube-reklam-yonetimi(\/.*)?$/, slug: "youtube-reklam-yonetimi-sss" },
  { match: /^\/sem\/google-ads-yonetimi(\/.*)?$/, slug: "google-ads-yonetimi-sss" },
  { match: /^\/sem\/remarketing-ve-display(\/.*)?$/, slug: "remarketing-ve-display-sss" },
  { match: /^\/sem\/donusum-takibi-tag-manager(\/.*)?$/, slug: "donusum-takibi-tag-manager-sss" },
  { match: /^\/sem\/reklam-raporlama(\/.*)?$/, slug: "reklam-raporlama-sss" },
  { match: /^\/sem(\/.*)?$/, slug: "sem-sss" },


  // English
  { match: /^\/en\/search-engine-marketing\/youtube-advertising-management(\/.*)?$/, slug: "youtube-advertising-management-faq" },
  { match: /^\/en\/search-engine-marketing\/google-ads-advertising(\/.*)?$/, slug: "google-ads-advertising-faq" },
  { match: /^\/en\/search-engine-marketing\/remarketing-and-display(\/.*)?$/, slug: "remarketing-and-display-faq" },
  { match: /^\/en\/search-engine-marketing\/tag-manager(\/.*)?$/, slug: "tag-manager-faq" },
  { match: /^\/en\/search-engine-marketing\/performance-analysis(\/.*)?$/, slug: "performance-analysis-faq" },
  { match: /^\/en\/search-engine-marketing(\/.*)?$/, slug: "search-engine-marketing-faq" },

  // -----------------------------
  // SEO
  // -----------------------------
  { match: /^\/seo\/teknik-seo(\/.*)?$/, slug: "teknik-seo-sss" },
  { match: /^\/seo\/yerel-seo(\/.*)?$/, slug: "local-seo-sss" },
  { match: /^\/seo\/icerik-seo(\/.*)?$/, slug: "icerik-seo-sss" },
  { match: /^\/seo\/backlink-yonetimi(\/.*)?$/, slug: "backlink-yonetimi-sss" },
  { match: /^\/seo\/seo-raporlama(\/.*)?$/, slug: "seo-raporlama-sss" },
  { match: /^\/seo(\/.*)?$/, slug: "seo-sss" },


 { match: /^\/en\/search-engine-optimization\/technical-seo(\/.*)?$/, slug: "technical-seo-faq" },
  { match: /^\/en\/search-engine-optimization\/local-seo(\/.*)?$/, slug: "local-seo-faq" },
  { match: /^\/en\/search-engine-optimization\/content-seo(\/.*)?$/, slug: "content-seo-faq" },
  { match: /^\/en\/search-engine-optimization\/backlink-seo(\/.*)?$/, slug: "backlink-seo-faq" },
  { match: /^\/en\/search-engine-optimization\/seo-reporting(\/.*)?$/, slug: "seo-reporting-faq" },
  { match: /^\/en\/search-engine-optimization(\/.*)?$/, slug: "search-engine-optimization-faq" },

  // -----------------------------
  // SMM
  // -----------------------------
  { match: /^\/smm\/icerik-uretimi(\/.*)?$/, slug: "icerik-uretimi-sss" },
  { match: /^\/smm\/planlama-strateji(\/.*)?$/, slug: "planlama-strateji-sss" },
  { match: /^\/smm\/reels-video(\/.*)?$/, slug: "reels-video-sss" },
  { match: /^\/smm\/sosyal-medya-reklamlari(\/.*)?$/, slug: "sosyal-medya-reklamlari-sss" },
  { match: /^\/smm\/analiz-raporlama(\/.*)?$/, slug: "analiz-raporlama-sss" },
  { match: /^\/smm(\/.*)?$/, slug: "smm-sss" },

  // English
   { match: /^\/en\/social-media-management\/social-media-content(\/.*)?$/, slug: "social-media-content-faq" },
  { match: /^\/en\/social-media-management\/social-media-planning(\/.*)?$/, slug: "social-media-planning-faq" },
  { match: /^\/en\/social-media-management\/reels-video(\/.*)?$/, slug: "reels-video-faq" },
  { match: /^\/en\/social-media-management\/social-media-ads(\/.*)?$/, slug: "social-media-ads-faq" },
  { match: /^\/en\/social-media-management\/social-media-reporting(\/.*)?$/, slug: "social-media-reporting-faq" },
  { match: /^\/en\/social-media-management(\/.*)?$/, slug: "social-media-management-faq" },


  // -----------------------------
  // Yazılım
  // -----------------------------
  { match: /^\/yazilim\/cms-entegrasyonu(\/.*)?$/, slug: "cms-entegrasyonu-sss" },
  { match: /^\/yazilim\/kvkk-uyum-hizmeti(\/.*)?$/, slug: "kvkk-uyum-hizmeti-sss" },
  { match: /^\/yazilim\/sunucu-guvenlik(\/.*)?$/, slug: "sunucu-guvenlik-sss" },
  { match: /^\/yazilim\/web-sitesi-gelistirme(\/.*)?$/, slug: "web-sitesi-gelistirme-sss" },
  { match: /^\/yazilim\/bakim-ve-destek(\/.*)?$/, slug: "bakim-destek-sss" },
  { match: /^\/yazilim(\/.*)?$/, slug: "yazilim-sss" },


   // English
 { match: /^\/en\/software-development\/cms-installation(\/.*)?$/, slug: "cms-installation-faq" },
  { match: /^\/en\/software-development\/kvkk-compliance-service(\/.*)?$/, slug: "kvkk-compliance-service-faq" },
  { match: /^\/en\/software-development\/server-management(\/.*)?$/, slug: "server-management-faq" },
  { match: /^\/en\/software-development\/website-and-software(\/.*)?$/, slug: "website-and-software-faq" },
  { match: /^\/en\/software-development\/website-maintenance(\/.*)?$/, slug: "website-maintenance-faq" },
  { match: /^\/en\/software-development(\/.*)?$/, slug: "software-development-faq" },

  // -----------------------------
  // Otel sayfaları
  // -----------------------------
  { match: /^\/otel\/seo(\/.*)?$/, slug: "otel-seo-sss" },
  { match: /^\/otel\/sosyal-medya(\/.*)?$/, slug: "otel-sosyalmedya-sss" },
  { match: /^\/otel\/reklam-yonetimi(\/.*)?$/, slug: "otel-reklam-sss" },
  { match: /^\/otel\/ota-yonetimi(\/.*)?$/, slug: "otel-ota-sss" },
  { match: /^\/otel\/pms-entegrasyonu(\/.*)?$/, slug: "otel-pms-sss" },
  { match: /^\/otel\/cagri-merkezi(\/.*)?$/, slug: "otel-cagrimerkezi-sss" },
  { match: /^\/otel(\/.*)?$/, slug: "otel-dijital-pazarlama-sss" },


    // English
  { match: /^\/en\/hotel\/seo(\/.*)?$/, slug: "hotel-seo-faq" },
  { match: /^\/en\/hotel\/social-media(\/.*)?$/, slug: "hotel-social-media-faq" },
  { match: /^\/en\/hotel\/ads-management(\/.*)?$/, slug: "hotel-ads-management-faq" },
  { match: /^\/en\/hotel\/ota-management(\/.*)?$/, slug: "hotel-ota-management-faq" },
  { match: /^\/en\/hotel\/pms-integration(\/.*)?$/, slug: "hotel-pms-integration-faq" },
  { match: /^\/en\/hotel\/callcenter(\/.*)?$/, slug: "hotel-call-center-faq" },
  { match: /^\/en\/hotel(\/.*)?$/, slug: "hotel-digital-marketing-faq" },

  // -----------------------------
  // Genel fallback (istersen)
  // -----------------------------
  { match: /^\/hizmetlerimiz(\/.*)?$/, slug: "hizmetlerimiz-sss" },
      { match: /^\/en\/services(\/.*)?$/, slug: "services-faq" },


];

// app/[locale]/(faq)/faqRouteMap.js

// "Departman" crumb’ı hangi SSS sayfasına gitsin?
// Örn: teknik-seo-sss sayfasında departman crumb’ı seo-sss'e gitsin gibi.
export const FAQ_DEPT_CRUMB_MAP = {
  // Genel
  "sss": "sss", // departman yok

  // Services (SSS index altı)
  "hizmetlerimiz-sss": "hizmetlerimiz-sss",

  // SEO altları → seo-sss'e bağla
  "seo-sss": "seo-sss",
  "teknik-seo-sss": "seo-sss",
  "local-seo-sss": "seo-sss",
  "icerik-seo-sss": "seo-sss",
  "backlink-yonetimi-sss": "seo-sss",
  "seo-raporlama-sss": "seo-sss",

  // SEM altları → sem-sss'e bağla
  "sem-sss": "sem-sss",
  "google-ads-yonetimi-sss": "sem-sss",
  "youtube-reklam-yonetimi-sss": "sem-sss",
  "remarketing-ve-display-sss": "sem-sss",
  "donusum-takibi-tag-manager-sss": "sem-sss",
  "reklam-raporlama-sss": "sem-sss",

  // SMM altları → smm-sss'e bağla
  "smm-sss": "smm-sss",
  "icerik-uretimi-sss": "smm-sss",
  "planlama-strateji-sss": "smm-sss",
  "reels-video-sss": "smm-sss",
  "sosyal-medya-reklamlari-sss": "smm-sss",
  "analiz-raporlama-sss": "smm-sss",

  // Software altları → yazilim-sss'e bağla
  "yazilim-sss": "yazilim-sss",
  "web-sitesi-gelistirme-sss": "yazilim-sss",
  "cms-entegrasyonu-sss": "yazilim-sss",
  "kvkk-uyum-hizmeti-sss": "yazilim-sss",
  "sunucu-guvenlik-sss": "yazilim-sss",
  "bakim-destek-sss": "yazilim-sss",

  // Callcenter altları → cagri-merkezi-sss'e bağla
  "cagri-merkezi-sss": "cagri-merkezi-sss",
  "4-dilli-cagri-merkezi-sss": "cagri-merkezi-sss",
  "performans-analizi-sss": "cagri-merkezi-sss",
  "mesaj-yonetimi-sss": "cagri-merkezi-sss",
  "satis-sonrasi-destek-sss": "cagri-merkezi-sss",
  "rezervasyon-destegi-sss": "cagri-merkezi-sss",

  // PMS-OTA altları → pms-ota-sss'e bağla
  "pms-ota-sss": "pms-ota-sss",
  "pms-kurulum-sss": "pms-ota-sss",
  "ota-entegrasyonu-sss": "pms-ota-sss",
  "rezervasyon-yonetimi-sss": "pms-ota-sss",
  "kanal-yonetimi-sss": "pms-ota-sss",
  "online-satis-sss": "pms-ota-sss",

  // Raporlama altları → veri-analiz-ve-raporlama-sss'e bağla
  "veri-analiz-ve-raporlama-sss": "veri-analiz-ve-raporlama-sss",
  "looker-studio-sss": "veri-analiz-ve-raporlama-sss",
  "benchmark-analiz-sss": "veri-analiz-ve-raporlama-sss",
  "satis-donusumu-sss": "veri-analiz-ve-raporlama-sss",
  "kvkk-veri-guvenligi-sss": "veri-analiz-ve-raporlama-sss",

  // Otel silo altları → otel-dijital-pazarlama-sss'e bağla
  "otel-dijital-pazarlama-sss": "otel-dijital-pazarlama-sss",
  "otel-seo-sss": "otel-dijital-pazarlama-sss",
  "otel-sosyalmedya-sss": "otel-dijital-pazarlama-sss",
  "otel-reklam-sss": "otel-dijital-pazarlama-sss",
  "otel-ota-sss": "otel-dijital-pazarlama-sss",
  "otel-pms-sss": "otel-dijital-pazarlama-sss",
  "otel-cagrimerkezi-sss": "otel-dijital-pazarlama-sss",

  //en

  // Services
"services-faq": "services-faq",

// PMS/OTA
"pms-ota-faq": "pms-ota-faq",
"pms-integration-faq": "pms-ota-faq",
"ota-contract-faq": "pms-ota-faq",
"reservation-management-faq": "pms-ota-faq",
"channel-management-faq": "pms-ota-faq",
"web-payment-faq": "pms-ota-faq",

// Call Center
"call-center-faq": "call-center-faq",
"multilingual-call-center-faq": "call-center-faq",
"performance-analysis-faq": "call-center-faq",
"message-management-faq": "call-center-faq",
"after-sales-support-faq": "call-center-faq",
"reservation-support-faq": "call-center-faq",

// Creative
"creative-design-faq": "creative-design-faq",
"corporate-gift-faq": "creative-design-faq",
"event-production-faq": "creative-design-faq",
"video-production-faq": "creative-design-faq",
"ui-ux-design-faq": "creative-design-faq",
"graphic-motion-design-faq": "creative-design-faq",

// Reporting
"digital-analysis-faq": "digital-analysis-faq",
"looker-studio-faq": "digital-analysis-faq",
"kvkk-data-security-faq": "digital-analysis-faq",
"digital-sales-analysis-faq": "digital-analysis-faq",
"benchmark-analysis-faq": "digital-analysis-faq",

// SEM
"search-engine-marketing-faq": "search-engine-marketing-faq",
"youtube-advertising-management-faq": "search-engine-marketing-faq",
"google-ads-advertising-faq": "search-engine-marketing-faq",
"remarketing-and-display-faq": "search-engine-marketing-faq",
"tag-manager-faq": "search-engine-marketing-faq",
"performance-analysis-faq": "search-engine-marketing-faq",

// SEO
"search-engine-optimization-faq": "search-engine-optimization-faq",
"technical-seo-faq": "search-engine-optimization-faq",
"local-seo-faq": "search-engine-optimization-faq",
"content-seo-faq": "search-engine-optimization-faq",
"backlink-seo-faq": "search-engine-optimization-faq",
"seo-reporting-faq": "search-engine-optimization-faq",

// SMM
"social-media-management-faq": "social-media-management-faq",
"social-media-content-faq": "social-media-management-faq",
"social-media-planning-faq": "social-media-management-faq",
"reels-video-faq": "social-media-management-faq",
"social-media-ads-faq": "social-media-management-faq",
"social-media-reporting-faq": "social-media-management-faq",

// Software
"software-development-faq": "software-development-faq",
"cms-installation-faq": "software-development-faq",
"kvkk-compliance-service-faq": "software-development-faq",
"server-management-faq": "software-development-faq",
"website-and-software-faq": "software-development-faq",
"website-maintenance-faq": "software-development-faq",

// Hotel
"hotel-digital-marketing-faq": "hotel-digital-marketing-faq",
"hotel-seo-faq": "hotel-digital-marketing-faq",
"hotel-social-media-faq": "hotel-digital-marketing-faq",
"hotel-ads-management-faq": "hotel-digital-marketing-faq",
"hotel-ota-management-faq": "hotel-digital-marketing-faq",
"hotel-pms-integration-faq": "hotel-digital-marketing-faq",
"hotel-call-center-faq": "hotel-digital-marketing-faq",

};

// Departman label’ı için de opsiyonel label map
export const FAQ_DEPT_LABEL_MAP = {
  tr:{
    "seo-sss": "SEO",
  "sem-sss": "SEM",
  "smm-sss": "SMM",
  "yazilim-sss": "Yazılım",
  "cagri-merkezi-sss": "Çağrı Merkezi",
  "pms-ota-sss": "PMS & OTA",
  "veri-analiz-ve-raporlama-sss": "Raporlama",
  "otel-dijital-pazarlama-sss": "Otel Dijital Pazarlama",
  "hizmetlerimiz-sss": "Hizmetler",
  },

  en:{
"social-media-management-faq": "Social Media Management",
    "search-engine-optimization-faq": "Search Engine Optimization",
    "search-engine-marketing-faq": "Search Engine Marketing",
    "software-development-faq": "Software Development",
    "creative-design-faq": "Creative",
    "call-center-faq": "Call Center",
    "pms-ota-faq": "PMS & OTA",
    "digital-analysis-faq": "Digital Analysis",
    "hotel-faq": "Hotel",
    "services-faq": "Our Services FAQ",
    "faq": "FAQ",
  }
};

// faqRouteMap.js

// slug -> dept segment (örn reels-video-sss -> smm)
export const FAQ_SLUG_DEPT_SEGMENT_MAP = {
  tr:{
    // SEM
  "google-ads-yonetimi-sss": "sem",
  "youtube-reklam-yonetimi-sss": "sem",
  "remarketing-ve-display-sss": "sem",
  "donusum-takibi-tag-manager-sss": "sem",
  "reklam-raporlama-sss": "sem",

  // SEO
  "teknik-seo-sss": "seo",
  "local-seo-sss": "seo",
  "icerik-seo-sss": "seo",
  "backlink-yonetimi-sss": "seo",
  "seo-raporlama-sss": "seo",

  // SMM
  "icerik-uretimi-sss": "smm",
  "planlama-strateji-sss": "smm",
  "reels-video-sss": "smm",
  "sosyal-medya-reklamlari-sss": "smm",
  "analiz-raporlama-sss": "smm",

  // Yazılım
  "web-sitesi-gelistirme-sss": "yazilim",
  "cms-entegrasyonu-sss": "yazilim",
  "kvkk-uyum-hizmeti-sss": "yazilim",
  "sunucu-guvenlik-sss": "yazilim",
  "bakim-destek-sss": "yazilim",

  // Creative
  "kurumsal-hediye-tasarimi-sss": "creative",
  "etkinlik-produksiyonu-sss": "creative",
  "video-produksiyon-sss": "creative",
  "ui-ux-tasarim-sss": "creative",
  "grafik-motion-tasarim-sss": "creative",

  // Call center
  "4-dilli-cagri-merkezi-sss": "cagri-merkezi",
  "performans-analizi-sss": "cagri-merkezi",
  "mesaj-yonetimi-sss": "cagri-merkezi",
  "satis-sonrasi-destek-sss": "cagri-merkezi",
  "rezervasyon-destegi-sss": "cagri-merkezi",

  // PMS-OTA
  "pms-kurulum-sss": "pms-ota",
  "ota-entegrasyonu-sss": "pms-ota",
  "rezervasyon-yonetimi-sss": "pms-ota",
  "kanal-yonetimi-sss": "pms-ota",
  "online-satis-sss": "pms-ota",

  // Raporlama
  "looker-studio-sss": "raporlama",
  "benchmark-analiz-sss": "raporlama",
  "satis-donusumu-sss": "raporlama",
  "kvkk-veri-guvenligi-sss": "raporlama",

  // Otel silo (istersen)
  "otel-seo-sss": "otel",
  "otel-sosyalmedya-sss": "otel",
  "otel-reklam-sss": "otel",
  "otel-pms-sss": "otel",
  "otel-cagrimerkezi-sss": "otel",
  },

  en: {
  // PMS/OTA
  "pms-ota-faq": "pms-ota",
  "pms-integration-faq": "pms-ota",
  "ota-contract-faq": "pms-ota",
  "reservation-management-faq": "pms-ota",
  "channel-management-faq": "pms-ota",
  "web-payment-faq": "pms-ota",

  // Call Center
  "call-center-faq": "call-center",
  "multilingual-call-center-faq": "call-center",
  "performance-analysis-faq": "call-center",
  "message-management-faq": "call-center",
  "after-sales-support-faq": "call-center",
  "reservation-support-faq": "call-center",

  // Creative
  "creative-design-faq": "creative-design",
  "corporate-gift-faq": "creative-design",
  "event-production-faq": "creative-design",
  "video-production-faq": "creative-design",
  "ui-ux-design-faq": "creative-design",
  "graphic-motion-design-faq": "creative-design",

  // Reporting
  "digital-analysis-faq": "digital-analysis",
  "looker-studio-faq": "digital-analysis",
  "kvkk-data-security-faq": "digital-analysis",
  "digital-sales-analysis-faq": "digital-analysis",
  "benchmark-analysis-faq": "digital-analysis",

  // SEM
  "search-engine-marketing-faq": "search-engine-marketing",
  "youtube-advertising-management-faq": "search-engine-marketing",
  "google-ads-advertising-faq": "search-engine-marketing",
  "remarketing-and-display-faq": "search-engine-marketing",
  "tag-manager-faq": "search-engine-marketing",
  "performance-analysis-faq": "search-engine-marketing",

  // SEO
  "search-engine-optimization-faq": "search-engine-optimization",
  "technical-seo-faq": "search-engine-optimization",
  "local-seo-faq": "search-engine-optimization",
  "content-seo-faq": "search-engine-optimization",
  "backlink-seo-faq": "search-engine-optimization",
  "seo-reporting-faq": "search-engine-optimization",

  // SMM
  "social-media-management-faq": "social-media-management",
  "social-media-content-faq": "social-media-management",
  "social-media-planning-faq": "social-media-management",
  "reels-video-faq": "social-media-management",
  "social-media-ads-faq": "social-media-management",
  "social-media-reporting-faq": "social-media-management",

  // Software
  "software-development-faq": "software-development",
  "cms-installation-faq": "software-development",
  "kvkk-compliance-service-faq": "software-development",
  "server-management-faq": "software-development",
  "website-and-software-faq": "software-development",
  "website-maintenance-faq": "software-development",

  // Hotel
  "hotel-digital-marketing-faq": "hotel",
  "hotel-seo-faq": "hotel",
  "hotel-social-media-faq": "hotel",
  "hotel-ads-management-faq": "hotel",
  "hotel-ota-management-faq": "hotel",
  "hotel-pms-integration-faq": "hotel",
  "hotel-call-center-faq": "hotel",

  // Services
  "services-faq": "services",
}
};


