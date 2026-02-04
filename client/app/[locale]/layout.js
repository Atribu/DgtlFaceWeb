import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderWrapper from "./components/HeaderWrapper";
// import Footer from "./components/footer/Footer";
// import CookiePopup from "./components/Cookies/CookiePopup";
import { getSeoData } from '../lib/seo-utils'; 
// import FloatingFaqButton from "./components/common/FloatingFaqButton";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import FloatingActions from "./components/common/FloatingActions";


const Footer = dynamic(() => import("./components/footer/Footer"));
const CookiePopup = dynamic(() => import("./components/Cookies/CookiePopup"));
const FloatingFaqButton = dynamic(() => import("./components/common/FloatingFaqButton"));

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

const ogLocaleMap = {
  tr: "tr_TR",
  en: "en_US",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  // const pathname = "/";

  // const seoData = getSeoData(pathname, locale);

  const base = "https://dgtlface.com";

  return {
    // ✅ mutlaka ekle (OG url'ler doğru oluşsun)
    metadataBase: new URL("https://dgtlface.com"),

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
        // { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
   const { locale } =  params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
      setRequestLocale(locale)
       const messages = await getMessages();


  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-TM2KPGV9" />
     <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <HeaderWrapper />
        <CookiePopup />
        {children}
         <FloatingFaqButton />
        <Footer />
        <FloatingActions/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
