 

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
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
  this._count++;
  if (this._count > this._limit * .75) {
    this._limit = this._limit * 2;
    this.resize(this._limit);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueAtIndex = this._storage.get(index);
  if (valueAtIndex !== undefined) {
    for (var i = 0; i < valueAtIndex.length; i++) {
      if (valueAtIndex[i][0] === k) {
        return valueAtIndex[i][1];
      }
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
      this._count--;
      if (this._count < this._limit * .25) {
        this._limit = this._limit / 2;
        this.resize(this._limit);
      }
    }
  }
};

HashTable.prototype.resize = function(limit) {
  this._count = 0;
  var tempStorage = [];
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        tempStorage.push(bucket[i]);
      }
    }
  });
  this._storage = LimitedArray(limit);
  for (var i = 0; i < tempStorage.length; i++) {
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }
}

/*
 * Complexity: insert = O(1), retrieve = O(1), remove = O(1)
 */


