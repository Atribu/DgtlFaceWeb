const PROD_SITE_URL = "https://dgtlface.com";

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

export function getSiteUrl() {
  const explicitSiteUrl = trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicitSiteUrl) return explicitSiteUrl;

  if (process.env.NODE_ENV === "production") {
    return PROD_SITE_URL;
  }

  return "http://localhost:3000";
}

export function getCanonicalHost() {
  return new URL(getSiteUrl()).host;
}

export function getCanonicalProtocol() {
  return new URL(getSiteUrl()).protocol.replace(/:$/, "");
}

export function buildSiteUrl(pathname = "/") {
  return new URL(pathname, getSiteUrl()).toString();
}
