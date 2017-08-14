/*
A graph is a valid tree if it :
1. is acyclic, and is connected
2. The # of edges are n-1 where there are n vertices.

To check for this, we can do a simple DFS, doing cycle-detection and checking if the graph is fully connected

Make sure to DFS only once(Tree nodes should be all reachable with one DFS)
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  //Build adjacency list first(Array of arrays implementation)
  const adjacencyList = new Array(n);

  for (let i = 0; i < adjacencyList.length; i++) {
    adjacencyList[i] = [];
  }

  for (let edge of edges) {
    let startNode = edge[0];
    let endNode = edge[1];

    adjacencyList[startNode].push(endNode);
    adjacencyList[endNode].push(startNode);
  }

  const visited = new Array(n).fill(false);

  const detectCyclesDFS = (node, parent) => {
    //mark as visited
    visited[node] = true;

    for (let nextNeighbor of adjacencyList[node]) {
      //if we see a nextNeighbor that's NOT a parent that we've ALREADY visited, then we know we have a cycle.
      if (
        (visited[nextNeighbor] && parent !== nextNeighbor) ||
        (!visited[nextNeighbor] && detectCyclesDFS(nextNeighbor, node))
      ) {
        return true;
      }
    }
    return false;
  };

  //Only call DFS Once, because it's a tree!
  if (detectCyclesDFS(0, -1)) return false;

  //check if all are connected
  return visited.every(isVisited => {
    return isVisited;
  });
};

console.log(validTree(4, [[0, 1], [2, 3]]));
