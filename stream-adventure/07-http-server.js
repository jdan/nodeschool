var http = require('http');
var through = require('through');   // npm install through
var transform = through(function (buf) {
  this.queue(buf.toString().toUpperCase());
});

http.createServer(function (req, res) {
  if (req.method == 'POST')
    req.pipe(transform).pipe(res);
}).listen(process.argv[2]);
