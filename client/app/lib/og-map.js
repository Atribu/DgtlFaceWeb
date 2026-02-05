// app/lib/og-map.js

// Küçük helper: ilgili locale yoksa TR'ye, o da yoksa default'a düş
function pickLocaleImage(entry, locale) {
  if (!entry) return "/og/og-default.png";

  // entry string ise (eski kullanım) direkt döndür
  if (typeof entry === "string") return entry;

  const loc = (locale || "tr").toLowerCase();
  return entry?.[loc] || entry?.tr || entry?.en || "/og/og-default.png";
}

export const OG_IMAGE_MAP = {
  // -----------------------
  // TEMEL
  // -----------------------
  "/": {
    tr:  "/og/og-home.webp", //"/og/dgtlface.com_tr.jpeg"
    en: "/og/en/dgtlface.com_en.webp",
  },

  "/Services": {
    tr: "/og/dgtlface.com_tr_services.webp",
    en: "/og/en/dgtlface.com_en_services.webp",
  },

  // -----------------------
  // ANA KATEGORİLER
  // -----------------------
  "/Services/seo": { tr: "/og/dgtlface.com_tr_seo.webp", en: "/og/en/dgtlface.com_en_seo.webp" },
  "/Services/sem": { tr: "/og/dgtlface.com_tr_sem.webp", en: "/og/en/dgtlface.com_en_sem.webp" },
  "/Services/smm": { tr: "/og/dgtlface.com_tr_smm.webp", en: "/og/en/dgtlface.com_en_smm.webp" },
  "/Services/software": { tr: "/og/dgtlface.com_tr_yazilim.webp", en: "/og/en/dgtlface.com_en_software-development.webp" },
  "/Services/creative": { tr: "/og/dgtlface.com_tr_creative.webp", en: "/og/en/dgtlface.com_en_creative-design.webp" },
  "/Services/callcenter": { tr: "/og/dgtlface.com_tr_cagri-merkezi.webp", en: "/og/en/dgtlface.com_en_call-center.webp" },
  "/Services/pms": { tr: "/og/dgtlface.com_tr_pms-ota.webp", en: "/og/en/dgtlface.com_en_pms-ota.webp" },
  "/Services/hotel": { tr: "/og/dgtlface.com_tr_otel.webp", en: "/og/en/dgtlface.com_en_hotel.webp" },
  "/Services/digitalAnalysis": { tr: "/og/dgtlface.com_tr_raporlama.webp", en: "/og/en/dgtlface.com_en_digital-analysis.webp" },

  // -----------------------
  // SEM ALT SAYFALAR
  // -----------------------
  "/Services/sem/googleAdsAdvertising": {
    tr: "/og/dgtlface.com_tr_sem_google-ads-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_sem_google-ads-advertising.webp",
  },
  "/Services/sem/youtubeAdvertising": {
    tr: "/og/dgtlface.com_tr_sem_youtube-reklam-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_sem_youtube-advertising-management.webp",
  },
  "/Services/sem/remarketingDisplay": {
    tr: "/og/dgtlface.com_tr_sem_remarketing-ve-display.webp",
    en: "/og/en/dgtlface.com_en_sem_remarketing-and-display.webp",
  },
  "/Services/sem/tagManager": {
    tr: "/og/dgtlface.com_tr_sem_donusum-takibi-tag-manager.webp",
    en: "/og/en/dgtlface.com_en_sem_tag-manager.webp",
  },
  "/Services/sem/performanceAnalysis": {
    tr: "/og/dgtlface.com_tr_sem_reklam-raporlama.webp",
    en: "/og/en/dgtlface.com_en_sem_performance-analysis.webp",
  },

  // -----------------------
  // SEO ALT SAYFALAR
  // -----------------------
  "/Services/seo/technicalSeo": {
    tr: "/og/dgtlface.com_tr_seo_teknik-seo.webp",
    en: "/og/en/dgtlface.com_en_seo_technical-seo.webp",
  },
  "/Services/seo/contentSeo": {
    tr: "/og/dgtlface.com_tr_seo_icerik-seo.webp",
    en: "/og/en/dgtlface.com_en_seo_on-page-seo.webp",
  },
  "/Services/seo/localSeo": {
    tr: "/og/dgtlface.com_tr_seo_yerel-seo.webp",
    en: "/og/en/dgtlface.com_en_seo_local-seo.webp",
  },
  "/Services/seo/seoReporting": {
    tr: "/og/dgtlface.com_tr_seo_seo-raporlama.webp",
    en: "/og/en/dgtlface.com_en_seo_seo-reporting.webp",
  },
  "/Services/seo/backlinkSeo": {
    tr: "/og/dgtlface.com_tr_seo_backlink-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_seo_backlink-seo.webp",
  },

  // -----------------------
  // SMM ALT SAYFALAR
  // -----------------------
  "/Services/smm/reelsVideo": {
    tr: "/og/dgtlface.com_tr_smm_reels-video.webp",
    en: "/og/en/dgtlface.com_en_smm-reels-video.webp",
  },
  "/Services/smm/socialMediaAds": {
    tr: "/og/dgtlface.com_tr_smm_sosyal-medya-reklamlari.webp",
    en: "/og/en/dgtlface.com_en_smm_social-media-ads.webp",
  },
  "/Services/smm/socialMediaContent": {
    tr: "/og/dgtlface.com_tr_smm_icerik-uretimi.webp",
    en: "/og/en/dgtlface.com_en_service_smm_social-media-content.webp",
  },
  "/Services/smm/socialMediaPlanning": {
    tr: "/og/dgtlface.com_tr_smm_planlama-strateji.webp",
    en: "/og/en/dgtlface.com_en_services_smm_social-media-planning.webp",
  },
  "/Services/smm/socialMediaReporting": {
    tr: "/og/dgtlface.com_tr_smm_analiz-raporlama.webp",
    en: "/og/en/dgtlface.com_en_smm_social-media-reporting.webp",
  },

  // -----------------------
  // SOFTWARE ALT SAYFALAR
  // -----------------------
  "/Services/software/cmsInstallationService": {
    tr: "/og/dgtlface.com_tr_yazilim_cms-entegrasyonu.webp",
    en: "/og/en/dgtlface.com_en_software_cms-installation.webp",
  },
  "/Services/software/kvkk": {
    tr: "/og/dgtlface.com_tr_yazilim_kvkk-uyum-hizmeti.webp",
    en: "/og/en/dgtlface.com_en_software_kvkk-compliance-service.webp",
  },
  "/Services/software/serverManagementService": {
    tr: "/og/dgtlface.com_tr_yazilim_sunucu-guvenlik.webp",
    en: "/og/en/dgtlface.com_en_software_server-management.webp",
  },
  "/Services/software/websiteAndSoftware": {
    tr: "/og/dgtlface.com_tr_yazilim_web-sitesi-gelistirme.webp",
    en: "/og/en/dgtlface.com_en_software_website-and-software.webp",
  },
  "/Services/software/websiteMaintanceService": {
    tr: "/og/dgtlface.com_tr_yazilim_bakim-ve-destek.webp",
    en: "/og/en/dgtlface.com_en_software_website-maintenance.webp",
  },

  // -----------------------
  // CALL CENTER ALT SAYFALAR
  // -----------------------
  "/Services/callcenter/callLanguages": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_4-dilli-cagri-merkezi.webp",
    en: "/og/en/dgtlface.com_en_call-center_multilingual-call-center.webp",
  },
  "/Services/callcenter/callPerformance": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_performans-analizi.webp",
    en: "/og/en/dgtlface.com_en_call-center_performance-analysis.webp",
  },
  "/Services/callcenter/messageManagement": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_mesaj-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_call-center_message-management.webp",
  },
  "/Services/callcenter/aftersalesSupport": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_satis-sonrasi-destek.webp",
    en: "/og/en/dgtlface.com_en_call-center_after-sales-support.webp",
  },
  "/Services/callcenter/reservationSupport": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_rezervasyon-destegi.webp",
    en: "/og/en/dgtlface.com_en_call-center_reservation-support.webp",
  },

  // -----------------------
  // CREATIVE ALT SAYFALAR
  // -----------------------
  "/Services/creative/uiUxDesign": {
    tr: "/og/dgtlface.com_tr_creative_ui-ux-hizmeti.webp",
    en: "/og/en/dgtlface.com_en_creative_ui-ux-design.webp",
  },
  "/Services/creative/graphicDesign": {
    tr: "/og/dgtlface.com_tr_creative_grafik-motion-tasarim.webp",
    en: "/og/en/dgtlface.com_en_creative_graphic-motion-design.webp",
  },
  "/Services/creative/videoProduction": {
    tr: "/og/dgtlface.com_tr_creative_video-ve-produksiyon.webp",
    en: "/og/en/dgtlface.com_en_creative_video-production.webp",
  },
  "/Services/creative/eventProduction": {
    tr: "/og/dgtlface.com_tr_creative_etkinlik-produksiyonu.webp",
    en: "/og/en/dgtlface.com_en_creative_event-production.webp",
  },
  "/Services/creative/corporateGift": {
    tr: "/og/dgtlface.com_tr_creative_kurumsal-hediye.webp",
    en: "/og/en/dgtlface.com_en_creative_corporate-gift.webp",
  },

  // -----------------------
  // PMS-OTA ALT SAYFALAR (routing key'lerin senin dosyana göre)
  // -----------------------
  "/Services/pms/pmsInstallation": {
    tr: "/og/dgtlface.com_tr_pms-ota_pms-kurulum.webp",
    en: "/og/en/dgtlface.com_en_pms-ota_pms-integration.webp",
  },
  "/Services/pms/otaContract": {
    tr: "/og/dgtlface.com_tr_pms-ota_ota-entegrasyonu.webp",
    en: "/og/en/dgtlface.com_en_pms-ota_ota-contract.webp",
  },
  "/Services/pms/reservationManagement": {
    tr: "/og/dgtlface.com_tr_pms-ota_rezervasyon-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_pms-ota_reservation-management.webp",
  },
  "/Services/pms/channelManagement": {
    tr: "/og/dgtlface.com_tr_pms-ota_kanal-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_pms-ota_channel-management.webp",
  },
  "/Services/pms/webPayment": {
    tr: "/og/dgtlface.com_tr_pms-ota_online-satis.webp",
    en: "/og/en/dgtlface.com_en_pms-ota_web-payment.webp",
  },

  // -----------------------
  // HOTEL ALT SAYFALAR
  // -----------------------
  "/Services/hotel/adsManagement": {
    tr: "/og/dgtlface.com_tr_otel_reklam-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_hotel_ads-management.webp",
  },
  "/Services/hotel/otaManagement": {
    tr: "/og/dgtlface.com_tr_otel_ota-yonetimi.webp",
    en: "/og/en/dgtlface.com_en_hotel_ota-management.webp",
  },
  "/Services/hotel/pmsIntegration": {
    tr: "/og/dgtlface.com_tr_otel_pms-entegrasyonu.webp",
    en: "/og/en/dgtlface.com_en_hotel_pms-integration.webp",
  },
  "/Services/hotel/seo": {
    tr: "/og/dgtlface.com_tr_otel_seo.webp",
    en: "/og/en/dgtlface.com_en_hotel_seo.webp",
  },
  "/Services/hotel/socialMedia": {
    tr: "/og/dgtlface.com_tr_otel_sosyal-medya.webp",
    en: "/og/en/dgtlface.com_en_hotel_social-media.webp",
  },
  "/Services/hotel/callCenter": {
    tr: "/og/dgtlface.com_tr_otel_cagri-merkezi.webp",
    en: "/og/en/dgtlface.com_en_hotel_callcenter.webp",
  },

  // -----------------------
  // DIGITAL ANALYSIS ALT SAYFALAR
  // -----------------------
  "/Services/digitalAnalysis/lookerStudio": {
    tr: "/og/dgtlface.com_tr_raporlama_looker-studio.webp",
    en: "/og/en/dgtlface.com_en_digital-analysis_looker-studio.webp",
  },
  "/Services/digitalAnalysis/kvkkDataSecurity": {
    tr: "/og/dgtlface.com_tr_raporlama_kvkk-veri-guvenligi.webp",
    en: "/og/en/dgtlface.com_en_digital-analysis_kvkk-data-security.webp",
  },
  "/Services/digitalAnalysis/digitalSalesAnalysis": {
    tr: "/og/dgtlface.com_tr_raporlama_satis-donusum.webp",
    en: "/og/en/dgtlface.com_en_digital-analysis_digital-sales-analysis.webp",
  },
  "/Services/digitalAnalysis/onlineMarketResearchService": {
    tr: "/og/dgtlface.com_tr_raporlama_benchmark-analizi.webp",
    en: "/og/en/dgtlface.com_en_digital-analysis_benchmark-analysis.webp",
  },
};

// Yeni kullanım: locale destekli
export function getOgImageByPathnameKey(pathnameKey, locale) {
  return pickLocaleImage(OG_IMAGE_MAP[pathnameKey], locale);
}

// Eski kullanım bozulmasın diye (opsiyonel):
export function getOgImageByPathnameKeyLegacy(pathnameKey) {
  return pickLocaleImage(OG_IMAGE_MAP[pathnameKey], "tr");
}
