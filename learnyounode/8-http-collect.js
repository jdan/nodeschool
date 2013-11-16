var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  var data = '';
  var contentLength = 0;

  response.on('data', function (chunk) {
    contentLength += Buffer.byteLength(chunk.toString());
    data += chunk.toString();
  });

  response.on('end', function () {
    console.log(contentLength);
    console.log(data);
  });
});
