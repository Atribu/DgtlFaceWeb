// components/blog/SectionRenderer.jsx
import BlockRenderer from "./BlockRenderer";

export default function SectionRenderer({ section, locale, index, slug }) {
  if (!section) return null;

  const preBlocks = Array.isArray(section.preBlocks) ? section.preBlocks : [];
  const blocks = Array.isArray(section.blocks) ? section.blocks : [];

  return (
    <section id={section.id} className="scroll-mt-24">
      {/* ✅ Başlık öncesi bloklar */}
      {preBlocks.length > 0 && (
        <div className="mt-2">
          {preBlocks.map((block, i) => (
            <BlockRenderer
              key={`${section.id}-pre-${block.type}-${i}`}
              block={block}
              locale={locale}
              slug={slug}
            />
          ))}
        </div>
      )}

      <h2 className="text-2xl font-semibold tracking-tight text-white mt-2">
        {index + 1}. {section.title}
      </h2>

      <div className="mt-2">
        {blocks.map((block, i) => (
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
