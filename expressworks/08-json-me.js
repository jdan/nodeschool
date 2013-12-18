var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function (err, data) {
    res.json(JSON.parse(data));
    res.end();
  });
});
app.listen(process.argv[2]);
