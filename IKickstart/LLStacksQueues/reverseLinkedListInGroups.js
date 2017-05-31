/*
Given a linked list, write a function to reverse every k nodes (where k is an input to the function).

Example:
Inputs:  1->2->3->4->5->6->7->8->NULL and k = 3
Output:  3->2->1->6->5->4->8->7->NULL.

Inputs:   1->2->3->4->5->6->7->8->NULL and k = 5
Output:  5->4->3->2->1->8->7->6->NULL.
*/

/*

Set up a recursive function for reversing that takes head, and k
This will reverse k nodes. Have this function return the tail node.

This function then calls itself recursively. Base case is if we reach end node, or if count(refreshed at 0 every time) equals k
*/

const reverse = function(head, k) {
  let count = 0;
  let current = head;
  let next = null;
  let prev = null;

  //reversing part
  while (current !== null && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  //at this point, next is the (k+1)st node. So check if it exists, and
  //connect it to head
  if (next !== null) {
    head.next = reverse(next, k);
  }

  //prev is the new head.
  return prev;
};

