// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
  
    devServer: {
      disableHostCheck: true,
      proxy: {
        '/oauth/token': {
          target: 'http://127.0.0.1:8061/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/oauth/token': '/oauth/token'
          }
        },
        '/api': {
          target: 'http://127.0.0.1:8061/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  };