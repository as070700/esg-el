// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  css: [
    '@/assets/css/global.css'
  ],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap' }
        { rel: 'icon', type: 'image/png', href: '/favicon_hat.png' }
      ],
      title: 'ESG - Ihr Partner für Entrümpelung',
      meta: [
        { name: 'description', content: 'ESG - Ihr Partner für Entrümpelung: einfach, schnell und günstig.' }
      ]
    }
  },
});
