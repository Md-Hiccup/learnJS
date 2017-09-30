# Steps to work on Webpack

> Keys : 
 
 * npm run dev for running webpack server
 * i for install 
 * -S for --save
 * -D for --dependencies
 * npm view webpack version for viewing webpack version
 * npm i webpack@3.6.0 for installing specific version by @
 * -p for production
 * --watch for watching files
 * -d for development mode

### 1. Install Html Webpack Plugin
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
    $ ./node_modules/.bin/webpack <entry> <dest> -d --watch
    $ ./node_modules/.bin/webpack ./src/js/client.js ./dist/client.bundle.js -p

### 2. Html webpack plugin
#### To install html-webpack-plugin
    $ npm i -D html-webpack-plugin

### 3. Style, Css, Sass loaders and Extract-text-webpack plugin
#### To install css-loader, style-loader and sass-loader 
    $ npm i -D css-loader
    $ npm i -D style-loader
    $ npm i -D sass-loader node-sass
    $ npm i -D extract-text-webpack-plugin 

### 4. Webpack Dev Server
#### To install webpack-dev-server
    $ npm i webpack-dev-server -D

