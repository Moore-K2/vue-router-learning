module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        }
    },
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器,起到中介的作用 (方法1)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },
    // 开启代理服务器，方法2
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: true, //websocket
                changeOrigin: true, // 用于控制请求头中的host值
                pathRewrite: { '^/api': '' }
            },
            '/demo': {
                target: 'http://localhost:5001',
                ws: true, //websocket
                changeOrigin: true, // 用于控制请求头中的host值
                pathRewrite: { '^/demo': '' }
            },
        }
    }

}