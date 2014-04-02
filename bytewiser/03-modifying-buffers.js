process.stdin.once('data', function (data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 46) {
      data.write('!', i);
    }
  }

  console.log(data);
});
