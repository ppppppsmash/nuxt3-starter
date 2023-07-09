// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'nuxt3 starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: '' },
        { hid: 'description', name: 'description', content: 'nuxt3 starter meta desc' },
        { name: 'format-detection', content: 'telephone-no' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family-Roboto&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        // {
        //   rel: 'stylesheet',
        //   href: ''
        // }
      ],
      // script: [
      //   {
      //     src: '',
      //     type: 'text/javascript'
      //   }
      // ]
    }
  }
})
