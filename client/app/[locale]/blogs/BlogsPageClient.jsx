"use client";

import { useMemo, useState, useRef, useEffect} from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl"; 
import Image from "next/image";
import {
  buildLocalizedBlogDetailPath,
  buildLocalizedBlogListingPath,
} from "@/app/lib/blog-route-segments";
import {
  BLOG_SEARCH_DEBOUNCE_MS,
  createBlogSearchRecord,
  normalizeBlogSearchText,
} from "@/app/lib/blog-search.mjs";
import { useDebouncedValue } from "@/app/hooks/useDebouncedValue";

const GRADIENT =
  "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

const HERO_INITIAL_AUTOPLAY_DELAY_MS = 10000;
const HERO_AUTOPLAY_DELAY_MS = 5000;
const RAIL_INITIAL_RENDER_COUNT = 12;
const RAIL_RENDER_BATCH_SIZE = 12;

const BLOG_DEPARTMENTS_V2 = [
  { id: "all", label: "Tümü" },
  { id: "sem", label: "SEM - Dijital Reklam Yönetimi" },
    { id: "seo", label: "SEO - Arama Motoru Optimizasyonu" },
      { id: "smm", label: "SMM - Sosyal Medya Pazarlaması" },
   { id: "yazilim", label: "Web & Yazılım Hizmetleri" },
  { id: "creative", label: "Creative" },
    { id: "cagri-merkezi", label: "Çağrı Merkezi" },
  { id: "pms-ota", label: "PMS & OTA Yönetimi" },
  { id: "raporlama", label: "Veri Analizi & Raporlama" },
  { id: "otel", label: "Otel Dijital Dönüşüm" },
];

//  mock data
// slug ekledik (URL üretmek için şart)

function toTs(dateStr) {
  if (!dateStr) return 0;
  const t = Date.parse(dateStr); // "2026-01-31" için doğru çalışır
  return Number.isNaN(t) ? 0 : t;
}

function getBlogDetailHref(locale, post) {
  return (
    buildLocalizedBlogDetailPath({
      locale,
      segment: post?.dept,
      slug: post?.slug,
    }) || `/${locale}/${post.dept}/blog/${post.slug}`
  );
}

function getBlogListingHref(locale, segment) {
  return (
    buildLocalizedBlogListingPath({ locale, segment }) ||
    `/${locale}/${segment}/bloglar`
  );
}


function BlogCard({ p, locale, t, GRADIENT }) {
  return (
    <Link
      href={getBlogDetailHref(locale, p)}
      className="
        group relative w-[260px] sm:w-[280px] lg:w-[320px] xl:w-[450px] 2xl:w-[500px] flex-none
         border border-white/10 bg-white/5
        transition hover:bg-[#547CCF]/30 snap-start overflow-hidden"
    >
      {p.banner?.src ? (
        <div className="relative overflow-hidden">
          {/* Görsel */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={p.banner.src}
              alt={p.banner.alt || p.title}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 420px"
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
              priority={false}
            />

            {/* Hafif genel degrade (her zaman, modern görünüm) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/0" />

{/* ✅ Hover’da Netflix gibi: üstte az, altta çok karartma */}
<div
  className="
    pointer-events-none absolute inset-0
    opacity-0 transition duration-300 ease-out
    group-hover:opacity-100
    bg-gradient-to-b
    from-black/20 via-black/50 to-black/90
  "
/>

            {/* ✅ Hover’da gelen başlık + yazı (aşağıdan kayar) */}
            <div
              className="
                absolute inset-x-0 bottom-[54px]  /* alttaki bar’ın üstünden başlasın */
                px-3 lg:px-4
                translate-y-6 opacity-0
                transition duration-300 ease-out
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              {/* Yazıların arka planı (karartma + blur) */}
              <div className="border border-white/10 bg-black/30 backdrop-blur-md p-3">

                <h3 className="text-[14px] lg:text-[15px] font-semibold leading-[130%] text-white line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-1 text-[12px] text-white/75 leading-[125%] line-clamp-2">
                  {p.excerpt}
                </p>
              </div>
            </div>

            {/* ✅ Resmin en altında sabit bar: departman + buton */}
            <div
              className="
                absolute inset-x-0 bottom-0
                px-1 md:px-2 lg:px-4 pb-3 lg:pb-4
              "
            >
              <div className="flex items-center justify-between gap-2">
                {/* departman pill */}
                <div className="inline-flex items-center gap-1 lg:gap-2 rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] text-white/85">
                  <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
                  <span className="capitalize">{p.dept.replace("-", " ")}</span>
                </div>

                {/* buton */}
                <span
                  className={`
                    inline-flex items-center gap-2 
                    px-2 py-1 text-xs md:text-sm
                    font-medium text-white transition
                    hover:opacity-95 active:scale-[0.99]
                    border backdrop-blur-md whitespace-nowrap
                  `}
                >
                  {t("readMore")}
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Link>
  );
}



function StickySearchBar({ t, query, setQuery, inputRef, GRADIENT, noResults }) {
  return (
    <section className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Sol: küçük başlık */}
          <div className="hidden md:flex items-center gap-2 text-white">
            <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
            <span className="text-sm">{t("searchButton")}</span>
          </div>

          {/* Orta: input */}
          <div className="relative flex-1 max-w-[820px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
              🔎
            </span>

            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 pl-10 text-sm text-white outline-none
                         focus:border-white/35 focus:bg-white/15"
            />

            {query.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs text-white/80 transition hover:text-white"
              >
                {t("clear")}
              </button>
            )}
          </div>

          {/* Sağ: focus butonu (mobilde de iyi) */}
          <button
            type="button"
            onClick={() => inputRef.current?.focus()}
            className={`shrink-0 rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
          >
            {t("searchButton")}
          </button>
        </div>
      </div>
    </section>
  );
}


function HeroSlider({ posts, locale, t, query, setQuery, inputRef, GRADIENT, noResults }) {
  const [active, setActive] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const heroRef = useRef(null);
  const hasAutoplayStartedRef = useRef(false);

  // LCP adayının ölçüm sırasında değişmesini önlemek için ilk otomatik geçişi geciktir.
  useEffect(() => {
    if (posts?.length < 2 || !isHeroVisible || !isPageVisible) return;

    const delay = hasAutoplayStartedRef.current
      ? HERO_AUTOPLAY_DELAY_MS
      : HERO_INITIAL_AUTOPLAY_DELAY_MS;

    const id = window.setTimeout(() => {
      hasAutoplayStartedRef.current = true;
      setActive((prev) => (prev + 1) % posts.length);
    }, delay);

    return () => window.clearTimeout(id);
  }, [isHeroVisible, isPageVisible, posts]);

  // Hero ekran dışındayken arka planda görsel değiştirip gereksiz iş üretme.
  useEffect(() => {
    const node = heroRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Arka plandaki sekmelerde slider zamanlayıcısını duraklat.
  useEffect(() => {
    const updatePageVisibility = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    updatePageVisibility();
    document.addEventListener("visibilitychange", updatePageVisibility);
    return () => {
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  if (!posts?.length) return null;

  const p = posts[active];

  return (
    <section ref={heroRef} className="relative h-[70vh] lg:h-[90vh] xl:h-[92vh] overflow-hidden bg-black">
      {/*  arka plan görsel */}
      {p.banner?.src ? (
        <Image
          src={p.banner.src}
          alt={p.banner.alt || p.title}
          fill
          priority={active === 0}
          fetchPriority={active === 0 ? "high" : "auto"}
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <div className={`absolute -top-28 left-1/2 h-[520px] w-[90%] -translate-x-1/2 rounded-full ${GRADIENT} opacity-60 blur-3xl`} />
        </div>
      )}

      {/*  Netflix benzeri karartma (okunabilirlik) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/20 md:to-black/0" />
      <div className="absolute inset-0 bg-black/0" />

      <div className="relative z-10 mx-auto flex h-full w-full xl:w-[96%] max-w-[1900px] px-4">
        <div className="flex w-full items-center">
          <div className="max-w-2xl text-left mt-10 md:mt-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/80">
              <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
              <span className="capitalize">{p.dept.replace("-", " ")}</span>
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-[38px] 4xl:text-5xl lg:leading-[120%] font-semibold tracking-tight text-white">
              {p.title}
            </h1>

            <p className="mt-2 md:mt-4 max-w-xl text-[13px] sm:text-sm leading-[120%] md:text-base lg:text-lg lg:leading-[130%] text-white lg:text-white/90 line-clamp-3 ">
              {p.excerpt}
            </p>

            <div className="mt-6 flex flex-col lg:flex-row items-start gap-3">
              <Link
                href={getBlogDetailHref(locale, p)}
                className={`inline-flex items-center gap-2 rounded-2xl px-2 md:px-4 4xl:px-5 py-1 md:py-2 4xl:py-3 text-xs md:text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
              >
                {t("readMore")} <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
       

            </div>

            {/*  alt mini progress/dots */}
            <div className="mt-6 md:mt-10 flex items-center gap-2">
              {posts.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={[
                    "h-1.5 rounded-full transition",
                    i === active ? "w-10 bg-white/90" : "w-5 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-start gap-2 mt-6 md:mt-8 lg:mt-16">
               <div className="flex items-center justify-end">
          <div className="w-full max-w-[720px]">
            <div className="relative">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full lg:min-w-[300px] rounded-2xl border border-white/30 bg-black/50 px-2 md:px-4 4xl:px-5 py-1.5 md:py-2 4xl:py-3 text-xs md:text-sm text-white outline-none backdrop-blur
                           focus:border-white/40 focus:bg-black/50"
              />
              {query.length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-2 md:px-4 4xl:px-5 py-1.5 md:py-2 4xl:py-3 text-xs text-white/80 transition hover:text-white"
                >
                  {t("clear")}
                </button>
              )}
            </div>
            {noResults && (
  <p className="mt-2 text-xs text-white/70">
    “{query}” için sonuç bulunamadı. Yazımı kontrol edin ya da daha genel arayın.
  </p>
)}
          </div>
        </div>
              <button
                type="button"
                onClick={() => inputRef.current?.focus()}
                className="rounded-2xl border border-white/20 bg-white/5 px-2 md:px-4 4xl:px-5 py-1 md:py-2 4xl:py-3 text-xs md:text-sm text-white/90 backdrop-blur transition hover:bg-white/10 "
              >
                {t("searchButton")} <span className="ml-2 text-[12px]">🔍</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function BlogRail({ title, posts, locale, t, GRADIENT, titleHref }) {
  const railRef = useRef(null);

  //  Rail içinde aktif görünen kartın index'i (1-based)
  const [activeIndex, setActiveIndex] = useState(1);
  const [renderedCount, setRenderedCount] = useState(() =>
    Math.min(RAIL_INITIAL_RENDER_COUNT, posts?.length || 0)
  );

  //  Kart genişliği + gap = 1 adımda kaç px ilerliyoruz
  const stepPxRef = useRef(1);
  const rafRef = useRef(null);

  const renderedPosts = useMemo(
    () => posts.slice(0, renderedCount),
    [posts, renderedCount]
  );

  const revealNextBatch = () => {
    setRenderedCount((current) =>
      Math.min(current + RAIL_RENDER_BATCH_SIZE, posts.length)
    );
  };

  const measureStep = () => {
    const el = railRef.current;
    if (!el) return;

    const first = el.children?.[0];
    if (!first) return;

    //  İlk kartın genişliği
    const cardW = first.getBoundingClientRect().width;

    //  gap değerini yakala (Tailwind gap-1/gap-2 vs.)
    const styles = window.getComputedStyle(el);
    // modern browser'larda columnGap var
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    //  Kaydırma adımı = kart genişliği + gap
    stepPxRef.current = Math.max(1, cardW + gap);

    //  Mevcut scrollLeft'e göre index'i güncelle
    updateIndex();
  };

  const updateIndex = () => {
    const el = railRef.current;
    if (!el) return;

    const step = stepPxRef.current || 1;

    //  Snap + scrollLeft yüzünden küsurat çıkabilir, en yakını alıyoruz
    const idx0 = Math.round(el.scrollLeft / step);
    const idx1 = Math.min(posts.length, Math.max(1, idx0 + 1));

    setActiveIndex(idx1);
  };

  const onScroll = () => {
    //  Scroll event’i çok sık çalışır -> rAF ile throttle
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateIndex();

      const el = railRef.current;
      if (!el || renderedCount >= posts.length) return;

      const remainingScroll = el.scrollWidth - el.scrollLeft - el.clientWidth;
      const preloadDistance = (stepPxRef.current || el.clientWidth) * 2;

      if (remainingScroll <= preloadDistance) {
        revealNextBatch();
      }
    });
  };

  const scrollByAmount = (dir = 1) => {
    const el = railRef.current;
    if (!el) return;

    //  Step'e göre kaydır (daha tutarlı index)
    const step = stepPxRef.current || Math.round(el.clientWidth * 0.9);
    const performScroll = () => {
      el.scrollBy({ left: step * dir, behavior: "smooth" });
    };

    const remainingScroll = el.scrollWidth - el.scrollLeft - el.clientWidth;
    const shouldRevealMore =
      dir > 0 && renderedCount < posts.length && remainingScroll <= step * 2;

    if (shouldRevealMore) {
      revealNextBatch();
      requestAnimationFrame(() => requestAnimationFrame(performScroll));
      return;
    }

    performScroll();
  };

  useEffect(() => {
    setRenderedCount(Math.min(RAIL_INITIAL_RENDER_COUNT, posts.length));
    setActiveIndex(1);

    if (railRef.current) {
      railRef.current.scrollLeft = 0;
    }
  }, [posts]);

  useEffect(() => {
    //  İlk render + posts değişince ölç
    measureStep();

    //  Resize olursa yeniden ölç
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // posts.length yeterli; kart boyutu responsive olduğundan resize handler da var
  }, [posts.length]);

  if (!posts?.length) return null;

  return (
    <section className="mt-2 mb-10">
      <div className="mb-3 flex items-center justify-between">
       {titleHref ? (
          <Link href={titleHref} className="text-base lg:text-lg font-semibold text-white/90 cursor-pointer hover:text-[#547CCF]">
            {title} <span className="text-white/60 text-sm ml-2">→</span>
          </Link>
        ) : (
          <h2 className="text-base lg:text-lg font-semibold text-white/90">{title}</h2>
        )}

        {/*  sağ üst küçük oklar + scroll index */}
        <div className="flex items-center gap-0 lg:gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Sola kaydır"
            className="flex h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* ✅ Scroll index: 2 / 9 */}
          <span className="min-w-[52px] text-center text-xs text-white/60 tabular-nums">
            {activeIndex} / {posts.length}
          </span>

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Sağa kaydır"
            className="flex h-5 w-5 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={railRef}
          onScroll={onScroll}
          className="flex gap-1 lg:gap-2 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory scroll-smooth
                     [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
        >
          {renderedPosts.map((p) => (
            <BlogCard key={p.id} p={p} locale={locale} t={t} GRADIENT={GRADIENT} />
          ))}
        </div>
      </div>
    </section>
  );
}



function DepartmentChips({ items, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((d) => {
        const active = d.id === value;

        return (
          <button
            key={d.id}
            type="button"
            onClick={() => onChange(d.id)}
            className={[
              "relative rounded-2xl px-4 py-2 text-sm transition",
              "border border-white/10 bg-white/5 hover:bg-white/10",
              "active:scale-[0.99]",
              active
                ? "text-black border-transparent shadow-[0_10px_40px_rgba(84,185,207,0.15)]"
                : "text-white/80 hover:text-white",
            ].join(" ")}
          >
            {active && (
              <span className={`absolute inset-0 -z-10 rounded-2xl ${GRADIENT}`} />
            )}

            <span className="flex items-center gap-2">
              <span className={active ? "opacity-100" : "opacity-70"}>
                {d.label}
              </span>

              {d.href && (
                <span
                  className={[
                    "text-xs",
                    active ? "text-black/70" : "text-white/40",
                  ].join(" ")}
                  title="Servis sayfası mevcut"
                >
                  ↗
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function BlogPageV2({ initialBlogSummaries = [] }) {
  const t = useTranslations("Blog");
  const locale = useLocale();

  const inputRef = useRef(null);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, BLOG_SEARCH_DEBOUNCE_MS);
  const normalizedSearchQuery = useMemo(
    () => normalizeBlogSearchText(debouncedQuery, locale),
    [debouncedQuery, locale]
  );
  const [dept, setDept] = useState("all");

  const resultsRef = useRef(null);

const ALL_POSTS = useMemo(() => {
  return initialBlogSummaries
    .filter((post) => post?.slug && post?.dept)
    .map((post) => createBlogSearchRecord(post, locale));
}, [initialBlogSummaries, locale]);




// Veri veya dil değiştiğinde bir kez sırala; arama bu hazır sıra üzerinde çalışır.
const sortedAll = useMemo(() => {
  return [...ALL_POSTS].sort(
    (a, b) => toTs(b.publishedAt) - toTs(a.publishedAt)
  );
}, [ALL_POSTS]);

const filteredPosts = useMemo(() => {
  return sortedAll.filter((p) => {
    const deptOk = dept === "all" ? true : p.dept === dept;

    const qOk = normalizedSearchQuery
      ? p.searchTitle.includes(normalizedSearchQuery) ||
        p.searchExcerpt.includes(normalizedSearchQuery)
      : true;

    return deptOk && qOk;
  });
}, [sortedAll, normalizedSearchQuery, dept]);

const isSearching = normalizedSearchQuery.length >= 2;
const hasResults = isSearching && filteredPosts.length > 0;
const noResults = isSearching && filteredPosts.length === 0;


 const latest20 = useMemo(() => sortedAll.slice(0, 20), [sortedAll]);

// Rails hangi listeyi gösterecek?
const displaySorted = hasResults ? filteredPosts : sortedAll;

// Üstte yazan count ne olsun?
const visibleCount = hasResults ? filteredPosts.length : sortedAll.length;

//  departman rail’leri (Tümü + her departman)
const rails = useMemo(() => {
   const out = [{ id: "all", title: "Son Eklenenler", posts: latest20 }];

  // 2) Departman rail’leri
  const deptItems = BLOG_DEPARTMENTS_V2.filter((d) => d.id !== "all");

  for (const d of deptItems) {
    const posts = displaySorted.filter((p) => p.dept === d.id);
    out.push({
      id: d.id,
      title: d.label,
       titleHref: getBlogListingHref(locale, d.id),
      posts,
    });
  }

  return out;
}, [displaySorted, latest20, locale]);

//  Netflix hero için son eklenen 5 post
const heroPosts = useMemo(() => {
   return sortedAll.slice(0, 5); // her zaman en yeni 5
 }, [sortedAll]);


  return (
    <main className="min-h-screen bg-[#150016] text-white">
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

{/* <StickySearchBar
  t={t}
  query={query}
  setQuery={setQuery}
  inputRef={inputRef}
  GRADIENT={GRADIENT}
    noResults={noResults}
/> */}

{/* Results (Netflix rails) */}
<section ref={resultsRef} className="mx-auto w-full xl:w-[96%] max-w-[1900px] px-4 py-2 lg:pt-3 lg:pb-16">
  <div className=" flex items-end justify-between gap-4">
    <p className="text-sm text-white/60">
      {t("results", { count: visibleCount })}
    </p>
  </div>

<div className="space-y-4 md:space-y-7 lg:space-y-12">
  {rails.map((r, railIndex) => (
  <BlogRail
    key={r.id}
    title={r.title}
    posts={r.posts}
    locale={locale}
    t={t}
    GRADIENT={GRADIENT}
    railIndex={railIndex}
    titleHref={r.titleHref}
  />
))}
 </div>
</section>


      
    </main>
  );
}
