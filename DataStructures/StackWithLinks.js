'use strict';

//Linked List implementation with head and tail pointers
function Node(val) {
  this.data = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this._length = 0;
}

LinkedList.prototype.addToFront = function(val) {

  //create new head
  let newHead = new Node(val);

  //Case1 : head doesn't exist(list is empty)
  if (this.head === null) {
    this.head = this.tail = newHead;
  } else {
    let oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
  }
  this._length++;
  return newHead;
}

LinkedList.prototype.addToBack = function(val) {
  let newTail = new Node(val);
  //if tail doesn't exist(list is empty)
  if (this._length === 0) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    let oldTail = this.tail;
    oldTail.next = newTail;
    //reset new tail
    this.tail = newTail;
  }
  this._length++;
  return newTail;
}

LinkedList.prototype.getSize = function() {
  return this._length;
}


LinkedList.prototype.remove = function(val) {

  if (this.contains(val)) {
    let prev = null;
    let current = this.head;
    let NodeToRemove = null;

    //Case 1 : head doesn't exist
    if (current === null) {
      return false;
    }

    //Case 2 : there is only one element in the LL, head is equal to tail
    if (current.data === val && this.tail.data === val) {
      NodeToRemove = this.head;
      this.head = this.tail = null;
      this._length--;
      return NodeToRemove;
    }

    //Case 1 : We're removing head
    if (current.data === val) {
      NodeToRemove = current;
      this.head = current.next;
      this._length--;
      return NodeToRemove;
    }

    //For nodes in between & tail
    while (current !== null) {
      if (current.data === val) {
        //Case 2 : we're removing tail
        if (current === this.tail) {
          NodeToRemove = current;
          this.tail = prev;
        }
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
    this._length--;
    return NodeToRemove;
  }
  return false;
}

LinkedList.prototype.contains = function(val) {
  let current = this.head;

  while (current !== null) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }

  return false;
}



function StackWithLinks() {
  this.items = new LinkedList();
  this.top = this.items.head;
  this._size = 0;
}

StackWithLinks.prototype.push = function(val) {

  //adding to front
  //make new node
  let newHead = new Node(val);
  //set its next to old head
  newHead.next = this.top;
  //newHead becomes head of linked list
  this.items.head = newHead;
  //top is newHead
  this.top = newHead;
  this._size++;

  return newHead;
}

StackWithLinks.prototype.pop = function(val) {
  //remove front
  let oldHead = this.top;
  this.top = oldHead.next;
  this._size--;
  return oldHead;
}

StackWithLinks.prototype.size = function() {
  return this._size;
}

StackWithLinks.prototype.isEmpty = function() {
  return this._size === 0;
}

StackWithLinks.prototype.peek = function() {
  return this.top;
}

//Test
  //initialize a new Stack
  const stack = new StackWithLinks();
  //should push a new element
  stack.push(1);
  console.log(stack.size() === 1); //true
  console.log(stack.peek().data === 1); //true
  console.log(stack.pop());
  console.log(stack.isEmpty()); //true
  console.log(stack.size() === 0); //true
  stack.push(2);
  stack.push(3);
  stack.push(5);
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.size() === 2);
