var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./js/client.js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:  "babel-loader"
            },
            {
                test: /\.pug$/,
                // exclude: /node_modules/,
                use : ["html-loader","pug-html-loader"]
            }
        ],

    },
    devServer : {
        contentBase: './dist',
        compress : true,
        port : 9000,
        stats : 'errors-only',
        open : true,
        hot : true
    },
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "[name].bundle.js"
    },
    plugins: debug ? [
        new HtmlWebpackPlugin({
            title:'Webpack App',
            template:'./js/index.ejs' ,
            minify : {  collapseWhitespace : false  },
            hash : true,
            excludeChunks: ['contact']
        }),
        new ExtractTextPlugin({
            filename: "client.css",
            disable : true,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};