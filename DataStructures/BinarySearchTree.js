'use strict';

function BSTNode(val) {
  this.data = val;
  this.leftChild = null;
  this.rightChild = null;
}

BSTNode.prototype.insert = function(val) {
  if (!val) return null;

  const newNode = new BSTNode(val);

  if (val === this.data) {
    console.log('NODE already exists with same value!');
    return null;
  } else if (val > this.data) {
    this.rightChild === null ? this.rightChild = newNode : this.rightChild.insert(val);
  } else if (val <= this.data) {
    this.leftChild === null ? this.leftChild = newNode : this.leftChild.insert(val);
  }

  return newNode;
};

/*Iterative solution of GET*/
BSTNode.prototype.get = function(val) {
  let currentNode = this;
  while (currentNode !== null) {
    if (val === currentNode.data) {
      return currentNode;
    } else if (val > currentNode.data) {
      currentNode = currentNode.rightChild;
    } else {
      currentNode = currentNode.leftChild;
    }
  }
  //Doesn't exist
  return null;
}

BSTNode.prototype.lookup = function(val) {
  if (!val) return null;

  if (this.data === val) {
    return true;
  } else if (this.data < val) {
    if (this.rightChild === null) {
      return false;
    } else {
      return this.rightChild.lookup(val);
    }
  } else {
    if (this.leftChild === null) {
      return false;
    } else {
      return this.leftChild.lookup(val);
    }
  }
};

BSTNode.prototype.bfPrint = function() {

  const queue = [];
  queue.push(this);

  while (queue.length) {
    let firstNode = queue.shift();
    console.log(firstNode.data);
    if (firstNode.leftChild) {
      queue.push(firstNode.leftChild);
    }

    if (firstNode.rightChild) {
      queue.push(firstNode.rightChild);
    }
  }
}
BSTNode.prototype.findMin = function(root) {
  //start at root, keep traversing left until theres no leftchild
  let currentNode = root;

  while (currentNode && currentNode.leftChild) {
    currentNode = currentNode.leftChild;
  }

  return currentNode;
};

//find leftMost node, then replace it with its rightChild
BSTNode.prototype.deleteMin = function(root) {
  if (root.leftChild === null) return root.rightChild;
  root.leftChild = this.deleteMin(root.leftChild);
  return root;
};

/*
Come back to review this one, very tricky!
*/
BSTNode.prototype.delete = function(root, val) {
  root === root || this;

  if (!root) return null;

  if (root.data > val) {
    //resets parent links
    root.leftChild = root.delete(root.leftChild, val);
  } else if (root.data < val) {
    //reset parent links
    root.rightChild = root.delete(root.rightChild, val);
  } else {
    //case 1 :
    if (root.leftChild === null && root.rightChild === null) {
      root = null;
    }

    //case 2 : only has rightChild child.
    else if (root.leftChild === null) {
      root = root.rightChild;
    }

    //case 2 : only has left child
    else if (root.rightChild === null) {
      root = root.leftChild;
    }

    else {
      //2 children
      //find Minimum in rightChild subtree and store it in a temp variable
      let temp = this.findMin(root.rightChild);
      //copy min's data into root
      root.data = temp.data;

      //delete duplicate node in rightChild subtree
      root.rightChild = this.delete(root.rightChild, temp.data);
    }
  }
  return root;
};

module.exports = BSTNode;

// const root = new BSTNode(6);
// root.insert(7);
// root.insert(10);
// root.insert(17);
// root.insert(4);
// root.insert(5);
// // root.insert(5);
// // console.log(root.bfPrint());
// root.delete(root, 5);
// console.log(root.bfPrint());
// // console.log(root.lookup(5));
// console.log(root.get(6));
// console.log(root.get(4));