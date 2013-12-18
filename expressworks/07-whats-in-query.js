var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  res.send(req.query);
  res.end();
});
app.listen(process.argv[2]);
