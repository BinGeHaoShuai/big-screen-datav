const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.map.baidu.com',//代理的接口地址
        changeOrigin: true,//允许跨域
        secure: false
      }
    }
  }
}