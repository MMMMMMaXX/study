// cjs common.js
// 代理
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // @ts-ignore
        proxy('/api1', {    //遇见/api1前缀的请求,就会触发该代理配置
            target: 'http://47.102.202.74:5001',    //请求转发给谁
            changeOrigin: true,                 //控制服务器收到的请求头中Host字段的值,默认为false
            pathRewrite: { '^/api1': '' }       //重写请求路径(必须)
        })
    )
}