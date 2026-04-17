import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderWrapper from "./components/HeaderWrapper";
import { getSeoData } from '../lib/seo-utils'; 
import { getSiteUrl } from "@/app/lib/site-url";
import Script from "next/script";
import localFont from "next/font/local";
import dynamic from 'next/dynamic';
import {
  CookiePopupDeferred,
  FloatingActionsDeferred,
  FloatingFaqButtonDeferred,
} from "./components/common/DeferredWidgets";

const Footer = dynamic(() => import("./components/footer/Footer"));

const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
});

function buildClientMessages(allMessages) {
  if (!allMessages || typeof allMessages !== "object") return allMessages;

  // Client tarafında kullanılmayan, server-only namespace'leri eleyerek
  // hydration payload'unu küçültüyoruz (düşük riskli kademeli optimizasyon).
  const SERVER_ONLY_NAMESPACES = new Set([
    "BlogSeoTeknik",
    "ContactPage",
    "OtaIntegrationPage",
    "UiUxPage",
    "VerticalSlider",
    "WebPayment",
  ]);

  return Object.fromEntries(
    Object.entries(allMessages).filter(
      ([key]) =>
        !key.startsWith("Faq") &&
        key !== "BlogPosts" &&
        !SERVER_ONLY_NAMESPACES.has(key)
    )
  );
}

const ogLocaleMap = {
  tr: "tr_TR",
  en: "en_US",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  // const pathname = "/";

  // const seoData = getSeoData(pathname, locale);

  const base = getSiteUrl();

  return {
    // ✅ mutlaka ekle (OG url'ler doğru oluşsun)
    metadataBase: new URL(base),

    // ✅ title template doğru yerde
    title: {
      default: locale === "tr"
        ? "DGTLFACE | Dijital Dönüşüm Partneriniz"
        : "DGTLFACE | Your Digital Transformation Partner",
      template: "%s | DGTLFACE",
    },

    // description: seoData.description,

    // ✅ canonical + diller
//     alternates: {
//   canonical: `${base}/${locale}`,
//   languages: {
//     tr: `${base}/tr`,
//     en: `${base}/en`,
//   },
// },

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: "/favicon.ico",
    },

    // ✅ Google’da görsel için kritik alanlar:
    // openGraph: {
    //   type: "website",
    //   url: `https://dgtlface.com/${locale}`,
    //   siteName: "DGTLFACE",
    //   title: "DGTLFACE | Dijital Dönüşüm Partneriniz",
    //   description: seoData.description,
    //   images: [
    //     {
    //       url: "/og/og-home.webp", // bunu oluşturacağız
    //       width: 1200,
    //       height: 630,
    //       alt: "DGTLFACE",
    //     },
    //   ],
    //   locale: ogLocaleMap[locale] ?? "en_US",
    // },

    // twitter: {
    //   card: "summary_large_image",
    //   title: "DGTLFACE | Dijital Dönüşüm Partneriniz",
    //   description: seoData.description,
    //   images: ["/og/og-home.webp"],
    // },

    robots: {
      index: true,
      follow: true,
    },
  };
}



export default async function RootLayout({ children,  params }) {
   const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
      setRequestLocale(locale)
       const allMessages = await getMessages();
       const messages = buildClientMessages(allMessages);


  return (
    <>
      <Script
        id="gtm-idle-loader"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              function injectGtm() {
                if (w.__gtmLoaded) return;
                w.__gtmLoaded = true;
                w[l] = w[l] || [];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0];
                var j = d.createElement(s);
                var dl = l !== 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              }

              if ('requestIdleCallback' in w) {
                w.requestIdleCallback(injectGtm, {timeout: 4000});
              } else {
                w.setTimeout(injectGtm, 1200);
              }
            })(window, document, 'script', 'dataLayer', 'GTM-TM2KPGV9');
          `,
        }}
      />
   
      <div className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderWrapper />
          <CookiePopupDeferred />
          {children}
          <FloatingFaqButtonDeferred />
          <Footer />
          <FloatingActionsDeferred />
        </NextIntlClientProvider>
      </div>
    </>
  );
}
