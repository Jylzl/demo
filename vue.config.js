/**
 * @description: 配置
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 09:33:12
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 17:58:25
 */
'use strict'

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    publicPath: '/', // 根路径
    outputDir: 'dist', //构建输出目录
    assetsDir: 'assets', //静态资源目录
    lintOnSave: false, // 是否开启eslint保存检测，有效值true/false/error
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: { //配置跨域
            '/api': {
                target: process.env.VUE_APP_SERVER_API,
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        node: {
            process: true,
        },
        plugins: [
            new MonacoWebpackPlugin()
        ]
    },
}