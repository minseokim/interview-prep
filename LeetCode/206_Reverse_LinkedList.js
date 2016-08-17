/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Iteration
var reverseList = function(head) {
    if (!head) {
        return null;
    }

    var next;
    var current = head;
    var prev = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};


//Recursion
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let reversed = reverseList(head.next);

    head.next.next = head;
    head.next = null;
    return reversed;
};