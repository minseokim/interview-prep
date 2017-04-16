/*
Given the head of a singly linked list and 'N', swap the head with Nth node. Return the head of the new linked list.
*/


/*
7-> 14 -> 21 -> 28 -> 35 -> 42 -> null
n = 4;
*/

/*Edge cases :

1) N is longer than the length of the linked list,
2) n is negative
3) there is only one

General idea : keep track of prev node, and once we reach n, set prev.next = current.next, and set current.next to head.next


*/

const swapNthNodeWithHead = function(head, n) {

  if (!head || n < 0) {
    return null;
  }

  if (n === 1) {
    return head;
  }

  let prev = null;
  let current = head;
  let count === 1;

  while (current !== null && count < n) {
    prev = current;
    current = current.next;
    count++;
  }

  if (!current) {
    return head;
  }
  prev.next = head;
  let temp = head.next;
  head.next = current.next;
  current.next = temp;

  return current;
};