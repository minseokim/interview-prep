/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
Recursive Approach #1 :


*/

const reverse = function(first, last) {
  let prev = null;
  let current = first;

  while (current !== last) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  //make sure to return the new head
  return prev;
}


var reverseKGroup = function(head, k) {
  let current = head;
  let count = 0;

  //find the k+1st node
  while (count < k && current !== null) {
    current = current.next;
    count++;
  }

  //count is less than k, just return head since we can leave it alone
  if (count < k) return head;

  //reverse from head --> k+1st node. Since the reverse function returns the new Head, we can save it to a variable
  let newHead = reverse(head, current);
  head.next = reverseKGroup(current, k);
  return newHead;
};