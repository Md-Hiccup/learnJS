var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./js/client.js",
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "client.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'webpack app',
            template:'./js/index.ejs' ,
            minify : {
                collapseWhitespace : false
            },
            hash : true
        })]
};
