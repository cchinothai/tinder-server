const EventEmitter = require('events');
//const emitter = new EventEmitter;

//create a module with login messages
//use remote logging services to log messages
//certain websites provide logging as a service:
//they give us a url and we can send a http request
//url is implementation detail, other modules do not to know anything about this

//console.log(__filename); // shows complete file name
//console.log(__dirname); // shows path to directory that contains the module
var url = 'http://mylogger.io/log';

//extends allows logger to have all the functionality that is defined in EventEmitter
class Logger extends EventEmitter{
        log(message) {
        //Send an HTTP request
        console.log(message);
    
        //Raise an event, but does not have a listener, refer to app6.js
        //can send multiple values about an event, but better to encapsulate values inside an object
        //emitter.emit('messageLogged', { id:1, url:'http://'}); // use to raise an event (signalling that event has happened)
        this.emit('messageLogged', {id: 1, url:'http://' });
    }
}

 

//object that we export has a single method called log
///module.exports.log = log;
module.exports = Logger;

//to export url

//implementation detail
//module.exports.endPoint = url;