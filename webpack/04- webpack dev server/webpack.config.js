var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
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
	    // {test : /\.css$/, use: ['style-loader', 'css-loader']}
        ],
    },
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
        }),
	new ExtractTextPlugin("client.css")
    ]
};
