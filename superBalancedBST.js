function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function isBalanced(treeRoot) {
  //The BST is unbalanced under two occasions :
    //1)More than 2 depths
    //2)Difference of depths is more than 2
  var depths = [];

  var nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    var nodePair = nodes.pop();
    var node = nodePair[0],
        depth = nodePair[1];

    //case : we found a leaf
    if (!node.left && !node.right) {
      //we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        //case 1)
        if (depths.length > 2 ||
            (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      //Not a leaf, keep storing nodes into stack
      if (node.left) {
        nodes.push([node.left, depth+1]);
      }

      if (node.right) {
        nodes.push([node.right, depth+1]);
      }
    }

  }

  return true;
}
