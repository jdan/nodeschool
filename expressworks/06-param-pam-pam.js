var crypto = require('crypto');
var express = require('express');
var app = express();

app.use(express.urlencoded());

app.put('/message/:id', function(req, res) {
  res.end(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + req.params.id)
    .digest('hex'));
});
app.listen(process.argv[2]);
