export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Барахлито',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#94ddff', height: '4px', duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  env: {
    API_KEY: 'AIzaSyAa1OOrSUjXEtWBB71rBaMFzn4dj5yy4N4',
    baseUrl: process.env.BASE_URL || 'https://barahlito-bc730-default-rtdb.firebaseio.com'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://barahlito-bc730-default-rtdb.firebaseio.com',
    credentials: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  routes: {
    props: true
  },

  // router: {
  //   middleware: 'check-auth'
  // },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
