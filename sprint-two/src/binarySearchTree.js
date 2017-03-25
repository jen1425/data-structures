 var BinarySearchTree = function(value) {

  var bst = Object.create(BinarySearchTree.prototype);

  bst.left = null;
  bst.right = null;
  bst.value = value;

  return bst;

};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
    this.right.insert(value);
    }
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
    this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
}

BinarySearchTree.prototype.breadthFirstLog = function() {

  var nodeQueue = [];
  var valueList = [];

  nodeQueue.push(this);
  while (nodeQueue.length !== 0) { 
    valueList.push(nodeQueue[0].value);
    if (nodeQueue[0].left !== null) {
      nodeQueue.push(nodeQueue[0].left);
    }

    // if right child is not null then push right child onto nodeQueue
    if (nodeQueue[0].right !== null) {
      nodeQueue.push(nodeQueue[0].right);
    }
    nodeQueue.shift();
  }
  return valueList;
}
/*
 * Complexity: insert O(log n), contains O(log n), depthFirstLog O(n)
 */
