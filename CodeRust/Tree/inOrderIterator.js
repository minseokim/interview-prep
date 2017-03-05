class InorderIterator {
  constructor(root) {
    this.stack = [];

    while (root) {
      //push root into stack first
      this.stack.push(root);
      //keep pushing root's leftchild
      root = root.left;
    }
  }

  hasNext() {
    //if stack is null or stack is empty return false!
    if (!this.stack || this.stack.length === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  getNext() {
    //if stack is null or stack is empty return null
    if (!this.stack || this.stack.length === 0) {
      return null;
    }
    //pop the stack
    let parent = this.stack.pop();
    //get its rightChild
    let temp = parent.rightChild;

    while (temp) {
      this.stack.push(temp);
      temp = temp.leftChild;
    }

    //return the parent
    return parent;
  }
}