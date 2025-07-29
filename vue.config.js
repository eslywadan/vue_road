// vue.config.js
const path = require('path')
module.exports = {
    lintOnSave: true,
    devServer: {
        port: 8080,
        open: true
    },
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }

}