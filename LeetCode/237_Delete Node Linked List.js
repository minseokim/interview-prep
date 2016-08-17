/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (!node) {
        return null;
    }

    var nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
};