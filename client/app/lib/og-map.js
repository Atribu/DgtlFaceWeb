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
    tr: "/og/dgtlface.com_tr.jpeg",
    en: "/og/en/dgtlface.com_en.jpeg",
  },

  "/Services": {
    tr: "/og/dgtlface.com_tr_services.jpeg",
    en: "/og/en/dgtlface.com_en_services.jpeg",
  },

  // -----------------------
  // ANA KATEGORİLER
  // -----------------------
  "/Services/seo": { tr: "/og/dgtlface.com_tr_seo.jpeg", en: "/og/en/dgtlface.com_en_seo.jpeg" },
  "/Services/sem": { tr: "/og/dgtlface.com_tr_sem.jpeg", en: "/og/en/dgtlface.com_en_sem.jpeg" },
  "/Services/smm": { tr: "/og/dgtlface.com_tr_smm.jpeg", en: "/og/en/dgtlface.com_en_smm.jpeg" },
  "/Services/software": { tr: "/og/dgtlface.com_tr_yazilim.jpeg", en: "/og/en/dgtlface.com_en_software-development.jpeg" },
  "/Services/creative": { tr: "/og/dgtlface.com_tr_creative.jpeg", en: "/og/en/dgtlface.com_en_creative-design.jpeg" },
  "/Services/callcenter": { tr: "/og/dgtlface.com_tr_cagri-merkezi.jpeg", en: "/og/en/dgtlface.com_en_call-center.jpeg" },
  "/Services/pms": { tr: "/og/dgtlface.com_tr_pms-ota.jpeg", en: "/og/en/dgtlface.com_en_pms-ota.jpeg" },
  "/Services/hotel": { tr: "/og/dgtlface.com_tr_otel.jpeg", en: "/og/en/dgtlface.com_en_hotel.jpeg" },
  "/Services/digitalAnalysis": { tr: "/og/dgtlface.com_tr_raporlama.jpeg", en: "/og/en/dgtlface.com_en_digital-analysis.jpeg" },

  // -----------------------
  // SEM ALT SAYFALAR
  // -----------------------
  "/Services/sem/googleAdsAdvertising": {
    tr: "/og/dgtlface.com_tr_sem_google-ads-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_sem_google-ads-advertising.jpeg",
  },
  "/Services/sem/youtubeAdvertising": {
    tr: "/og/dgtlface.com_tr_sem_youtube-reklam-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_sem_youtube-advertising-management.jpeg",
  },
  "/Services/sem/remarketingDisplay": {
    tr: "/og/dgtlface.com_tr_sem_remarketing-ve-display.jpeg",
    en: "/og/en/dgtlface.com_en_sem_remarketing-and-display.jpeg",
  },
  "/Services/sem/tagManager": {
    tr: "/og/dgtlface.com_tr_sem_donusum-takibi-tag-manager.jpeg",
    en: "/og/en/dgtlface.com_en_sem_tag-manager.jpeg",
  },
  "/Services/sem/performanceAnalysis": {
    tr: "/og/dgtlface.com_tr_sem_reklam-raporlama.jpeg",
    en: "/og/en/dgtlface.com_en_sem_performance-analysis.jpeg",
  },

  // -----------------------
  // SEO ALT SAYFALAR
  // -----------------------
  "/Services/seo/technicalSeo": {
    tr: "/og/dgtlface.com_tr_seo_teknik-seo.jpeg",
    en: "/og/en/dgtlface.com_en_seo_technical-seo.jpeg",
  },
  "/Services/seo/contentSeo": {
    tr: "/og/dgtlface.com_tr_seo_icerik-seo.jpeg",
    en: "/og/en/dgtlface.com_en_seo_on-page-seo.jpeg",
  },
  "/Services/seo/localSeo": {
    tr: "/og/dgtlface.com_tr_seo_yerel-seo.jpeg",
    en: "/og/en/dgtlface.com_en_seo_local-seo.jpeg",
  },
  "/Services/seo/seoReporting": {
    tr: "/og/dgtlface.com_tr_seo_seo-raporlama.jpeg",
    en: "/og/en/dgtlface.com_en_seo_seo-reporting.jpeg",
  },
  "/Services/seo/backlinkSeo": {
    tr: "/og/dgtlface.com_tr_seo_backlink-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_seo_backlink-seo.jpeg",
  },

  // -----------------------
  // SMM ALT SAYFALAR
  // -----------------------
  "/Services/smm/reelsVideo": {
    tr: "/og/dgtlface.com_tr_smm_reels-video.jpeg",
    en: "/og/en/dgtlface.com_en_smm-reels-video.jpeg",
  },
  "/Services/smm/socialMediaAds": {
    tr: "/og/dgtlface.com_tr_smm_sosyal-medya-reklamlari.jpeg",
    en: "/og/en/dgtlface.com_en_smm_social-media-ads.jpeg",
  },
  "/Services/smm/socialMediaContent": {
    tr: "/og/dgtlface.com_tr_smm_icerik-uretimi.jpeg",
    en: "/og/en/dgtlface.com_en_service_smm_social-media-content.jpeg",
  },
  "/Services/smm/socialMediaPlanning": {
    tr: "/og/dgtlface.com_tr_smm_planlama-strateji.jpeg",
    en: "/og/en/dgtlface.com_en_services_smm_social-media-planning.jpeg",
  },
  "/Services/smm/socialMediaReporting": {
    tr: "/og/dgtlface.com_tr_smm_analiz-raporlama.jpeg",
    en: "/og/en/dgtlface.com_en_smm_social-media-reporting.jpeg",
  },

  // -----------------------
  // SOFTWARE ALT SAYFALAR
  // -----------------------
  "/Services/software/cmsInstallationService": {
    tr: "/og/dgtlface.com_tr_yazilim_cms-entegrasyonu.jpeg",
    en: "/og/en/dgtlface.com_en_software_cms-installation.jpeg",
  },
  "/Services/software/kvkk": {
    tr: "/og/dgtlface.com_tr_yazilim_kvkk-uyum-hizmeti.jpeg",
    en: "/og/en/dgtlface.com_en_software_kvkk-compliance-service.jpeg",
  },
  "/Services/software/serverManagementService": {
    tr: "/og/dgtlface.com_tr_yazilim_sunucu-guvenlik.jpeg",
    en: "/og/en/dgtlface.com_en_software_server-management.jpeg",
  },
  "/Services/software/websiteAndSoftware": {
    tr: "/og/dgtlface.com_tr_yazilim_web-sitesi-gelistirme.jpeg",
    en: "/og/en/dgtlface.com_en_software_website-and-software.jpeg",
  },
  "/Services/software/websiteMaintanceService": {
    tr: "/og/dgtlface.com_tr_yazilim_bakim-ve-destek.jpeg",
    en: "/og/en/dgtlface.com_en_software_website-maintenance.jpeg",
  },

  // -----------------------
  // CALL CENTER ALT SAYFALAR
  // -----------------------
  "/Services/callcenter/callLanguages": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_4-dilli-cagri-merkezi.jpeg",
    en: "/og/en/dgtlface.com_en_call-center_multilingual-call-center.jpeg",
  },
  "/Services/callcenter/callPerformance": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_performans-analizi.jpeg",
    en: "/og/en/dgtlface.com_en_call-center_performance-analysis.jpeg",
  },
  "/Services/callcenter/messageManagement": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_mesaj-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_call-center_message-management.jpeg",
  },
  "/Services/callcenter/aftersalesSupport": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_satis-sonrasi-destek.jpeg",
    en: "/og/en/dgtlface.com_en_call-center_after-sales-support.jpeg",
  },
  "/Services/callcenter/reservationSupport": {
    tr: "/og/dgtlface.com_tr_cagri-merkezi_rezervasyon-destegi.jpeg",
    en: "/og/en/dgtlface.com_en_call-center_reservation-support.jpeg",
  },

  // -----------------------
  // CREATIVE ALT SAYFALAR
  // -----------------------
  "/Services/creative/uiUxDesign": {
    tr: "/og/dgtlface.com_tr_creative_ui-ux-hizmeti.jpeg",
    en: "/og/en/dgtlface.com_en_creative_ui-ux-design.jpeg",
  },
  "/Services/creative/graphicDesign": {
    tr: "/og/dgtlface.com_tr_creative_grafik-motion-tasarim.jpeg",
    en: "/og/en/dgtlface.com_en_creative_graphic-motion-design.jpeg",
  },
  "/Services/creative/videoProduction": {
    tr: "/og/dgtlface.com_tr_creative_video-ve-produksiyon.jpeg",
    en: "/og/en/dgtlface.com_en_creative_video-production.jpeg",
  },
  "/Services/creative/eventProduction": {
    tr: "/og/dgtlface.com_tr_creative_etkinlik-produksiyonu.jpeg",
    en: "/og/en/dgtlface.com_en_creative_event-production.jpeg",
  },
  "/Services/creative/corporateGift": {
    tr: "/og/dgtlface.com_tr_creative_kurumsal-hediye.jpeg",
    en: "/og/en/dgtlface.com_en_creative_corporate-gift.jpeg",
  },

  // -----------------------
  // PMS-OTA ALT SAYFALAR (routing key'lerin senin dosyana göre)
  // -----------------------
  "/Services/pms/pmsInstallation": {
    tr: "/og/dgtlface.com_tr_pms-ota_pms-kurulum.jpeg",
    en: "/og/en/dgtlface.com_en_pms-ota_pms-integration.jpeg",
  },
  "/Services/pms/otaContract": {
    tr: "/og/dgtlface.com_tr_pms-ota_ota-entegrasyonu.jpeg",
    en: "/og/en/dgtlface.com_en_pms-ota_ota-contract.jpeg",
  },
  "/Services/pms/reservationManagement": {
    tr: "/og/dgtlface.com_tr_pms-ota_rezervasyon-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_pms-ota_reservation-management.jpeg",
  },
  "/Services/pms/channelManagement": {
    tr: "/og/dgtlface.com_tr_pms-ota_kanal-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_pms-ota_channel-management.jpeg",
  },
  "/Services/pms/webPayment": {
    tr: "/og/dgtlface.com_tr_pms-ota_online-satis.jpeg",
    en: "/og/en/dgtlface.com_en_pms-ota_web-payment.jpeg",
  },

  // -----------------------
  // HOTEL ALT SAYFALAR
  // -----------------------
  "/Services/hotel/adsManagement": {
    tr: "/og/dgtlface.com_tr_otel_reklam-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_ads-management.jpeg",
  },
  "/Services/hotel/otaManagement": {
    tr: "/og/dgtlface.com_tr_otel_ota-yonetimi.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_ota-management.jpeg",
  },
  "/Services/hotel/pmsIntegration": {
    tr: "/og/dgtlface.com_tr_otel_pms-entegrasyonu.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_pms-integration.jpeg",
  },
  "/Services/hotel/seo": {
    tr: "/og/dgtlface.com_tr_otel_seo.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_seo.jpeg",
  },
  "/Services/hotel/socialMedia": {
    tr: "/og/dgtlface.com_tr_otel_sosyal-medya.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_social-media.jpeg",
  },
  "/Services/hotel/callCenter": {
    tr: "/og/dgtlface.com_tr_otel_cagri-merkezi.jpeg",
    en: "/og/en/dgtlface.com_en_hotel_callcenter.jpeg",
  },

  // -----------------------
  // DIGITAL ANALYSIS ALT SAYFALAR
  // -----------------------
  "/Services/digitalAnalysis/lookerStudio": {
    tr: "/og/dgtlface.com_tr_raporlama_looker-studio.jpeg",
    en: "/og/en/dgtlface.com_en_digital-analysis_looker-studio.jpeg",
  },
  "/Services/digitalAnalysis/kvkkDataSecurity": {
    tr: "/og/dgtlface.com_tr_raporlama_kvkk-veri-guvenligi.jpeg",
    en: "/og/en/dgtlface.com_en_digital-analysis_kvkk-data-security.jpeg",
  },
  "/Services/digitalAnalysis/digitalSalesAnalysis": {
    tr: "/og/dgtlface.com_tr_raporlama_satis-donusum.jpeg",
    en: "/og/en/dgtlface.com_en_digital-analysis_digital-sales-analysis.jpeg",
  },
  "/Services/digitalAnalysis/onlineMarketResearchService": {
    tr: "/og/dgtlface.com_tr_raporlama_benchmark-analizi.jpeg",
    en: "/og/en/dgtlface.com_en_digital-analysis_benchmark-analysis.jpeg",
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
