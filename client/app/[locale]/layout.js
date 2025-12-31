import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderWrapper from "./components/HeaderWrapper";
import Footer from "./components/footer/Footer";
import CookiePopup from "./components/Cookies/CookiePopup";
import { getSeoData } from '../lib/seo-utils'; 
import FloatingFaqButton from "./components/common/FloatingFaqButton";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter", 
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
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, 
         { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }, 
      ],
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png', 
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
      <GoogleTagManager gtmId="GTM-TM2KPGV9" />
     <body className={`${inter.variable} antialiased`}>
         {/* <noscript
    dangerouslySetInnerHTML={{
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM2KPGV9"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    }}
  /> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
        <HeaderWrapper />
        <CookiePopup />
        {children}
         <FloatingFaqButton />
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

{/* <head>
        <Script id="gtm-base" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TM2KPGV9');
        `}
        </Script>
      </head> */}