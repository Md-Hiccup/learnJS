var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/client.js",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ],

    },
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "client.bundle.js"
    },
    plugins: debug ? [
         new HtmlWebpackPlugin({
             title:'demo lover',
             template:'./js/index.ejs' ,
             minify : {
                collapseWhitespace : false
             },
             hash : true
        }),
        new ExtractTextPlugin("client.css")
        ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};