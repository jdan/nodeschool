var level = require('level');   // npm install level
var db = level(process.argv[2]);
var stream = db.createReadStream();

stream.on('data', function (data) {
  console.log(data.key + '=' + data.value);
});
