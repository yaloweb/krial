export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3004,
  },
  head: {
    title: 'krial-energo',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/filters.js',
    '~plugins/directives.js',
    {
      src: '~plugins/vue-slider-component.js',
      ssr: false
    },
    {
      src: '~plugins/tooltip.js',
      ssr: false
    },
    {
      src: '~plugins/custom-scripts.js',
      ssr: false
    },
    {
      src: '~plugins/select.js',
      ssr: false
    },
    {
      src: '~plugins/mask.js',
      ssr: false
    },
    {
      src: '~plugins/autosize.js',
      ssr: false
    },
    {
      src: '~plugins/masonry.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://api.krial.bikdev.ru/',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
