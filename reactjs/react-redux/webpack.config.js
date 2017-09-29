var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 // context: path.resolve(__dirname, "src"),
  devtool:  debug ? "inline-source-map": false ,
  entry: "./src/script.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  devServer: {
       contentBase: './dist'
   },
  output: {
    path: path.resolve(__dirname ,"dist"),
    filename: "script.bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};