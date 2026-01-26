import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-[99%] md:w-[96%] lg:w-[98%] mx-auto mt-3 lg:mt-5">
      <div className="rounded-2xl border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.10)] px-3 py-3 md:px-5 md:py-4">
        <ol className="flex flex-wrap items-center gap-1 md:gap-2.5">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <li key={`${it.href}-${idx}`} className="flex items-center gap-1 sm:gap-[6px] md:gap-2.5 lg:gap-3">
                {/* Ayırıcı (ok) */}
                {idx > 0 ? (
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center h-5 w-5 lg:h-7 lg:w-7 rounded-full bg-[#140f25]/15 text-[#140f25]/55"
                    title=">"
                  >
                    {/* basit ok svg */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : null}

                {/* Item */}
                {isLast ? (
                  <span className="inline-flex items-center rounded-full px-2 py-1.5 md:px-4 md:py-2 border border-black/10 bg-[#140f25]">
                    <span className="text-[13px] md:text-[14px] font-semibold leading-none bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
                      {it.label}
                    </span>
                  </span>
                ) : (
                  <Link
                    href={it.href}
                    className="group inline-flex items-center rounded-full px-1.5 md:px-3 py-1.5 lg:px-4 md:py-2 border border-black/10 bg-[#140f25] hover:bg-[#ffffff]/5 transition"
                  >
                    <span className="text-[13px] md:text-[14px] font-semibold leading-none text-[#ffffff] group-hover:text-[#140f25]">
                      {it.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>

        {/* küçük alt çizgi efekti */}
        <div className="mt-3 h-[2px] w-full rounded-full bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] opacity-70" />
      </div>
    </nav>
  );
}
