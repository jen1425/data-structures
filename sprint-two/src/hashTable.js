

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var existingValue;
  if (this._storage.get(index) === undefined) {
    existingValue = [];
  } else {
    existingValue = this._storage.get(index);
  }
  var replaced = false;
  for (var i = 0; i < existingValue.length; i++) {
    if (existingValue[i][0] === k) {
      existingValue[i][1] = v;
      replaced = true;
    }
  }
  if (!replaced) {
    existingValue.push([k, v]);
  }  
  this._storage.set(index, existingValue);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueAtIndex = this._storage.get(index);
  for (var i = 0; i < valueAtIndex.length; i++) {
    if (valueAtIndex[i][0] === k) {
      return valueAtIndex[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueAtIndex = this._storage.get(index);
  for (var i = 0; i < valueAtIndex.length; i++) {
    if (valueAtIndex[i][0] === k) {
      valueAtIndex.splice(i, 1);
      this._storage.set(index, valueAtIndex);
    }
  }
};



/*
 * Complexity: insert = O(1), retrieve = O(1), remove = O(1)
 */


