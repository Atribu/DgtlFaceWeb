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
    "/Services/pms": {
      en: "/pms-ota",
      tr: "/pms-ota",
      
    },
    "/Services/pms/pmsInstallation": {
      en: "/pms-ota/pms-integration",
      tr: "/pms-ota/pms-kurulum",
      
    },
    "/Services/pms/otaContract": { 
      en: "/pms-ota/ota-contract",
      tr: "/pms-ota/ota-entegrasyonu",
     
    },
    "/Services/pms/reservationManagement": { 
      en: "/pms-ota/reservation-management",
      tr: "/pms-ota/rezervasyon-yonetimi",
     
    },
    "/Services/pms/channelManagement": { 
      en: "/pms-ota/channel-management",
      tr: "/pms-ota/kanal-yonetimi",
      
    },
    "/Services/pms/webPayment": { 
      en: "/pms-ota/web-payment",
      tr: "/pms-ota/online-satis",
      
    },

    //---------------------------------------------------------
    // ÇAĞRI MERKEZİ (CALL CENTER) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/callcenter": { 
      en: "/call-center",
      tr: "/cagri-merkezi",
      
    },
    "/Services/callcenter/callLanguages": { 
      en: "/call-center/multilingual-call-center",
      tr: "/cagri-merkezi/4-dilli-cagri-merkezi",
      
    },
    "/Services/callcenter/callPerformance": { 
      en: "/call-center/performance-analysis",
      tr: "/cagri-merkezi/performans-analizi",
     
    },
    "/Services/callcenter/messageManagement": { 
      en: "/call-center/message-management",
      tr: "/cagri-merkezi/mesaj-yonetimi",
      
    },
    "/Services/callcenter/aftersalesSupport": { 
      en: "/call-center/after-sales-support",
      tr: "/cagri-merkezi/satis-sonrasi-destek",
      
    },
    "/Services/callcenter/reservationSupport": { 
      en: "/call-center/reservation-support",
      tr: "/cagri-merkezi/rezervasyon-destegi",
      
    },

    //---------------------------------------------------------
    // YARATICILIK (CREATIVE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/creative": { 
      en: "/creative-design",
      tr: "/creative",
      
    },
    "/Services/creative/corporateGift": { 
      en: "/creative/corporate-gift",
      tr: "/creative/kurumsal-hediye-tasarimi",
      
    },
    "/Services/creative/eventProduction": { 
      en: "/creative/event-production",
      tr: "/creative/etkinlik-produksiyonu",
     
    },
    "/Services/creative/graphicDesign": { 
      en: "/creative/graphic-motion-design",
      tr: "/creative/grafik-motion-tasarim",
      
    },
    "/Services/creative/uiUxDesign": { 
      en: "/creative/ui-ux-design",
      tr: "/creative/ui-ux-tasarim",
      
    },
    "/Services/creative/videoProduction": {
      en: "/creative/video-production",
      tr: "/creative/video-produksiyon",
      
    },

    //---------------------------------------------------------
    // DİJİTAL ANALİZ HİZMETLERİ
    //---------------------------------------------------------
    "/Services/digitalAnalysis": { 
      en: "/digital-analysis",
      tr: "/raporlama",
     
    },
    "/Services/digitalAnalysis/lookerStudio": { 
      en: "/digital-analysis/looker-studio",
      tr: "/raporlama/looker-studio",
      
    },
    "/Services/digitalAnalysis/kvkkDataSecurity": { 
      en: "/digital-analysis/kvkk-data-security",
      tr: "/raporlama/kvkk-veri-guvenligi",
      
    },
    "/Services/digitalAnalysis/digitalSalesAnalysis": { 
      en: "/digital-analysis/digital-sales-analysis",
      tr: "/raporlama/satis-donusum",
      
    },
    "/Services/digitalAnalysis/onlineMarketResearchService": { 
      en: "/digital-analysis/benchmark-analysis",
      tr: "/raporlama/benchmark-analizi",
      
    },

    //---------------------------------------------------------
    // ARAMA MOTORU PAZARLAMA (SEM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/sem": { // https://www.dgtlface.com/tr/Services/sem
      en: "/search-engine-marketing",
      tr: "/sem",
     
    },
    "/Services/sem/youtubeAdvertising": { 
      en: "/sem/youtube-advertising-management",
      tr: "/sem/youtube-reklam-yonetimi",
      
    },
    "/Services/sem/googleAdsAdvertising": { 
      en: "/sem/google-ads-advertising",
      tr: "/sem/google-ads-yonetimi",
     
    },
    "/Services/sem/remarketingDisplay": { 
      en: "/sem/remarketing-and-display",
      tr: "/sem/remarketing-ve-display",
      
    },
    "/Services/sem/tagManager": { 
      en: "/sem/tag-manager",
      tr: "/sem/donusum-takibi-tag-manager",
     
    },
    "/Services/sem/performanceAnalysis": { 
      en: "/sem/performance-analysis",
      tr: "/sem/reklam-raporlama",
     
    },

    //---------------------------------------------------------
    // SEO HİZMETLERİ
    //---------------------------------------------------------
    "/Services/seo": { // https://www.dgtlface.com/tr/Services/seo
      en: "/search-engine-optimization",
      tr: "/seo",
    },
    

    "/Services/seo/backlinkSeo": { 
      en: "/seo/backlink-seo",
      tr: "/seo/backlink-yonetimi",
      
    },
    "/Services/seo/contentSeo": { 
      en: "/seo/content-seo",
      tr: "/seo/icerik-seo",
      
    },
    "/Services/seo/localSeo": { 
      en: "/seo/local-seo",
      tr: "/seo/yerel-seo",
      
    },
    "/Services/seo/seoReporting": { 
      en: "/seo/seo-reporting",
      tr: "/seo/seo-raporlama",
      
    },
    "/Services/seo/technicalSeo": { 
      en: "/seo/technical-seo",
      tr: "/seo/teknik-seo",
      
    },

    //---------------------------------------------------------
    // SOSYAL MEDYA PAZARLAMA (SMM) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/smm": { // https://www.dgtlface.com/tr/Services/smm
      en: "/social-media-management",
      tr: "/smm",
      
    },
    "/Services/smm/reelsVideo": { 
      en: "/smm/reeels-video",
      tr: "/smm/reels-video",
      
    },

        "/Services/smm/socialMediaAds": { 
      en: "/smm/social-media-ads",
      tr: "/smm/sosyal-medya-reklamlari",
      
    },

    "/Services/smm/socialMediaContent": { 
      en: "/smm/social-media-content",
      tr: "/smm/icerik-uretimi",
      
    },
    "/Services/smm/socialMediaPlanning": { 
      en: "/smm/social-media-planning",
      tr: "/smm/planlama-strateji",
     
    },
    "/Services/smm/socialMediaReporting": { 
      en: "/smm/social-media-reporting",
      tr: "/smm/analiz-raporlama",
      
    },
    
    //---------------------------------------------------------
    // YAZILIM (SOFTWARE) HİZMETLERİ
    //---------------------------------------------------------
    "/Services/software": { // https://www.dgtlface.com/tr/Services/software
      en: "/software-development",
      tr: "/yazilim",
     
    },
    "/Services/software/cmsInstallationService": { 
      en: "/software/cms-installation",
      tr: "/yazilim/cms-entegrasyonu",
      
    },
    "/Services/software/kvkk": { 
      en: "/software/kvkk-compliance-service",
      tr: "/yazilim/kvkk-uyum-hizmeti",
      
    },
    "/Services/software/serverManagementService": { 
      en: "/software/server-management",
      tr: "/yazilim/sunucu-guvenlik",
      
    },
    "/Services/software/websiteAndSoftware": { 
      en: "/software/website-and-software",
      tr: "/yazilim/web-sitesi-gelistirme",
      
    },
    "/Services/software/websiteMaintanceService": { 
      en: "/software/website-maintenance",
      tr: "/yazilim/bakim-ve-destek",
      
    },

    // hotel pages
        "/Services/hotel": { 
      en: "/hotel",
      tr: "/otel",
      
    },
    "/Services/hotel/seo": { 
      en: "/hotel/seo",
      tr: "/otel/seo",
      
    },
    "/Services/hotel/socialMedia": { 
      en: "/hotel/social-media",
      tr: "/otel/sosyal-medya",
      
    },
    "/Services/hotel/adsManagement": { 
      en: "/hotel/ads-management",
      tr: "/otel/reklam-yonetimi",
      
    },
    "/Services/hotel/otaManagement": { 
      en: "/hotel/ota-management",
      tr: "/otel/ota-yonetimi",
      
    },
    "/Services/hotel/pmsIntegration": { 
      en: "/hotel/pms-integration",
      tr: "/otel/pms-entegrasyonu",
      
    },

     "/Services/hotel/callCenter": { 
      en: "/hotel/callcenter",
      tr: "/otel/cagri-merkezi",
      
    },

    // "/faq": {
    //   en: "/faq",
    //   tr: "/sss",
    // },

    // // Dinamik FAQ sayfası (senin yapın /faq/[faq] ise)
    // "/faq/[faq]": {
    //   en: "/faq/[faq]",
    //   tr: "/[faq]", // TR'de root altında: /hizmetlerimiz-sss, /seo-sss vb.
    // },
    "/sss": {
  tr: "/sss",
  en: "/faq"
},

 "/[segment]/[faq]": { tr: "/[segment]/[faq]", en: "/[segment]/[faq]" },

 "/[segment]/blog/[slug]": {
  tr: "/[segment]/blog/[slug]",
  en: "/[segment]/blog/[slug]",
}
    
  }
})