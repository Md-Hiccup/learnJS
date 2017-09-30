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
        contact: "./js/contact.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" }
        ],

    },
    devServer : {
        contentBase: './dist',
        compress : true,
        port : 9000,
        stats : 'errors-only',
        open : true
    },
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "[name].bundle.js"
    },
    plugins: debug ? [
        new HtmlWebpackPlugin({
            title:'demo lover',
            template:'./js/index.ejs' ,
            minify : {  collapseWhitespace : false  },
            hash : true,
            excludeChunks: ['contact']
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'Contact page',
            hash: true,
            chunks: ['contact'],
            filename: 'contact.html',
            template: './js/contact.html'
        }),
        new ExtractTextPlugin("client.css")
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};