/*
Zip a linked list from two ends

1->2->3->4->5->6
Output : 1->6->2->5->3->4

*/

const zip = function(pList) {
  let front = pList;
  let temp = pList;
  let flag = true;

  const recurse = function(back) {
    if (back === null) {
      return;
    }

    //go to the tail
    recurse(back.next);

    //
    if (front.next === back || front === back && flag) {
      back.next = null;
      flag = false;
    }

    if (flag) {
      //save the original next first.
      temp = front.next;
      front.next = back;
      back.next = temp;
      front = temp;
    }

  };

  recurse(front);
  return pList;
};

function LinkedListNode(node_value) {
    this.val = node_value;
    this.next = null;
}


function printList(head) {
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}

const head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
// head.next.next.next = new LinkedListNode(4);
// head.next.next.next.next= new LinkedListNode(5);
// head.next.next.next.next.next = new LinkedListNode(6);


console.log(zip(head));
printList(head);