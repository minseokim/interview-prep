/*
Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
*/

const GraphNode = require("../../DataStructures/Graph");

/*
With BFS : Can find shortest path bewteen the two nodes.
We use a queue, and a visited set to keep track of nodes visited. At each point if the node we're examining next is the destination node, we return true.
*/

const testGraph = new GraphNode();
testGraph.addNode("A");
testGraph.addNode("B");
testGraph.addEdge("A", "B");
testGraph.addNode("D");
testGraph.addNode("C");
testGraph.addEdge("B", "C");
testGraph.addEdge("C", "A");
testGraph.addEdge("A", "D");

/*Input : references to sourceNode, and destinationNode, and graph*/

const routeBFS = function(sourceNode, destinationNode) {
  const visited = new Set();
  const queue = [];
  let current;
  let neighbors;

  queue.push(sourceNode);
  visited.add(sourceNode);

  while (queue.length > 0) {
    current = queue.shift();

    neighbors = current.getNeighbors();

    for (let nextNeighbor of neighbors) {
      if (!visited.has(nextNeighbor)) {
        if (nextNeighbor === destinationNode) {
          return true;
        } else {
          queue.push(nextNeighbor);
          visited.add(nextNeighbor);
        }
      }
    }
  }

  return false;
};

const routeDFS = function(sourceNode, destinationNode) {
  const visited = new Set();
  let current;
  let neighbors;

  const dfsRecurse = function(node) {
    if (node === destinationNode) {
      return true;
    }

    visited.add(node);

    neighbors = node.getNeighbors();

    for (let nextNeighbor in neighbors) {
      if (!visited.has(nextNeighbor)) {
        //if any of the recursive calls return true, return true immediately.
        if (dfsRecurse(nextNeighbor)) {
          return true;
        }
      }
    }

    return false;
  };

  return dfsRecurse(sourceNode);
};
