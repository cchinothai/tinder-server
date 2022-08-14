function sayHello(name){
    console.log('Hello ' + name)
}

sayHello('Cody');

//shows how node does not contain window/document obejcts
//console.log(window) --> reference error

console.log() //global scope, can access anywhere
setTimeout() //call a function after a delay
clearTimeout();

setInterval() // repeatedly call a function after a given delay
clearInterval() // stop function from being called repeatedly

//for browsers: 
window.console.log //or (nextline)
console.log

window.setTimeout
window.clearInterval

var message = '';
window.message
//Object that node uses is global
globalThis.console.log
globalThis.setTimeout
//variables defined are not added to the global object
//only scoped to app.js because of node's modular system
console.log(global.message) //console will show 'undefined'
