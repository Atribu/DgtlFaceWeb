import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderWrapper from "./components/HeaderWrapper";
import Footer from "./components/footer/Footer";
import CookiePopup from "./components/Cookies/CookiePopup";
import { getSeoData } from '../lib/seo-utils'; 
import Script from "next/script";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export async function generateMetadata({ params }) {
  const { locale } = await params; 

  const pathname = "/";

  const seoData = getSeoData(pathname, locale);

  return {
    title: seoData.title,
    description: seoData.description,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const inter = localFont({
  src: [
    { path: "../../public/Fonts/Inter_18pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/Fonts/Inter_18pt-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/Fonts/Inter_18pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/Fonts/Inter_18pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/Fonts/Inter_18pt-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/Fonts/Inter_18pt-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export default async function RootLayout({ children,  params }) {
   const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
      setRequestLocale(locale)
       const messages = await getMessages();


  return (
    <html lang={locale}>
      <head>
        {/* Google Tag Manager – script */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TM2KPGV9');
        `}
        </Script>
      </head>
     <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
         <noscript
    dangerouslySetInnerHTML={{
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM2KPGV9"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    }}
  />
        <NextIntlClientProvider locale={locale} messages={messages}>
        <HeaderWrapper />
        <CookiePopup />
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}