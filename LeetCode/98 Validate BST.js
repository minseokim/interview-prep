/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//Recursive Solution #1
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    if (isSubTreeLesser(root.left, root.val) &&
        isSubTreeGreater(root.right, root.val) &&
        isValidBST(root.left) &&
        isValidBST(root.right)) {
            return true;
        }

    return false;
};

var isSubTreeLesser = function(root, value) {
    if (!root) {
        return true;
    }
    if (root.val < value
        && isSubTreeLesser(root.left, value)
        && isSubTreeLesser(root.right, value)) {
        return true;
    }

    return false;
};

var isSubTreeGreater = function(root, value) {
    if (!root) {
        return true;
    }
    if (root.val > value
        && isSubTreeGreater(root.left, value)
        && isSubTreeGreater(root.right, value)) {
        return true;
    }

    return false;
};


//DFS Solution w/ Iteration
var isValidBST = function(root) {

    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    if (!root) {
        return true;
    }
    nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;
        // console.log(lowerBound);
        // console.log(upperBound);
        // if this node is invalid, we return false right away
        if (node.val <= lowerBound || node.val >= upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.val});

        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({node: node.right, lowerBound: node.val, upperBound: upperBound});
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
};


//BFS Solution w/ Recursion
var isValidBST = function(root, lowerBound, upperBound) {
    lowerBound = lowerBound || -Infinity;
    upperBound = upperBound || Infinity;

    if (!root) return true;

    if (root.val < lowerBound || root.val > upperBound) {
        return false;
    }

    return isValidBST(root.left, lowerBound, root.val) && isValidBST(root.right, root.val, upperBound);
};

