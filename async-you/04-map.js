var http = require('http');
var async = require('async');

async.map(process.argv.slice(2), function (item, done) {

  http.get(item, function (res) {
    var body = '';

    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('error', function (err) {
      done(err);
    });

    res.on('end', function () {
      done(null, body);
    });
  });

}, function (err, results) {
  if (err) return console.log(err);
  console.log(results);
});

