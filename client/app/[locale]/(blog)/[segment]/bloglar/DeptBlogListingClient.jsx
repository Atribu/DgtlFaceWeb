"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale, useMessages } from "next-intl";
import { BLOG_MEDIA_MAP } from "@/app/lib/blogMediaMap";
import HeroSlider from "../blog/HeroSlider";
import BlogRail from "../blog/BlogRail";


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
  callcenter: "Çağrı Merkezi",
  "pms-ota": "PMS & OTA Yönetimi",
  "veri-analizi-raporlama": "Veri Analizi & Raporlama",
  hotel: "Otel Dijital Dönüşüm",
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
    return [
      { id: "latest20", title: "Son Eklenen 20", posts: latest20 },
      { id: "all", title: `${deptTitle} Blogları`, posts: displayAll },
    ];
  }, [segment, latest20, displayAll]);

  const visibleCount = hasResults ? sortedFiltered.length : sortedDept.length;

  // --- Aşağıda senin mevcut HeroSlider / BlogRail / BlogCard render’ını kullan ---
  // Burada sadece “page iskeletini” gösteriyorum:

  return (
    <main className="min-h-screen bg-[#150016] text-white pt-12 flex flex-col items-center justify-center">
      {/* Üst bilgi / breadcrumb */}
      <section className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 pt-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col w-full items-center justify-center mb-2 lg:mb-4">
            <p className="text-xs text-white/60">
              <Link href={`/${locale}/bloglar`} className="hover:text-white">Bloglar</Link>
              <span className="mx-2">/</span>
              <span className="capitalize">{DEPT_LABEL[segment] || segment}</span>
            </p>
            <h1 className="mt-1 text-xl  md:text-2xl lg:text-3xl font-semibold">
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
  noResults={noResults}
/>

      {/* Rails */}
      <section className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 py-2 lg:pb-16">
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
