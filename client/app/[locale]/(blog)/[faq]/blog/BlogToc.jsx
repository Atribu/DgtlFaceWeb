// components/blog/BlogToc.jsx
export default function BlogToc({ sections }) {
  if (!sections?.length) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-3 xl:py-4 xl:px-3">
      <div className="flex items-center justify-between gap-3">
            <span className="h-2 w-14 rounded-full bg-white/20" />
        <p className="text-sm font-medium text-white">İçindekiler</p>
        <span className="h-2 w-14 rounded-full bg-white/20" />
      </div>

      <nav className="mt-2 flex flex-col gap-2">
        {sections.map((s, idx) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group rounded-2xl border border-white/10 bg-black/30 px-2 py-2 text-[12px] text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-white/60" />
              {idx + 1}. {s.title}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
