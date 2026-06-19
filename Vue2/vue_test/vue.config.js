const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启服务器代理（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启服务器代理（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true
      },
    }
  }
})