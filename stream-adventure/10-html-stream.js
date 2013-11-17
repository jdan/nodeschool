var trumpet = require('trumpet')(); // npm install trumpet
var through = require('through');   // npm install through
var transform = through(function (buf) {
  this.queue(buf.toString().toUpperCase());
});

// stream OUTPUT => body of matched selector
// stream INPUT  <= text to replace selected content
var stream = trumpet.select('.loud').createStream();
stream.pipe(transform).pipe(stream);

process.stdin.pipe(trumpet).pipe(process.stdout);
