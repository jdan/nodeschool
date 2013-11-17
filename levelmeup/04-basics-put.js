var level = require('level');   // npm install level
var db = level(process.argv[2]);

var obj = JSON.parse(process.argv[3]);
var keys = Object.keys(obj);

function put(index) {
  if (index >= keys.length) return;
  db.put(keys[index], obj[keys[index]], function (err) {
    if (err) throw err;
  });

  put(index+1);
}

put(0);
