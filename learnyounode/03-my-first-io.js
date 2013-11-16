var fs = require('fs');
var file = process.argv[2];

var contents = fs.readFileSync(file).toString();
console.log(contents.split('\n').length - 1);   // off-by-one
