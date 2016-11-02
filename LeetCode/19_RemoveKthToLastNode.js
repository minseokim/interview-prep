/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 // Given linked list: 1->2->3->4->5, and n = 2.

 //   After removing the second node from the end, the linked list becomes 1->2->3->5.

var removeNthFromEnd = function(head, n) {
  //Walk one node n nodes from head, call it rightNode
  //Use another pointer at the head, call it leftNode
  //If we walk them both down at the same time towards the tail
  //this keeps distance n from each other
  //When rightNode hits the tail, we know leftNode must be the one to be removed
  //Use previous pointer to store leftNode's prev, and set its next to leftNode's previous
  //Consider edge cases where head is being removed

  var count = 1;
  var prevPointer = head;
  var endPointer = head;
  var startPointer = head;

  while (count < n) {
    endPointer = endPointer.next;
    count++;
  }

  //Stop right at last node
  while (endPointer.next) {
    endPointer = endPointer.next;
    prevPointer = startPointer;
    startPointer = startPointer.next;
  }

  //Case 1 : We are removing the head, just return the next
  if (startPointer === head) {
    return startPointer.next;
  }

  //Case 2 : We are removing non-head elements
  //Remove startPointer by setting prev to startPointer's next
  prevPointer.next = startPointer.next;
  return head;
};