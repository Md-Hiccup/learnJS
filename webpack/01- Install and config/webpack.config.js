var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./js/client.js",
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "client.bundle.js"
    }
};
