// lib/faqBannerConfig.js
import imgGeneral from "@/public/images/sss/SSSGENEL.webp"

import imgSeo1 from "@/public/images/sss/SEO/SEOgenel.webp"
import imgSeo2 from "@/public/images/sss/SEO/TeknikSEO.webp"
import imgSeo3 from "@/public/images/sss/SEO/contentSeo.webp"
import imgSeo4 from "@/public/images/sss/SEO/LocalSEO.webp"
import imgSeo5 from "@/public/images/sss/SEO/BacklinkSEO.webp"
import imgSeo6 from "@/public/images/sss/SEO/SEOraporlama.webp"

import imgSem1 from "@/public/images/sss/SEM/SEMgenel.webp"
import imgSem2 from "@/public/images/sss/SEM/Googleads.webp"
import imgSem3 from "@/public/images/sss/SEM/Raporlama.webp"
import imgSem4 from "@/public/images/sss/SEM/Remarketing.webp"
import imgSem5 from "@/public/images/sss/SEM/Donusumtakibi.webp"
import imgSem6 from "@/public/images/sss/SEM/Youtubeads.webp"

import imgSmm1 from "@/public/images/sss/SMM/SMMgenel.webp"
import imgSmm2 from "@/public/images/sss/SMM/Analizraporlama.webp"
import imgSmm3 from "@/public/images/sss/SMM/Icerikuretimi.webp"
import imgSmm4 from "@/public/images/sss/SMM/Planlamastratejisi.webp"
import imgSmm5 from "@/public/images/sss/SMM/Reelsvideo.webp"
import imgSmm6 from "@/public/images/sss/SMM/Sosyalmedyareklamlar.webp"

import imgSoftware1 from "@/public/images/sss/Software/Yazilimgenel.webp"
import imgSoftware2 from "@/public/images/sss/Software/BakimveGuvenlik.webp"
import imgSoftware3 from "@/public/images/sss/Software/CMSentegrasyonu.webp"
import imgSoftware4 from "@/public/images/sss/Software/KVKKuyumHizmeti.webp"
import imgSoftware5 from "@/public/images/sss/Software/SunucuGuvenlik.webp"
import imgSoftware6 from "@/public/images/sss/Software/Websitegelistirme.webp"

import imgCreative1 from "@/public/images/sss/CREATIVE/CreativeGenel.webp"
import imgCreative2 from "@/public/images/sss/CREATIVE/Etkinlik.webp"
import imgCreative3 from "@/public/images/sss/CREATIVE/GrafikMotion.webp"
import imgCreative4 from "@/public/images/sss/CREATIVE/Hediye.webp"
import imgCreative5 from "@/public/images/sss/CREATIVE/UIUXDizayn.webp"
import imgCreative6 from "@/public/images/sss/CREATIVE/Video.webp"

import imgCallcenter1 from "@/public/images/sss/CallCenter/callcentergenel.webp"
import imgCallcenter2 from "@/public/images/sss/CallCenter/callcenter.webp"
import imgCallcenter3 from "@/public/images/sss/CallCenter/4dillicallcenter.webp"
import imgCallcenter4 from "@/public/images/sss/CallCenter/MessageManagement.webp"
import imgCallcenter5 from "@/public/images/sss/CallCenter/PerformansAnalizi.webp"
import imgCallcenter6 from "@/public/images/sss/CallCenter/Rezervasyondestek.webp"

import imgDijital1 from "@/public/images/sss/DijitalAnaliz/DijitalAnalizGenel.webp"
import imgDijital2 from "@/public/images/sss/DijitalAnaliz/LookerStudio.webp"
import imgDijital3 from "@/public/images/sss/DijitalAnaliz/BenchmarkAnaliz.webp"
import imgDijital4 from "@/public/images/sss/DijitalAnaliz/SatisDonusumu.webp"
import imgDijital5 from "@/public/images/sss/DijitalAnaliz/KvkkVeriGuvenlik.webp"

import imgPMS1 from "@/public/images/sss/PMSOTA/PMS-OTAgenel.webp"
import imgPMS2 from "@/public/images/sss/PMSOTA/KanalYonetimi.webp"
import imgPMS3 from "@/public/images/sss/PMSOTA/OnlineSatis.webp"
import imgPMS4 from "@/public/images/sss/PMSOTA/OTAentegrasyonu.webp"
import imgPMS5 from "@/public/images/sss/PMSOTA/PmsKurulumu.webp"
import imgPMS6 from "@/public/images/sss/PMSOTA/RezervasyonYonetimi.webp"

import imgOtel1 from "@/public/images/sss/HOTEL/OtelDijitalDonusum.webp"
import imgOtel2 from "@/public/images/sss/HOTEL/Otelcallcenter.webp"
import imgOtel3 from "@/public/images/sss/HOTEL/OtelPMS.webp"
import imgOtel4 from "@/public/images/sss/HOTEL/OtelReklam.webp"
import imgOtel5 from "@/public/images/sss/HOTEL/OtelSEO.webp"
import imgOtel6 from "@/public/images/sss/HOTEL/OtelSosyalMedya.webp"

// import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

// function faqHrefBySlug(slug) {
//   const dept = FAQ_SLUG_DEPT_SEGMENT_MAP?.[slug];
//   if (dept) return `/${dept}/${slug}`; // /smm/reels-video-sss
//   return `/${slug}`;                  // /smm-sss, /seo-sss...
// }

// ✅ Sadece CHIP listelerinde labelKey eklendi. Diğer kısımlar aynen kalacak.

export const MAIN_SERVICES_CHIPS = [
  { label: "SEM", slug: "sem-sss", labelKey: "faqChips.main.sem" },
  { label: "SEO", slug: "/seo-sss", labelKey: "faqChips.main.seo" },
  { label: "SMM", slug: "/smm-sss", labelKey: "faqChips.main.smm" },
  { label: "YAZILIM", slug: "/yazilim-sss", labelKey: "faqChips.main.software" },
  { label: "CREATIVE", slug: "/creative-sss", labelKey: "faqChips.main.creative" },
  { label: "ÇAĞRI MERKEZİ", slug: "/cagri-merkezi-sss", labelKey: "faqChips.main.callcenter" },
  { label: "PMS & OTA", slug: "/pms-ota-sss", labelKey: "faqChips.main.pmsota" },
  { label: "DİJİTAL ANALİZ", slug: "/veri-analiz-ve-raporlama-sss", labelKey: "faqChips.main.digitalanalysis" },
  { label: "HOTEL", slug: "/otel-dijital-pazarlama-sss", labelKey: "faqChips.main.hotel" },
];

const SEM_CHIPS = [
  { label: "SEM (Genel)", slug: "sem-sss", labelKey: "faqChips.sem.general" },
  { label: "Google Ads", slug: "google-ads-yonetimi-sss", labelKey: "faqChips.sem.googleAds" },
  { label: "YouTube Ads", slug: "youtube-reklam-yonetimi-sss", labelKey: "faqChips.sem.youtubeAds" },
  { label: "Remarketing & Display", slug: "remarketing-ve-display-sss", labelKey: "faqChips.sem.remarketingDisplay" },
  { label: "Dönüşüm Takibi", slug: "donusum-takibi-tag-manager-sss", labelKey: "faqChips.sem.conversionTracking" },
  { label: "Raporlama", slug: "reklam-raporlama-sss", labelKey: "faqChips.sem.reporting" },
];

const SEO_CHIPS = [
  { label: "SEO (Genel)", slug: "seo-sss", labelKey: "faqChips.seo.general" },
  { label: "Teknik SEO", slug: "teknik-seo-sss", labelKey: "faqChips.seo.technical" },
  { label: "İçerik SEO", slug: "icerik-seo-sss", labelKey: "faqChips.seo.content" },
  { label: "Local SEO", slug: "local-seo-sss", labelKey: "faqChips.seo.local" },
  { label: "Backlink SEO", slug: "backlink-yonetimi-sss", labelKey: "faqChips.seo.backlink" },
  { label: "SEO Raporlama", slug: "seo-raporlama-sss", labelKey: "faqChips.seo.reporting" },
];

const SMM_CHIPS = [
  { label: "SMM (Genel)", slug: "smm-sss", labelKey: "faqChips.smm.general" },
  { label: "İçerik Üretimi", slug: "icerik-uretimi-sss", labelKey: "faqChips.smm.contentProduction" },
  { label: "Planlama Strateji", slug: "planlama-strateji-sss", labelKey: "faqChips.smm.planningStrategy" },
  { label: "Reels Video", slug: "reels-video-sss", labelKey: "faqChips.smm.reelsVideo" },
  { label: "Sosyal Medya Reklamları", slug: "sosyal-medya-reklamlari-sss", labelKey: "faqChips.smm.socialAds" },
  { label: "Analiz Raporlama", slug: "analiz-raporlama-sss", labelKey: "faqChips.smm.analyticsReporting" },
];

const Software_CHIPS = [
  { label: "YAZILIM (Genel)", slug: "yazilim-sss", labelKey: "faqChips.software.general" },
  { label: "Web Sitesi Geliştirme", slug: "web-sitesi-gelistirme-sss", labelKey: "faqChips.software.websiteDevelopment" },
  { label: "CMS Entegrasyonu", slug: "cms-entegrasyonu-sss", labelKey: "faqChips.software.cmsIntegration" },
  { label: "KVKK Uyum Hizmeti", slug: "kvkk-uyum-hizmeti-sss", labelKey: "faqChips.software.kvkkCompliance" },
  { label: "Sunucu Güvenlik", slug: "sunucu-guvenlik-sss", labelKey: "faqChips.software.serverSecurity" },
  { label: "Bakım ve Güvenlik", slug: "bakim-destek-sss", labelKey: "faqChips.software.maintenanceSecurity" },
];

const Creative_CHIPS = [
  { label: "CREATIVE (Genel)", slug: "creative-sss", labelKey: "faqChips.creative.general" },
  { label: "Grafik Motion Tasarım", slug: "grafik-motion-tasarim-sss", labelKey: "faqChips.creative.graphicMotion" },
  { label: "UI/UX Dizayn", slug: "ui-ux-tasarim-sss", labelKey: "faqChips.creative.uiux" },
  { label: "Video Prodüksiyon", slug: "video-produksiyon-sss", labelKey: "faqChips.creative.videoProduction" },
  { label: "Etkinlik Prodüksiyon", slug: "etkinlik-produksiyonu-sss", labelKey: "faqChips.creative.eventProduction" },
  { label: "Kurumsal Hediye", slug: "kurumsal-hediye-tasarimi-sss", labelKey: "faqChips.creative.corporateGifts" },
];

const Callcenter_CHIPS = [
  { label: "Çağrı Merkezi (Genel)", slug: "cagri-merkezi-sss", labelKey: "faqChips.callcenter.general" },
  { label: "4 Dilli Çağrı Merkezi", slug: "4-dilli-cagri-merkezi-sss", labelKey: "faqChips.callcenter.multilingual" },
  { label: "Performans Analizi", slug: "performans-analizi-sss", labelKey: "faqChips.callcenter.performanceAnalysis" },
  { label: "Mesaj Yönetimi", slug: "mesaj-yonetimi-sss", labelKey: "faqChips.callcenter.messageManagement" },
  { label: "Satış Sonrası Destek", slug: "satis-sonrasi-destek-sss", labelKey: "faqChips.callcenter.afterSalesSupport" },
  { label: "Rezervasyon Desteği", slug: "rezervasyon-destegi-sss", labelKey: "faqChips.callcenter.reservationSupport" },
];

const PmsOta_CHIPS = [
  { label: "PMS-OTA (Genel)", slug: "pms-ota-sss", labelKey: "faqChips.pmsota.general" },
  { label: "Pms Kurulumu", slug: "pms-kurulum-sss", labelKey: "faqChips.pmsota.pmsSetup" },
  { label: "Ota Entegrasyonu", slug: "ota-entegrasyonu-sss", labelKey: "faqChips.pmsota.otaIntegration" },
  { label: "Rezervasyon Yönetimi", slug: "rezervasyon-yonetimi-sss", labelKey: "faqChips.pmsota.reservationManagement" },
  { label: "Kanal Yönetimi", slug: "kanal-yonetimi-sss", labelKey: "faqChips.pmsota.channelManagement" },
  { label: "Online Satış", slug: "online-satis-sss", labelKey: "faqChips.pmsota.onlineSales" },
];

const DigitalAnalysis_CHIPS = [
  { label: "Dijital Analiz (Genel)", slug: "veri-analiz-ve-raporlama-sss", labelKey: "faqChips.digitalanalysis.general" },
  { label: "Looker Studio", slug: "looker-studio-sss", labelKey: "faqChips.digitalanalysis.lookerStudio" },
  { label: "Benchmark Analiz", slug: "benchmark-analiz-sss", labelKey: "faqChips.digitalanalysis.benchmark" },
  { label: "Satış Dönüşümü", slug: "satis-donusumu-sss", labelKey: "faqChips.digitalanalysis.salesConversion" },
  { label: "Kvkk Veri Güvenliği", slug: "kvkk-veri-guvenligi-sss", labelKey: "faqChips.digitalanalysis.kvkkDataSecurity" },
];

const Hotel_CHIPS = [
  { label: "Otel Dijital Dönüşüm", slug: "otel-dijital-pazarlama-sss", labelKey: "faqChips.hotel.general" },
  { label: "Otel SEO", slug: "otel-seo-sss", labelKey: "faqChips.hotel.seo" },
  { label: "Otel Sosyal Medya", slug: "otel-sosyalmedya-sss", labelKey: "faqChips.hotel.socialMedia" },
  { label: "Otel Reklam", slug: "otel-reklam-sss", labelKey: "faqChips.hotel.ads" },
  { label: "Otel OTA", slug: "otel-ota-sss", labelKey: "faqChips.hotel.ota" },
  { label: "Otel Pms", slug: "otel-pms-sss", labelKey: "faqChips.hotel.pms" },
  { label: "Otel Çağrı Merkezi", slug: "otel-cagrimerkezi-sss", labelKey: "faqChips.hotel.callcenter" },
];


const GROUPS = {
  sem: {
    title: "SEM",
    chips: SEM_CHIPS,
    slugs: [
      "sem-sss",
      "google-ads-yonetimi-sss",
      "youtube-reklam-yonetimi-sss",
      "remarketing-ve-display-sss",
      "donusum-takibi-tag-manager-sss",
      "reklam-raporlama-sss",
    ],
  },
  seo: {
    title: "SEO",
    chips: SEO_CHIPS,
    slugs: [
      "seo-sss",
      "teknik-seo-sss",
      "icerik-seo-sss",
      "local-seo-sss",
      "backlink-yonetimi-sss",
      "seo-raporlama-sss",
    ],
  },

  smm: {
    title: "SMM",
    chips: SMM_CHIPS,
    slugs: [
      "smm-sss",
      "icerik-uretimi-sss",
      "planlama-strateji-sss",
      "reels-video-sss",
      "sosyal-medya-reklamlari-sss",
      "analiz-raporlama-sss",
    ],
  },

  software: {
    title: "Software",
    chips: Software_CHIPS,
    slugs: [
      "yazilim-sss",
      "web-sitesi-gelistirme-sss",
      "cms-entegrasyonu-sss",
      "kvkk-uyum-hizmeti-sss",
      "sunucu-guvenlik-sss",
      "bakim-destek-sss",
    ],
  },

    creative: {
    title: "Creative",
    chips: Creative_CHIPS,
    slugs: [
      "creative-sss",
      "grafik-motion-tasarim-sss",
      "ui-ux-tasarim-sss",
      "video-produksiyon-sss",
      "etkinlik-produksiyonu-sss",
      "kurumsal-hediye-tasarimi-sss",
    ],
  },

    callcenter: {
    title: "Callcenter",
    chips: Callcenter_CHIPS,
    slugs: [
      "cagri-merkezi-sss",
      "4-dilli-cagri-merkezi-sss",
      "performans-analizi-sss",
      "mesaj-yonetimi-sss",
      "satis-sonrasi-destek-sss",
      "rezervasyon-destegi-sss",
    ],
  },

      pmsota: {
    title: "PMS-OTA",
    chips: PmsOta_CHIPS,
    slugs: [
      "pms-ota-sss",
      "pms-kurulum-sss",
      "ota-entegrasyonu-sss",
      "rezervasyon-yonetimi-sss",
      "kanal-yonetimi-sss",
      "online-satis-sss",
    ],
  },

   digitalanalysis: {
    title: "Dijital Analiz",
    chips: DigitalAnalysis_CHIPS,
    slugs: [
      "veri-analiz-ve-raporlama-sss",
      "looker-studio-sss",
      "benchmark-analiz-sss",
      "satis-donusumu-sss",
      "kvkk-veri-guvenligi-sss"
    ],
  },

     hotel: {
    title: "Otel",
    chips: Hotel_CHIPS,
    slugs: [
      "otel-dijital-pazarlama-sss",
      "otel-seo-sss",
      "otel-sosyalmedya-sss",
      "otel-reklam-sss",
      "otel-ota-sss",
      "otel-pms-sss",
      "otel-cagrimerkezi-sss"
    ],
  },
};

const AUTO_MAP = Object.fromEntries(
  Object.values(GROUPS).flatMap((g) =>
    g.slugs.map((slug) => [
      slug,
      { mode: "children", title: g.title, chips: g.chips },
    ])
  )
);

export const FAQ_BANNER_MAP = {
  // Ana hizmetler
  sss: { mode: "main" },
  "hizmetlerimiz-sss": { mode: "main" },

  // Otomatik üretilenler
  ...AUTO_MAP,
};


// ✅ FAQ slug -> banner görseli eşlemesi
export const FAQ_BANNER_ASSET_MAP = {
  // ---------------------------------------------------------
  // GENEL SSS
  // ---------------------------------------------------------
  "sss": imgGeneral, // genel bir görsel seç (istersen ayrı bir genel görsel koy)
  "hizmetlerimiz-sss": imgGeneral, // sende bu slug var

  // ---------------------------------------------------------
  // SEO
  // ---------------------------------------------------------
  "seo-sss": imgSeo1,
  "teknik-seo-sss": imgSeo2,
  "icerik-seo-sss": imgSeo3,
  "local-seo-sss": imgSeo4,
  "backlink-yonetimi-sss": imgSeo5,
  "seo-raporlama-sss": imgSeo6,

  // ---------------------------------------------------------
  // SEM
  // ---------------------------------------------------------
  "sem-sss": imgSem1,
  "google-ads-yonetimi-sss": imgSem2,
  "reklam-raporlama-sss": imgSem3,
  "remarketing-ve-display-sss": imgSem4,
  "donusum-takibi-tag-manager-sss": imgSem5,
  "youtube-reklam-yonetimi-sss": imgSem6,

  // ---------------------------------------------------------
  // SMM
  // ---------------------------------------------------------
  "smm-sss": imgSmm1,
  "analiz-raporlama-sss": imgSmm2,
  "icerik-uretimi-sss": imgSmm3,
  "planlama-strateji-sss": imgSmm4,
  "reels-video-sss": imgSmm5,
  "sosyal-medya-reklamlari-sss": imgSmm6,

  // ---------------------------------------------------------
  // SOFTWARE / YAZILIM
  // ---------------------------------------------------------
  "yazilim-sss": imgSoftware1,
  "bakim-destek-sss": imgSoftware2,
  "cms-entegrasyonu-sss": imgSoftware3,
  "kvkk-uyum-hizmeti-sss": imgSoftware4,
  "sunucu-guvenlik-sss": imgSoftware5,
  "web-sitesi-gelistirme-sss": imgSoftware6,

  // ---------------------------------------------------------
  // CREATIVE
  // ---------------------------------------------------------
  "creative-sss": imgCreative1,
  "etkinlik-produksiyonu-sss": imgCreative2,
  "grafik-motion-tasarim-sss": imgCreative3,
  "kurumsal-hediye-tasarimi-sss": imgCreative4,
  "ui-ux-tasarim-sss": imgCreative5,
  "video-produksiyon-sss": imgCreative6,

  // ---------------------------------------------------------
  // CALL CENTER
  // ---------------------------------------------------------
  "cagri-merkezi-sss": imgCallcenter1,
  "4-dilli-cagri-merkezi-sss": imgCallcenter3,
  "mesaj-yonetimi-sss": imgCallcenter4,
  "performans-analizi-sss": imgCallcenter5,
  "rezervasyon-destegi-sss": imgCallcenter6,
  "satis-sonrasi-destek-sss": imgCallcenter2, //  "callcenter.webp" ile kapattım

  // ---------------------------------------------------------
  // PMS & OTA
  // ---------------------------------------------------------
  "pms-ota-sss": imgPMS1,
  "kanal-yonetimi-sss": imgPMS2,
  "online-satis-sss": imgPMS3,
  "ota-entegrasyonu-sss": imgPMS4,
  "pms-kurulum-sss": imgPMS5,
  "rezervasyon-yonetimi-sss": imgPMS6,

  // ---------------------------------------------------------
  // DİJİTAL ANALİZ
  // ---------------------------------------------------------
  "veri-analiz-ve-raporlama-sss": imgDijital1,
  "looker-studio-sss": imgDijital2,
  "benchmark-analiz-sss": imgDijital3,
  "satis-donusumu-sss": imgDijital4,
  "kvkk-veri-guvenligi-sss": imgDijital5,

  // ---------------------------------------------------------
  // HOTEL
  // ---------------------------------------------------------
  "otel-dijital-pazarlama-sss": imgOtel1,
  "otel-cagrimerkezi-sss": imgOtel2,
  "otel-pms-sss": imgOtel3,
  "otel-reklam-sss": imgOtel4,
  "otel-seo-sss": imgOtel5,
  "otel-sosyalmedya-sss": imgOtel6,

};




