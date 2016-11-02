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
    //return the last node, this will be our new head
    if (!head || !head.next) {
        return head;
    }

    //new head that will be returned in the end
    var new_head = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return new_head;
};