/*
Given a singly linked list, return Nth from last node
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
Approach 1 : Since we don't want to end up doing two passes to find the length of the list, we set up two pointers, we can think of them like a stick, but with length N. Once the end of the stick reaches the tail(null), the start pointer will be the node we want.

First clarify whether if n===1, it's the TAIL node(last node), or first node from last(second to last node)
*/

const getNthFromLast = function(head, n) {
  //if n is less than 1 or head is null, return null
  if (n < 1 || head === null) return null;

  let start = head;
  let end = head;

  //move end to the right, as long as
  while (end && n > 0) {
    end = end.next;
    n-=1;
  }

  //at this point, if n is not 0 this means N is greater than
  //the length of the list.
  if (n !== 0) {
    return null;
  }

  //stop when end node is the tail node(its next is null)
  while (end !== null) {
    start = start.next;
    end = end.next;
  }

  return start;
};


const removeNthFromEnd = function(head, n) {
  //if n is less than 1 or head is null, return null
  if (n < 1 || head === null) return null;

  let start = head;
  let end = head;

  //move end to the right, as long as
  while (end && n > 0) {
    end = end.next;
    n-=1;
  }

  //at this point, if n is not 0 this means N is greater than
  //the length of the list.
  if (n !== 0) {
    return null;
  }

  let prev = null;
  //stop when end node is the tail node(its next is null)
  while (end !== null) {
    prev = start;
    start = start.next;
    end = end.next;
  }

  //Edge case where head is being removed.
  if (start === head) {
      return start.next;
  }

  prev.next = start.next;
  return head;
};