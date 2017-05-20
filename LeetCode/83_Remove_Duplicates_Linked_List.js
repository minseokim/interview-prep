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
function removeDuplicates(node) {
  const seenSoFar = new Set();
  let prev = null;
  let current = node;

  while (current !== null) {

    //if it's a duplicate element, connect prev to current's next
    if (seenSoFar.has(current.val)) {
      prev.next = current.next;
    } else {
      //otherwise advance prev and add to set.
      prev = current;
      seenSoFar.add(current.val);
    }
    //advance current
    current = current.next;
  }
  return node;
}
