function ListNode(val) {
    this.val = val;
    this.next = null;
}

//Edge Cases : Duplicate targets

const deleteNode = function(head, target) {
  let prev = head;
  let current = head;

  if (!head) {
    return null;
  }

  while (current !== null) {
    if (current.val === target) {

      if (current === head) {
        head = head.next;
      }

      prev.next = current.next;
    } else {
      //only move prev if it's a new value
      prev = current;
    }
    current = current.next;
  }

  return head;
};

//Create a new linked list with only non-target values
const deleteNodeAlt = function(head, target) {
  if (!head) return null;

  let newListNode = new ListNode(-1);
  let fakeHead = newListNode;

  while (head !== null) {
    //if it's a new element
    if (head.val !== target) {
      //We have to do two things :
      //1. make a new next pointer on newListNode
      //2. Advance newListNode;
      newListNode.next = head;
      newListNode = newListNode.next;
    }
    head = head.next;
  }

  //set tail node to null
  newListNode.next = null;
  return fakeHead.next;
};
