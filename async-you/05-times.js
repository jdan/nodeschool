var http = require('http');
var async = require('async');

async.times(5, function (n, next) {
  var req = http.request({
    hostname: process.argv[2],
    port: process.argv[3],
    method: 'POST',
    path: '/users/create'
  });

  req.write(JSON.stringify({ user_id: n }));
  req.end();
}, function (err, results) {
  if (err) return console.log(err);

  http.get('http://' + process.argv.slice(2).join(':') + '/users', function (res) {
    var body = '';

    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      console.log(body);
    });
  });

});
