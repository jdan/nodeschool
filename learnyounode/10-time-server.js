var net = require('net');

function pad(str) {
  if (str.length == 1) {
    return '0' + str;
  } else {
    return str;
  }
}

net.createServer(function (socket) {
  var date = new Date();

  var year = date.getFullYear();
  var month = pad(date.getMonth() + 1);
  var day = pad(date.getDate());
  var hours = pad(date.getHours());
  var minutes = pad(date.getMinutes());

  socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
}).listen(8000);
