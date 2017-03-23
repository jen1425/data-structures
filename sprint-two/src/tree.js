var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var wasFound = false;

  var check = function(target) {
    if (this.value === target) {
      wasFound = true;
    }
    _.each(this.children, function(child) {
      check(child);
    });
  };
  check(target);
  return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
