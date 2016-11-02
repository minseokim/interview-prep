/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head) {
        var prev = head;
        var currentNode = head;

        while (currentNode) {
            if (currentNode.val == val) {
                //Edge case : Removing the head, just re-set it to its next
                if (currentNode === head) {
                    head = head.next;
                }
                //Set prev's next to currentNode's
                prev.next = currentNode.next;
            } else {
                //We only want to update prev to currentNode when it's not an element we want to remove. Pointer to prev stays where it is until we find our proper element(Element that needs to stay)
                prev = currentNode;
            }
            currentNode = currentNode.next;
        }
    }
    return head;
};


//Alternative solution using a fakeHead, creating new list
var removeElementsAlternate = function(head, val) {
    var newListNode = new ListNode(-1);
    var fakeHead = newListNode;

    while (head !== null) {
        if (head.val !== val) {
            //set head as next node of newListNode, and update newListNode
            newListNode.next = head;
            newListNode = newListNode.next;
        }
        head = head.next;
    }
    //Set tail's next to null
    newListNode.next = null;
    return fakeHead.next;
}