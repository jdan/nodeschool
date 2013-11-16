var filter = require('./filtered-ls');
var path = process.argv[2];
var ext = process.argv[3];

filter(path, ext, function (err, files) {
  if (err) return console.log(err);

  files.forEach(function (file) {
    console.log(file);
  });
});
