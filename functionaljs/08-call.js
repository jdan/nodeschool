module.exports = function duckCount() {
  return Array.prototype.reduce.call(arguments, function (memo, curr) {
    if (Object.prototype.hasOwnProperty.call(curr, 'quack')) {
      return ++memo;
    } else {
      return memo;
    }
  }, 0);
};
