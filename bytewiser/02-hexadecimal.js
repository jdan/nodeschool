var bytes = process.argv.slice(2).map(function (item) {
  return parseInt(item);
});

var buffer = new Buffer(bytes);
console.log(buffer.toString('hex'));

