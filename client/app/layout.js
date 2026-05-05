// client/app/layout.js
import "./globals.css";
import { getLocale } from "next-intl/server";

// Türkçe yorum: Root layout zorunlu.
// Locale provider gibi şeyleri burada değil, app/[locale]/layout içinde tut.
export default async function Layout({ children }) {
  const locale = await getLocale();
  const documentLang = locale === "en" ? "en" : "tr";

  return (
    <html lang={documentLang}>
      <body>{children}</body>
    </html>
  );
}
