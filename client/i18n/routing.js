import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['tr', 'en'],
 
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
     
    },
    "/aboutus": { // https://www.dgtlface.com/tr/aboutus
      en: "/about-us",
      tr: "/antalya-dijital-pazarlama-ajansi/hakkimizda",
    
    },

    "/contact": { // https://www.dgtlface.com/tr/contact
      en: "/contact",
      tr: "/antalya-dijital-pazarlama-iletisim",
    
    },

        "/blogs": { 
      en: "/blogs",
      tr: "/bloglar",
     
    },
    
    //---------------------------------------------------------
    // HİZMETLER ANA KATEGORİLERİ (SERVICES)
    //---------------------------------------------------------
    "/Services": { 
      en: "/services",
      tr: "/hizmetlerimiz",
     
    },
    
    //---------------------------------------------------------
    // PMS (YÖNETİM SİSTEMLERİ) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/pms": { // https://www.dgtlface.com/tr/Services/pms
      en: "/services/pms-solutions",
      tr: "/pms-ota",
      
    },
    "/Services/pms/pmsInstallation": { // https://www.dgtlface.com/tr/Services/pms/hotelIdentification
      en: "/services/pms/hotel-identification",
      tr: "/pms-ota/pms-kurulum",
      
    },
    "/Services/pms/otaContract": { // https://www.dgtlface.com/tr/Services/pms/otaContract
      en: "/services/pms/ota-contract",
      tr: "/pms-ota/ota-entegrasyonu",
     
    },
    "/Services/pms/reservationManagement": { // https://www.dgtlface.com/tr/Services/pms/reservationManagement
      en: "/services/pms/reservation-management",
      tr: "/pms-ota/rezervasyon-yonetimi",
     
    },
    "/Services/pms/channelManagement": { // https://www.dgtlface.com/tr/Services/pms/reservationModule
      en: "/services/pms/reservation-module",
      tr: "/pms-ota/kanal-yonetimi",
      
    },
    "/Services/pms/webPayment": { // https://www.dgtlface.com/tr/Services/pms/webPayment
      en: "/services/pms/web-payment-systems",
      tr: "/pms-ota/online-satis",
      
    },

    //---------------------------------------------------------
    // ÇAĞRI MERKEZİ (CALL CENTER) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/callcenter": { // https://www.dgtlface.com/tr/Services/callcenter
      en: "/services/call-center",
      tr: "/cagri-merkezi",
      
    },
    "/Services/callcenter/callLanguages": { // https://www.dgtlface.com/tr/Services/callcenter/callLanguages
      en: "/services/call-center/multilingual-support",
      tr: "/cagri-merkezi/4-dilli-cagri-merkezi",
      
    },
    "/Services/callcenter/callPerformance": { // https://www.dgtlface.com/tr/Services/callcenter/callPerformance
      en: "/services/call-center/performance-analysis",
      tr: "/cagri-merkezi/performans-analizi",
     
    },
    "/Services/callcenter/messageManagement": { // https://www.dgtlface.com/tr/Services/callcenter/contractManagement
      en: "/services/call-center/contract-management",
      tr: "/cagri-merkezi/mesaj-yonetimi",
      
    },
    "/Services/callcenter/aftersalesSupport": { // https://www.dgtlface.com/tr/Services/callcenter/multipleChannels satis sonrasi destek
      en: "/services/call-center/multi-channel-sales",
      tr: "/cagri-merkezi/satis-sonrasi-destek",
      
    },
    "/Services/callcenter/reservationSupport": { // https://www.dgtlface.com/tr/Services/callcenter/reservationSupport
      en: "/services/call-center/reservation-support",
      tr: "/cagri-merkezi/rezervasyon-destegi",
      
    },

    //---------------------------------------------------------
    // YARATICILIK (CREATIVE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/creative": { // https://www.dgtlface.com/tr/Services/creative
      en: "/services/creative-design",
      tr: "/creative",
      
    },
    "/Services/creative/corporateGift": { // https://www.dgtlface.com/tr/Services/creative/corporateGift
      en: "/services/creative/corporate-gift-design",
      tr: "/creative/kurumsal-hediye",
      
    },
    "/Services/creative/eventProduction": { // https://www.dgtlface.com/tr/Services/creative/eventProduction
      en: "/services/creative/event-production",
      tr: "/creative/etkinlik-produksiyonu",
     
    },
    "/Services/creative/graphicDesign": { // https://www.dgtlface.com/tr/Services/creative/graphicDesign
      en: "/services/creative/graphic-motion-design",
      tr: "/creative/grafik-motion-tasarim",
      
    },
    "/Services/creative/uiUxDesign": { // https://www.dgtlface.com/tr/Services/creative/uiUxDesign
      en: "/services/creative/ui-ux-design",
      tr: "/creative/ui-ux-hizmeti",
      
    },
    "/Services/creative/videoProduction": { // https://www.dgtlface.com/tr/Services/creative/videoProduction
      en: "/services/creative/video-production",
      tr: "/creative/video-ve-produksiyon",
      
    },

    //---------------------------------------------------------
    // DİJİTAL ANALİZ HİZMETLERİ
    //---------------------------------------------------------
    "/Services/digitalAnalysis": { // https://www.dgtlface.com/tr/Services/digitalAnalysis
      en: "/services/digital-analysis",
      tr: "/raporlama",
     
    },
    "/Services/digitalAnalysis/lookerStudio": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/advertisingReportingService
      en: "/services/digital-analysis/advertising-reporting",
      tr: "/raporlama/looker-studio",
      
    },
    "/Services/digitalAnalysis/kvkkDataSecurity": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/callReportingService
      en: "/services/digital-analysis/call-reporting",
      tr: "/raporlama/kvkk-veri-guvenligi",
      
    },
    "/Services/digitalAnalysis/digitalSalesAnalysis": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/digitalSalesAnalysis
      en: "/services/digital-analysis/digital-sales-analysis",
      tr: "/raporlama/satis-donusum",
      
    },
    "/Services/digitalAnalysis/onlineMarketResearchService": { // https://www.dgtlface.com/tr/Services/digitalAnalysis/onlineMarketResearchService
      en: "/services/digital-analysis/online-market-research",
      tr: "/raporlama/benchmark-analizi",
      
    },

    //---------------------------------------------------------
    // ARAMA MOTORU PAZARLAMA (SEM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/sem": { // https://www.dgtlface.com/tr/Services/sem
      en: "/sem",
      tr: "/sem",
     
    },
    "/Services/sem/youtubeAdvertising": { // https://www.dgtlface.com/tr/Services/sem/advertisingManagement
      en: "/services/sem/advertising-management",
      tr: "/sem/youtube-reklam-yonetimi",
      
    },
    "/Services/sem/googleAdsAdvertising": { // https://www.dgtlface.com/tr/Services/sem/googleAdsAdvertising
      en: "/services/sem/google-ads-advertising",
      tr: "/sem/google-ads-yonetimi",
     
    },
    "/Services/sem/remarketingDisplay": { // https://www.dgtlface.com/tr/Services/sem/googleWebtools
      en: "/sem/remarketing-and-display",
      tr: "/sem/remarketing-ve-display",
      
    },
    "/Services/sem/tagManager": { // https://www.dgtlface.com/tr/Services/sem/webTraffic
      en: "/services/sem/web-traffic-monitoring",
      tr: "/sem/donusum-takibi-tag-manager",
     
    },
    "/Services/sem/performanceAnalysis": { // https://www.dgtlface.com/tr/Services/sem/yandexAdvertising
      en: "/services/sem/performanceAnalysis",
      tr: "/sem/reklam-raporlama",
     
    },

    //---------------------------------------------------------
    // SEO HİZMETLERİ
    //---------------------------------------------------------
    "/Services/seo": { // https://www.dgtlface.com/tr/Services/seo
      en: "/services/seo-search-engine-optimization",
      tr: "/seo",
    },
    

    "/Services/seo/backlinkSeo": { // https://www.dgtlface.com/tr/Services/seo/offpageSeo
      en: "/services/seo/off-page-seo",
      tr: "/seo/backlink-yonetimi",
      
    },
    "/Services/seo/contentSeo": { // https://www.dgtlface.com/tr/Services/seo/onpageSeo
      en: "/services/seo/on-page-seo",
      tr: "/seo/icerik-seo",
      
    },
    "/Services/seo/localSeo": { // https://www.dgtlface.com/tr/Services/seo/originalCopywriting
      en: "/services/seo/original-copywriting",
      tr: "/seo/yerel-seo",
      
    },
    "/Services/seo/seoReporting": { // https://www.dgtlface.com/tr/Services/seo/seoReporting
      en: "/services/seo/seo-reporting",
      tr: "/seo/seo-raporlama",
      
    },
    "/Services/seo/technicalSeo": { // https://www.dgtlface.com/tr/Services/seo/technicalSeo
      en: "/services/seo/technical-seo",
      tr: "/seo/teknik-seo",
      
    },

    //---------------------------------------------------------
    // SOSYAL MEDYA PAZARLAMA (SMM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/smm": { // https://www.dgtlface.com/tr/Services/smm
      en: "/services/social-media-marketing",
      tr: "/smm",
      
    },
    "/Services/smm/reelsVideo": { // https://www.dgtlface.com/tr/Services/smm/socialMediaAnalysis
      en: "/services/smm/social-media-analysis",
      tr: "/smm/reels-video",
      
    },

        "/Services/smm/socialMediaAds": { // https://www.dgtlface.com/tr/Services/smm/socialMediaAnalysis
      en: "/services/smm/social-media-analysis",
      tr: "/smm/sosyal-medya-reklamlari",
      
    },

    "/Services/smm/socialMediaContent": { // https://www.dgtlface.com/tr/Services/smm/socialMediaContent
      en: "/services/smm/social-media-content",
      tr: "/smm/icerik-uretimi",
      
    },
    "/Services/smm/socialMediaPlanning": { // https://www.dgtlface.com/tr/Services/smm/socialMediaPlanning
      en: "/services/smm/social-media-planning",
      tr: "/smm/planlama-strateji",
     
    },
    "/Services/smm/socialMediaReporting": { // https://www.dgtlface.com/tr/Services/smm/socialMediaReporting
      en: "/services/smm/social-media-reporting",
      tr: "/smm/analiz-raporlama",
      
    },
    
    //---------------------------------------------------------
    // YAZILIM (SOFTWARE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/software": { // https://www.dgtlface.com/tr/Services/software
      en: "/services/software-development",
      tr: "/yazilim",
     
    },
    "/Services/software/cmsInstallationService": { // https://www.dgtlface.com/tr/Services/software/cmsInstallationService
      en: "/services/software/cms-installation",
      tr: "/yazilim/cms-entegrasyonu",
      
    },
    "/Services/software/kvkk": { // https://www.dgtlface.com/tr/Services/software/pdpaCompliance
      en: "/services/software/pdpa-compliance",
      tr: "/yazilim/kvkk-uyum-hizmeti",
      
    },
    "/Services/software/serverManagementService": { // https://www.dgtlface.com/tr/Services/software/serverManagementService
      en: "/services/software/server-management",
      tr: "/yazilim/sunucu-guvenlik",
      
    },
    "/Services/software/websiteAndSoftware": { // https://www.dgtlface.com/tr/Services/software/websiteAndSoftware
      en: "/services/software/website-and-software",
      tr: "/yazilim/web-sitesi-gelistirme",
      
    },
    "/Services/software/websiteMaintanceService": { // https://www.dgtlface.com/tr/Services/software/websiteMaintanceService
      en: "/services/software/website-maintenance",
      tr: "/yazilim/bakim-ve-destek",
      
    },

    // hotel pages
        "/Services/hotel": { 
      en: "/services/hotel",
      tr: "/otel",
      
    },
    "/Services/hotel/seo": { 
      en: "/services/hotel/hotel-identification",
      tr: "/otel/seo",
      
    },
    "/Services/hotel/socialMedia": { 
      en: "/services/hotel/ota-contract",
      tr: "/otel/sosyal-medya",
      
    },
    "/Services/hotel/adsManagement": { 
      en: "/services/hotel/reservation-management",
      tr: "/otel/reklam-yonetimi",
      
    },
    "/Services/hotel/otaManagement": { 
      en: "/services/hotel/reservation-module",
      tr: "/otel/ota-yonetimi",
      
    },
    "/Services/hotel/pmsIntegration": { 
      en: "/services/hotel/web-payment-systems",
      tr: "/otel/pms-entegrasyonu",
      
    },

     "/Services/hotel/callCenter": { 
      en: "/services/hotel/web-payment-systems",
      tr: "/otel/cagri-merkezi",
      
    },

    // "/faq": {
    //   en: "/faq",
    //   tr: "/sss",
    // },

    // // Dinamik FAQ sayfası (senin yapın /faq/[faq] ise)
    // "/faq/[faq]": {
    //   en: "/faq/[faq]",
    //   tr: "/[faq]", // TR'de root altında: /hizmetler-sss, /seo-sss vb.
    // },
    

    "/[department]/blog/[slug]": {
  en: "/[department]/blog/[slug]",
  tr: "/[department]/blog/[slug]",
},
  }
})