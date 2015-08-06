'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var psi = require('psi');
var lt = require('localtunnel');
var app = express();
var port = process.env.PORT || 7777;

app.get('/', home);
app.get('/insights', insights);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function insights (req, res) {
  lt(port, function(err, tunnel) {
    psi(tunnel.url, function(err, data) {
      var response = {
        resources: {
          css: data.pageStats.numberCssResources,
          js: data.pageStats.numberJsResources,
          hosts: data.pageStats.numberHosts,
          total: data.pageStats.numberResources,
        },
      };

      res.json(response);
    });
  })
}
