import HomepageClient from "./components/homepage/HomepageClient"

export async function generateMetadata() {
  const title =
    "Dijital Pazarlama, SEO, SEM, Creative, Yazılım & Otel Teknoloji Partneri | DGTLFACE";
  const description =
    "DGTLFACE; SEO, SEM, sosyal medya yönetimi, yazılım, creative, çok dilli çağrı merkezi ve otel teknolojileri alanlarında profesyonel dijital pazarlama çözümleri sunan teknoloji partneridir.";
  const url = "https://dgtlface.com/tr/";
  const keywords =
    "dijital pazarlama ajansı, teknoloji partneri, dijital pazarlama hizmetleri, seo ajansı, sem ajansı, smm ajansı, çok dilli çağrı merkezi, otel dijital pazarlama, dijital pazarlama ajansı nedir, oteller için dijital pazarlama stratejileri, pms ve ota yönetimi nasıl yapılır, çok dilli çağrı merkezi hizmeti nasıl çalışır, google ads seo sosyal medya birlikte nasıl çalışır, dijital dönüşüm ajansı ne yapar, otel web sitesi nasıl optimize edilir, sosyal medya içerik planlama nasıl yapılır, turizm sektörü dijital pazarlama örnekleri, seo sem smm arasındaki farklar, dijital pazarlama ile satış nasıl artırılır, rezervasyon dönüşümü artırma yöntemleri, otel dijital dönüşüm ajansı, turizm teknolojileri pazarlama, resort dijital marketing, çok kanallı otel satış optimizasyonu, antalya dijital ajans, antalya teknoloji partneri, antalya seo sem smm ajansı, antalya otel dijital pazarlama";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title:
        "DGTLFACE: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Partneriniz",
      description,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "DGTLFACE",
      images: [
        {
          url: "https://dgtlface.com/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
        },
      ],
    },
  };
}


export default function HomePage() {
  return (
    <div>
      <HomepageClient/>
    </div>
  );
}
