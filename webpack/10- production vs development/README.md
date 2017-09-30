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

### 1. Install webpack 3 and config
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

### 5. Webpack Dev Server config
    * Webpack-dev-server serves all the file from a memory but webpack itself writes them on a disk.
    * So, Webpack creates all the file (client.bundle.js, client.css, index.html) whereas webpack-dev-server didn't. 
    
### 6. React and Babel 
#### To install babel and babel-preset-react
    $ npm i -D react react-dom
    $ npm i -D babel babel-preset-react babel-preset-es2015
    $ npm i -D babel-loader babel-core

### 7. Multiple Template optiona and RimRaf
#### To install rimraf
    * Rimraf is use d to clean the files (like ./dist/*, it will clean all the file in /dist directory)
     
    $ npm i -D rimraf
    
### 8. Pug(jade) template engine
#### To install pug
    $ npm i -D pug pug-html-loader html-loader
    
### 9. Hot module replacement
    * It enables to refresh the css without reloading the page.
    * Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.
    
### 10. Production vs Development
    * Here we use, Hot-Module-Replacement in development mode and Extract-Text-Plugin in production.
    
    