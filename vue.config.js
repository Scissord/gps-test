const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/gps-test/',
  transpileDependencies: [
    'quasar'
  ],
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
