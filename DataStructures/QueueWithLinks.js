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

LinkedList.prototype.clear = function() {
  this.head = this.tail = null;
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


function Queue() {
  this._storage = new LinkedList();
}

Queue.prototype.enqueue = function(item) {
  //add to back
  this._storage.addToBack(item);
}

Queue.prototype.dequeue = function() {
  let NodeToRemove = this._storage.head;
  //remove from front
  this._storage.remove(NodeToRemove.data);

  return NodeToRemove;
}

Queue.prototype.getSize = function() {
  return this._storage._length;
}

Queue.prototype.isEmpty = function() {
  return this._storage._length === 0;
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
console.log(myQueue.getSize());
myQueue.enqueue(5);
console.log(myQueue);
console.log(myQueue.getSize() === 1);
console.log(myQueue.isEmpty() === false);
myQueue.enqueue(6);
myQueue.enqueue(7);
console.log(myQueue.getSize() === 3);
console.log(myQueue.dequeue()); // 5
console.log(myQueue.getSize() === 2);
console.log(myQueue.dequeue()); // 6