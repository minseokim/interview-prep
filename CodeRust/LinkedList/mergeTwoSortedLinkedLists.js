/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let l1Current = l1;
  let l2Current = l2;
  let newHead = null;

  //finish setting up new Head;
  if (l1Current.val <= l2Current.val) {
    newHead = l1Current;
    l1Current = l1Current.next;
  } else {
    newHead = l2Current;
    l2Current = l2Current.next;
  }

  let sortedCurrent = newHead;

  while (l1Current && l2Current) {
    let tempNode = null;
    if (l1Current.val <= l2Current.val) {
      tempNode = l1Current;
      l1Current = l1Current.next;
    } else {
      tempNode = l2Current;
      l2Current = l2Current.next;
    }
    sortedCurrent.next = tempNode;
    sortedCurrent = tempNode;
  }

  if (l1Current) {
    sortedCurrent.next = l1Current;
  } else if (l2Current) {
    sortedCurrent.next = l2Current;
  }

  return newHead;
};