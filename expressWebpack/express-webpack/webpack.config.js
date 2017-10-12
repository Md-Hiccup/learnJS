var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./index.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : ['style-loader', 'css-loader']

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(woff2?|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
        ],
    },
    devServer : {
        contentBase: './dist',
        compress: true,
        port: 9002,
        stats: 'errors-only',
        open: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'React js',
            template:'./public/index.html' ,
            minify : {
                collapseWhitespace : false
            },
            hash : true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};