function ListNode(val) {
    this.val = val;
    this.next = null;
}

const printForwardOrder = function(head) {
  if (head === null) return;
  console.log(head.val);
  printForwardOrder(head.next);
};

const printBackwardOrder = function(head) {
  if (head === null) return;

  printBackwardOrder(head.next);
  console.log(head.val);
};


const headOne = new ListNode('a');
headOne.next = new ListNode('b');
headOne.next.next = new ListNode('c');
headOne.next.next.next = new ListNode('d');

// console.log(printForwardOrder(headOne));

console.log(printBackwardOrder(headOne));