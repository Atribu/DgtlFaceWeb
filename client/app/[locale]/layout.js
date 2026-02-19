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
import {
  CookiePopupDeferred,
  FloatingActionsDeferred,
  FloatingFaqButtonDeferred,
} from "./components/common/DeferredWidgets";

const Footer = dynamic(() => import("./components/footer/Footer"));

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

function buildClientMessages(allMessages) {
  if (!allMessages || typeof allMessages !== "object") return allMessages;

  const rawBlogPosts = allMessages.BlogPosts;
  if (!rawBlogPosts || typeof rawBlogPosts !== "object") return allMessages;

  const slimBlogPosts = Object.fromEntries(
    Object.entries(rawBlogPosts).map(([key, post]) => {
      const safePost = post && typeof post === "object" ? post : {};
      const safeByline =
        safePost.byline && typeof safePost.byline === "object" ? safePost.byline : {};

      return [
        key,
        {
          slug: safePost.slug || "",
          department: safePost.department || "",
          subDepartman: safePost.subDepartman || "",
          subDepartment: safePost.subDepartment || "",
          title: safePost.title || "",
          excerpt: safePost.excerpt || "",
          h1Intro: safePost.h1Intro || "",
          h1:
            safePost.h1 && typeof safePost.h1 === "object"
              ? { intro: safePost.h1.intro || "" }
              : { intro: "" },
          publishedAt: safePost.publishedAt || "",
          updatedAt: safePost.updatedAt || "",
          readingTime: safePost.readingTime || "",
          byline: {
            updatedAt: safeByline.updatedAt || "",
            publishedAt: safeByline.publishedAt || "",
            readingTime: safeByline.readingTime || "",
          },
        },
      ];
    })
  );

  return {
    ...Object.fromEntries(
      Object.entries(allMessages).filter(([key]) => !key.startsWith("Faq"))
    ),
    BlogPosts: slimBlogPosts,
  };
}

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
   const { locale } =  params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
      setRequestLocale(locale)
       const allMessages = await getMessages();
       const messages = buildClientMessages(allMessages);


  return (
    <>
      <GoogleTagManager gtmId="GTM-TM2KPGV9" />
   
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
