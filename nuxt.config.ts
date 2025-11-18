import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/icon',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    oauth: {
      google: {
        clientId: '89398042069-31s7jr5ccgp1rksb20572a30jkr8kch1.apps.googleusercontent.com',
        clientSecret: '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',
      },
    },
  },
});
