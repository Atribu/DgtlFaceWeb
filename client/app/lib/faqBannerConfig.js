// lib/faqBannerConfig.js

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
  { label: "SEM (Genel)", href: "/sem-sss" },
  { label: "Google Ads", href: "/google-ads-yonetimi-sss" },
  { label: "YouTube Ads", href: "/youtube-reklam-yonetimi-sss" },
  { label: "Remarketing & Display", href: "/remarketing-ve-display-sss" },
  { label: "Dönüşüm Takibi", href: "/donusum-takibi-tag-manager-sss" },
  { label: "Raporlama", href: "/reklam-raporlama-sss" },
];

const SEO_CHIPS = [
  { label: "SEO (Genel)", href: "/seo-sss" },
  { label: "Teknik SEO", href: "/teknik-seo-sss" },
  { label: "İçerik SEO", href: "/icerik-seo-sss" },
  { label: "Local SEO", href: "/local-seo-sss" },
  { label: "Backlink SEO", href: "/backlink-yonetimi-sss" },
  { label: "SEO Raporlama", href: "/seo-raporlama-sss" },
];


    const SMM_CHIPS = [
      { label: "SMM (Genel)", href: "/smm-sss" },
      { label: "İçerik Üretimi", href: "/icerik-uretimi-sss" },
      { label: "Planlama Strateji", href: "/planlama-strateji-sss" },
      { label: "Reels Video", href: "/reels-video-sss" },
      { label: "Sosyal Medya Reklamları", href: "/sosyal-medya-reklamlari-sss" },
       { label: "Analiz Raporlama", href: "/analiz-raporlama-sss" },
    ];


   const Software_CHIPS = [
      { label: "YAZILIM (Genel)", href: "/yazilim-sss" },
       { label: "Web Sitesi Geliştirme", href: "/web-sitesi-gelistirme-sss" },
      { label: "CMS Entegrasyonu", href: "/cms-entegrasyonu-sss" },
      { label: "KVKK Uyum Hizmeti", href: "/kvkk-uyum-hizmeti-sss" },
      { label: "Sunucu Güvenlik", href: "/sunucu-guvenlik-sss" },
      { label: "Bakım ve Güvenlik", href: "/bakim-destek-sss" },
    ];


     const Creative_CHIPS = [
      { label: "CREATIVE (Genel)", href: "/creative-sss" },
       { label: "Grafik Motion Tasarım", href: "/grafik-motion-tasarim-sss" },
      { label: "UI/UX Dizayn", href: "/ui-ux-hizmeti-sss" },
      { label: "Video Prodüksiyon", href: "/video-ve-produksiyon-sss" },
      { label: "Etkinlik Prodüksiyon", href: "/etkinlik-produksiyonu-sss" },
      { label: "Kurumsal Hediye", href: "/kurumsal-hediye-sss" },
    ];

         const Callcenter_CHIPS = [
      { label: "CALL CENTER", href: "/cagri-merkezi-sss" },
       { label: "4 Dilli Çağrı Merkezi", href: "/4-dilli-cagri-merkezi-sss" },
      { label: "Performans Analizi", href: "/performans-analizi-sss" },
      { label: "Mesaj Yönetimi", href: "/mesaj-yonetimi-sss" },
      { label: "Satış Sonrası Destek", href: "/satis-sonrasi-destek-sss" },
      { label: "Rezervasyon Desteği", href: "/rezervasyon-destegi-sss" },
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
      "video-ve-produksiyon-sss",
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



