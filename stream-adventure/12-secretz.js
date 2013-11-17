var zlib = require('zlib');
var crypto = require('crypto');
var tar = require('tar');         // npm install tar
var through = require('through'); // npm install through
var algo = process.argv[2];
var pass = process.argv[3];

var decipherStream = crypto.createDecipher(algo, pass);
var unzipStream = zlib.createGunzip();
var parser = tar.Parse();

process.stdin.pipe(decipherStream).pipe(unzipStream).pipe(parser);

parser.on('entry', function (e) {
  var hashStream = crypto.createHash('md5', { encoding: 'hex' });

  if (e.type == 'File') {
    e.pipe(hashStream).pipe(through(function (buf) {
      this.queue(buf.toString() + ' ' + e.path + '\n');
    })).pipe(process.stdout);
  }
});
