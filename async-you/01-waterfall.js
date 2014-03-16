var async = require('async');
var fs = require('fs');
var http = require('http');

async.waterfall([
  function (cb) {
    fs.readFile(process.argv[2], 'utf-8', cb);
  },

  function (url, cb) {
    http.get(url, function (res) {
      var body = '';

      res.on('data', function (chunk) {
        body += chunk.toString();
      });

      res.on('end', function () {
        cb(body);
      });
    });
  }
], function (data) {
  console.log(data);
});
