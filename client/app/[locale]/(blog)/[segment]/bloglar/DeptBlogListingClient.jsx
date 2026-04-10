"use client";

import { useMemo, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import HeroSlider from "../blog/HeroSlider";
import BlogRail from "../blog/BlogRail";
import BlogBreadcrumbs from "../blog/BlogBreadcrumbs"; 
import {
  getBlogServiceInternalPath,
  toCanonicalBlogSegment,
} from "@/app/lib/blog-route-segments";
import { routing } from "@/i18n/routing";

// Senin mevcut fonksiyonun
function toTs(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

const GRADIENT = "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

// Departman label map (istersen tr/en ayrı yaparsın)
const DEPT_LABEL = {
  sem: "SEM - Dijital Reklam Yönetimi",
  seo: "SEO - Arama Motoru Optimizasyonu",
  smm: "SMM - Sosyal Medya Pazarlaması",
  yazilim: "Web & Yazılım Hizmetleri",
  creative: "Creative",
  "cagri-merkezi": "Çağrı Merkezi",
  "pms-ota": "PMS & OTA Yönetimi",
  "raporlama": "Veri Analizi & Raporlama",
  "otel": "Otel Dijital Dönüşüm",
};

// Türkçe yorum: Ana departman -> alt hizmetler (rail başlıkları + servis sayfası linki)
const SUB_DEPTS = {
  sem: [
    { id: "googleAdsAdvertising", label: "Google Ads Yönetimi", href: "/Services/sem/googleAdsAdvertising" },
    { id: "youtubeAdvertising", label: "YouTube Reklam Yönetimi", href: "/Services/sem/youtubeAdvertising" },
    { id: "remarketing", label: "Remarketing & Display", href: "/Services/sem/remarketingDisplay" },
    { id: "tag_manager", label: "Dönüşüm Takibi & Tag Manager", href: "/Services/sem/tagManager" },
    { id: "performance", label: "Reklam Raporlama & Performans", href: "/Services/sem/performanceAnalysis" },
  ],

  // SEO örneği (senin sayfa isimlerine göre düzenleyebilirsin)
  seo: [
    { id: "technical", label: "Teknik SEO", href: "/Services/seo/technicalSeo" },
     { id: "local", label: "Yerel SEO", href: "/Services/seo/localSeo" },
    { id: "content", label: "İçerik SEO", href: "/Services/seo/contentSeo" },
    { id: "backlink", label: "Backlink Yönetimi", href: "/Services/seo/backlinkSeo" },
    { id: "reporting", label: "SEO Raporlama", href: "/Services/seo/seoReporting" },
  ],

  // SMM örneği
  smm: [
    { id: "content", label: "İçerik Üretimi", href: "/Services/smm/socialMediaContent" },
    { id: "planning", label: "Planlama & Strateji", href: "/Services/smm/socialMediaPlanning" },
    { id: "ads", label: "Sosyal Medya Reklamları", href: "/Services/smm/socialMediaAds" },
    { id: "reels", label: "Reels & Kısa Video", href: "/Services/smm/reelsVideo" },
    { id: "reporting", label: "Analiz & Raporlama", href: "/Services/smm/socialMediaReporting" },
  ],

  // Yazılım / Creative / Callcenter / PMS / DigitalAnalysis / Hotel (senin slug’lara göre doldurulur)
  yazilim: [
    { id: "website", label: "Web Sitesi & Yazılım", href: "/Services/software/websiteAndSoftware" },
    { id: "cms", label: "CMS Entegrasyonu", href: "/Services/software/cmsInstallationService" },
    { id: "kvkk", label: "KVKK Uyum", href: "/Services/software/kvkk" },
    { id: "server", label: "Sunucu & Güvenlik", href: "/Services/software/serverManagementService" },
    { id: "maintenance", label: "Bakım & Teknik Destek", href: "/Services/software/websiteMaintanceService" },
  ],

  creative: [
    { id: "graphic", label: "Graphic Design", href: "/Services/creative/graphicDesign" },
    { id: "uiux", label: "UI/UX Tasarımı", href: "/Services/creative/uiUxDesign" },
    { id: "video", label: "Video & Prodüksiyon", href: "/Services/creative/videoProduction" },
    { id: "event", label: "Event Production", href: "/Services/creative/eventProduction" },
    { id: "gift", label: "Kurumsal Hediye", href: "/Services/creative/corporateGift" },
  ],

  "cagri-merkezi": [
    { id: "multilang", label: "4 Dilli Çağrı Merkezi", href: "/Services/callcenter/callLanguages" },
    { id: "reservationSupport", label: "Rezervasyon Desteği", href: "/Services/callcenter/reservationSupport" },
     { id: "message", label: "Mesaj & DM Yönetimi", href: "/Services/callcenter/messageManagement" },
    { id: "performance", label: "Performans Analizi", href: "/Services/callcenter/callPerformance" },
    { id: "aftersales", label: "Satış Sonrası Destek", href: "/Services/callcenter/aftersalesSupport" },
  ],

  "pms-ota": [
    { id: "setup", label: "PMS Kurulum & Yapılandırma", href: "/Services/pms/pmsInstallation" },
    { id: "ota", label: "OTA Entegrasyonu & Sözleşmeler", href: "/Services/pms/otaContract" },
    { id: "channel", label: "Kanal Yönetimi", href: "/Services/pms/channelManagement" },
    { id: "payment", label: "Online Satış & Ödeme", href: "/Services/pms/webPayment" },
    { id: "reservation", label: "Rezervasyon Yönetimi", href: "/Services/pms/reservationManagement" },
  ],

  "raporlama": [
    { id: "looker", label: "Reklam Raporlama (Looker)", href: "/Services/digitalAnalysis/lookerStudio" },
    { id: "benchmark", label: "Benchmark & Pazar Analizi", href: "/Services/digitalAnalysis/onlineMarketResearchService" },
    { id: "sales", label: "Satış & Dönüşüm Analizi", href: "/Services/digitalAnalysis/digitalSalesAnalysis" },
    { id: "kvkk", label: "KVKK Veri Güvenliği", href: "/Services/digitalAnalysis/kvkkDataSecurity" },
  ],

  "otel": [
    { id: "seo", label: "Otel SEO", href: "/Services/hotel/seo" },
    { id: "social", label: "Otel Sosyal Medya", href: "/Services/hotel/socialMedia" },
    { id: "ads", label: "Otel Reklam Yönetimi", href: "/Services/hotel/adsManagement" },
    { id: "ota", label: "OTA & Kanal Yönetimi", href: "/Services/hotel/otaManagement" },
    { id: "pms", label: "PMS Entegrasyonu", href: "/Services/hotel/pmsIntegration" },
    { id: "call", label: "Otel Rezervasyon Çağrı Merkezi", href: "/Services/hotel/callCenter" },
  ],
};


// --- senin BlogCard, HeroSlider, BlogRail bileşenlerini aynen kullanabilirsin ---
// Buraya tekrar yapıştırmak yerine: mevcut dosyadan importlamanı öneririm.
// Ama şimdilik mantığı göstermek için sadece veri kısmını yazıyorum.

function normalizeText(s = "") {
  return s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function DeptBlogListingClient({
  initialBlogSummaries = [],
  segment,
}) {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const normalizedLocale = locale === "en" ? "en" : "tr";
  const canonicalSegment = useMemo(
    () => toCanonicalBlogSegment(segment) || segment,
    [segment]
  );
  const deptTitle = DEPT_LABEL[canonicalSegment] || canonicalSegment;
  const departmentHref = useMemo(() => {
    const serviceInternalPath = getBlogServiceInternalPath(canonicalSegment);
    const localizedServicePath = serviceInternalPath
      ? routing.pathnames?.[serviceInternalPath]?.[normalizedLocale]
      : null;

    if (typeof localizedServicePath === "string") {
      return `/${normalizedLocale}${localizedServicePath}`;
    }

    return `/${normalizedLocale}/${segment}`;
  }, [canonicalSegment, normalizedLocale, segment]);

  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  // 1) Tüm postları çıkar
 const ALL_POSTS = useMemo(() => {
  return initialBlogSummaries.filter((post) => post?.slug && post?.dept);
}, [initialBlogSummaries]);


  // 2) Sadece departman filtresi
  const DEPT_POSTS = useMemo(() => {
    return ALL_POSTS.filter((p) => p.dept === canonicalSegment);
  }, [ALL_POSTS, canonicalSegment]);

  // 3) Departman içi arama
  const filteredPosts = useMemo(() => {
    const q = normalizeText(query.trim());

    return DEPT_POSTS.filter((p) => {
      if (!q) return true;
      const hayTitle = normalizeText(p.title);
      const hayExcerpt = normalizeText(p.excerpt);
      return hayTitle.includes(q) || hayExcerpt.includes(q);
    });
  }, [DEPT_POSTS, query]);

  const isSearching = query.trim().length >= 2;
  const hasResults = isSearching && filteredPosts.length > 0;
  const noResults = isSearching && filteredPosts.length === 0;

  // 4) Tarihe göre sıralı
  const sortedDept = useMemo(() => {
    return [...DEPT_POSTS].sort((a, b) => toTs(b.updatedAt) - toTs(a.updatedAt));
  }, [DEPT_POSTS]);

  const sortedFiltered = useMemo(() => {
    return [...filteredPosts].sort((a, b) => toTs(b.updatedAt) - toTs(a.updatedAt));
  }, [filteredPosts]);

  // 5) Hero = son 5 (departman)
  const heroPosts = useMemo(() => sortedDept.slice(0, 5), [sortedDept]);



  // 7) Rail’ler: sadece 2 tane
  const displayAll = hasResults ? sortedFiltered : sortedDept;

const rails = useMemo(() => {
  // Arama varsa, bence en doğrusu: sadece arama sonuçlarını göster
  if (hasResults) {
    return [
      { id: "search", title: `"${query.trim()}" için sonuçlar`, posts: sortedFiltered },
    ];
  }

  // Arama yoksa: Son 20 + alt departmanlar + Hepsi
  const base = [];


  // 2) Alt departman rail'leri (segment'e göre)
  const subList = SUB_DEPTS?.[canonicalSegment] || [];

  // SUB_DEPTS id -> meta map (label/href bulmak için)
  const subMeta = Object.fromEntries(subList.map((s) => [s.id, s]));

  //  Hepsi
  base.push({
    id: "all",
    title: `${deptTitle} Blogları`,
    posts: sortedDept,
  });

  
  // Her alt departman için postları topla
  for (const sub of subList) {
    const posts = sortedDept.filter((p) => p.subDept === sub.id);
    if (!posts.length) continue;

    base.push({
      id: `sub-${sub.id}`,
      title: sub.label,
      titleHref: sub.href,        // ✅ BlogRail başlığını linklemek istersen
      posts,                      // İstersen slice(0, 20) gibi limit koyabilirsin
    });
  }

  // 3) Alt departmanı olmayanlar (opsiyonel ama çok iyi olur)
  const knownIds = new Set(subList.map((s) => s.id));
  const otherPosts = sortedDept.filter((p) => !p.subDept || !knownIds.has(p.subDept));
  if (otherPosts.length) {
    base.push({
      id: "sub-other",
      title: "Diğer / Genel SEM",
      posts: otherPosts,
    });
  }

  

  return base;
}, [canonicalSegment, deptTitle, hasResults, query, sortedFiltered, sortedDept]);


  const visibleCount = hasResults ? sortedFiltered.length : sortedDept.length;

  // --- Aşağıda senin mevcut HeroSlider / BlogRail / BlogCard render’ını kullan ---
  // Burada sadece “page iskeletini” gösteriyorum:

  return (
    <main className="min-h-screen bg-[#150016] text-white pt-12 flex flex-col items-center justify-center ">
      {/* Üst bilgi / breadcrumb */}
      <section className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 pt-8 justify-center items-center">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col w-full items-center justify-center mb-2 lg:mb-2.5 max-w-[1000px] -mt-3">
            <BlogBreadcrumbs
  locale={locale}
  department={canonicalSegment}
  departmentHref={departmentHref}
  deptName={deptTitle}
  postTitle={`${deptTitle} Blogları`}
  // Listing için Blog index'i istersen departmana özel yap:
  // blogIndexHref={`/${locale}/${segment}/bloglar`}
  blogIndexHref={`/${locale}/bloglar`}
  className="mb-0"
/>

            <h1 className=" text-md md:text-lg lg:text-xl font-semibold">
              {deptTitle} Blogları
            </h1>
          </div>
        </div>
      </section>
     
      <HeroSlider
  posts={heroPosts}
  locale={locale}
  t={t}
  query={query}
  setQuery={setQuery}
  inputRef={inputRef}
  GRADIENT={GRADIENT}
  noResults={noResults}/>

      {/* Rails */}
      <section className="mx-auto w-full xl:w-[99%] max-w-[1900px] px-4 py-2 lg:pb-16">
        <div className="space-y-6 lg:space-y-10">
          {rails.map((r) => (
         <BlogRail key={r.id} title={r.title} posts={r.posts} locale={locale}  t={t}
    GRADIENT={GRADIENT}
    railIndex={20} />
          ))}
        </div>
      </section>
    </main>
  );
}
