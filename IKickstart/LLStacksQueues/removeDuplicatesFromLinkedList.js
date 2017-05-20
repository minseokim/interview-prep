/*
Objec­tive: Write a pro­gram to remove the dupli­cates from an unsorted linked list

Exam­ple:

Input Linked List : 1->2->2->4->3->3->2
Output : 1->2->4->3
Input: An unsorted linked list

Out­put: Linked list with no duplicates.
*/

/*
Use set. Scan linked list, and if we see a node whose value is already in the set, we'll just skip over it.

We'll need a prev pointer and current, prev initialized at null and current at head.

Once we see a duplicate element, we'll set prev's next to current's next. We only update prev if it's a new element, because if it's duplicate we'll just be skipping over it. We always update current.
*/

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

