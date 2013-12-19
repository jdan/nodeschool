function Spy(target, method) {
  var self = this;
  this.count = 0;
  var original = target[method];
  target[method] = function () {
    self.count++;
    return original.apply(target, arguments);
  };
  return this;
}

module.exports = Spy;
