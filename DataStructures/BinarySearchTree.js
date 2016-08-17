
var node = function(value){
  this.value = value;
  this.rightChild = null;
  this.leftChild = null;
};


var binarySearchTree = function(){
  this.root = null;
  this.size = 0;
};

binarySearchTree.prototype.insert = function(input) {
  var newNode = new node(input);

  if (this.root === null) {
    this.root = newNode;
    this.size++;
  } else {
    var findAndInsert = function(currentNode) {
      if (input > currentNode.value) {
        //belongs in righgtChild
        if (currentNode.rightChild === null) {
          currentNode.rightChild = newNode;
        } else {
          findAndInsert(currentNode.rightChild);
        }
      } else if (input < currentNode.value) {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = newNode;
        } else {
          findAndInsert(currentNode.leftChild);
        }
      }
    };

    findAndInsert(this.root);
    this.size++;
  }
};

binarySearchTree.prototype.search = function(input) {
  var check = false;

  var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    }
    else if (currentNode.value === input) {
      check = true;
      return;
    }

    if (currentNode.value < input) {
      traverse(currentNode.rightChild);
    } else {
      traverse(currentNode.leftChild);
    }
  };
  traverse(this.root);
  return check;
};

binarySearchTree.prototype.delete = function(deleteValue) {
  var temp = [];

  var roundUp = function(currentNode) {
    if (currentNode === null) {
      return;
    }

    if (currentNode.value !== deleteValue) {
      temp.push(currentNode.value);
    }

    roundUp(currentNode.leftChild);
    roundUp(currentNode.rightChild);
  };

  roundUp(this.root);

  if (temp.length === this.size) {
    console.log('delete value doesnt exist inside the tree');
    return;
  }


  this.size = 0;
  this.root = null;

  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i]);
  }

  return;
};

