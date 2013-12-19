module.exports = function logger(namespace) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    console.log.apply(null, [namespace].concat(args));
  };
};
