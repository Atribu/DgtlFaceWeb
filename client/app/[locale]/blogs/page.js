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
  { id: "creative", label: "Creative", href: "/Services/creative" },
  { id: "pms-ota", label: "PMS & OTA Yönetimi", href: "/Services/pms" },
  { id: "callcenter", label: "Çağrı Merkezi", href: "/Services/callcenter" },
  { id: "smm", label: "SMM", href: "/Services/smm" },
  { id: "yazilim", label: "Web & Yazılım Hizmetleri", href: "/Services/software" },
  { id: "seo", label: "SEO", href: "/Services/seo" },
  { id: "veri-analizi", label: "Veri Analizi & Raporlama", href: "/Services/digitalAnalysis" },
  { id: "hotel", label: "Otel Dijital Dönüşüm", href: "/Services/hotel" },
];

//  mock data
// slug ekledik (URL üretmek için şart)

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


  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner */}
      <section className="relative h-[45vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div
            className={`absolute -top-28 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full ${GRADIENT}`}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center items-center px-4">
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

      {/* Departments */}
      <section className="mx-auto w-full max-w-[1500px] px-4">
        <div className="-mt-12 lg:-mt-8 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <DepartmentChips
              items={BLOG_DEPARTMENTS_V2}
              value={dept}
              onChange={setDept}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto w-full max-w-6xl px-4 py-4 lg:py-6">
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
      </section>
    </main>
  );
}
