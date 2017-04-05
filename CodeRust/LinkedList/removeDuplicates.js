function ListNode(val) {
    this.val = val;
    this.next = null;
}


//Solution #1 : Use HashSet to store value of all linked lists we've seen so far, O(n) space and time complexity. If we see a value we've stored already, just skip over it.

const removeDuplicates = function(head) {
  //if head is null, or linked list has length 1, return the list as is.
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let current = head;
  let valuesSoFar = new Set();

  while (current !== null) {
    //if it's a duplicate value, skip over it
    if (valuesSoFar.has(current.val)) {
      prev.next = current.next;
    } else {
      //otherwise add to Set and advance prev
      valuesSoFar.add(current.val);
      prev = current;
    }
    current = current.next;
  }

  return head;
};


//If it's SORTED :
const removeDuplicatesSorted = function(head) {
  //if head is null, or linked list has length 1, return the list as is.
  if (!head || !head.next) {
    return head;
  }

  //start at second node as current to prevent null error
  let prev = head;
  let current = head.next;

  while (current !== null) {
    //We only do anything, EVER if current's a different value from prev.
    if (current.val !== prev.val) {
      prev.next = current;
      prev = current;
    }

    //Otherwise just keep on trucking.
    current = current.next;
  }

  prev.next = null;

  return head;
}