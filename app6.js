//when each first letter of a word is upper case, indicates a class
const EventEmitter = require('events');
//emitter is an object (specification / actual instance of EventEmitter)
//const emitter = new EventEmitter;

const Logger  = require('./logger');
const logger = new Logger();

/*
//Register a listener (must do before raising event)
emitter.on('messageLogged',function(arg){ //e, eventArg, naming doesn't matter
    console.log('Listener called', arg)
});
*/

//Arrow function alternative for registering a listener
//listener is only registered with the event emitter present
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

logger.log('message');


