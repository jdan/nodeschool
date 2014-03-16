var async = require('async');
var http = require('http');

function httpGetFromArgv(i) {
  return function (done) {
    http.get(process.argv[i], function (res) {
      var body = '';

      res.on('data', function (chunk) {
        body += chunk.toString();
      });

      res.on('end', function () {
        done(null, body);
      });

      res.on('error', function (err) {
        done(err);
      });
    });
  };
}

async.series({
  requestOne: httpGetFromArgv(2),
  requestTwo: httpGetFromArgv(3)
}, function (err, results) {
  console.log(results);
});

