var fs = require('fs');

module.exports = function (path, ext, callback) {
  var regex = new RegExp("\\." + ext + "$");
  var fileList = [];

  fs.readdir(path, function (err, files) {
    if (err) return callback(err);

    files.forEach(function (file) {
      if (regex.test(file))
        fileList.push(file);
    });

    return callback(null, fileList);
  });
}
