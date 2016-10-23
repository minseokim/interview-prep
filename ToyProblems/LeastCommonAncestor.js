//      6
//    /   \
//   8     5
//  /|\   / \
// 2 3 4  1 7
//          /\
//         9  9
//
// Input: two nodes in the tree
// Output: least common ancestor
// Restriction: Each node has a pointer only to its parent
//
// 1, 9 -> 5
// 3, 4 -> 8
// 2, 9 -> 6
// 1, 1 -> 1
// 1, 5 -> 5

function leastCommonAnc(nodeA, nodeB) {

    //Find depth of each node
    var depthA = getDepth(nodeA);
    var depthB = getDepth(nodeB);

    //Determine lower and upper
    var upper = Math.max(depthA, depthB);
    var lower = Math.min(depthA, depthB);

    //Find ancestor of lower that's at the same depth as upper
    var limit = 0;
    var currentNode = lower;

    while (limit < upper - lower) {
        currentNode = currentNode.parent;
    }

    //Now currentNode is lower's ancestor that's at the same depth as upper
    while (currentNode !== null) {
        if (currentNode.val === upper.val) {
            return currentNode;
        }

        //For both nodes, step up one parent at a time
        currentNode = currentNode.parent;
        upper = upper.parent;
    }
    return -1;
}

//Returns depth of node, 0 if root
function getDepth(node) {
    var currentDepth = 0;

    while (node != null) {
        currentDepth += 1;
        node = node.parent;
    }

    return currentDepth;
}


function leastCommonAncestor(nodeA, nodeB) {

    var parentStorage = {};
    var currentNode = NodeA;

    while (currentNode !== null) {
        parentStorage[currentNode.val] = true;
        currentNode = currentNode.parent;
    }

    currentNode = NodeB;

    while (currentNode !== null) {
        if (parentStorage[currentNode.val]) {
            return currentNode;
        }
        currentNode = currentNode.parent;
    }

    return -1;
}
