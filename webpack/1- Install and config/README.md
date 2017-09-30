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
    $ ./node_modules/.bin/webpack <entry> <dest> -d --watch
    $ ./node_modules/.bin/webpack ./src/js/client.js ./dist/client.bundle.js -p

