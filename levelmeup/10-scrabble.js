exports.init = function (db, words, callback) {
  var i, operations = [];

  for (i = 0; i < words.length; i++) {
    operations.push({
      type: 'put',
      key: words[i].length + words[i],
      value: words[i]
    });
  }

  db.batch(operations, callback);
};

exports.query = function (db, word, callback) {
  var length = word.length;
  var words = [];
  var stream = db.createReadStream({
    start: length + word.replace(/\*/g, ''),
    end: length + word.replace(/\*/g, '') + '\xff'
  });

  stream.on('data', function (data) {
    words.push(data.value);
  });

  stream.on('error', function (err) {
    callback(err);
  });

  stream.on('end', function () {
    callback(null, words);
  });
};
