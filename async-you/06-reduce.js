var async = require('async');
var http = require('http');

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
  http.get(process.argv[2] + '?number=' + item, function (res) {
    var body = '';

    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      callback(null, memo + parseInt(body));
    });
  });
}, function (err, result) {
  if (err) return console.log(err);

  console.log(result);
});
