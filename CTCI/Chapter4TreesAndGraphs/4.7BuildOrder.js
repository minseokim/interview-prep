/*
With a list of projects and a list of dependencies(Pairs where first project is dependent on second project)
All of a project's dependencies must be built before the next project is.
Find a build order that will allow the projects to be built. If there is no valid build order,
return an error.
*/

"use strict";

const GraphNode = require("../../DataStructures/Graph");

const projectOne = ["a", "b", "c", "d", "e", "f"];
const dependency = [["d", "a"], ["b", "f"], ["d", "b"], ["a", "f"], ["c", "d"]];

const buildOrder = function(projects, dependencies) {
  const Graph = new GraphNode();

  //Add vertex
  for (let node of projectOne) {
    Graph.addVertex(node);
  }

  //Add edge
  for (let edge of dependency) {
    Graph.addEdge(edge[0], edge[1]);
  }

  //Topological Sort
  const buildOrder = [];
  const visited = new Set();

  const build = vertex => {
    buildOrder.push(vertex);
  };

  const vertices = Object.keys(Graph.vertices);

  for (let vertex of vertices) {
    if (!visited.has(vertex)) {
      Graph.dfs(vertex, build, visited);
    }
  }

  return buildOrder;
};

console.log(buildOrder(projectOne, dependency));
