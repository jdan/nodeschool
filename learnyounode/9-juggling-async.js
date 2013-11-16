var http = require('http');
var urls = process.argv.slice(2);

function get(urls) {
  if (!urls.length) return;

  http.get(urls[0], function (response) {
    var data = '';

    response.on('data', function (chunk) {
      data += chunk.toString();
    });

    response.on('end', function () {
      console.log(data);
      get(urls.slice(1)); // maybe populate an array for better async goodies
    });
  });
}

get(urls);
