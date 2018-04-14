const nodeExternals = require('webpack-node-externals')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/cabinetdentaire/'
  }
} : {}

module.exports = {
  head: {
    title: 'nicolasjan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cabinet du Docteur JAN - Chirurgien Dentiste' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    { src: '~assets/style/main.scss' }
  ],
  build: {
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  },
  ...routerBase
}
