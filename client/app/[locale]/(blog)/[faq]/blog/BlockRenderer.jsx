// components/blog/BlockRenderer.jsx
import Link from "next/link";
import { getMediaBySlot } from "@/app/lib/blogMediaMap";
import Image from "next/image";

export default function BlockRenderer({ block, locale, slug }) {
  if (!block) return null;

  const alignmentClasses = "text-center lg:text-left";

switch (block.type) {
    case "note":
      // Türkçe yorum: İçerik içi "Buraya" notlarını ekranda göstermiyoruz
      return null;

    case "media": {
      // Türkçe yorum: Slot ile resim bul
      const media = getMediaBySlot(slug, block.slot);

      // Türkçe yorum: Slot bulunamazsa sessizce geç
       if (!media?.src) {
    return (
      <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200">
        Media bulunamadı → slug: <b>{String(slug)}</b> / slot: <b>{String(block.slot)}</b>
      </div>
    );
  }

      return (
        <figure className="mt-6 w-full">
          <div className="relative aspect-[16/9]  w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={media.src}
              alt={media.alt || ""}
              fill
              sizes="(min-width: 1024px) 860px, 100vw"
              className="object-cover"
              priority={Boolean(block.priority)}
            />
          </div>

          {media.caption ? (
            <figcaption className="mt-2 text-sm text-white/60">
              {media.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    case "p":
      return (
        <p className={`mt-3 text-base leading-7 text-white/75 whitespace-pre-line ${alignmentClasses} `}>
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2 className={`mt-10 text-2xl font-semibold tracking-tight text-white ${alignmentClasses}`}>
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className={`mt-8 text-xl font-semibold tracking-tight text-white ${alignmentClasses}`}>
          {block.text}
        </h3>
      );

    case "h4":
      return (
        <h4 className={`mt-6 text-base font-semibold tracking-tight text-white ${alignmentClasses}`}>
          {block.text}
        </h4>
      );

    case "ul":
      return (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75 w-full">
          {(block.items || []).map((it, i) => (
            <li 
              key={`${it}-${i}`} 
              className={`flex items-center justify-center lg:justify-start gap-2 ${alignmentClasses}`}
            >
              <span className="text-white/30">•</span>
              <span className="whitespace-pre-line">{it}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className={`mt-4 space-y-2 text-sm leading-6 text-white/75 list-decimal list-inside ${alignmentClasses}`}>
          {(block.items || []).map((it, i) => (
            <li key={`${it}-${i}`} className="whitespace-pre-line">
              {it}
            </li>
          ))}
        </ol>
      );

    case "cta": {
      const isPrimary = block.variant === "primary";
      const href = block.href || "";

      // Türkçe yorum: Href boş ise buton disable görünsün
      if (!href) {
        return (
          <div className={`mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 ${alignmentClasses}`}>
            <p className="text-sm font-medium text-white">{block.label}</p>
            {block.text ? (
              <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
                {block.text}
              </p>
            ) : null}
            <button
              type="button"
              disabled
              className="mt-4 inline-flex w-full items-center justify-center lg:items-start lg:justify-start rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/40"
            >
              Yakında
            </button>
          </div>
        );
      }

      return (
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-center justify-center items-center">
          <p className="text-sm font-medium text-white">{block.label}</p>
          {block.text ? (
            <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
              {block.text}
            </p>
          ) : null}

          <Link
            href={href.startsWith("/") ? `/${locale}${href}`.replace(`/${locale}/${locale}`, `/${locale}`) : href}
            className={
              isPrimary
                ? "mt-4 inline-flex w-full items-center justify-center max-w-[320px] text-center  rounded-2xl bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] px-2 py-2.5 text-sm font-medium transition hover:opacity-90"
                : "mt-4 inline-flex w-full items-center justify-center max-w-[320px] text-center  rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-sm text-black transition hover:bg-white/10"
            }
          >
            {block.label} <span className="ml-2">→</span>
          </Link>
        </div>
      );
    }

    default:
      return null;
  }
}
