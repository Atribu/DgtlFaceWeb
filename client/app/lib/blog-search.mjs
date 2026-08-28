export const BLOG_SEARCH_DEBOUNCE_MS = 180;

export function normalizeBlogSearchText(value, locale) {
  const localeCode = locale === "en" ? "en-US" : "tr-TR";

  return String(value || "")
    .toLocaleLowerCase(localeCode)
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/ı/g, "i")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function createBlogSearchRecord(post, locale) {
  return {
    ...post,
    searchTitle: normalizeBlogSearchText(post?.title, locale),
    searchExcerpt: normalizeBlogSearchText(post?.excerpt, locale),
  };
}
