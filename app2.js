//console.log(module) // shows id, exports, parent, filename, isLoaded boolean, children, paths

//use logger.js function to log 
//1. load module
//Better to store result in a constant so you don't accidentally override the value of logger
const log = require('./logger');
log('message');
//logger = 1; // Assignment to constant variable 