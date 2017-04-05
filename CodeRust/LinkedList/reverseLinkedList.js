function ListNode(val) {
    this.val = val;
    this.next = null;
}

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


//a->b->c->d->null
//save 'next' head to go to first.
//connect current's next to prev
//prev becomes current
//current becomes next


 const reverseLinkedListIter = function(head) {
  if (!head) return null;

  let current = head;
  let next;
  let prev = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
 };



const reverseLinkedListRec = function(head) {
    //return the last node, this will be our new head
    if (!head || !head.next) {
        return head;
    }

    //new head that will be returned in the end
    var new_head = reverseList(head.next);

    //reverse first
    head.next.next = head;

    //set head's next to null.(Fixed later in the next iteration)
    head.next = null;

    return new_head;
};

const headOne = ListNode('a');
headOne.next = ListNode('b');
headOne.next.next = ListNode('c');
headOne.next.next.next = ListNode('d');
