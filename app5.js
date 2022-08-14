const fs = require('fs');
// always use asynchrononus methods
/*
const files = fs.readdirSync('./');
console.log(files);
*/

fs.readdir('./', function(err, files) {
    if(err) console.log('Error',err);
    else console.log('Result',files)
});

/* Recap: in order to work with files/directories in node, require fs and use asynchronous methods
*/