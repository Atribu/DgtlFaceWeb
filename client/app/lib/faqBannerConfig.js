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

import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

function faqHrefBySlug(slug) {
  const dept = FAQ_SLUG_DEPT_SEGMENT_MAP?.[slug];
  if (dept) return `/${dept}/${slug}`; // /smm/reels-video-sss
  return `/${slug}`;                  // /smm-sss, /seo-sss...
}

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

const SEM_CHIPS = [
  { label: "SEM (Genel)", href: faqHrefBySlug("sem-sss") },
  { label: "Google Ads", href: faqHrefBySlug("google-ads-yonetimi-sss") },
  { label: "YouTube Ads", href: faqHrefBySlug("youtube-reklam-yonetimi-sss") },
  { label: "Remarketing & Display", href: faqHrefBySlug("remarketing-ve-display-sss") },
  { label: "Dönüşüm Takibi", href: faqHrefBySlug("donusum-takibi-tag-manager-sss") },
  { label: "Raporlama", href: faqHrefBySlug("reklam-raporlama-sss") },
];

const SEO_CHIPS = [
  { label: "SEO (Genel)", href: faqHrefBySlug("seo-sss") },
  { label: "Teknik SEO", href: faqHrefBySlug("teknik-seo-sss") },
  { label: "İçerik SEO", href: faqHrefBySlug("icerik-seo-sss") },
  { label: "Local SEO", href: faqHrefBySlug("local-seo-sss") },
  { label: "Backlink SEO", href: faqHrefBySlug("backlink-yonetimi-sss") },
  { label: "SEO Raporlama", href: faqHrefBySlug("seo-raporlama-sss") },
];


    const SMM_CHIPS = [
      { label: "SMM (Genel)", href: faqHrefBySlug("smm-sss") },
      { label: "İçerik Üretimi", href: faqHrefBySlug("icerik-uretimi-sss") },
      { label: "Planlama Strateji", href: faqHrefBySlug("planlama-strateji-sss") },
      { label: "Reels Video", href: faqHrefBySlug("reels-video-sss")  },
      { label: "Sosyal Medya Reklamları", href: faqHrefBySlug("sosyal-medya-reklamlari-sss") },
       { label: "Analiz Raporlama", href: faqHrefBySlug("analiz-raporlama-sss") },
    ];


   const Software_CHIPS = [
      { label: "YAZILIM (Genel)", href: faqHrefBySlug("yazilim-sss") },
       { label: "Web Sitesi Geliştirme", href: faqHrefBySlug("web-sitesi-gelistirme-sss") },
      { label: "CMS Entegrasyonu", href: faqHrefBySlug("cms-entegrasyonu-sss") },
      { label: "KVKK Uyum Hizmeti", href: faqHrefBySlug("kvkk-uyum-hizmeti-sss") },
      { label: "Sunucu Güvenlik", href: faqHrefBySlug("sunucu-guvenlik-sss") },
      { label: "Bakım ve Güvenlik", href: faqHrefBySlug("bakim-destek-sss") },
    ];


     const Creative_CHIPS = [
      { label: "CREATIVE (Genel)", href: faqHrefBySlug("creative-sss") },
       { label: "Grafik Motion Tasarım", href: faqHrefBySlug("grafik-motion-tasarim-sss") },
      { label: "UI/UX Dizayn", href: faqHrefBySlug("ui-ux-hizmeti-sss") },
      { label: "Video Prodüksiyon", href: faqHrefBySlug("video-produksiyon-sss") },
      { label: "Etkinlik Prodüksiyon", href: faqHrefBySlug("etkinlik-produksiyonu-sss") },
      { label: "Kurumsal Hediye", href: faqHrefBySlug("kurumsal-hediye-sss") },
    ];

         const Callcenter_CHIPS = [
      { label: "Çağrı Merkezi (Genel)", href: faqHrefBySlug("cagri-merkezi-sss") },
       { label: "4 Dilli Çağrı Merkezi", href: faqHrefBySlug("4-dilli-cagri-merkezi-sss") },
      { label: "Performans Analizi", href: faqHrefBySlug("performans-analizi-sss") },
      { label: "Mesaj Yönetimi", href: faqHrefBySlug("mesaj-yonetimi-sss") },
      { label: "Satış Sonrası Destek", href: faqHrefBySlug("satis-sonrasi-destek-sss") },
      { label: "Rezervasyon Desteği", href: faqHrefBySlug("rezervasyon-destegi-sss") },
    ];

             const PmsOta_CHIPS = [
      { label: "PMS-OTA (Genel)", href: faqHrefBySlug("pms-ota-sss") },
       { label: "Pms Kurulumu", href: faqHrefBySlug("pms-kurulum-sss") },
      { label: "Ota Entegrasyonu", href: faqHrefBySlug("ota-entegrasyonu-sss") },
      { label: "Rezervasyon Yönetimi", href: faqHrefBySlug("rezervasyon-yonetimi-sss") },
      { label: "Kanal Yönetimi", href: faqHrefBySlug("kanal-yonetimi-sss") },
      { label: "Online Satış", href: faqHrefBySlug("online-satis-sss") },
    ];

          const DigitalAnalysis_CHIPS = [
      { label: "Dijital Analiz (Genel)", href: faqHrefBySlug("veri-analiz-ve-raporlama-sss") },
       { label: "Looker Studio", href: faqHrefBySlug("looker-studio-sss") },
      { label: "Benchmark Analiz", href: faqHrefBySlug("benchmark-analiz-sss") },
      { label: "Satış Dönüşümü", href:faqHrefBySlug("satis-donusumu-sss") },
      { label: "Kvkk Veri Güvenliği", href: faqHrefBySlug("kvkk-veri-guvenligi-sss") },
    ];

      const Hotel_CHIPS = [
      { label: "Otel Dijital Dönüşüm", href: faqHrefBySlug("otel-dijital-pazarlama-sss") },
       { label: "Otel SEO", href: faqHrefBySlug("otel-seo-sss") },
      { label: "Otel Sosyal Medya", href: faqHrefBySlug("otel-sosyalmedya-sss") },
      { label: "Otel Reklam", href: faqHrefBySlug("otel-reklam-sss") },
      { label: "Otel Pms", href: faqHrefBySlug("otel-pms-sss") },
      { label: "Otel Çağrı Merkezi", href: faqHrefBySlug("otel-cagrimerkezi-sss") },
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
      "ui-ux-hizmeti-sss",
      "video-produksiyon-sss",
      "etkinlik-produksiyonu-sss",
      "kurumsal-hediye-sss",
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
  "hizmetler-sss": imgGeneral, // sende bu slug var

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
  "kurumsal-hediye-sss": imgCreative4,
  "ui-ux-hizmeti-sss": imgCreative5,
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

  //  FAQ_MAP içinde var ama resim yok
  // geçici fallback:
  // "otel-ota-sss": imgOtel1,
};





