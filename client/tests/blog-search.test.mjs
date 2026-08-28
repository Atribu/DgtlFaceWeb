import test from "node:test";
import assert from "node:assert/strict";
import {
  createBlogSearchRecord,
  normalizeBlogSearchText,
} from "../app/lib/blog-search.mjs";

test("normalizes Turkish characters and dotless i", () => {
  assert.equal(
    normalizeBlogSearchText("İçerik, DÖNÜŞÜM ve kırmızı!", "tr"),
    "icerik donusum ve kirmizi"
  );
});

test("uses English casing rules on English pages", () => {
  assert.equal(
    normalizeBlogSearchText("DIGITAL Insights", "en"),
    "digital insights"
  );
});

test("normalizes punctuation and repeated whitespace", () => {
  assert.equal(
    normalizeBlogSearchText("  SEO—SEM   Raporlama  ", "tr"),
    "seo sem raporlama"
  );
});

test("handles empty values safely", () => {
  assert.equal(normalizeBlogSearchText(null, "tr"), "");
  assert.equal(normalizeBlogSearchText(undefined, "en"), "");
});

test("prepares searchable fields without changing visible content", () => {
  const post = {
    id: "blog-1",
    title: "Dönüşüm Raporları",
    excerpt: "Kırmızı çizgiler nasıl yorumlanır?",
  };

  const record = createBlogSearchRecord(post, "tr");

  assert.notEqual(record, post);
  assert.equal(record.title, post.title);
  assert.equal(record.excerpt, post.excerpt);
  assert.equal(record.searchTitle, "donusum raporlari");
  assert.equal(record.searchExcerpt, "kirmizi cizgiler nasil yorumlanir");
  assert.equal(Object.hasOwn(post, "searchTitle"), false);
  assert.equal(Object.hasOwn(post, "searchExcerpt"), false);
});
