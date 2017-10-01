const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const isProd = process.env.NODE_ENV === 'production'; // return true or false
const cssDev = ["style-loader", "css-loader", "sass-loader"];
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"]
});
const cssConfig = isProd ? cssProd : cssDev;

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./js/client.js",
        bootstrap : bootstrapConfig
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
            },
            // For Bootstrap 3
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
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
            filename: "/css/[name].css",
            disable : !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/js/*.ejs')),
        })
    ]
};