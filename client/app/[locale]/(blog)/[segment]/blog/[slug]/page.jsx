import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { BLOG_MAP } from "../blogMap";
import SectionRenderer from "../SectionRenderer";
import BlogToc from "../BlogToc";
import Image from "next/image";
import { getMediaBySlot } from "@/app/lib/blogMediaMap";
import BlogBreadcrumbs from "../BlogBreadcrumbs";

export async function generateMetadata({ params }) {
  const { locale, segment, slug } = params;
  const department = segment;

  // Türkçe yorum: Locale set et
  setRequestLocale(locale);

  // Türkçe yorum: Post key bul
  const postKey = BLOG_MAP?.[department]?.[slug];
  if (!postKey) notFound();

  const messages = await getMessages();
  const post = messages?.BlogPosts?.[postKey];
  if (!post) notFound();

  // Türkçe yorum: Başlık & açıklama (elinde hangi alanlar varsa)
  const title = post?.meta?.title || post?.title || "DGTLFACE Blog";
  const description =
    post?.meta?.description ||
    post?.description ||
    post?.h1?.intro ||
    "DGTLFACE blog içeriği.";

  // Türkçe yorum: URL (routing'ine göre /{locale}/{department}/blog/{slug} oluyor gibi)
  const url = `https://dgtlface.com/${locale}/${department}/blog/${slug}`;

  // Türkçe yorum: OG image -> blog banner varsa onu kullan, yoksa default
  const bannerMedia = getMediaBySlot(slug, "banner");
  const ogImage = bannerMedia?.src || "/og/og-default.png";

  return {
    title: {
      absolute: `${title} | DGTLFACE`,
    },
    description,

    openGraph: {
      type: "article",
      url,
      siteName: "DGTLFACE",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : "ru_RU",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const GRADIENT = "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

// Türkçe yorum: Tarih formatlama
function formatDateTR(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Türkçe yorum: Her türlü veriyi string'e çevir
function asText(v) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(asText).filter(Boolean).join("\n");
  if (typeof v === "object") {
    if (typeof v.text === "string" || typeof v.text === "number") return String(v.text);
    if (typeof v.content === "string" || typeof v.content === "number") return String(v.content);
    return "";
  }
  return "";
}

// Türkçe yorum: Liste formatına çevir
function asList(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(asText).filter(Boolean);
  const t = asText(v);
  return t ? [t] : [];
}

// Türkçe yorum: FAQ normalize et
function asFaqItems(v) {
  if (!v) return [];
  if (!Array.isArray(v)) return [];

  return v
    .map((it) => {
      const q = it?.q ?? it?.question ?? it?.title ?? it?.Q ?? "";
      const a = it?.a ?? it?.answer ?? it?.text ?? it?.A ?? it?.content ?? "";
      const qText = asText(q);
      const aText = asText(a);
      if (!qText || !aText) return null;
      return { q: qText, a: aText };
    })
    .filter(Boolean);
}

// Türkçe yorum: Department label
function deptLabel(dept) {
  const map = {
    seo: "SEO",
    sem: "SEM",
    smm: "SMM",
    creative: "Creative",
    "pms-ota": "PMS & OTA",
    "call-center": "Çağrı Merkezi",
    "data-analytics": "Veri Analizi",
    "hotel-digital": "Otel Dijital Dönüşüm",
    software: "Web & Yazılım",
    otel: "Otel",
  };
  return map[dept] || (dept || "").toUpperCase();
}

function Badge({ children }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Accordion({ items }) {
  return (
    <div className="space-y-2">
      {items.map((it, idx) => (
        <details
          key={`faq-${idx}`}
          className="group rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <summary className="cursor-pointer list-none text-sm font-medium text-white">
            <span className="flex items-center justify-between gap-4">
              {it.q}
              <span className="text-white/40 transition group-open:rotate-180">▾</span>
            </span>
          </summary>
          <div className="mt-3 text-sm leading-6 text-white/70 text-center lg:text-left">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

export default async function BlogDetailPage({ params }) {
  const { locale, segment, slug } = params;
  const department = segment;

  setRequestLocale(locale);

  // Blog post'u bul
  const postKey = BLOG_MAP?.[department]?.[slug];
  if (!postKey) notFound();

  const messages = await getMessages();
  const post = messages?.BlogPosts?.[postKey];
  if (!post) notFound();
  if (post.department !== department) notFound();

  // Media (wireframe slotları)
  const bannerMedia = getMediaBySlot(slug, "banner");      
  const h1ContextMedia = getMediaBySlot(slug, "h1-context");

  // Meta bilgileri
  const updatedAt = post.updatedAt || post.publishedAt || "";
  const author = post.author || "DGTLFACE Editorial";
  const readingTime = post.readingTime || "5 dk okuma";

  const deptName = deptLabel(department);

  // Sections
  const sections = Array.isArray(post.sections) ? post.sections : [];

  // Üst modül içerikleri (Bölüm 3 üst modül)
  const answerBlock = asText(post.modules?.answerBlock);
  const sgeSummary = asText(post.modules?.sgeSummary);
  const voiceAnswer = asText(post.modules?.voiceAnswer);
  const factSheet = Array.isArray(post.modules?.aiFactSheet)
    ? post.modules.aiFactSheet.map(asText).filter(Boolean)
    : [];

  // H1 içerikleri
  const h1Title = asText(post.h1?.title) || post.title;
  const h1Intro = asText(post.h1?.intro);
  const quickSummary = asList(post.h1?.quickSummary);
  const primaryCta = post.h1?.ctaPrimary;

  // CTA modülleri (sayfa sonu)
  const ctaPrimary = post.ctaModule?.primary || post.ctaEnd?.primary;
  const ctaSecondary = post.ctaModule?.secondary || post.ctaEnd?.secondary;

  // FAQ
  const faqRaw =
    post.faq ??
    post.faqItems ??
    post.modules?.faq ??
    post.modules?.faqItems ??
    post.paa ??
    post.paaItems ??
    [];
  const faqItems = asFaqItems(faqRaw);
  const faqTitle = asText(post.faqTitle) || "Sık Sorulan Sorular";

  // Related / Internal
  const relatedPosts = Array.isArray(post.relatedPosts) ? post.relatedPosts : [];
  const internalLinks = Array.isArray(post.internalLinks) ? post.internalLinks : [];

  // Türkçe yorum: Hero overlay’de başlık gösterilsin mi? (wireframe: opsiyonel)
  const SHOW_HERO_TITLE_OVERLAY = false;

  return (
    <main className="min-h-screen bg-[#120014] text-white">
      {/* TOP BAR: Breadcrumbs + Meta */}
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-[70px]">
  <BlogBreadcrumbs
    locale={locale}
    department={department}
    deptName={deptName}
    postTitle={post.title}
    // blogIndexHref={`/${locale}/bloglar`} // opsiyonel
  />
</div>
      {/* HERO / COVER */}
      <header className="relative mt-3 h-[40vh] lg:h-[60vh] 2xl:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Cover image */}
          {bannerMedia?.src ? (
            <Image
              src={bannerMedia.src}
              alt={bannerMedia.alt || ""}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          ) : null}

          {/* Overlay katmanları */}
          {/* <div className="absolute inset-0 bg-[#120014]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
          <div className="absolute inset-0 opacity-25 blur-3xl">
            <div
              className={`absolute -top-28 left-1/2 h-[420px] w-[950px] -translate-x-1/2 rounded-full ${GRADIENT}`}
            />
          </div> */}
        </div>

        {/* HERO overlay title (opsiyonel) */}
          
      </header>

      {/* intro + Primary CTA #1 (hero altı) */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-3 lg:pt-4 items-center justify-center flex flex-col text-center">
     <h1 className="max-w-4xl text-2xl font-semibold tracking-tight lg:text-3xl">
              {h1Title}
            </h1>
            <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col items-center justify-center px-0 lg:px-4 text-center">
            
              <div className="mt-4 flex items-center justify-center gap-1 lg:gap-2 text-xs text-white/70 md:text-sm w-[100%]">
          <Badge>{readingTime}</Badge>
          <span className="text-white/30">•</span>
          <Badge>{formatDateTR(updatedAt)}</Badge>
          <span className="text-white/30">•</span>
          <Badge>{author}</Badge>
        </div>
          </div>
        {h1Intro ? (
          <p className="mt-6 text-center text-sm leading-7 text-white/70 md:text-base whitespace-pre-line">
            {h1Intro}
          </p>
        ) : null}

        {/* Primary CTA #1 (H1 giriş sonunda) */}
        {primaryCta?.label && primaryCta?.href ? (
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href={`/${locale}${primaryCta.href}`.replace(`/${locale}/${locale}`, `/${locale}`)}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 ${GRADIENT}`}
            >
              {primaryCta.label} <span>→</span>
            </Link>
          </div>
        ) : null}
      </section>

      {/* H1 Context Görsel */}
      {h1ContextMedia?.src ? (
        <section className="mx-auto w-full max-w-[1000px] px-4 pt-10">
          <figure className="w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src={h1ContextMedia.src}
                alt={h1ContextMedia.alt || ""}
                fill
               sizes="(max-width: 768px) 100vw, 1000px"
                className="object-cover"
              />
            </div>
            {h1ContextMedia.caption ? (
              <figcaption className="mt-2 text-sm text-white/60">
                {h1ContextMedia.caption}
              </figcaption>
            ) : null}
          </figure>
        </section>
      ) : null}

      {/* BÖLÜM 3 ÜST MODÜL (H1’den sonra) */}
      {(answerBlock || sgeSummary || factSheet.length > 0 || voiceAnswer || quickSummary.length > 0) ? (
        <section className="mx-auto w-full max-w-[1600px] px-1 md:pt-2 lg:px-4 pt-6 lg:pt-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 lg:p-6">
            {answerBlock ? (
              <div className="rounded-3xl border border-white/10 bg-black/20 p-3 lg:p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-white">
                  Öne Çıkan Cevap
                </p>
                <div className="mt-3 text-sm leading-6 lg:.leading-7 text-white/80 whitespace-pre-line">
                  {answerBlock}
                </div>
              </div>
            ) : null}

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {sgeSummary ? (
                <div className="rounded-3xl border border-white/10 bg-black/20 p-3 lg:p-5">
                  <p className="text-sm font-medium text-white">Özet</p>
                  <p className="mt-3 text-sm leading-6 text-white/75 whitespace-pre-line">
                    {sgeSummary}
                  </p>
                </div>
              ) : null}

              {factSheet.length > 0 ? (
                <div className="rounded-3xl border border-white/10 bg-black/20 p-3 lg:p-5 text-left">
                  <p className="text-sm font-medium text-white text-center">Maddeler</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {factSheet.map((x, i) => (
                      <li key={i}>• {x}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {voiceAnswer ? (
              <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-3 lg:p-5">
                <p className="text-sm font-medium text-white">Kısa Cevap</p>
                <p className="mt-2 text-sm text-white/75 whitespace-pre-line">
                  {voiceAnswer}
                </p>
              </div>
            ) : null}

            {quickSummary.length > 0 ? (
              <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-3 lg:p-5">
                <p className="text-sm font-medium text-white">Hızlı Özet</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75 text-center lg:text-left xl:ml-[35%]">
                  {quickSummary.map((x, i) => (
                    <li key={i}>• {x}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 2 KOLONLU GÖVDE */}
      <section className="mx-auto w-full lg:w-[95%] 2xl:max-w-[1450px]  3xl:max-w-[1700px] px-4 pb-16 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* MAIN CONTENT */}
          <article className="min-w-0 space-y-10">
            <div className="space-y-10 text-center lg:text-left">
              {sections.map((s, idx) => (
                <SectionRenderer
                  key={s.id || idx}
                  section={s}
                  index={idx}
                  locale={locale}
                  slug={slug}
                />
              ))}
            </div>

            {/* CTA Module (sayfa sonu) */}
            {(ctaPrimary?.label || ctaSecondary?.label) ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 items-center justify-center flex flex-col">
                <p className="text-sm font-medium text-white">
                  {asText(ctaPrimary?.title) || "Bir Sonraki Adım"}
                </p>

                {ctaPrimary?.text ? (
                  <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
                    {asText(ctaPrimary.text)}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row items-center justify-center lg:justify-start">
                  {ctaPrimary?.href && ctaPrimary?.label ? (
                    <Link
                      href={`/${locale}${ctaPrimary.href}`.replace(`/${locale}/${locale}`, `/${locale}`)}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 ${GRADIENT}`}
                    >
                      {asText(ctaPrimary.label)} <span className="font-bold">→</span>
                    </Link>
                  ) : null}

                  {/* {ctaSecondary?.label ? (
                    <a
                     download
                      href={ctaSecondary.href ? `/${locale}${ctaSecondary.href}`.replace(`/${locale}/${locale}`, `/${locale}`) : "#"}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-[#9060cf] px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 gap-[2px]"
                    >
                      {asText(ctaSecondary.label)} <span className="rotate-90 font-bold">→</span>
                    </a>
                  ) : null} */}
                </div>
              </div>
            ) : null}

            {/* FAQ */}
            {faqItems.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-semibold">{faqTitle}</h2>
                <Accordion items={faqItems} />
              </div>
            ) : null}

            {/* Internal Links */}
            {internalLinks.length > 0 ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">İlgili İçerikler</p>
                <ul className="mt-4 space-y-2">
                  {internalLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={`/${locale}${link.href}`.replace(`/${locale}/${locale}`, `/${locale}`)}
                        className="text-sm text-white/75 hover:text-white transition"
                      >
                        → {asText(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Related Posts */}
            {relatedPosts.length > 0 ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">İlgili Yazılar</p>
                <ul className="mt-4 space-y-2">
                  {relatedPosts.map((rp, i) => (
                    <li key={i}>
                      <Link
                        href={rp.href ? `/${locale}${rp.href}`.replace(`/${locale}/${locale}`, `/${locale}`) : "#"}
                        className="text-sm text-white/75 hover:text-white transition"
                      >
                        → {asText(rp.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>

          {/* ASIDE (Sticky) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[74px] space-y-2">
              <BlogToc sections={sections} />

              {/* Sticky Mini CTA */}
              <div className="rounded-3xl border border-white/10 bg-white/5 px-3 py-2 4xl:p-5">
                <p className="text-sm font-medium text-white"></p>
                <p className="mt-0 text-sm font-medium text-white/90">
                  Hızlıca analiz al veya checklist indir.
                </p>

                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href={ctaPrimary?.href ? `/${locale}${ctaPrimary.href}`.replace(`/${locale}/${locale}`, `/${locale}`) : `/${locale}/iletisim`}
                    className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
                  >
                    Analiz Talep Et
                  </Link>

                  {ctaSecondary?.href ? (
                  <a
  href="/downloads/otel-seo-kontrol-listesi-v1.0.pdf"
  download
  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
>
  Checklist İndir (PDF)
</a>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                    >
                      Checklist
                    </button>
                  )}
                </div>
              </div>

              {/* Hızlı Kontrol (TOC altında 3 madde) - quickSummary’dan ilk 3 */}
              {quickSummary.length > 0 ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 px-3 py-2 4xl:p-5">
                  <p className="text-sm font-medium text-white">Hızlı Kontrol</p>
                  <ul className="mt-1 space-y-2 text-xs text-white/75">
                    {quickSummary.slice(0, 3).map((x, i) => (
                      <li key={i}>• {x}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
