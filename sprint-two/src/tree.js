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
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === true) {
      return true;
    }
  }

  return false;

};

treeMethods.remove = function(target) {
  //check if this value = target
  if (this.value === target) {
    //if so, delete the tree
    delete this;
  } else {
  // else, itterate through children
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        this.children.splice(i, 1);
      } else {
        this.children[i].remove(target);        
      }
    }
  }
    //call remove on each child

};


/*
 * Complexity: .addChild O(1) .contains O(n)
 */

