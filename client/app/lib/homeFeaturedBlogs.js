const FEATURED_KEYS = [
  "BlogGoogleAdsOtellerIcinNasilCalisir",
  "BlogCoreWebVitalsOtelVeNextjsRehberi",
  "BlogSosyalMedyaIcerikStratejisiContentPillarsVeFormatDengesi",
  "BlogKurumsalWebSitesiChecklistYayinaCikmadanOnce40Madde",
  "BlogOtelinizIcinDogruPmsNasilSecilir",
  "Blog4DilliCagriMerkeziNedirNasilCalisir",
  "BlogMarkaSosyalMedyaGorselDiliRehberi",
  "BlogLookerStudioOtellerIcinNedirNasilCalisir",
  "BlogOtelSeoNedirOTARakabetineRagmenNasilKazanilir",
  "BlogGoogleAdsHesapVeKampanyaMimarisi",
];

export const HOME_FEATURED_BLOGS = {
  tr: [
    {
      id: "BlogGoogleAdsOtellerIcinNasilCalisir",
      dept: "sem",
      slug: "google-ads-oteller-icin-nasil-calisir",
      title: "Google Ads Oteller Icin Nasil Calisir?",
      excerpt:
        "Google Ads'i rezervasyon ureten olculebilir bir sistem olarak kurgulamak isteyen oteller icin temel baslangic rehberi.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/sem/SEM1-1/SEM1-1-1.webp",
        alt: "Google Ads Oteller Icin Nasil Calisir",
      },
    },
    {
      id: "BlogCoreWebVitalsOtelVeNextjsRehberi",
      dept: "seo",
      slug: "core-web-vitals-otel-ve-nextjs-rehberi",
      title: "Core Web Vitals Rehberi: Otel ve Next.js",
      excerpt:
        "LCP, CLS ve INP metriklerini otel senaryolarinda okuyup adim adim iyilestirmek icin teknik yol haritasi.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/seo/SEO1-1/SEO1-1-1.webp",
        alt: "Core Web Vitals Otel ve Next.js Rehberi",
      },
    },
    {
      id: "BlogSosyalMedyaIcerikStratejisiContentPillarsVeFormatDengesi",
      dept: "smm",
      slug: "sosyal-medya-icerik-stratejisi-content-pillars-ve-format-dengesi",
      title: "Sosyal Medya Icerik Stratejisi",
      excerpt:
        "Content pillars ve format dengesi ile sosyal medya iceriklerini plansiz paylasimdan sistematik buyumeye tasiyin.",
      updatedAt: "2026-01-08",
      banner: {
        src: "/images/blog/smm/SMM1-1/SMM1-1-1.webp",
        alt: "Sosyal Medya Icerik Stratejisi",
      },
    },
    {
      id: "BlogKurumsalWebSitesiChecklistYayinaCikmadanOnce40Madde",
      dept: "yazilim",
      slug: "kurumsal-web-sitesi-checklist-yayina-cikmadan-once-40-madde",
      title: "Kurumsal Web Sitesi Go-Live Checklist",
      excerpt:
        "Yayina cikmadan once teknik, SEO, icerik ve entegrasyon adimlarini tek listede kontrol edin.",
      updatedAt: "2026-01-08",
      banner: {
        src: "/images/blog/software/Software1-1/Software1-1-1-v2.jpg",
        alt: "Kurumsal Web Sitesi Checklist",
      },
    },
    {
      id: "BlogOtelinizIcinDogruPmsNasilSecilir",
      dept: "pms-ota",
      slug: "oteliniz-icin-dogru-pms-nasil-secilir",
      title: "Oteliniz Icin Dogru PMS Nasil Secilir?",
      excerpt:
        "PMS seciminde entegrasyon, olceklenebilirlik ve operasyonel surec kriterlerini adim adim degerlendirin.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/pms/PMS-OTA1-1/Pms1-1-1.webp",
        alt: "Oteliniz Icin Dogru PMS Nasil Secilir",
      },
    },
    {
      id: "BlogCagriMerkezi7_24VeCalismaSaatleriOtelMesajYonetimiOnlineOfflineModeller",
      dept: "cagri-merkezi",
      slug: "7-24-ve-calisma-saatleri-otel-mesaj-yonetimi-online-offline-modeller",
      title: "Otel Mesaj Saatleri: 7/24 mü, Belirli Saat mi?",
      excerpt:
        "DM/WhatsApp mesaj kanallarında 7/24 ve belirli saat modellerini karşılaştırın. Online/offline akış, otomatik “çevrim dışıyız” metinleri, gece mesaj devri ve KPI-maliyet-memnuniyet dengesi.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/callcenter/Callcenter3-20/Callcenter3-20-1.webp",
        alt: "7/24 mü, Belirli Saat mi? Otel Mesaj Yönetiminde Online/Offline Modeller",
      },
    },
    {
      id: "BlogMarkaSosyalMedyaGorselDiliRehberi",
      dept: "creative",
      slug: "marka-sosyal-medya-gorsel-dili-rehberi",
      title: "Marka Sosyal Medya Gorsel Dili Rehberi",
      excerpt:
        "Marka tutarliligi icin renk, tipografi, grid ve icerik formatlarini tek bir gorsel dil sisteminde birlestirin.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/creative/Creative1-1/Creative1-1-1.webp",
        alt: "Marka Sosyal Medya Gorsel Dili",
      },
    },
    {
      id: "BlogLookerStudioOtellerIcinNedirNasilCalisir",
      dept: "raporlama",
      slug: "looker-studio-oteller-icin-nedir-nasil-calisir",
      title: "Looker Studio ile Otel KPI Dashboard",
      excerpt:
        "SEO, reklam ve rezervasyon verilerini tek panelde birlestirerek karar alma hizini artiran dashboard yaklasimi.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/analysisReporting/Reporting1-1/Reporting1-1-1.webp",
        alt: "Looker Studio Otel KPI Dashboard",
      },
    },
    {
      id: "BlogPMSIotAkilliOdaEnerjiEntegrasyonlari",
      dept: "otel",
      slug: "2026-pms-iot-akilli-oda-enerji-entegrasyonlari",
      title: "2026 PMS+IoT Akıllı Oda Enerji ve Konfor",
      excerpt:
        "PMS+BMS+IoT ile check-in/boş oda/gece modu senaryoları kurun; enerji tüketimini optimize edin, arıza alarmlarını operasyonla bağlayın. KVKK/mahremiyet için minimum veri, opt-in ve ağ güvenliğini tasarıma gömün.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/hotel/Hotel5-25/Hotel5-25-1.webp",
        alt: "2026’da PMS + IoT ve Akıllı Oda Entegrasyonları: Enerji, Konfor ve Operasyon",
      },
    },
    {
      id: "BlogGoogleAdsHesapVeKampanyaMimarisi",
      dept: "sem",
      slug: "google-ads-hesap-ve-kampanya-mimarisi",
      title: "Google Ads Hesap ve Kampanya Mimarisi",
      excerpt:
        "Butce kontrolu ve olcekleme icin hesap, kampanya ve reklam grubu seviyesinde dogru mimariyi kurun.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/sem/SEM1-2/SEM1-2-1.webp",
        alt: "Google Ads Hesap ve Kampanya Mimarisi",
      },
    },
  ],
  en: [
    {
      id: "BlogGoogleAdsOtellerIcinNasilCalisir",
      dept: "sem",
      slug: "google-ads-oteller-icin-nasil-calisir",
      title: "How Does Google Ads Work for Hotels?",
      excerpt:
        "A practical starting guide for hotels that want to build Google Ads as a measurable reservation engine.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/sem/SEM1-1/SEM1-1-1.webp",
        alt: "How Does Google Ads Work for Hotels",
      },
    },
    {
      id: "BlogCoreWebVitalsOtelVeNextjsRehberi",
      dept: "seo",
      slug: "core-web-vitals-otel-ve-nextjs-rehberi",
      title: "Core Web Vitals Guide: Hotel and Next.js",
      excerpt:
        "A focused technical playbook to read and improve LCP, CLS, and INP in hotel website scenarios.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/seo/SEO1-1/SEO1-1-1.webp",
        alt: "Core Web Vitals Hotel and Next.js Guide",
      },
    },
    {
      id: "BlogSosyalMedyaIcerikStratejisiContentPillarsVeFormatDengesi",
      dept: "smm",
      slug: "sosyal-medya-icerik-stratejisi-content-pillars-ve-format-dengesi",
      title: "Social Media Content Strategy",
      excerpt:
        "Use content pillars and format balance to move from ad-hoc posting to a scalable social content system.",
      updatedAt: "2026-01-08",
      banner: {
        src: "/images/blog/smm/SMM1-1/SMM1-1-1.webp",
        alt: "Social Media Content Strategy",
      },
    },
    {
      id: "BlogKurumsalWebSitesiChecklistYayinaCikmadanOnce40Madde",
      dept: "yazilim",
      slug: "kurumsal-web-sitesi-checklist-yayina-cikmadan-once-40-madde",
      title: "Corporate Website Go-Live Checklist",
      excerpt:
        "Validate technical setup, SEO, content, and integrations before launch with a single go-live checklist.",
      updatedAt: "2026-01-08",
      banner: {
        src: "/images/blog/software/Software1-1/Software1-1-1-v2.jpg",
        alt: "Corporate Website Go-Live Checklist",
      },
    },
    {
      id: "BlogOtelinizIcinDogruPmsNasilSecilir",
      dept: "pms-ota",
      slug: "oteliniz-icin-dogru-pms-nasil-secilir",
      title: "How to Choose the Right PMS for Your Hotel",
      excerpt:
        "Select a PMS with integration depth, long-term scalability, and operational fit instead of short-term habits.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/pms/PMS-OTA1-1/Pms1-1-1.webp",
        alt: "How to Choose the Right PMS for Your Hotel",
      },
    },
    {
      id: "Blog4DilliCagriMerkeziNedirNasilCalisir",
      dept: "cagri-merkezi",
      slug: "4-dilli-cagri-merkezi-nedir-nasil-calisir",
      title: "How a 4-Language Call Center Works",
      excerpt:
        "Manage phone, WhatsApp, and OTA messages in one process to improve reservation conversion and response quality.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/callcenter/Callcenter1-1/Callcenter1-1-1.webp",
        alt: "4-Language Call Center",
      },
    },
    {
      id: "BlogMarkaSosyalMedyaGorselDiliRehberi",
      dept: "creative",
      slug: "marka-sosyal-medya-gorsel-dili-rehberi",
      title: "Brand Visual Language for Social Media",
      excerpt:
        "Build visual consistency with a practical system for color, typography, grid, and content formats.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/creative/Creative1-1/Creative1-1-1.webp",
        alt: "Brand Visual Language for Social Media",
      },
    },
    {
      id: "BlogLookerStudioOtellerIcinNedirNasilCalisir",
      dept: "raporlama",
      slug: "looker-studio-oteller-icin-nedir-nasil-calisir",
      title: "Looker Studio Hotel KPI Dashboard",
      excerpt:
        "Unify SEO, ads, and reservation signals in one dashboard to speed up decisions and improve accountability.",
      updatedAt: "2026-01-09",
      banner: {
        src: "/images/blog/analysisReporting/Reporting1-1/Reporting1-1-1.webp",
        alt: "Looker Studio Hotel KPI Dashboard",
      },
    },
    {
      id: "BlogOtelSeoNedirOTARakabetineRagmenNasilKazanilir",
      dept: "otel",
      slug: "otel-seo-nedir-ota-rekabetine-ragmen-nasil-kazanilir",
      title: "Hotel SEO Beyond OTA Competition",
      excerpt:
        "Improve direct booking share with a stronger query strategy, page architecture, and destination-led SEO system.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/hotel/Otel1-1/Otel1-1-1.webp",
        alt: "Hotel SEO Beyond OTA Competition",
      },
    },
    {
      id: "BlogGoogleAdsHesapVeKampanyaMimarisi",
      dept: "sem",
      slug: "google-ads-hesap-ve-kampanya-mimarisi",
      title: "Google Ads Account and Campaign Architecture",
      excerpt:
        "Set up account, campaign, and ad-group architecture to improve budget control, signal quality, and scaling.",
      updatedAt: "2026-01-05",
      banner: {
        src: "/images/blog/sem/SEM1-2/SEM1-2-1.webp",
        alt: "Google Ads Account and Campaign Architecture",
      },
    },
  ],
};

export function getHomeFeaturedBlogs(locale) {
  return locale === "en" ? HOME_FEATURED_BLOGS.en : HOME_FEATURED_BLOGS.tr;
}

export { FEATURED_KEYS };
