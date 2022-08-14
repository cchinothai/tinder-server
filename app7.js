const http = require('http')

//this server is an EventEmitter
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses/'){
        //converts array to string using JSON syntax and write to response
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

//Register a listener / handler

/*
server.on('connection', (socket) =>{
    console.log('New connection...')
}) // 'connection' found in the documentation
*/

server.listen(3000); //a port as the parameter

console.log('Listening on port 3000...');
 