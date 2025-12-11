// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ["@/assets/style/global.scss"],
    modules: [
        '@nuxt/image'
    ],
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            '2xl': 1536
        }
    }
})
