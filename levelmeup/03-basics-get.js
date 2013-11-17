var level = require('level');   // npm install level
var db = level(process.argv[2]);

function search(index) {
  if (index > 99) return;

  var key = 'gibberish' + index;
  db.get(key, function (err, value) {
    if (!err) console.log(key + '=' + value);
    search(index + 1);
  });
}

search(0);
