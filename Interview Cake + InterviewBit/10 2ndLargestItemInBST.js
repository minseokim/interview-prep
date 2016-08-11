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

function findLargest(rootNode) {
  var current = rootNode;

  while (current) {
    if (!current.right) {
      return current.value;
    }
    current = current.right;
  }
}

function secondLargest(rootNode) {
  //O(1) space, O(h) time

  if (!rootNode.left && !rootNode.right) {
    throw Error('Tree only has one node!');
  }

  var current = rootNode;

  while (current) {
    //case 1. we have left subtree only
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  //This one takes O(h) call stack space
  if (!rootNode) {
    return null;
  }

  if (rootNode.left && !rootNode.right) {
    return findSecondLargest(rootNode.left);
  }

  if (rootNode.right && !rootNode.right.left && !rootNode.right.right) {
    return rootNode.value;
  }

  return findSecondLargest(rootNode.right);
}