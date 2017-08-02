/*
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
*/

var findOrder = function(numCourses, prerequisites) {
  /*
    Do a topological sort since this is a directed graph.
    We'll use DFS, and detect a cycle.
    Build a directed graph where [1, 0] represents an edge going from vertex 1 to vertex 0.
    This represents is that course 0 needs to be taken before course 1.

    The way top.sort works is we look for a sink vertex, a vertex that has no outgoing edges. So this is the 'destination vertex'. in our context this means it's a class that has no prerequisites. So we can easily find this by doing DFS, and if we've reached the end of our traversal, we know that class is the one we're looking for. So we simply add it to the build order.

    visited []
    onStack []
    buildOrder []
  */

  //First transform data into an adjacency list by using a map to map vertices, and hash set to hold the edges.
  const verticesMap = new Map();

  //add all vertices
  for (let i = 0; i < numCourses; i++) {
    verticesMap.set(i, new Set());
  }

  //add all edges
  for (let edge of prerequisites) {
    let fromVertex = edge[0];
    let endVertex = edge[1];
    verticesMap.get(fromVertex).add(endVertex);
  }

  const visited = new Array(numCourses).fill(false);
  const onStack = new Array(numCourses).fill(false);

  const buildOrder = [];
  let hasCycle = false;

  const dfs = currentVertex => {
    //mark it as visited
    visited[currentVertex] = true;
    //add it to the stack.
    onStack[currentVertex] = true;
    //get neighbors
    const neighbors = verticesMap.get(currentVertex);

    if (neighbors && neighbors.size > 0) {
      for (let neighbor of neighbors) {
        if (!visited[neighbor] && !hasCycle) {
          dfs(neighbor);
        }

        if (onStack[neighbor]) {
          hasCycle = true;
          return;
        }
      }
    }
    //remove from onStack
    onStack[currentVertex] = false;

    //add to buildOrder(we've hit the sink vertex)
    buildOrder.push(currentVertex);
  };

  for (let currentVertex = 0; currentVertex < numCourses; currentVertex++) {
    if (!visited[currentVertex]) {
      dfs(currentVertex);
    }
  }

  return hasCycle === true ? [] : buildOrder;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const verticesMap = new Map();

  //add all edges
  for (let edge of prerequisites) {
    let fromVertex = edge[0];
    let endVertex = edge[1];
    if (!verticesMap.get(fromVertex)) {
      verticesMap.set(fromVertex, new Set());
    }
    verticesMap.get(fromVertex).add(endVertex);
  }

  const visited = new Array(numCourses);
  const onStack = new Array(numCourses);
  visited.fill(false);
  onStack.fill(false);

  const buildOrder = [];
  let hasCycle = false;

  const dfs = currentVertex => {
    if (onStack[currentVertex]) {
      hasCycle = true;
      return;
    }

    if (visited[currentVertex]) {
      return;
    }
    //mark it as visited
    visited[currentVertex] = true;
    //add it to the stack.
    onStack[currentVertex] = true;
    //get neighbors
    const neighbors = verticesMap.get(currentVertex) || [];

    for (let neighbor of neighbors) {
      dfs(neighbor);
    }
    //remove from onStack
    onStack[currentVertex] = false;

    //add to buildOrder(we've hit the sink vertex)
    buildOrder.push(currentVertex);
  };

  for (let currentVertex = 0; currentVertex < numCourses; currentVertex++) {
    dfs(currentVertex);
  }

  return hasCycle === true ? [] : buildOrder;
};

console.log(findOrder(2, [[0, 1]]));
