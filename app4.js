const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('TotalMemory ' + totalMemory);

//Template string
// ES6 / ES2015 : ECMAScript 6 (2015) --> Specification for what features are avaiable in javascript

//doesn't require concatenation
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free MEmory ${freeMemory}`)