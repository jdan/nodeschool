module.exports = function (db, day, callback) {
  var stream = db.createReadStream({ start: day, end: day + '\xff' });
  var tweets = [];

  stream.on('data', function (data) {
    tweets.push(data.value);
  });

  stream.on('error', function (err) {
    callback(err);
  });

  stream.on('end', function () {
    callback(null, tweets);
  });
}
