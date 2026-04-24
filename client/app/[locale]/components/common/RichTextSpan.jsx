// components/common/RichTextSpan.jsx

import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { Link as LocalizedLink } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const STATIC_PATH_PREFIXES = ["/downloads", "/images", "/og", "/api", "/_next"];

const LEGACY_LOCALIZED_PATH_TO_INTERNAL = {
  "/call-center-services": "/Services/callcenter",
  "/data-analysis-and-reporting": "/Services/digitalAnalysis",
  "/hotel-digital-marketing": "/Services/hotel",
  "/otel-dijital-pazarlama": "/Services/hotel",
  "/pms-auta-management": "/Services/pms",
  "/pms-ota-yonetimi": "/Services/pms",
  "/reporting": "/Services/digitalAnalysis",
  "/reporting/benchmark-analysis":
    "/Services/digitalAnalysis/onlineMarketResearchService",
  "/reporting/kvkk-data-security": "/Services/digitalAnalysis/kvkkDataSecurity",
  "/reporting/looker-studio": "/Services/digitalAnalysis/lookerStudio",
  "/reporting/sales-conversion": "/Services/digitalAnalysis/digitalSalesAnalysis",
  "/sem/advertising-reporting": "/Services/sem/performanceAnalysis",
  "/sem/google-ads-management": "/Services/sem/googleAdsAdvertising",
  "/software/cms-integration": "/Services/software/cmsInstallationService",
  "/software/server-security": "/Services/software/serverManagementService",
  "/software/website-development": "/Services/software/websiteAndSoftware",
  "/seo-hizmetleri": "/Services/seo",
  "/sosyal-medya-yonetimi": "/Services/smm",
  "/web-ve-yazilim-hizmetleri": "/Services/software",
  "/creative-ve-tasarim": "/Services/creative",
  "/cagri-merkezi-hizmetleri": "/Services/callcenter",
  "/veri-analiz-ve-raporlama": "/Services/digitalAnalysis",
};

const LOCALIZED_PATH_TO_INTERNAL = Object.entries(routing.pathnames || {}).reduce(
  (acc, [internalPath, localizedValue]) => {
    if (typeof localizedValue === "string") {
      acc.set(localizedValue, internalPath);
      return acc;
    }

    for (const locale of Object.keys(localizedValue || {})) {
      const localizedPath = localizedValue?.[locale];
      if (localizedPath) {
        acc.set(localizedPath, internalPath);
      }
    }

    return acc;
  },
  new Map(Object.entries(LEGACY_LOCALIZED_PATH_TO_INTERNAL))
);

const HTML_FALLBACK_LINK_TAGS = {
  callPerformance: "/Services/callcenter/callPerformance",
  lookerStudio: "/Services/digitalAnalysis/lookerStudio",
  reporting: "/Services/sem/performanceAnalysis",
};

const HTML_ENTITY_MAP = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: "\u00A0",
  quot: '"',
};

function isSpecialHref(rawHref) {
  return /^(#|mailto:|tel:|javascript:)/i.test(rawHref);
}

function isStaticPath(pathname) {
  return STATIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function withLocalePrefix(locale, pathname) {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

function getLocalizedRoutePath(internalPath, locale) {
  const localizedValue = routing.pathnames?.[internalPath];
  if (!localizedValue) return null;

  if (typeof localizedValue === "string") {
    return localizedValue;
  }

  return localizedValue?.[locale] || null;
}

function resolveRichTextHref(rawHref, locale) {
  const normalizedLocale = locale === "en" ? "en" : "tr";

  if (typeof rawHref !== "string" || !rawHref.trim()) return "#";

  const href = rawHref.trim();

  if (
    isSpecialHref(href) ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

  // Relative values like "looker-studio" are left untouched in this first pass
  // so we don't accidentally change a non-route reference.
  if (!href.startsWith("/")) return href;

  const pathname = normalizePath(href);
  if (isStaticPath(pathname)) return pathname;

  const directLocalizedPath = getLocalizedRoutePath(pathname, normalizedLocale);
  if (directLocalizedPath) {
    return withLocalePrefix(normalizedLocale, directLocalizedPath);
  }

  const unprefixedPath = pathname.replace(/^\/(tr|en)(?=\/|$)/, "") || "/";
  const internalPath =
    LOCALIZED_PATH_TO_INTERNAL.get(pathname) ||
    LOCALIZED_PATH_TO_INTERNAL.get(unprefixedPath);

  if (internalPath) {
    const localizedPath = getLocalizedRoutePath(internalPath, normalizedLocale);
    if (localizedPath) {
      return withLocalePrefix(normalizedLocale, localizedPath);
    }
  }

  return pathname;
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

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

function containsHtmlLinkMarkup(rawMessage) {
  return (
    /<a\b/i.test(rawMessage) ||
    /<(callPerformance|lookerStudio|reporting)>/i.test(rawMessage)
  );
}

function containsBlockMarkup(rawMessage) {
  return /<(ul|ol|li|div|p)\b/i.test(rawMessage);
}

function normalizeRichTextHtml(rawMessage, locale) {
  let html = rawMessage.replace(/<br\s*><\/br>/gi, "<br />");

  html = html.replace(
    /<(callPerformance|lookerStudio|reporting)>([\s\S]*?)<\/\1>/gi,
    (_, tagName, content) => {
      const href = resolveRichTextHref(HTML_FALLBACK_LINK_TAGS[tagName], locale);
      return `<a href="${escapeHtmlAttribute(href)}">${content}</a>`;
    }
  );

  html = html.replace(
    /<a\b([^>]*?)href=(["'])(.*?)\2([^>]*)>/gi,
    (_, beforeHref, _quote, hrefValue, afterHref) => {
      const href = resolveRichTextHref(hrefValue, locale);
      return `<a${beforeHref}href="${escapeHtmlAttribute(href)}"${afterHref}>`;
    }
  );

  return decodeHtmlEntitiesInTextNodes(html);
}

export default function RichTextSpan({ ns, id, className = "" }) {
  const t = useTranslations(ns);
  const locale = useLocale();
  const rawMessage = t.raw(id);
  const Container = containsBlockMarkup(String(rawMessage || "")) ? "div" : "span";

  if (typeof rawMessage === "string" && containsHtmlLinkMarkup(rawMessage)) {
    return (
      <Container
        className={[
          className,
          "[&_b]:font-semibold",
          "[&_strong]:font-semibold",
          "[&_ul]:mt-2",
          "[&_ul]:list-disc",
          "[&_ul]:list-inside",
          "[&_ul]:space-y-1",
          "[&_ol]:mt-2",
          "[&_ol]:list-decimal",
          "[&_ol]:list-inside",
          "[&_ol]:space-y-1",
          "[&_a]:font-semibold",
          "[&_a]:underline",
          "[&_a]:text-[#58b5cf]",
          "[&_a:hover]:text-black",
        ]
          .filter(Boolean)
          .join(" ")}
        dangerouslySetInnerHTML={{
          __html: normalizeRichTextHtml(rawMessage, locale),
        }}
      />
    );
  }

  return (
    <Container className={className}>
      {t.rich(id, {
        b: (chunks) => <span className="font-semibold">{chunks}</span>,
        strong: (chunks) => <span className="font-semibold">{chunks}</span>,
        br: () => <br />,
        ul: (chunks) => (
          <ul className="list-disc list-inside space-y-1 mt-2">
            {chunks}
          </ul>
        ),
        li: (chunks) => <li>{chunks}</li>,

        a: (chunks) => (
          <NextLink
            href={resolveRichTextHref(chunks?.props?.href, locale)}
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </NextLink>
        ),

        callPerformance: (chunks) => (
          <LocalizedLink
            href="/Services/callcenter/callPerformance"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
        lookerStudio: (chunks) => (
          <LocalizedLink
            href="/Services/digitalAnalysis/lookerStudio"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
      })}
    </Container>
  );
}
