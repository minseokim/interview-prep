function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

function findMiddleNode(pList) {
  if (!pList) return pList;

  let fast = pList;
  let slow = pList;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}


const link1 = new LinkedListNode(1);
link1.next = new LinkedListNode(2);
link1.next.next = new LinkedListNode(3);
link1.next.next.next = new LinkedListNode(4);
link1.next.next.next.next = new LinkedListNode(5);

console.log(findMiddleNode(link1));