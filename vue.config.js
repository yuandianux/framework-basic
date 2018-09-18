// vue.config.js
module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.16.124.16:9001',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: process.env.NODE_ENV === 'production' ? false : 'error',
  productionSourceMap: true,
  css: {
    sourceMap: true
  },
  parallel: require('os').cpus().length > 1
}
