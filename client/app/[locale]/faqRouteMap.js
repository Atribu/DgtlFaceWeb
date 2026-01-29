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

  // -----------------------------
  // Call Center
  // -----------------------------
  { match: /^\/cagri-merkezi\/4-dilli-cagri-merkezi(\/.*)?$/, slug: "4-dilli-cagri-merkezi-sss" },
  { match: /^\/cagri-merkezi\/performans-analizi(\/.*)?$/, slug: "performans-analizi-sss" },
  { match: /^\/cagri-merkezi\/mesaj-yonetimi(\/.*)?$/, slug: "mesaj-yonetimi-sss" },
  { match: /^\/cagri-merkezi\/satis-sonrasi-destek(\/.*)?$/, slug: "satis-sonrasi-destek-sss" },
  { match: /^\/cagri-merkezi\/rezervasyon-destegi(\/.*)?$/, slug: "rezervasyon-destegi-sss" },
  { match: /^\/cagri-merkezi(\/.*)?$/, slug: "cagri-merkezi-sss" },

  // -----------------------------
  // Creative
  // -----------------------------
  { match: /^\/creative\/kurumsal-hediye(\/.*)?$/, slug: "kurumsal-hediye-sss" },
  { match: /^\/creative\/etkinlik-produksiyonu(\/.*)?$/, slug: "etkinlik-produksiyonu-sss" },
  { match: /^\/creative\/video-produksiyon(\/.*)?$/, slug: "video-produksiyon-sss" },
  { match: /^\/creative\/ui-ux-hizmeti(\/.*)?$/, slug: "ui-ux-hizmeti-sss" },
  { match: /^\/creative\/grafik-motion-tasarim(\/.*)?$/, slug: "grafik-motion-tasarim-sss" },
  { match: /^\/creative(\/.*)?$/, slug: "creative-sss" },

  // -----------------------------
  // Raporlama
  // -----------------------------
  { match: /^\/raporlama\/looker-studio(\/.*)?$/, slug: "looker-studio-sss" },
  { match: /^\/raporlama\/kvkk-veri-guvenligi(\/.*)?$/, slug: "kvkk-veri-guvenligi-sss" },
  { match: /^\/raporlama\/satis-donusum(\/.*)?$/, slug: "satis-donusumu-sss" },
  { match: /^\/raporlama\/benchmark-analizi(\/.*)?$/, slug: "benchmark-analiz-sss" },
  { match: /^\/raporlama(\/.*)?$/, slug: "veri-analiz-ve-raporlama-sss" },

  // -----------------------------
  // SEM
  // -----------------------------
  { match: /^\/sem\/youtube-reklam-yonetimi(\/.*)?$/, slug: "youtube-reklam-yonetimi-sss" },
  { match: /^\/sem\/google-ads-yonetimi(\/.*)?$/, slug: "google-ads-yonetimi-sss" },
  { match: /^\/sem\/remarketing-ve-display(\/.*)?$/, slug: "remarketing-ve-display-sss" },
  { match: /^\/sem\/donusum-takibi-tag-manager(\/.*)?$/, slug: "donusum-takibi-tag-manager-sss" },
  { match: /^\/sem\/reklam-raporlama(\/.*)?$/, slug: "reklam-raporlama-sss" },
  { match: /^\/sem(\/.*)?$/, slug: "sem-sss" },

  // -----------------------------
  // SEO
  // -----------------------------
  { match: /^\/seo\/teknik-seo(\/.*)?$/, slug: "teknik-seo-sss" },
  { match: /^\/seo\/yerel-seo(\/.*)?$/, slug: "local-seo-sss" },
  { match: /^\/seo\/icerik-seo(\/.*)?$/, slug: "icerik-seo-sss" },
  { match: /^\/seo\/backlink-yonetimi(\/.*)?$/, slug: "backlink-yonetimi-sss" },
  { match: /^\/seo\/seo-raporlama(\/.*)?$/, slug: "seo-raporlama-sss" },
  { match: /^\/seo(\/.*)?$/, slug: "seo-sss" },

  // -----------------------------
  // SMM
  // -----------------------------
  { match: /^\/smm\/icerik-uretimi(\/.*)?$/, slug: "icerik-uretimi-sss" },
  { match: /^\/smm\/planlama-strateji(\/.*)?$/, slug: "planlama-strateji-sss" },
  { match: /^\/smm\/reels-video(\/.*)?$/, slug: "reels-video-sss" },
  { match: /^\/smm\/sosyal-medya-reklamlari(\/.*)?$/, slug: "sosyal-medya-reklamlari-sss" },
  { match: /^\/smm\/analiz-raporlama(\/.*)?$/, slug: "analiz-raporlama-sss" },
  { match: /^\/smm(\/.*)?$/, slug: "smm-sss" },

  // -----------------------------
  // Yazılım
  // -----------------------------
  { match: /^\/yazilim\/cms-entegrasyonu(\/.*)?$/, slug: "cms-entegrasyonu-sss" },
  { match: /^\/yazilim\/kvkk-uyum-hizmeti(\/.*)?$/, slug: "kvkk-uyum-hizmeti-sss" },
  { match: /^\/yazilim\/sunucu-guvenlik(\/.*)?$/, slug: "sunucu-guvenlik-sss" },
  { match: /^\/yazilim\/web-sitesi-gelistirme(\/.*)?$/, slug: "web-sitesi-gelistirme-sss" },
  { match: /^\/yazilim\/bakim-ve-destek(\/.*)?$/, slug: "bakim-destek-sss" },
  { match: /^\/yazilim(\/.*)?$/, slug: "yazilim-sss" },

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

  // -----------------------------
  // Genel fallback (istersen)
  // -----------------------------
  { match: /^\/hizmetlerimiz(\/.*)?$/, slug: "hizmetlerimiz-sss" },
];

// app/[locale]/(faq)/faqRouteMap.js

// "Departman" crumb’ı hangi SSS sayfasına gitsin?
// Örn: teknik-seo-sss sayfasında departman crumb’ı seo-sss'e gitsin gibi.
export const FAQ_DEPT_CRUMB_MAP = {
  // Genel
  "sss": null, // departman yok

  // Services (SSS index altı)
  "hizmetler-sss": "hizmetlerimiz-sss",

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
};

// Departman label’ı için de opsiyonel label map
export const FAQ_DEPT_LABEL_MAP = {
  "seo-sss": "SEO",
  "sem-sss": "SEM",
  "smm-sss": "SMM",
  "yazilim-sss": "Yazılım",
  "cagri-merkezi-sss": "Çağrı Merkezi",
  "pms-ota-sss": "PMS & OTA",
  "veri-analiz-ve-raporlama-sss": "Raporlama",
  "otel-dijital-pazarlama-sss": "Otel Dijital Pazarlama",
  "hizmetler-sss": "Hizmetler",
};

// faqRouteMap.js

// slug -> dept segment (örn reels-video-sss -> smm)
export const FAQ_SLUG_DEPT_SEGMENT_MAP = {
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
  "kurumsal-hediye-sss": "creative",
  "etkinlik-produksiyonu-sss": "creative",
  "video-produksiyon-sss": "creative",
  "ui-ux-hizmeti-sss": "creative",
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
};


