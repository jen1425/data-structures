var Stack = function() {
  var stack = {};
  _.extend(stack, stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};
stackMethods.pop = function() {
  var value = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return value;
};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

