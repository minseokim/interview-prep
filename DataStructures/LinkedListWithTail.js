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

module.exports = LinkedList;

// const list = new LinkedList();

// //Test addToFront
// console.log('-----AddtoFront Test-----');
//   //Adding to empty ll
//   list.addToFront(1);
//   console.log(list.head.data===1); //true
//   console.log(list.tail.data===1); //true

//   //Adding to LL of length greater than 1
//   list.addToFront(2);
//   list.addToFront(3);
//   console.log(list.head.data===3); //true
//   console.log(list.tail.data===1); //true

//   //Clear
//   list.clear();
// //Test addToBack
// console.log('-----AddToBack Test-----');
//   //Adding to empty ll

//   list.addToBack(1);
//   console.log(list.head.data===1); //true
//   console.log(list.tail.data===1); //true

//   //Adding to LL of length greater than 1

//   list.addToBack(2);
//   list.addToBack(3);
//   console.log(list.head.data===1); //true
//   console.log(list.tail.data===3); //true

// //Test contains

//   //empty list
//   console.log(list.contains(3) === false); //true

//   //list has an item
//   list.addToFront(3);
//   console.log(list.contains(3) === true); // true

//   //list has multiple items
//   list.addToFront(5);
//   console.log(list.contains(5) === true); // true

//   //an item doesnt exist
//   console.log(list.contains(4) === true); // false

//   //Clear
//   list.clear();

// //Test remove
// console.log('----Remove Test-----');

//   //Removing head & tail
//   list.addToFront(1);
//   list.remove(1);
//   console.log(list.head === null);
//   console.log(list.tail === null);

//   //Removing head
//   list.addToFront(1);
//   list.addToFront(4);
//   list.remove(4);
//   console.log(list.head.data === 1);
//   console.log(list.tail.data === 1);

//   //Removing tail
//   list.addToBack(5);
//   list.addToBack(6);
//   list.remove(6);
//   console.log(list.tail.data === 5);

//   //Removing intermediate node
//   list.addToBack(7);
//   list.addToBack(9);
//   list.remove(7);
//   console.log(list.contains(7) === false);
