function getDependencies(tree) {
  var dependencyMap = {};
  var dependencies = [];

  (function recurse(tree) {
    for (var dependency in tree.dependencies) {
      dependencyMap[dependency + '@' + tree.dependencies[dependency].version] = 1;
      recurse(tree.dependencies[dependency]);
    }
  })(tree);

  for (var key in dependencyMap) {
    dependencies.push(key);
  }

  return dependencies.sort();
}

module.exports = getDependencies;
