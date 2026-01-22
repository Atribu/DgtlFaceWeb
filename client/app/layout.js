// client/app/layout.js
import "./globals.css";

// Türkçe yorum: Root layout zorunlu.
// Locale provider gibi şeyleri burada değil, app/[locale]/layout içinde tut.
export default function Layout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
