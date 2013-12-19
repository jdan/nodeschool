module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (memo, curr) {
    return memo.concat(fn(curr));
  }, []);
};
