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

//How can we use the fact that the list is sorted?
var deleteDuplicates = function(head) {
    //Doing it in place
    if (head) {
        var node = head.next;
        var prev = head;

        while (node) {
            //We only care when it's a new element
                //Set prev's next to node, update prev to be node
                //(since that will be the node we'll be updating next time)
            if (node.val !== prev.val) {
                prev.next = node;
                prev = node;
            }
            //otherwise just keep iterating through the list
            node = node.next;
        }

        //prev is tail node, so need to set its next to null
        prev.next = null;
    }
    return head;
};

//Alternative solution using hashSet, works for non-sorted linked lists
var deleteDuplicates = function(head) {
    if (head) {
        var nodesSeen = new Set();

        var prev = null;
        var current = head;
        nodesSeen.add(current.val);

        //Look at current's next, since that's the value we want to observe
        while (current.next) {
            if (nodesSeen.has(current.next.val)) {
                //skip over current's next until we find a new value
                current.next = current.next.next;
            } else {
                nodesSeen.add(current.next.val);
                current = current.next;
            }
        }
    }
    return head;
};