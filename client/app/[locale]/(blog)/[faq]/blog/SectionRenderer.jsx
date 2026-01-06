// components/blog/SectionRenderer.jsx
import BlockRenderer from "./BlockRenderer";

export default function SectionRenderer({ section, locale, index, slug }) {
  if (!section) return null;

  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {index + 1}. {section.title}
      </h2>

      <div className="mt-2">
        {(section.blocks || []).map((block, i) => (
          <BlockRenderer
            key={`${section.id}-${block.type}-${i}`}
            block={block}
            locale={locale}
            slug={slug}
          />
        ))}
      </div>

      <div className="mt-10 h-px w-full bg-white/10" />
    </section>
  );
}
