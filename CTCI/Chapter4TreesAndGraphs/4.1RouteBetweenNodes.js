/*
Given directed graph, design an algorithm to find out if there's a route between two nodes
*/

/*
BFS or DFS
  BFS Can be used to find shortest path.
*/

const GraphNode = require('../../DataStructures/Graph');


//DFS
const depthFirstSearch = (root, destination, visitedSoFar) => {
  //base case
  if (root === null) return;

  //visitedSoFar Hash Set to keep track of visited nodes
  visitedSoFar = visitedSoFar || new Set();

  //visit the root by adding its data to hash set
  visitedSoFar.add(root.data);

  //list of neighbors from root
  let neighbors = root.getNeighbors();

  //check each neighbor
  for (var i = 0; i < neighbors.length; i++) {
    let currentNeighbor = neighbors[i];

    if (currentNeighbor.data === destination) {
      return true;
    }

    if (!visitedSoFar.has(currentNeighbor)) {
      depthFirstSearch(currentNeighbor, destination, visitedSoFar);
    }
  }

  return false;
};


//BFS
const breadthFirstSearch = (start, end) => {
  if (start === end) return true;

  const queue = [];

};

const testGraph = new GraphNode();
testGraph.addNode("A");
testGraph.addNode("B");
testGraph.addEdge("A", "B");
testGraph.addNode("D");
testGraph.addNode("C");
testGraph.addEdge("B", "C");
testGraph.addEdge("C", "A");
testGraph.addEdge("A", "D");