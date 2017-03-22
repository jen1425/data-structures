var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var value = this.storage[this.size() -1];
  delete this.storage[this.size() -1];
  return value;
};

