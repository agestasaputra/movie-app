// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins: ["~/plugins/swiper.ts"],

  css: ["~/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper"),
    },
  },
});
