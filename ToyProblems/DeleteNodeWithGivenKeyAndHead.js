// Delete node with a given key
// Given head of a linked list and a key, delete node with this given key from the linked list.

function deleteNode(head, key) {
  var prev = null;
  var current = head;

  while (current) {
    if (current.value === key) {
      break;
    }
    prev = current;
    current = current.next;
  }

  //Edge Case 1 : Key isn't found in the list, return null
  if (!current) {
    return head;
  }

  //Edge Case 2 : If node to delete is the head, just return its next
  if (current === head) {
    return head.next;
  }

  //Delete node by setting previous' next to current's next, return head
  prev.next = current.next;
  return head;
}