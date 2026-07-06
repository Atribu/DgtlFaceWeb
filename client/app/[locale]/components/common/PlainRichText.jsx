"use client";

import React from "react";
import { useLocale } from "next-intl";
import { normalizeHtmlLinks } from "@/app/lib/localized-route-hrefs";

const HTML_ENTITY_MAP = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: "\u00A0",
  quot: '"',
};

const BLOCK_TAG_RE =
  /<\/?(address|article|aside|blockquote|div|dl|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|li|main|nav|ol|p|pre|section|table|tbody|td|tfoot|th|thead|tr|ul)\b/i;

function decodeHtmlEntitiesInText(text) {
  return String(text).replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    const normalizedEntity = entity.toLowerCase();

    if (normalizedEntity.startsWith("#x")) {
      const codePoint = Number.parseInt(normalizedEntity.slice(2), 16);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    if (normalizedEntity.startsWith("#")) {
      const codePoint = Number.parseInt(normalizedEntity.slice(1), 10);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    return HTML_ENTITY_MAP[normalizedEntity] ?? match;
  });
}

function decodeHtmlEntitiesInTextNodes(html) {
  return String(html)
    .split(/(<[^>]+>)/g)
    .map((segment) =>
      segment.startsWith("<") ? segment : decodeHtmlEntitiesInText(segment)
    )
    .join("");
}

function convertMarkdownLinksToHtml(text) {
  return String(text).replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    '<a href="$2">$1</a>'
  );
}

export default function PlainRichText({
  html,
  as = "auto",
  className = "",
}) {
  const locale = useLocale();

  if (!html) return null;

  const normalizedHtml = normalizeHtmlLinks(
    convertMarkdownLinksToHtml(decodeHtmlEntitiesInTextNodes(html)),
    locale
  );

  const hasBlockTag = BLOCK_TAG_RE.test(normalizedHtml);

  const Tag = as === "auto" ? (hasBlockTag ? "div" : "p") : as;

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: normalizedHtml }}
    />
  );
}