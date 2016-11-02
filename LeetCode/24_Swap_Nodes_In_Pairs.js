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

//Recursive solution
var swapPairs = function(head) {

    //base case : list is empty or only has one node
    if (!head || !head.next) {
        return head;
    }
    //remaining list
    var remaining = head.next.next;

    //new head
    var newHead = head.next;

    //reverse this by setting next's next to current
    head.next.next = head;

    //connect head to the remaining stuff
    head.next = swapPairs(remaining);

    return newHead;
};