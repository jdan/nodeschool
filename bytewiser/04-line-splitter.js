var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  var i, lastIndex = 0;
  var buffers = [];

  for (i = 0; i < data.length; i++) {
    if (data[i] === 10) {
      buffers.push(data.slice(lastIndex, i));
      lastIndex = i+1;
    }
  }

  buffers.push(data.slice(lastIndex, i));

  for (i = 0; i < buffers.length; i++) {
    console.log(buffers[i]);
  }
});
