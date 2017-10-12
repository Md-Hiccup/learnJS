### 1. Create the React App    
#### Install the create-react-app
- $ npm install -g create-react-app
   
#### Create React direactory 'express-webpack' , run
- $ create-react-app express-webpack

#### Install all dependencies
- $ npm i -D webpack webpack-dev-middleware webpack-dev-server html-webpack-plugin
- $ npm i -D babel-loader babel-core babel-preset-env babel-preset-es2015
- $ npm i -D url-loader style-loader css-loader rimraf

#### Move the 'public' directory to 'src' folder

#### create .babelrc and insert 
` { "presets": [ "es2015", "react" ]} `

#### create webpack.config.js and insert
```
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
```
   
#### Create server.js in 'express-webpack' and insert
```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use('/users', function (req, res) {
    res.json(
        [{ result : 'from users' }])
});
app.use('/api', function(req, res){
    res.json(
        [{ api : 'from api' }])
});
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
```   

#### Edit the package.json, In "script", add  
- "dev": "./node_modules/.bin/webpack-dev-server -d --watch",
- "prod": "npm run clean && NODE_ENV=production ./node_modules/.bin/webpack -p",
- "clean": "./node_modules/.bin/rimraf ./dist/*",
- "server": "nodemon server.js",
        
### 3. Fetch the Data of express from React
#### Edit the express-webpack/src/App.js 
     
```
      class App extends Component {
        constructor(){
              super();
              this.state ={users: []};
          }
     
        componentDidMount() {
          fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }
      
        render() {
          return (
          <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                 To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <div>
                  <h1>User</h1>
                  {this.state.users.map(user =>
                  <div key={1}><h3>Name: {user.name}</h3></div>
                   )}
              </div>
          </div>
          );
        }
      }
```



      
