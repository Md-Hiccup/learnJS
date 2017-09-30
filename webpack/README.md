# Steps to work on Webpack

> Keys : 

 * i for install 
 * -S for --save
 * -D for --dependencies
 * npm view webpack version for viewing webpack version
 * npm i webpack@3.6.0 for installing specific version by @
 * -p for production
 * --watch for watching files
 * -d for development mode

### 1. Install webpack 2 and config
#### Check nodejs and npm is preinstalled 
    $ node -v
    $ npm -v
    
#### To install webpack 
    $ mkdir webpack
    $ cd webpack
    $ npm init
    $ npm i -S webpack  
       
#### To install dependencies
    $ npm i -D webpack

#### To install webpack globally
    $ npm i -g webpack

#### To create webpack bundle, production for minified version and add watcher    
    $ ./node_modules/.bin/webpack <entry> <dest> -p --watch
    $ ./node_modules/.bin/webpack ./src/js/client.js ./dist/client.bundle.js -p

### 2. Style , Css and Sass loaders and Extract-text-webpack plugin
#### To install css-loader and style-loader
    $ npm i -D css-loader
    $ npm i -D style-loader
    $ npm i -D sass-loader node-sass
    $ npm i -D extract-text-webpack-plugin 

### 3. Webpack Dev Server
#### To install webpack-dev-server
    $ npm i webpack-dev-server -D
    
#### To install babel and babel-preset-react
    $ npm i -D babel babel-preset-react babel-preset-es2015
    $ npm i -D babel-loader babel-core
