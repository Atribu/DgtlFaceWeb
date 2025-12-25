/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        inter24: ["var(--font-inter)", "sans-serif"],
        inter28: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#140F25",
      },
      boxShadow: {
        boxshadow: ["0px 7px 50px 0px rgba(20, 12, 41, 0.05)"],
      },

      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    // Özel base stillerimizi ekleyen küçük bir plugin
    function ({ addBase }) {
      addBase({
        // body stilleri
        body: {
          // Tailwind utility sınıflarını `@apply` ile kullanabiliriz
          "@apply text-black text-center m-0": {},
        },
        // canvas etiketinin varsayılan görünümü
        canvas: {
          "@apply block w-[380px] h-[380px]": {},
        },
        // paragraflar (isteğe bağlı)
        // "p": {
        //   "@apply text-base": {},
        // },
        // Link stilleri
        "a, a:hover, a:visited": {
          "@apply text-white no-underline": {},
        },
        // disable-selection sınıfı
        ".disable-selection": {
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
          "-webkit-touch-callout": "none",
        },
      });
    },
  ],
};
