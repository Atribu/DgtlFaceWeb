"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ p, locale, t, GRADIENT }) {
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
                px-3 lg:px-4 pb-3 lg:pb-4
              "
            >
              <div className="flex items-center justify-between gap-2">
                {/* departman pill */}
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] text-white/85">
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
                    border backdrop-blur-md 
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