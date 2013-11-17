var through = require('through');   // npm install through
var transform = through(function (buf) {
  this.queue(buf.toString().toUpperCase());
});

process.stdin.pipe(transform).pipe(process.stdout);
