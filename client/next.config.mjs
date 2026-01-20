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
