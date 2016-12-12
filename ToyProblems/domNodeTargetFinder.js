// <div>
//     <div id="dom1">
//         <div></div>
//         <div></div>
//         <div>
//             <div>
//                 <div></div>
//             </div>
//             <div>
//                 <div id="node1">this is the node</div>
//                 <div></div>
//             </div>
//         </div>
//         <div>
//             <div></div>
//         </div>
//     </div>

//     <div id="dom2">
//         <div></div>
//         <div></div>
//         <div>
//             <div>
//                 <div></div>
//             </div>
//             <div>
//                 <div id="result">this is the other node</div>
//                 <div></div>
//             </div>
//         </div>
//         <div>
//             <div></div>
//         </div>
//     </div>
// </div>

// 'use strict';

let tree1 = document.getElementById("dom1");
let tree2 = document.getElementById("dom2");
let target = document.getElementById("node1");
let result = document.getElementById("result");

const getPath = function(rootNode, target) {
  let path = [];
  let currentNode = target;
  //traverse upwards, storing index of currentNode in its parent's childNodes each time
  while (currentNode != rootNode) {
    let parentNode = currentNode.parentNode;
    let index = Array.prototype.indexOf.call(parentNode.childNodes, currentNode);
    path.push(index);
    currentNode = currentNode.parentNode;
  }
  return path;
};

const findTargetFromRoot = function(rootNode, path) {
  //if path length isn't exhausted, pop from path and go to that index
  let currentNode = rootNode;
  while (path.length > 0) {
    let currentIndex = path.pop();
    currentNode = currentNode.childNodes[currentIndex];
  }
  return currentNode;
};

console.log(getPath(tree2, result));