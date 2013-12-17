var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });
var data = require(process.argv[3]);
var batch, i, row;

console.log(data);

batch = db.batch();

for (i = 0; i < data.length; i++) {
  row = data[i];

  if (row.type === "repo") {
    batch.put(row.user + '!' + row.name, JSON.stringify(row));
  } else if (row.type === "user") {
    batch.put(row.name, JSON.stringify(row));
  }
}

batch.write();
