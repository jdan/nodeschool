var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var parse = url.parse(req.url, true);
  var date = new Date(parse.query.iso);

  switch (parse.pathname) {
    case '/api/parsetime':
      res.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }));
    case '/api/unixtime':
      res.end(JSON.stringify({
        unixtime: date.getTime()
      }));
    default:
      res.end(JSON.stringify({
        error: 'No matching route'
      }));
  }
}).listen(8000);
