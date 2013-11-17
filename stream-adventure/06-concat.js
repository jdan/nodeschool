var concat = require('concat-stream');  // npm install concat-stream

process.stdin.pipe(concat(function (complete) {
  console.log(complete.toString().split('').reverse().join(''));
}));
