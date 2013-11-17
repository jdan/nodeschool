var fs = require('fs');
var level = require('level');     // npm install level
var through = require('through'); // npm install through
var split = require('split');     // npm install split
var db = level(process.argv[2]);
var file = process.argv[3];

db.on('ready', function () {
  var stream = fs.createReadStream(file);
  var batch = db.batch();

  stream
    .pipe(split())
    .pipe(through(function (data) {
      var line = data.split(',');
      switch (line[0]) {
        case 'put':
          batch.put(line[1], line[2]);
          break;
        case 'del':
          batch.del(line[1]);
          break;
        default:
          throw 'Invalid expression: ' + line[0];
      }
    }))
    .pipe(through(null, function () {
      batch.write();
    }));
})
