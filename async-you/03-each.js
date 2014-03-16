var http = require('http');
var async = require('async');

async.each(process.argv.slice(2), function (item, done) {

  http.get(item, function (res) {
    res.on('end', done);
    res.on('error', done);
  }).on('error', done);

}, function (err) {
  if (err) console.log(err);
});

