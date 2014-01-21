function curryN(fn, n) {
  if (n === undefined) {
    n = fn.length;    // use the arity of fn
  }

  if (n == 0) {
    return fn();      // invoke fn
  } else {
    // curry the function bound to an argument
    return function (arg) {
      return curryN(fn.bind(null, arg), n-1);
    };
  }
}

module.exports = curryN;
