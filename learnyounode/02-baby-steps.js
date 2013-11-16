console.log(process.argv.slice(2).reduce(function (memo, item) {
  return memo + +item;
}, 0));
