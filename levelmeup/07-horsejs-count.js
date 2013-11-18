module.exports = function (db, day, callback) {
  var stream = db.createReadStream({ start: day });
  var count = 0;

  stream.on('data', function (value) {
    count++;
  });

  stream.on('error', function (err) {
    callback(err);
  });

  stream.on('end', function () {
    callback(null, count);
  });
}
