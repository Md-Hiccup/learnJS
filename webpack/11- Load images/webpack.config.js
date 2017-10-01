var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production'; // return true or false
var cssDev = ["style-loader", "css-loader", "sass-loader"];
var cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"]
});
var cssConfig = isProd ? cssProd : cssDev;

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
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:  "babel-loader"
            },
            {
                test: /\.pug$/,
                use : ["html-loader","pug-html-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use :[
                    {
                        loader: "file-loader",
                        options : {
                            name: '[path][name].[ext]',
                           // outputPath : 'img/',    // it will create 'img/' folder in '/dist' and images are stored in this folder
                        }
                    }
                ]
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
    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack App',
            template:'./js/index.ejs' ,
            minify : {  collapseWhitespace : false  },
            hash : true,
            excludeChunks: ['contact']
        }),
        new ExtractTextPlugin({
            filename: "client.css",
            disable : !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};