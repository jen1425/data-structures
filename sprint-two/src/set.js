var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var itemKey = JSON.stringify(item);
  this._storage[itemKey] = item;
};

setPrototype.contains = function(item) {
  var itemKey = JSON.stringify(item);
  return (this._storage.hasOwnProperty(itemKey));
};

setPrototype.remove = function(item) {
  var itemKey = JSON.stringify(item);
  delete this._storage[itemKey];
};



/*
 * Complexity: add = O(1), contains = O(1), remove = O(1)
 */
