"use client";

import { useMemo, useState, useRef} from "react";
import Link from "next/link";
import { useTranslations, useLocale, useMessages } from "next-intl"; 
import { BLOG_MAP } from "../(blog)/[faq]/blog/blogMap"
import Image from "next/image";
import { BLOG_MEDIA_MAP } from "@/app/lib/blogMediaMap";

const GRADIENT =
  "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

const BLOG_DEPARTMENTS_V2 = [
  { id: "all", label: "Tümü" },
  { id: "sem", label: "SEM", href: "/Services/sem" },
    { id: "seo", label: "SEO", href: "/Services/seo" },
      { id: "smm", label: "SMM", href: "/Services/smm" },
   { id: "yazilim", label: "Web & Yazılım Hizmetleri", href: "/Services/software" },
  { id: "creative", label: "Creative", href: "/Services/creative" },
    { id: "callcenter", label: "Çağrı Merkezi", href: "/Services/callcenter" },
  { id: "pms-ota", label: "PMS & OTA Yönetimi", href: "/Services/pms" },
  { id: "veri-analizi-raporlama", label: "Veri Analizi & Raporlama", href: "/Services/digitalAnalysis" },
  { id: "hotel", label: "Otel Dijital Dönüşüm", href: "/Services/hotel" },
];

//  mock data
// slug ekledik (URL üretmek için şart)

function toTs(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function BlogCard({ p, locale, t, GRADIENT }) {
  return (
    <Link
     href={`/${locale}/${p.dept}/blog/${p.slug}`}
      className="group w-[260px] sm:w-[280px] lg:w-[320px] flex-none rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 snap-start"
    >
      <div className="mb-2 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/80">
        <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
        <span className="capitalize">{p.dept.replace("-", " ")}</span>
      </div>

      {p.banner?.src && (
        <div className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={p.banner.src}
              alt={p.banner.alt || p.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 320px"
              priority={false}
            />
          </div>
        </div>
      )}

      <h3 className="text-[15px] lg:text-[16px] font-semibold tracking-tight text-white line-clamp-2">
        {p.title}
      </h3>

      <p className="mt-2 text-sm text-white/70 line-clamp-2">
        {p.excerpt}
      </p>

      <div className="mt-4">
        <Link
          href={`/${locale}/${p.dept}/blog/${p.slug}`}
          className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
        >
          {t("readMore")} <span className="transition group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </Link>
  );
}

function BlogRail({ title, posts, locale, t, GRADIENT }) {
  const railRef = useRef(null);

  const scrollByAmount = (dir = 1) => {
    const el = railRef.current;
    if (!el) return;
    // Türkçe yorum: rail genişliğine göre kaydır
    const amount = Math.round(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (!posts?.length) return null;

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold text-white/90">
          {title}
        </h2>

        {/* Türkçe yorum: sağ üst küçük oklar (hover’da belirginleşir) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10 transition"
            aria-label="Sola kaydır"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10 transition"
            aria-label="Sağa kaydır"
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Türkçe yorum: Netflix gibi yatay rail */}
        <div
          ref={railRef}
          className="flex gap-4 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory scroll-smooth
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
  const locale = useLocale(); // ✅ Link için burada kullanacağız
   const messages = useMessages(); // ✅ tr.json (messages) burada

   const inputRef = useRef(null);

  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");

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
        readingTime: post.byline?.readingTime || post.readingTime || "",

        // ✅ sadece ekledik
        banner,
      };
    })
    .filter((p) => p.slug && p.dept);
}, [messages]);



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

// Türkçe yorum: tarihe göre (sondan başa) sıralama
const sortedFiltered = useMemo(() => {
  return [...filteredPosts].sort((a, b) => toTs(b.updatedAt) - toTs(a.updatedAt));
}, [filteredPosts]);

// Türkçe yorum: departman rail’leri (Tümü + her departman)
const rails = useMemo(() => {
  // 1) Tümü rail’i
  const out = [
    { id: "all", title: "Tümü", posts: sortedFiltered },
  ];

  // 2) Departman rail’leri
  const deptItems = BLOG_DEPARTMENTS_V2.filter((d) => d.id !== "all");

  for (const d of deptItems) {
    const posts = sortedFiltered.filter((p) => p.dept === d.id);
    out.push({
      id: d.id,
      title: d.label,
      posts,
    });
  }

  return out;
}, [sortedFiltered]);



  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner */}
      <section className="relative h-[40vh] lg:h-[45vh] overflow-hidden">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div
            className={`absolute -top-28 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full ${GRADIENT}`}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center items-center px-4 mt-[3%]">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-4 text-sm md:text-base text-white/80 lg:text-lg">
              {t("subtitle")}
            </p>

            <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-3 sm:flex-row items-center justify-center">
              <div className="relative w-full">
                <input
                ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-2xl border border-white/50 bg-white/15 px-4 py-2 lg:py-3 text-sm text-white outline-none transition
                             focus:border-white/20 focus:bg-white/10"
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

              <button
                type="button" onClick={()=> inputRef.current?.focus()}
                className={`rounded-2xl px-5 py-2 max-w-[120px] lg:py-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
              >
                {t("searchButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Results (Netflix rails) */}
<section className="mx-auto w-full max-w-[1500px] px-4 py-2 lg:py-4">
  <div className="mb-1 flex items-end justify-between gap-4">
    <p className="text-sm text-white/60">
      {t("results", { count: filteredPosts.length })}
    </p>
  </div>

  {sortedFiltered.length === 0 ? (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
      {t("empty")}
    </div>
  ) : (
    <div className="space-y-2">
      {rails.map((r) => (
        <BlogRail
          key={r.id}
          title={r.title}
          posts={r.posts}
          locale={locale}
          t={t}
          GRADIENT={GRADIENT}
        />
      ))}
    </div>
  )}
</section>


      {/* Departments */}
      {/* <section className="mx-auto w-full max-w-[1500px] px-4">
        <div className="-mt-12 lg:-mt-8 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <DepartmentChips
              items={BLOG_DEPARTMENTS_V2}
              value={dept}
              onChange={setDept}
            />
          </div>
        </div>
      </section> */}

      {/* Results */}
      {/* <section className="mx-auto w-full max-w-6xl px-4 py-4 lg:py-6">
        <div className="mb-4 flex items-end justify-between gap-4">
          <p className="text-sm text-white/60">
            {t("results", { count: filteredPosts.length })}
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
            {t("empty")}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((p) => (
              <article
                key={p.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-0 text-xs lg:text-sm text-white/80">
                  <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
                  <span className="capitalize">{p.dept.replace("-", " ")}</span>
                </div>

{p.banner?.src && (
  <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
    <div className="relative aspect-[16/9] w-full">
      <Image
        src={p.banner.src}
        alt={p.banner.alt || p.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
      />
    </div>
  </div>
)}


                <h2 className="text-lg font-semibold tracking-tight text-white">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm text-white/80 line-clamp-2">
                  {p.excerpt}
                </p>

                <div className="mt-5">
                  <Link
                    href={`/${locale}/${p.dept}/blog/${p.slug}`}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
                  >
                    {t("readMore")}
                    <span className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section> */}
    </main>
  );
}
