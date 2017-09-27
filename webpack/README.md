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

1. Check nodejs and npm is preinstalled 
    * node -v
    * npm -v
    
2. To install webpack 
    * mkdir webpack
    * cd webpack
    * npm init
    * npm i -S webpack  
       
3. To install dependencies
    * npm i -D webpack

4. install webpack globally
    * npm i -g webpack

5. To create webpack bundle, production for minified version and add watcher    
    * webpack <entry> <dest> -p --watch
    