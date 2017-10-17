const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var bodyParser = require('body-parser');    //used to extract the body from the incoming requests
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// It extracts the data out of the request headers like the form data, etc,.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use('/users', function (req, res) {
    res.json(
        [{ name: 'Hiccup' , pass: 'hic@34'}])
});
app.use('/api', function(req, res){
    res.json(
        [{ api : 'from api' }])
});
app.post('/login', function (req, res) {
    console.log('request ', req.body);
    res.json(req.body);
});
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});