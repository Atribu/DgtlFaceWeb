import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['tr', 'en', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix : "always",
   pathnames : {
    //---------------------------------------------------------
    // TEMEL SAYFALAR
    //---------------------------------------------------------
    "/": {
      en: "/",
      tr: "/anasayfa",
      ru: "/",
    },
    "/aboutus": { // https://www.dgtlface.com/tr/aboutus
      en: "/about-us",
      tr: "/antalya-dijital-pazarlama-ajansi/hakkimizda",
      ru: "/o-nas",
    },
    "/blog": { // https://www.dgtlface.com/tr/blog
      en: "/blog",
      tr: "/antalya-dijital-pazarlama-blog",
      ru: "/blog",
    },
    "/contact": { // https://www.dgtlface.com/tr/contact
      en: "/contact",
      tr: "/antalya-dijital-pazarlama-iletisim",
      ru: "/kontakty",
    },
    
    //---------------------------------------------------------
    // HİZMETLER ANA KATEGORİLERİ (SERVICES)
    //---------------------------------------------------------
    "/Services": { // https://www.dgtlface.com/tr/Services
      en: "/services",
      tr: "/hizmetlerimiz",
      ru: "/uslugi",
    },
    
    //---------------------------------------------------------
    // PMS (YÖNETİM SİSTEMLERİ) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/pms": { // https://www.dgtlface.com/tr/Services/pms
      en: "/services/pms-solutions",
      tr: "/pms-ota",
      ru: "/uslugi/pms-resheniya",
    },
    "/Services/pms/pmsInstallation": { // https://www.dgtlface.com/tr/Services/pms/hotelIdentification
      en: "/services/pms/hotel-identification",
      tr: "/pms-ota/pms-kurulum",
      ru: "/uslugi/pms/identifikaciya-oteley",
    },
    "/Services/pms/otaContract": { // https://www.dgtlface.com/tr/Services/pms/otaContract
      en: "/services/pms/ota-contract",
      tr: "/pms-ota/ota-entegrasyonu",
      ru: "/uslugi/pms/ota-dogovor",
    },
    "/Services/pms/reservationManagement": { // https://www.dgtlface.com/tr/Services/pms/reservationManagement
      en: "/services/pms/reservation-management",
      tr: "/pms-ota/rezervasyon-yonetimi",
      ru: "/uslugi/pms/upravlenie-bronirovaniem",
    },
    "/Services/pms/channelManagement": { // https://www.dgtlface.com/tr/Services/pms/reservationModule
      en: "/services/pms/reservation-module",
      tr: "/pms-ota/kanal-yonetimi",
      ru: "/uslugi/pms/modul-bronirovaniya",
    },
    "/Services/pms/webPayment": { // https://www.dgtlface.com/tr/Services/pms/webPayment
      en: "/services/pms/web-payment-systems",
      tr: "/pms-ota/online-satis",
      ru: "/uslugi/pms/veb-platezhi",
    },

    //---------------------------------------------------------
    // ÇAĞRI MERKEZİ (CALL CENTER) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/callcenter": { // https://www.dgtlface.com/tr/Services/callcenter
      en: "/services/call-center",
      tr: "/cagri-merkezi",
      ru: "/uslugi/koll-centr",
    },
    "/Services/callcenter/callLanguages": { // https://www.dgtlface.com/tr/Services/callcenter/callLanguages
      en: "/services/call-center/multilingual-support",
      tr: "/cagri-merkezi/4-dilli-cagri-merkezi",
      ru: "/uslugi/koll-centr/mnogoyazychnaya-podderzhka",
    },
    "/Services/callcenter/callPerformance": { // https://www.dgtlface.com/tr/Services/callcenter/callPerformance
      en: "/services/call-center/performance-analysis",
      tr: "/cagri-merkezi/performans-analizi",
      ru: "/uslugi/koll-centr/analiz-proizvoditelnosti",
    },
    "/Services/callcenter/messageManagement": { // https://www.dgtlface.com/tr/Services/callcenter/contractManagement
      en: "/services/call-center/contract-management",
      tr: "/cagri-merkezi/mesaj-yonetimi",
      ru: "/uslugi/koll-centr/upravlenie-dogovorami",
    },
    "/Services/callcenter/aftersalesSupport": { // https://www.dgtlface.com/tr/Services/callcenter/multipleChannels satis sonrasi destek
      en: "/services/call-center/multi-channel-sales",
      tr: "/cagri-merkezi/satis-sonrasi-destek",
      ru: "/uslugi/koll-centr/mnogokanalnye-prodazhi",
    },
    "/Services/callcenter/reservationSupport": { // https://www.dgtlface.com/tr/Services/callcenter/reservationSupport
      en: "/services/call-center/reservation-support",
      tr: "/cagri-merkezi/rezervasyon-destegi",
      ru: "/uslugi/koll-centr/podderzhka-bronirovaniya",
    },

    //---------------------------------------------------------
    // YARATICILIK (CREATIVE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/creative": { // https://www.dgtlface.com/tr/Services/creative
      en: "/services/creative-design",
      tr: "/creative",
      ru: "/uslugi/dizayn",
    },
    "/Services/creative/corporateGift": { // https://www.dgtlface.com/tr/Services/creative/corporateGift
      en: "/services/creative/corporate-gift-design",
      tr: "/antalya-tasarim/kurumsal-hediye",
      ru: "/uslugi/dizayn/korporativnye-podarki",
    },
    "/Services/creative/eventProduction": { // https://www.dgtlface.com/tr/Services/creative/eventProduction
      en: "/services/creative/event-production",
      tr: "/antalya-tasarim/etkinlik-produksiyonu",
      ru: "/uslugi/dizayn/organizaciya-meropriyatiy",
    },
    "/Services/creative/graphicDesign": { // https://www.dgtlface.com/tr/Services/creative/graphicDesign
      en: "/services/creative/graphic-motion-design",
      tr: "/creative/grafik-motion-tasarim",
      ru: "/uslugi/dizayn/graficheskiy-dizayn",
    },
    "/Services/creative/uiUxDesign": { // https://www.dgtlface.com/tr/Services/creative/uiUxDesign
      en: "/services/creative/ui-ux-design",
      tr: "/antalya-tasarim/ui-ux-hizmeti",
      ru: "/uslugi/dizayn/ui-ux",
    },
    "/Services/creative/videoProduction": { // https://www.dgtlface.com/tr/Services/creative/videoProduction
      en: "/services/creative/video-production",
      tr: "/antalya-tasarim/video-ve-produksiyon",
      ru: "/uslugi/dizayn/video-prodyusirovanie",
    },

    //---------------------------------------------------------
    // DİJİTAL ANALİZ HİZMETLERİ
    //---------------------------------------------------------
    "/Services/digitalAnalysis": { // https://www.dgtlface.com/tr/Services/digitalAnalysis
      en: "/services/digital-analysis",
      tr: "/raporlama",
      ru: "/uslugi/cifrovoy-analiz",
    },
    "/Services/digitalAnalysis/lookerStudio": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/advertisingReportingService
      en: "/services/digital-analysis/advertising-reporting",
      tr: "/raporlama/looker-studio",
      ru: "/uslugi/cifrovoy-analiz/reklamnaya-otchetnost",
    },
    "/Services/digitalAnalysis/kvkkDataSecurity": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/callReportingService
      en: "/services/digital-analysis/call-reporting",
      tr: "/raporlama/kvkk-veri-guvenligi",
      ru: "/uslugi/cifrovoy-analiz/otchetnost-zvonkov",
    },
    "/Services/digitalAnalysis/digitalSalesAnalysis": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/digitalSalesAnalysis
      en: "/services/digital-analysis/digital-sales-analysis",
      tr: "/raporlama/satis-donusum",
      ru: "/uslugi/cifrovoy-analiz/analiz-cifrovyh-prodazh",
    },
    "/Services/digitalAnalysis/onlineMarketResearchService": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/onlineMarketResearchService
      en: "/services/digital-analysis/online-market-research",
      tr: "/raporlama/benchmark-analizi",
      ru: "/uslugi/cifrovoy-analiz/onlayn-marketingovoe-issledovanie",
    },

    //---------------------------------------------------------
    // ARAMA MOTORU PAZARLAMA (SEM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/sem": { // https://www.dgtlface.com/tr/Services/sem
      en: "/sem",
      tr: "/sem",
      ru: "/sem",
    },
    "/Services/sem/youtubeAdvertising": { // https://www.dgtlface.com/tr/Services/sem/advertisingManagement
      en: "/services/sem/advertising-management",
      tr: "/sem/youtube-reklam-yonetimi",
      ru: "/sem/youtubeAdvertising",
    },
    "/Services/sem/googleAdsAdvertising": { // https://www.dgtlface.com/tr/Services/sem/googleAdsAdvertising
      en: "/services/sem/google-ads-advertising",
      tr: "/sem/google-ads-yonetimi",
      ru: "/sem/googleAdsAdvertising",
    },
    "/Services/sem/remarketingDisplay": { // https://www.dgtlface.com/tr/Services/sem/googleWebtools
      en: "/sem/remarketing-and-display",
      tr: "/sem/remarketing-ve-display",
      ru: "/sem/remarketingDisplay",
    },
    "/Services/sem/tagManager": { // https://www.dgtlface.com/tr/Services/sem/webTraffic
      en: "/services/sem/web-traffic-monitoring",
      tr: "/sem/donusum-takibi-tag-manager",
      ru: "/sem/monitoring-veb-trafika",
    },
    "/Services/sem/performanceAnalysis": { // https://www.dgtlface.com/tr/Services/sem/yandexAdvertising
      en: "/services/sem/performanceAnalysis",
      tr: "/sem/reklam-raporlama",
      ru: "/sem/performanceAnalysis",
    },

    //---------------------------------------------------------
    // SEO HİZMETLERİ
    //---------------------------------------------------------
    "/Services/seo": { // https://www.dgtlface.com/tr/Services/seo
      en: "/services/seo-search-engine-optimization",
      tr: "/seo",
      ru: "/uslugi/seo",
    },
    "/Services/seo/backlinkSeo": { // https://www.dgtlface.com/tr/Services/seo/offpageSeo
      en: "/services/seo/off-page-seo",
      tr: "/seo/backlink-yonetimi",
      ru: "/uslugi/seo/off-page-seo",
    },
    "/Services/seo/contentSeo": { // https://www.dgtlface.com/tr/Services/seo/onpageSeo
      en: "/services/seo/on-page-seo",
      tr: "/seo/icerik-seo",
      ru: "/uslugi/seo/on-page-seo",
    },
    "/Services/seo/localSeo": { // https://www.dgtlface.com/tr/Services/seo/originalCopywriting
      en: "/services/seo/original-copywriting",
      tr: "/seo/yerel-seo",
      ru: "/uslugi/seo/originalnyy-kopirayting",
    },
    "/Services/seo/seoReporting": { // https://www.dgtlface.com/tr/Services/seo/seoReporting
      en: "/services/seo/seo-reporting",
      tr: "/seo/seo-raporlama",
      ru: "/uslugi/seo/seo-otchetnost",
    },
    "/Services/seo/technicalSeo": { // https://www.dgtlface.com/tr/Services/seo/technicalSeo
      en: "/services/seo/technical-seo",
      tr: "/seo/teknik-seo",
      ru: "/uslugi/seo/tehnicheskoe-seo",
    },

    //---------------------------------------------------------
    // SOSYAL MEDYA PAZARLAMA (SMM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/smm": { // https://www.dgtlface.com/tr/Services/smm
      en: "/services/social-media-marketing",
      tr: "/smm",
      ru: "/uslugi/smm",
    },
    "/Services/smm/reelsVideo": { // https://www.dgtlface.com/tr/Services/smm/socialMediaAnalysis
      en: "/services/smm/social-media-analysis",
      tr: "/smm/reels-video",
      ru: "/uslugi/smm/analiz-socialnyh-setey",
    },

        "/Services//smm/socialMediaAds": { // https://www.dgtlface.com/tr/Services/smm/socialMediaAnalysis
      en: "/services/smm/social-media-analysis",
      tr: "/smm/sosyal-medya-reklamlari",
      ru: "/uslugi/smm/analiz-socialnyh-setey",
    },

    "/Services/smm/socialMediaContent": { // https://www.dgtlface.com/tr/Services/smm/socialMediaContent
      en: "/services/smm/social-media-content",
      tr: "/smm/icerik-uretimi",
      ru: "/uslugi/smm/kontent-uslugi",
    },
    "/Services/smm/socialMediaPlanning": { // https://www.dgtlface.com/tr/Services/smm/socialMediaPlanning
      en: "/services/smm/social-media-planning",
      tr: "/smm/planlama-strateji",
      ru: "/uslugi/smm/planirovanie",
    },
    "/Services/smm/socialMediaReporting": { // https://www.dgtlface.com/tr/Services/smm/socialMediaReporting
      en: "/services/smm/social-media-reporting",
      tr: "/smm/analiz-raporlama",
      ru: "/uslugi/smm/otchetnost",
    },
    
    //---------------------------------------------------------
    // YAZILIM (SOFTWARE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/software": { // https://www.dgtlface.com/tr/Services/software
      en: "/services/software-development",
      tr: "/yazilim",
      ru: "/uslugi/razrabotka-po",
    },
    "/Services/software/cmsInstallationService": { // https://www.dgtlface.com/tr/Services/software/cmsInstallationService
      en: "/services/software/cms-installation",
      tr: "/yazilim/cms-entegrasyonu",
      ru: "/uslugi/razrabotka-po/ustanovka-cms",
    },
    "/Services/software/kvkk": { // https://www.dgtlface.com/tr/Services/software/pdpaCompliance
      en: "/services/software/pdpa-compliance",
      tr: "/yazilim/kvkk-uyum-hizmeti",
      ru: "/uslugi/razrabotka-po/sootvetstvie-pdpa",
    },
    "/Services/software/serverManagementService": { // https://www.dgtlface.com/tr/Services/software/serverManagementService
      en: "/services/software/server-management",
      tr: "/yazilim/sunucu-guvenlik",
      ru: "/uslugi/razrabotka-po/upravlenie-serverami",
    },
    "/Services/software/websiteAndSoftware": { // https://www.dgtlface.com/tr/Services/software/websiteAndSoftware
      en: "/services/software/website-and-software",
      tr: "/yazilim/web-sitesi-gelistirme",
      ru: "/uslugi/razrabotka-po/sayty-i-po",
    },
    "/Services/software/websiteMaintanceService": { // https://www.dgtlface.com/tr/Services/software/websiteMaintanceService
      en: "/services/software/website-maintenance",
      tr: "/yazilim/bakim-ve-destek",
      ru: "/uslugi/razrabotka-po/obsluzhivanie-saytov",
    },

    // hotel pages

        "/Services/hotel": { 
      en: "/services/hotel",
      tr: "/otel",
      ru: "/uslugi/hotel-resheniya",
    },
    "/Services/hotel/seo": { 
      en: "/services/hotel/hotel-identification",
      tr: "/otel/seo",
      ru: "/uslugi/hotel/identifikaciya-oteley",
    },
    "/Services/hotel/socialMedia": { 
      en: "/services/hotel/ota-contract",
      tr: "/otel/sosyal-medya",
      ru: "/uslugi/hotel/ota-dogovor",
    },
    "/Services/hotel/adsManagement": { 
      en: "/services/hotel/reservation-management",
      tr: "/otel/reklam-yonetimi",
      ru: "/uslugi/hotel/upravlenie-bronirovaniem",
    },
    "/Services/hotel/otaManagement": { 
      en: "/services/hotel/reservation-module",
      tr: "/otel/ota-yonetimi",
      ru: "/uslugi/hotel/modul-bronirovaniya",
    },
    "/Services/hotel/pmsIntegration": { 
      en: "/services/hotel/web-payment-systems",
      tr: "/otel/pms-entegrasyonu",
      ru: "/uslugi/hotel/veb-platezhi",
    },

     "/Services/hotel/callCenter": { 
      en: "/services/hotel/web-payment-systems",
      tr: "/otel/cagri-merkezi",
      ru: "/uslugi/hotel/veb-platezhi",
    },
  }
})