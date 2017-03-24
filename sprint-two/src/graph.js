

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.indexOf(node) !== -1) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    if ( this.edges[node] !== undefined) {
      for (var i = 0; i < this.edges[node].length; i++) {
        this.removeEdge(this.edges[node][i], node);
      }
    }
    delete this.edges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.edges[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] === undefined) {
    this.edges[fromNode] = [toNode];
  } else {
    this.edges[fromNode].push(toNode);
  }
  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = [fromNode];
  } else {
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
  this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node);
  });
};

/*
 * Complexity: addNode = O(1), contains = O(n), removeNode = O(n), hasEdge = O(n), addEdge = O(1), removeEdge = O(n), 
 forEachNode = O(n) 
 */


