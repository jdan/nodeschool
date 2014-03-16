var async = require('async');
var http = require('http');

var count = 0;
var string = '';

async.whilst(
  function () {
    return string.trim() !== 'meerkat';
  },

  function (callback) {
    count++;

    http.get(process.argv[2], function (res) {
      var body = '';

      res.on('data', function (chunk) {
        body += chunk.toString();
      });

      res.on('end', function () {
        string = body;
        callback();
      });
    });
  },

  function (err) {
    if (err) return console.log(err);
    console.log(count);
  }
);


