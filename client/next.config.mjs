import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const withNextIntl = createNextIntlPlugin();

// Türkçe yorum: ESM'de __dirname yok; bu şekilde üretiyoruz.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Türkçe yorum: Monorepo/çoklu lockfile durumunda Next’in tracing root’unu
  // client klasörüne sabitleyerek uyarıyı ve olası deploy sorunlarını azaltır.
  outputFileTracingRoot: __dirname,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 yıl cache
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",

    // Not: contentSecurityPolicy burada resmi bir Image config alanı değil.
    // CSP’yi headers() üzerinden vermek daha doğru.
  },

  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "date-fns"],
  },

   async redirects() {
    return [
       {
        source: "/tr/seo-hizmetleri",
        destination: "/tr/seo",
        permanent: true, // 301
      },

      // slash ile gelirse
      {
        source: "/tr/seo-hizmetleri/",
        destination: "/tr/seo",
        permanent: true,
      },
      // TR eski sosyal linkler -> yeni canonical sayfalar
      {
        source: "/tr/sosyal-medya-yonetimi",
        destination: "/tr/smm",
        permanent: true, // 301
      },
      {
        source: "/tr/sosyal-medya-yonetimi/",
        destination: "/tr/smm",
        permanent: true,
      },

      {
        source: "/tr/web-ve-yazilim-hizmetleri",
        destination: "/tr/yazilim",
        permanent: true,
      },
      {
        source: "/tr/web-ve-yazilim-hizmetleri/",
        destination: "/tr/yazilim",
        permanent: true,
      },

            {
        source: "/tr/creative-ve-tasarim",
        destination: "/tr/creative",
        permanent: true,
      },
      {
        source: "/tr/creative-ve-tasarim/",
        destination: "/tr/creative",
        permanent: true,
      },

                {
        source: "/tr/cagri-merkezi-hizmetleri",
        destination: "/tr/cagri-merkezi",
        permanent: true,
      },
      {
        source: "/tr/cagri-merkezi-hizmetleri/",
        destination: "/tr/cagri-merkezi",
        permanent: true,
      },

                    {
        source: "/tr/pms-ota-yonetimi",
        destination: "/tr/pms-ota",
        permanent: true,
      },
      {
        source: "/tr/pms-ota-yonetimi/",
        destination: "/tr/pms-ota",
        permanent: true,
      },

                        {
        source: "/tr/veri-analiz-ve-raporlama",
        destination: "/tr/raporlama",
        permanent: true,
      },
      {
        source: "/tr/veri-analiz-ve-raporlama/",
        destination: "/tr/raporlama",
        permanent: true,
      },

                           {
        source: "/tr/otel-dijital-pazarlama",
        destination: "/tr/otel",
        permanent: true,
      },
      {
        source: "/tr/otel-dijital-pazarlama/",
        destination: "/tr/otel",
        permanent: true,
      },




        {
        source: "/tr/seo-hizmetleri-sss",
        destination: "/tr/seo-sss",
        permanent: true,
      },
      {
        source: "/tr/seo-hizmetleri-sss/",
        destination: "/tr/seo-sss",
        permanent: true,
      },


            {
        source: "/tr/sosyal-medya-yonetimi-sss",
        destination: "/tr/smm-sss",
        permanent: true,
      },
      {
        source: "/tr/sosyal-medya-yonetimi-sss/",
        destination: "/tr/smm-sss",
        permanent: true,
      },


                  {
        source: "/tr/web-ve-yazilim-hizmetleri-sss",
        destination: "/tr/yazilim-sss",
        permanent: true,
      },
      {
        source: "/tr/web-ve-yazilim-hizmetleri-sss/",
        destination: "/tr/yazilim-sss",
        permanent: true,
      },


                        {
        source: "/tr/creative-ve-tasarim-sss",
        destination: "/tr/creative-sss",
        permanent: true,
      },
      {
        source: "/tr/creative-ve-tasarim-sss/",
        destination: "/tr/creative-sss",
        permanent: true,
      },


                              {
        source: "/tr/cagri-merkezi-hizmetleri-sss",
        destination: "/tr/cagri-merkezi-sss",
        permanent: true,
      },
      {
        source: "/tr/cagri-merkezi-hizmetleri-sss/",
        destination: "/tr/cagri-merkezi-sss",
        permanent: true,
      },

                                    {
        source: "/tr/pms-ota-yonetimi-sss",
        destination: "/tr/pms-ota-sss",
        permanent: true,
      },
      {
        source: "/tr/pms-ota-yonetimi-sss/",
        destination: "/tr/pms-ota-sss",
        permanent: true,
      },



      
    ];
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },

  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|webp|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:all*(webm|mp4)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Türkçe yorum: Eğer CSP vermek istiyorsan buradan vermelisin.
      // Örnek CSP (ihtiyaca göre gevşetmen gerekebilir):
      // {
      //   source: "/(.*)",
      //   headers: [
      //     {
      //       key: "Content-Security-Policy",
      //       value: "default-src 'self'; img-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';",
      //     },
      //   ],
      // },
    ];
  },
};

export default withNextIntl(nextConfig);
