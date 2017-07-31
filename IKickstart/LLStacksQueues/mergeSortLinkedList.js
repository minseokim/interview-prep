/*
Sort a singly linked list using merge sort, ascending order.

ex) 1->5->6->3->4    // 1->3->4->5->6

Approach : The way merge sort works is through divide and conquer. We divide the list in half in each step, and then sorting them, and merging them. The base case is when the list has one element.

First we need a split function that splits the lists in half.

Then we need a merge step

*/

const splitIntoTwo = function(head) {
  //if list is length 0 or 1 just return the head
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //at this point, slow will be at the midpoint. save slow's next(Which is the secondHalf's head) to a variable, and split the list by setting it to null afterwards

  let secondHead = slow.next;
  slow.next = null;

  return {firstHalf : head, secondHalf : secondHead};
};

const merge = function(l1, l2) {
  //first if either head is null, return the other
  if (!l1) return l2;
  if (!l2) return l1;

  //first find the 'new' head by comparing l1's value and l2's value
  //***DONT forget to move l1 and l2 after setting head.
  let newHead = null;
  if (l1.val <= l2.val) {
    newHead = l1;
    l1 = l1.next;
  } else {
    newHead = l2;
    l2 = l2.next;
  }

  //Need to save newHead HERE, to be returned later.
  let sortedNodeCurrent = newHead;

  //iterate through l1 and l2, appending the larger node to newHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      sortedNodeCurrent.next = l1;
      l1 = l1.next;
    } else {
      sortedNodeCurrent.next = l2;
      l2 = l2.next;
    }
    sortedNodeCurrent = sortedNodeCurrent.next;
  }

  //Edge cases! If either list is left over, just add it to the end of newHead
  if (l1) {
    sortedNodeCurrent.next = l1;
  } else if (l2) {
    sortedNodeCurrent.next = l2;
  }

  return newHead;
};

const mergeSortedLinkedList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let splitHeads = splitIntoTwo(head);
  let firstHead = mergeSortedLinkedList(splitHeads.firstHalf);
  let secondHead = mergeSortedLinkedList(splitHeads.secondHalf);

  let merged = merge(firstHead, secondHead);
  return merged;
};


function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

const linkOne = new LinkedListNode("1");
const linkTwo = new LinkedListNode("1");
linkTwo.next = new LinkedListNode("5");
linkTwo.next.next = new LinkedListNode("3");

const linkThree = new LinkedListNode("2");
linkThree.next = new LinkedListNode("6");
linkThree.next.next = new LinkedListNode("-100");
linkThree.next.next.next = new LinkedListNode("3");


// console.log(mergeSortedLinkedList(linkOne)); //1
// console.log(mergeSortedLinkedList(linkTwo)); //1 -> 3 -> 5
console.log(mergeSortedLinkedList(linkThree)); // -100 -> 2 -> 3 -> 6
