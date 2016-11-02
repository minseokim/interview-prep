function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  // 1 --> 2 ---> 3 --> null
  // 3 --> 2 ---> 1
  //make each node's next point to its prev
  //save current's next to a temp before pointing

  var prev = null;
  var temp = null;
  var current = head;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}