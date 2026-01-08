// components/blog/BlockRenderer.jsx
import Link from "next/link";
import { getMediaBySlot } from "@/app/lib/blogMediaMap";
import Image from "next/image";

export default function BlockRenderer({ block, locale, slug }) {
  if (!block) return null;

  const alignmentClasses = "text-center lg:text-left";
  const imageSize1 = "max-w-[800px]";
  const imageSize2 = "max-w-[700px]";
  const imageSize3 = "max-w-[600px]";

  const GRADIENT = "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

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
          <div className={`relative aspect-[16/9]  w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${imageSize2}`}>
            <Image
              src={media.src}
              alt={media.alt || ""}
              fill
              
              className="object-cover "
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

        // ✅ JSON'daki "list" tipini destekle
    case "list": {
      const items = Array.isArray(block.items) ? block.items : [];
      const style = block.style || "ul";

      if (items.length === 0) return null;

      if (style === "ol") {
        return (
          <ol className={`mt-4 space-y-2 text-sm leading-6 text-white/75 list-decimal list-inside ${alignmentClasses}`}>
            {items.map((it, i) => (
              <li key={`${it}-${i}`} className="whitespace-pre-line">
                {it}
              </li>
            ))}
          </ol>
        );
      }

      // default ul
      return (
        <ul className={`mt-4 space-y-2 text-sm leading-6 text-white/75 w-full ${alignmentClasses}`}>
          {items.map((it, i) => (
            <li
              key={`${it}-${i}`}
              className="flex gap-2 items-start justify-center lg:justify-start"
            >
              <span className="text-white/30">•</span>
              <span className="whitespace-pre-line">{it}</span>
            </li>
          ))}
        </ul>
      );
    }

    case "download_asset": {
  const href = block.href || "";
  if (!href) return null;

  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
      {/* üst badge */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
          {block.assetType?.toUpperCase() || "PDF"}
        </span>
        {block.version ? (
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
            {block.version}
          </span>
        ) : null}
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
          Checklist + Sprint
        </span>
      </div>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
        {block.title}
      </h3>

      {block.purpose ? (
        <p className="mt-3 text-sm leading-6 text-white/75 whitespace-pre-line">
          {block.purpose}
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* sol */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          {block.whoFor ? (
            <>
              <p className="text-sm font-medium text-white">Kim Kullanır?</p>
              <p className="mt-2 text-sm text-white/70">{block.whoFor}</p>
            </>
          ) : null}

          {Array.isArray(block.steps) && block.steps.length > 0 ? (
            <>
              <p className="mt-5 text-sm font-medium text-white">Nasıl Kullanılır?</p>
              <ol className="mt-2 space-y-2 text-sm text-white/70 list-decimal list-inside">
                {block.steps.map((s, i) => (
                  <li key={i} className="whitespace-pre-line">{s}</li>
                ))}
              </ol>
            </>
          ) : null}
        </div>

        {/* sağ */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm font-medium text-white">
            Ölçüm & Önceliklendirme (Kısa sürüm)
          </p>
          {Array.isArray(block.checklist) && block.checklist.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {block.checklist.map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white/40">▢ ✅ </span>
                  <span className="whitespace-pre-line">{x}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-4 text-xs text-white/50">
            PDF içinde: Problem→Kök Neden→Çözüm tablosu + 14 gün sprint planı + önce/sonra KPI tablosu
          </p>
        </div>
      </div>

      {/* buton */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={href}
          download
          className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 ${GRADIENT}`}
        >
          {block.buttonLabel || "PDF’i İndir"} <span className="font-bold">↓</span>
        </a>

        <span className="text-xs text-white/50">
          Ücretsiz • PDF / Excel
        </span>
      </div>
    </section>
  );
}


    // ✅ TABLO
    case "table": {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows) ? block.rows : [];
      if (!headers.length || !rows.length) return null;

      return (
        <figure className="mt-6 w-full">
          {block.caption ? (
            <figcaption className={`mb-3 text-sm text-white/60 ${alignmentClasses}`}>
              {block.caption}
            </figcaption>
          ) : null}

          <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full min-w-[720px] text-left text-sm text-white/75">
              <thead className="bg-white/5 text-white">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {rows.map((r, ri) => (
                  <tr key={ri} className="align-top">
                    {r.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 whitespace-pre-line">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );
    }

    // ✅ JSON'daki "callout" tipini destekle
    case "callout": {
      const variant = block.variant || "note";
      const title = block.title || "";
      const items = Array.isArray(block.items) ? block.items : [];

      // "Buraya" notlarını yine gizlemek istiyorsan:
      if (variant === "note") return null;

      // action callout’u kutu olarak basalım
      if (variant === "action") {
        return (
          <div className={`mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 ${alignmentClasses}`}>
            {title ? (
              <p className="text-sm font-medium text-white">{title}</p>
            ) : null}

            {items.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {items.map((x, i) => (
                  <li key={i} className="whitespace-pre-line">
                    • {x}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      }

      return null;
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

      

    // case "cta": {
    //   const isPrimary = block.variant === "primary";
    //   const href = block.href || "";

    //   // Türkçe yorum: Href boş ise buton disable görünsün
    //   if (!href) {
    //     return (
    //       <div className={`mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 ${alignmentClasses}`}>
    //         <p className="text-sm font-medium text-white">{block.label}</p>
    //         {block.text ? (
    //           <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
    //             {block.text}
    //           </p>
    //         ) : null}
    //         <button
    //           type="button"
    //           disabled
    //           className="mt-4 inline-flex w-full items-center justify-center lg:items-start lg:justify-start rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/40"
    //         >
    //           Yakında
    //         </button>
    //       </div>
    //     );
    //   }

    //   return (
    //     <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-center justify-center items-center">
    //       <p className="text-sm font-medium text-white">{block.label}</p>
    //       {block.text ? (
    //         <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
    //           {block.text}
    //         </p>
    //       ) : null}

    //       <Link
    //         href={href.startsWith("/") ? `/${locale}${href}`.replace(`/${locale}/${locale}`, `/${locale}`) : href}
    //         className={
    //           isPrimary
    //             ? "mt-4 inline-flex w-full items-center justify-center max-w-[320px] text-center  rounded-2xl bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] px-2 py-2.5 text-sm font-medium transition hover:opacity-90"
    //             : "mt-4 inline-flex w-full items-center justify-center max-w-[320px] text-center  rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-sm text-black transition hover:bg-white/10"
    //         }
    //       >
    //         {block.label} <span className="ml-2">→</span>
    //       </Link>
    //     </div>
    //   );
    // }

    default:
      return null;
  }
}
