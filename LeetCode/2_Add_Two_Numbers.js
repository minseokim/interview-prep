/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let carry = 0;

  let fakeHead = new ListNode(-1);
  let newListCurrent = fakeHead;

  //iterate as long as one of them has length, or
  while (head1 || head2 || (carry > 0)) {
    let sum = 0;

    if (head1) {
      sum += head1.val;
      head1 = head1.next;
    }
    if (head2) {
      sum += head2.val;
      head2 = head2.next;
    }

    //if we have a digit to carry, add 1 to sum and decrement carry.
    if (carry > 0) {
      sum++;
      carry--;
    }
    //if sum is greater than 10, carry 1.
    if (sum >= 10) {
      carry++;
    }

    newListCurrent.next = new ListNode(sum % 10);
    newListCurrent = newListCurrent.next;
  }

  return fakeHead.next;
};

const l1 = new ListNode(1);
l1.next = new ListNode(0);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);

const l2 = new ListNode(7);
l2.next = new ListNode(3);
l2.next.next = new ListNode(2);

const l3 = new ListNode(5);
const l4 = new ListNode(5);
console.log(addTwoNumbers(l3, l4));