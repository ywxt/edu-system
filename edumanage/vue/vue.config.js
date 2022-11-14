module.exports = {
    publicPath: './',
    productionSourceMap: true,
    devServer:{
        port:80,
        host:'localhost',
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}