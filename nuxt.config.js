import pkg from './package'

export default {
  env: {
    publicPath: '/website/_nuxt/',
    baseUrl: process.env.BASE_URL || '',
    companyName: 'Long Timber Brewing Company',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '180 N 5th Street',
      addressLocality: 'Monroe',
      addressRegion: 'Oregon',
      postalCode: '97456',
      addressCountry: 'US'
    },
    contact: {
      email: 'info@longtimberbrewing.com',
      phone: '',
      phoneFormatted: '+15418475705'
    },
    geo: {
      latitude: 44.416517,
      longitude: -123.297402
    },
    hours: {
      dayOfWeek: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ],
      opens: '09:00',
      closes: '23:00'
    }
  },
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/hcj2teu.css' },
    ],
    script: [
      { src: 'https://unpkg.com/marked@0.6.2' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#535555' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      'assets/scss/variables.scss'
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
