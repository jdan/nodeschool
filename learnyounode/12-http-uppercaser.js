var http = require('http');

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    req.on('data', function (chunk) {
      res.write(chunk.toString().toUpperCase());
    });

    req.on('end', res.end);
  }
}).listen(8000);
