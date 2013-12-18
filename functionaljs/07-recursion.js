module.exports = function reduce(arr, fn, initial) {
  return (function helper(i, memo) {
    if (i === arr.length) {
      return memo;
    } else {
      return helper(i+1, fn(memo, arr[i], i, arr));
    }
  })(0, initial);
};
