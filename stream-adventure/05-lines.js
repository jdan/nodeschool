var through = require('through'); // npm install through
var split = require('split');     // npm install split
var count = 0;
var transform = through(function (buf) {
  if (count++ % 2 != 0) {
    this.queue(buf.toString().toUpperCase());
  } else {
    this.queue(buf.toString().toLowerCase());
  }

  this.queue('\n');
});

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);
