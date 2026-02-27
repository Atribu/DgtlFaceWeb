"use client";

import { useMemo, useState, useRef, useEffect} from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl"; 
import Image from "next/image";
import { BLOG_MEDIA_MAP } from "@/app/lib/blogMediaMap";

const GRADIENT =
  "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

const blogPostsByLocaleCache = {};

function normalizeLocale(locale) {
  return locale === "en" ? "en" : "tr";
}

function getCachedBlogPosts(locale) {
  return blogPostsByLocaleCache[normalizeLocale(locale)] || null;
}

async function loadLocaleBlogPosts(locale) {
  const normalizedLocale = normalizeLocale(locale);
  const cached = getCachedBlogPosts(normalizedLocale);
  if (cached) return cached;

  const mod =
    normalizedLocale === "en"
      ? await import("@/messages/en.json")
      : await import("@/messages/tr.json");

  const messages = mod?.default || mod || {};
  const blogPosts = messages?.BlogPosts || {};
  blogPostsByLocaleCache[normalizedLocale] = blogPosts;
  return blogPosts;
}

const BLOG_DEPARTMENTS_V2 = [
  { id: "all", label: "Tümü" },
  { id: "sem", label: "SEM - Dijital Reklam Yönetimi", href: "/sem/bloglar" },
    { id: "seo", label: "SEO - Arama Motoru Optimizasyonu", href: "/seo/bloglar" },
      { id: "smm", label: "SMM - Sosyal Medya Pazarlaması", href: "/smm/bloglar" },
   { id: "yazilim", label: "Web & Yazılım Hizmetleri", href: "/yazilim/bloglar" },
  { id: "creative", label: "Creative", href: "/creative/bloglar" },
    { id: "cagri-merkezi", label: "Çağrı Merkezi", href: "/cagri-merkezi/bloglar" },
  { id: "pms-ota", label: "PMS & OTA Yönetimi", href: "/pms-ota/bloglar" },
  { id: "raporlama", label: "Veri Analizi & Raporlama", href: "/raporlama/bloglar" },
  { id: "otel", label: "Otel Dijital Dönüşüm", href: "/otel/bloglar" },
];

//  mock data
// slug ekledik (URL üretmek için şart)

function toTs(dateStr) {
  if (!dateStr) return 0;
  const t = Date.parse(dateStr); // "2026-01-31" için doğru çalışır
  return Number.isNaN(t) ? 0 : t;
}


function BlogCard({ p, locale, t, GRADIENT }) {
  return (
    <Link
      href={`/${locale}/${p.dept}/blog/${p.slug}`}
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

  // Türkçe yorum: 5 saniyede bir sonraki slide
  useEffect(() => {
    if (!posts?.length) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(id);
  }, [posts]);

  if (!posts?.length) return null;

  const p = posts[active];

  return (
    <section className="relative h-[70vh] lg:h-[90vh] xl:h-[92vh] overflow-hidden bg-black">
      {/* Türkçe yorum: arka plan görsel */}
      {p.banner?.src ? (
        <Image
          src={p.banner.src}
          alt={p.banner.alt || p.title}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <div className={`absolute -top-28 left-1/2 h-[520px] w-[90%] -translate-x-1/2 rounded-full ${GRADIENT} opacity-60 blur-3xl`} />
        </div>
      )}

      {/* Türkçe yorum: Netflix benzeri karartma (okunabilirlik) */}
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
                href={`/${locale}/${p.dept}/blog/${p.slug}`}
                className={`inline-flex items-center gap-2 rounded-2xl px-2 md:px-4 4xl:px-5 py-1 md:py-2 4xl:py-3 text-xs md:text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
              >
                {t("readMore")} <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
       

            </div>

            {/* Türkçe yorum: alt mini progress/dots */}
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

  // Türkçe yorum: Rail içinde aktif görünen kartın index'i (1-based)
  const [activeIndex, setActiveIndex] = useState(1);

  // Türkçe yorum: Kart genişliği + gap = 1 adımda kaç px ilerliyoruz
  const stepPxRef = useRef(1);
  const rafRef = useRef(null);

  const measureStep = () => {
    const el = railRef.current;
    if (!el) return;

    const first = el.children?.[0];
    if (!first) return;

    // Türkçe yorum: İlk kartın genişliği
    const cardW = first.getBoundingClientRect().width;

    // Türkçe yorum: gap değerini yakala (Tailwind gap-1/gap-2 vs.)
    const styles = window.getComputedStyle(el);
    // modern browser'larda columnGap var
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    // Türkçe yorum: Kaydırma adımı = kart genişliği + gap
    stepPxRef.current = Math.max(1, cardW + gap);

    // Türkçe yorum: Mevcut scrollLeft'e göre index'i güncelle
    updateIndex();
  };

  const updateIndex = () => {
    const el = railRef.current;
    if (!el) return;

    const step = stepPxRef.current || 1;

    // Türkçe yorum: Snap + scrollLeft yüzünden küsurat çıkabilir, en yakını alıyoruz
    const idx0 = Math.round(el.scrollLeft / step);
    const idx1 = Math.min(posts.length, Math.max(1, idx0 + 1));

    setActiveIndex(idx1);
  };

  const onScroll = () => {
    // Türkçe yorum: Scroll event’i çok sık çalışır -> rAF ile throttle
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateIndex();
    });
  };

  const scrollByAmount = (dir = 1) => {
    const el = railRef.current;
    if (!el) return;

    // Türkçe yorum: Step'e göre kaydır (daha tutarlı index)
    const step = stepPxRef.current || Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  useEffect(() => {
    // Türkçe yorum: İlk render + posts değişince ölç
    measureStep();

    // Türkçe yorum: Resize olursa yeniden ölç
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
          <Link href={`/${locale}${titleHref}`} className="text-base lg:text-lg font-semibold text-white/90 cursor-pointer hover:text-[#547CCF]">
            {title} <span className="text-white/60 text-sm ml-2">→</span>
          </Link>
        ) : (
          <h2 className="text-base lg:text-lg font-semibold text-white/90">{title}</h2>
        )}

        {/* Türkçe yorum: sağ üst küçük oklar + scroll index */}
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
          {posts.map((p) => (
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

export default function BlogPageV2() {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const [blogPosts, setBlogPosts] = useState(() => getCachedBlogPosts(locale) || {});

  const inputRef = useRef(null);

  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");

  const resultsRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const cached = getCachedBlogPosts(locale);
    if (cached) {
      setBlogPosts(cached);
      return () => {
        cancelled = true;
      };
    }

    loadLocaleBlogPosts(locale)
      .then((posts) => {
        if (!cancelled) setBlogPosts(posts);
      })
      .catch(() => {
        if (!cancelled) setBlogPosts({});
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);


const ALL_POSTS = useMemo(() => {
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

        // ✅ son eklenenler için asıl kaynak
        publishedAt: post.publishedAt || post.byline?.publishedAt || "",

        // UI’da göstermek istersen diye kalsın
        updatedAt:
          post.byline?.updatedAt ||
          post.updatedAt ||
          post.byline?.publishedAt ||
          post.publishedAt ||
          "",

        readingTime: post.byline?.readingTime || post.readingTime || "",
        banner,
      };
    })
    .filter((p) => p.slug && p.dept);
}, [blogPosts]);




  function normalizeText(s = "") {
  return s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, ""); // ş->s, ğ->g, İ->i gibi
}

const filteredPosts = useMemo(() => {
  const q = normalizeText(query.trim());

  return ALL_POSTS.filter((p) => {
    const deptOk = dept === "all" ? true : p.dept === dept;

    const haystackTitle = normalizeText(p.title);
    const haystackExcerpt = normalizeText(p.excerpt);

    const qOk = q
      ? haystackTitle.includes(q) || haystackExcerpt.includes(q)
      : true;

    return deptOk && qOk;
  });
}, [ALL_POSTS, query, dept]);

const isSearching = query.trim().length >= 2;
const hasResults = isSearching && filteredPosts.length > 0;
const noResults = isSearching && filteredPosts.length === 0;


// Türkçe yorum: tarihe göre (sondan başa) sıralama
const sortedFiltered = useMemo(() => {
  return [...filteredPosts].sort(
    (a, b) => toTs(b.publishedAt) - toTs(a.publishedAt)
  );
}, [filteredPosts]);

const sortedAll = useMemo(() => {
  return [...ALL_POSTS].sort(
    (a, b) => toTs(b.publishedAt) - toTs(a.publishedAt)
  );
}, [ALL_POSTS]);


 const latest20 = useMemo(() => sortedAll.slice(0, 20), [sortedAll]);

// Rails hangi listeyi gösterecek?
const displaySorted = hasResults ? sortedFiltered : sortedAll;

// Üstte yazan count ne olsun?
const visibleCount = hasResults ? filteredPosts.length : sortedAll.length;

// Türkçe yorum: arama sonuç yoksa bile sayfa boş kalmasın, fallback olarak tüm listeyi göster
// const displaySorted = useMemo(() => {
//   return sortedFiltered.length ? sortedFiltered : sortedAll;
// }, [sortedFiltered, sortedAll]);

// Türkçe yorum: departman rail’leri (Tümü + her departman)
const rails = useMemo(() => {
   const out = [{ id: "all", title: "Son Eklenenler", posts: latest20 }];

  // 2) Departman rail’leri
  const deptItems = BLOG_DEPARTMENTS_V2.filter((d) => d.id !== "all");

  for (const d of deptItems) {
    const posts = displaySorted.filter((p) => p.dept === d.id);
    out.push({
      id: d.id,
      title: d.label,
       titleHref: d.href, 
      posts,
    });
  }

  return out;
}, [displaySorted, latest20]);

// Türkçe yorum: Netflix hero için son eklenen 5 post
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
