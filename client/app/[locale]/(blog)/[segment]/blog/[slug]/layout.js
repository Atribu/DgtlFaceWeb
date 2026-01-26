// app/[locale]/(blog)/[faq]/blog/[slug]/layout.js

export const metadata = {
  // Türkçe yorum: Blog sayfaları için fallback/default OG ayarları
  // Türkçe yorum: page.js içindeki generateMetadata çalışırsa bunları override eder
  metadataBase: new URL("https://dgtlface.com"),

  openGraph: {
    type: "article",
    siteName: "DGTLFACE",
    images: [
      {
        url: "/og/og-default.png", // public/og/og-default.png
        width: 1200,
        height: 630,
        alt: "DGTLFACE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og/og-default.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogDetailLayout({ children }) {
  return children;
}
