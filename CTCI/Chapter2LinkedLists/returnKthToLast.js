/*
Implement an algorithm to find the keth to last element of a singly linked list
*/

'use strict';

//Linked List implementation with head and tail pointers

function Node(val) {
  this.data = val;
  this.next = null;
}

function LinkedList(val) {
  if (!val) {
    this.head = null;
    this.tail = null;
    this._length = 0;
  } else {
    this.head = new Node(val);
    this.tail = this.head;
    this._length = 1;
  }

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

LinkedList.prototype.print = function() {
  let result = "";
  let current = this.head;

  while (current !== null) {
    if (current === this.head) {
      result += current.data;
    } else {
    result += " --> " + current.data;
    }
    current = current.next;
  }
  return result;
}



//O(n) in SINGLE PASS using 'stick method'
const getKthToLastNode = function(head, k) {
  if (!head || k < 0) return null;
  let stickHead = head;
  let stickTail = head;
  let count = 0;
  while (count < k && stickTail !== null) {
    stickTail = stickTail.next;
    count++;
  }

  //at this point, either stickTail is null(k is greater than length of L.L) OR stickTail is indeed k nodes apart from stickHead
  if (stickTail === null) return -1;

  while (stickTail.next !== null) {
    stickHead = stickHead.next;
    stickTail = stickTail.next;
  }
  return stickHead;
};

const example1 = new LinkedList(1);
example1.addToBack(2);
example1.addToBack(5);
example1.addToBack(6);
example1.addToBack(7);
example1.addToBack(1);

console.log(getKthToLastNode(example1.head, 5));
console.log(getKthToLastNode(example1.head, 3));
console.log(getKthToLastNode(example1.head, 0));
console.log(getKthToLastNode(example1.head, 1));
console.log(getKthToLastNode(example1.head, 8));
console.log(getKthToLastNode(example1.head, -1));