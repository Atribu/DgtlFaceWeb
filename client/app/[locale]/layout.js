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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default async function RootLayout({ children,  params }) {
   const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
      setRequestLocale(locale)
       const messages = await getMessages();


  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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