/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]

 */
var canFinish = function(numCourses, prerequisites) {
  const vertices = new Map();
  for (let edge of prerequisites) {
    let start = edge[0];
    let end = edge[1];
    if (!vertices.has(start)) {
      vertices.set(start, new Set());
    }
    vertices.get(start).add(end);
  }

  const visited = new Array(numCourses);
  const onStack = new Array(numCourses);
  visited.fill(false);
  onStack.fill(false);

  const dfs = (vertices, currentVertex, visited, onStack) => {
    //mark currentVertex on onStack
    onStack[currentVertex] = true;

    visited[currentVertex] = true;

    let neighbors = vertices.get(currentVertex);
    if (neighbors) {
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          if (!dfs(vertices, neighbor, visited, onStack)) {
            return false;
          }
        }

        if (onStack[neighbor]) {
          return false;
        }
      }
    }

    onStack[currentVertex] = false;
    return true;
  };

  //get all vertices, and invoke dfs.
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (!dfs(vertices, i, visited, onStack)) {
        return false;
      }
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
