/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

//BFS
var countComponents = function(n, edges) {
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

  //initialize connectedCount
  let connectedCount = 0;
  let queue;

  //Iterate over all vertices
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      connectedCount++;
      //re-initialize queue for every set of BFS
      let queue = [];
      queue.push(i);
      //BFS
      while (queue.length > 0) {
        let currentVertex = queue.shift();
        //mark it as visited
        visited[currentVertex] = true;
        //get neighbors
        for (let nextNeighbor of adjacencyList[currentVertex]) {
          if (!visited[nextNeighbor]) {
            queue.push(nextNeighbor);
          }
        }
      }
    }
  }

  return connectedCount;
};

//DFS Approach
var countComponents = function(n, edges) {
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
  let connectedCount = 0;

  const dfs = vertex => {
    //mark node as visited
    visited[vertex] = true;

    for (let nextNeighbor of adjacencyList[vertex]) {
      if (!visited[nextNeighbor]) {
        dfs(nextNeighbor);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      connectedCount++;
      dfs(i);
    }
  }

  return connectedCount;
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));
