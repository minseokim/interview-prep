/*
Object-Oriented Adjacency List for Graphs
*/

'use strict';

const BSTNode = require('./BinarySearchTree');

/*
Graph class
Undirected, using BST adjacency list
*/

function Graph() {
  //hash table to map values with index
  this.vertices = {};
  //array to store root Nodes of edge BST's
  this.edges = [];

  this._vertexSize = 0;
  this._edgeSize = 0;
};

Graph.prototype.addNode = function(val) {
  if (!this.vertices[val]) {
    this.vertices[val] = this._vertexSize;
  }
  this._vertexSize++;
};

Graph.prototype.contains = function(val) {
  return !!this.vertices[val];
};


Graph.prototype.hasEdge = function(fromNode, toNode) {

  let fromNodeIndex = this.vertices[fromNode];
  console.log('fromNodeIndex :', fromNodeIndex);
  //set index of fromNode to null
  if (fromNodeIndex === undefined || fromNodeIndex === null) {
    throw new Error("Node doesn't exist");
  }

  //check if edges exist
  let fromNodeEdgesRoot = this.edges[fromNodeIndex];

  console.log('EDGEROOT :', fromNodeEdgesRoot);

  if (!fromNodeEdgesRoot) {
    throw new Error("Edge doesn't exist");
  } else {
    return fromNodeEdgesRoot.lookup(toNode);
  }
};

Graph.prototype.removeNode = function(fromNode, toNode) {
  let fromNodeIndex = this.vertices[fromNode];
  //set index of fromNode to null
  if (fromNodeIndex === undefined || fromNodeIndex === null) {
    return "Already Removed";
  } else {
    this.vertices[fromNodeIndex] = null;
  }

  //delete edges
  let fromNodeEdgesRoot = this.edges[fromNodeIndex];

  if (!fromNodeEdgesRoot) {
    return "No edges to delete!";
  } else {
    fromNodeEdgesRoot.delete(fromNode);
  }

  this._vertexSize--;
  this._edgeSize--;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  //get index of fromNode
  const fromNodeIndex = this.vertices[fromNode];

  //check if it's undefined because 0 is an edge case
  if (fromNodeIndex === undefined || fromNodeIndex === null) throw new Error("Trying to add edges between nodes that don't exist");

  const fromNodeEdgesRoot = this.edges[fromNodeIndex];
  // console.log('Index :', fromNodeIndex);
  // console.log('Adding :', fromNode);
  // console.log('Current ROOT :', fromNodeEdgesRoot);
  // console.log('---------------------------------');

  //if it doesn't exist, add toNode as root node of new BST
  if (!fromNodeEdgesRoot) {
    this.edges[fromNodeIndex] = new BSTNode(fromNode);
    this.edges[fromNodeIndex].insert(toNode);
  } else {
    //if it exists, simply insert it as a node on existing BST
    this.edges[fromNodeIndex].insert(toNode);
  }

  this._edgeSize++;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  //get index of fromNode
  const fromNodeIndex = this.vertices[fromNode];

  //check if it's undefined because 0 is an edge case
  if (fromNodeIndex === undefined || fromNodeIndex === null) throw new Error("Trying to remove edges between nodes that don't exist");

  const fromNodeEdgesRoot = this.edges[fromNodeIndex];

  //if it doesn't exist, add toNode as root node of new BST
  if (!fromNodeEdgesRoot) {
    throw new Error("fromNode doesn't exist!")
  } else {
    //if it exists, simply insert it as a node on existing BST
    this.edges[fromNodeIndex].delete(fromNode);
  }

  this._edgeSize--;
};

// Graph.prototype.forEachNode = function(cb) {

// };

const testGraph = new Graph();
testGraph.addNode("A");
testGraph.addNode("B");
testGraph.addEdge("A", "B");
console.log(testGraph.edges);
testGraph.addNode("C");
testGraph.addEdge("B", "C");
// testGraph.addEdge("C", "A");
console.log(testGraph.edges);
// console.log(testGraph.hasEdge("A", "B"));
console.log(testGraph.hasEdge("A", "C"));
// console.log(testGraph);