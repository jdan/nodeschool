var fs = require('fs');
var http = require('http');
var file = process.argv[2];

http.createServer(function (req, res) {
  var stream = fs.createReadStream(file);
  stream.pipe(res);
}).listen(8000);
