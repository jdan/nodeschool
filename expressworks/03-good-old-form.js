var path = require('path');
var express = require('express');
var jade = require('jade');
var app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.use(express.urlencoded());

app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);
