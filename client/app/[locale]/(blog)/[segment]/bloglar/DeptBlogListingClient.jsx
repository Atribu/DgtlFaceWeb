"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale, useMessages } from "next-intl";
import { BLOG_MEDIA_MAP } from "@/app/lib/blogMediaMap";
import HeroSlider from "../blog/HeroSlider";
import BlogRail from "../blog/BlogRail";
import BlogBreadcrumbs from "../blog/BlogBreadcrumbs"; 

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
    { id: "googleAdsAdvertising", label: "Google Ads Yönetimi", href: "/sem/google-ads-yonetimi" },
    { id: "youtubeAdvertising", label: "YouTube Reklam Yönetimi", href: "/sem/youtube-reklam-yonetimi" },
    { id: "remarketing", label: "Remarketing & Display", href: "/sem/remarketing-ve-display" },
    { id: "tag_manager", label: "Dönüşüm Takibi & Tag Manager", href: "/sem/donusum-takibi-tag-manager" },
    { id: "performance", label: "Reklam Raporlama & Performans", href: "/sem/reklam-raporlama" },
  ],

  // SEO örneği (senin sayfa isimlerine göre düzenleyebilirsin)
  seo: [
    { id: "technical", label: "Teknik SEO", href: "/seo/teknik-seo" },
     { id: "local", label: "Yerel SEO", href: "/seo/yerel-seo" },
    { id: "content", label: "İçerik SEO", href: "/seo/icerik-seo" },
    { id: "backlink", label: "Backlink Yönetimi", href: "/seo/backlink-yonetimi" },
    { id: "reporting", label: "SEO Raporlama", href: "/seo/seo-raporlama" },
  ],

  // SMM örneği
  smm: [
    { id: "content", label: "İçerik Üretimi", href: "/smm/icerik-uretimi" },
    { id: "planning", label: "Planlama & Strateji", href: "/smm/planlama-strateji" },
    { id: "ads", label: "Sosyal Medya Reklamları", href: "/smm/sosyal-medya-reklamlari" },
    { id: "reels", label: "Reels & Kısa Video", href: "/smm/reels-kisa-video" },
    { id: "reporting", label: "Analiz & Raporlama", href: "/smm/analiz-raporlama" },
  ],

  // Yazılım / Creative / Callcenter / PMS / DigitalAnalysis / Hotel (senin slug’lara göre doldurulur)
  yazilim: [
    { id: "website", label: "Web Sitesi & Yazılım", href: "/yazilim/web-sitesi-gelistirme" },
    { id: "cms", label: "CMS Entegrasyonu", href: "/yazilim/cms-entegrasyonu" },
    { id: "kvkk", label: "KVKK Uyum", href: "/yazilim/kvkk-uyum-hizmeti" },
    { id: "server", label: "Sunucu & Güvenlik", href: "/yazilim/sunucu-guvenlik" },
    { id: "maintenance", label: "Bakım & Teknik Destek", href: "/yazilim/bakim-ve-destek" },
  ],

  creative: [
    { id: "graphic", label: "Graphic Design", href: "/creative/graphic-motion-tasarim" },
    { id: "uiux", label: "UI/UX Tasarımı", href: "/creative/ui-ux-tasarim" },
    { id: "video", label: "Video & Prodüksiyon", href: "/creative/video-produksiyon" },
    { id: "event", label: "Event Production", href: "/creative/etkinlik-produksiyonu" },
    { id: "gift", label: "Kurumsal Hediye", href: "/creative/kurumsal-hediye-tasarimi" },
  ],

  "cagri-merkezi": [
    { id: "multilang", label: "4 Dilli Çağrı Merkezi", href: "/cagri-merkezi/4-dilli-cagri-merkezi" },
    { id: "reservationSupport", label: "Rezervasyon Desteği", href: "/cagri-merkezi/rezervasyon-destegi" },
     { id: "message", label: "Mesaj & DM Yönetimi", href: "/cagri-merkezi/mesaj-dm-yonetimi" },
    { id: "performance", label: "Performans Analizi", href: "/cagri-merkezi/performans-analizi" },
    { id: "aftersales", label: "Satış Sonrası Destek", href: "/cagri-merkezi/satis-sonrasi-destek" },
  ],

  "pms-ota": [
    { id: "setup", label: "PMS Kurulum & Yapılandırma", href: "/pms-ota/pms-kurulum" },
    { id: "ota", label: "OTA Entegrasyonu & Sözleşmeler", href: "/pms-ota/ota-entegrasyonu" },
    { id: "channel", label: "Kanal Yönetimi", href: "/pms-ota/kanal-yonetimi" },
    { id: "payment", label: "Online Satış & Ödeme", href: "/pms-ota/online-satis" },
    { id: "reservation", label: "Rezervasyon Yönetimi", href: "/pms-ota/rezervasyon-yonetimi" },
  ],

  "raporlama": [
    { id: "looker", label: "Reklam Raporlama (Looker)", href: "/raporlama/looker-studio" },
    { id: "benchmark", label: "Benchmark & Pazar Analizi", href: "/raporlama/benchmark-analizi" },
    { id: "sales", label: "Satış & Dönüşüm Analizi", href: "/raporlama/satis-donusum-analizi" },
    { id: "kvkk", label: "KVKK Veri Güvenliği", href: "/raporlama/cagri-kvkk-raporlama" },
  ],

  "otel": [
    { id: "seo", label: "Otel SEO", href: "/otel/seo" },
    { id: "social", label: "Otel Sosyal Medya", href: "/otel/sosyal-medya" },
    { id: "ads", label: "Otel Reklam Yönetimi", href: "/otel/reklam-yonetimi" },
    { id: "ota", label: "OTA & Kanal Yönetimi", href: "/otel/ota-yonetimi" },
    { id: "pms", label: "PMS Entegrasyonu", href: "/otel/pms-entegrasyonu" },
    { id: "call", label: "Otel Rezervasyon Çağrı Merkezi", href: "/otel/cagri-merkezi" },
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

export default function DeptBlogListingClient({ segment }) {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const messages = useMessages();

  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  // 1) Tüm postları çıkar
 const ALL_POSTS = useMemo(() => {
  const blogPosts = messages?.BlogPosts || {};

  return Object.entries(blogPosts)
    .map(([postKey, post]) => {
      const slug = post.slug || "";
      const banner = BLOG_MEDIA_MAP?.[slug]?.banner || null;

      return {
        id: postKey,
        dept: post.department || "",
        subDept: post.subDepartman || post.subDepartment || "", // ✅ ekle
        slug,
        title: post.title || "",
        excerpt: post.h1?.intro || post.excerpt || post.h1Intro || "",
        updatedAt:
          post.byline?.updatedAt ||
          post.byline?.publishedAt ||
          post.updatedAt ||
          post.publishedAt ||
          "",
        banner,
      };
    })
    .filter((p) => p.slug && p.dept);
}, [messages]);


  // 2) Sadece departman filtresi
  const DEPT_POSTS = useMemo(() => {
    return ALL_POSTS.filter((p) => p.dept === segment);
  }, [ALL_POSTS, segment]);

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

  // 6) Son 20 (departman)
  const latest20 = useMemo(() => sortedDept.slice(0, 20), [sortedDept]);

  // 7) Rail’ler: sadece 2 tane
  const displayAll = hasResults ? sortedFiltered : sortedDept;

const rails = useMemo(() => {
  const deptTitle = DEPT_LABEL[segment] || segment;

  // Arama varsa, bence en doğrusu: sadece arama sonuçlarını göster
  if (hasResults) {
    return [
      { id: "search", title: `"${query.trim()}" için sonuçlar`, posts: sortedFiltered },
    ];
  }

  // Arama yoksa: Son 20 + alt departmanlar + Hepsi
  const base = [];

  // 1) Son 20
  base.push({ id: "latest20", title: "Son Eklenen 20", posts: latest20 });

  // 2) Alt departman rail'leri (segment'e göre)
  const subList = SUB_DEPTS?.[segment] || [];

  // SUB_DEPTS id -> meta map (label/href bulmak için)
  const subMeta = Object.fromEntries(subList.map((s) => [s.id, s]));

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

  // 4) Hepsi
  base.push({
    id: "all",
    title: `${deptTitle} Blogları`,
    posts: sortedDept,
  });

  return base;
}, [segment, hasResults, query, sortedFiltered, latest20, sortedDept]);


  const visibleCount = hasResults ? sortedFiltered.length : sortedDept.length;

  // --- Aşağıda senin mevcut HeroSlider / BlogRail / BlogCard render’ını kullan ---
  // Burada sadece “page iskeletini” gösteriyorum:

  return (
    <main className="min-h-screen bg-[#150016] text-white pt-12 flex flex-col items-center justify-center">
      {/* Üst bilgi / breadcrumb */}
      <section className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 pt-8 justify-center items-center">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col w-full items-center justify-center mb-2 lg:mb-2.5 max-w-[1000px] -mt-3">
            <BlogBreadcrumbs
  locale={locale}
  department={segment}
  deptName={DEPT_LABEL[segment] || segment}
  postTitle={`${DEPT_LABEL[segment] || segment} Blogları`}
  // Listing için Blog index'i istersen departmana özel yap:
  // blogIndexHref={`/${locale}/${segment}/bloglar`}
  blogIndexHref={`/${locale}/bloglar`}
  className="mb-0"
/>

            <h1 className=" text-lg md:text-xl lg:text-2xl font-semibold">
              {DEPT_LABEL[segment] || segment} Blogları
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
