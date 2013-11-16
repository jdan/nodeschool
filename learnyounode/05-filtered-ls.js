var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
var regex = new RegExp("\\." + ext + "$");

fs.readdir(path, function (err, files) {
  if (err) return console.log();

  files.forEach(function (file) {
    if (regex.test(file)) {
      console.log(file);
    }
  });
});
