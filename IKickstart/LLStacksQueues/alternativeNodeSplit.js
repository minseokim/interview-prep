/*
Given a linked list, split it in two such that every other node goes into the new list. For lists with odd number of nodes, first one should be longer. Modify the original list.

EX: {a, b, c, d, e, f, g} => {a, c, e, g} , {b, d, f}

*/

const splitInTwo = function(head) {
  //if head is null return null
  if (!head) return null;

  let nodeOne = head;
  const headTwo = head.next;
  let nodeTwo = headTwo;

  while (nodeOne && nodeOne.next) {
    nodeOne.next = nodeOne.next.next;
    if (nodeTwo.next) {
      nodeTwo.next = nodeTwo.next.next;
    }
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
  }

  if (nodeTwo) {
    nodeTwo.next = null;
  }

  return headTwo;
};


function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

const linkOne = new LinkedListNode("a");
const linkTwo = new LinkedListNode("a");
linkTwo.next = new LinkedListNode("b");
linkTwo.next.next = new LinkedListNode("c");

const linkThree = new LinkedListNode("a");
linkThree.next = new LinkedListNode("b");
linkThree.next.next = new LinkedListNode("c");
linkThree.next.next.next = new LinkedListNode("d");


console.log(splitInTwo(linkOne)); // {a}, null
console.log(splitInTwo(linkTwo)); // {a, c}  {b}
console.log(splitInTwo(linkThree)); // {a, c} {b, d}
console.log(splitInTwo(null)); // null, null