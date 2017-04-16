// Given head pointer of a linked sort, sort linked list (in ascending order) using merge sort and return new head pointer of sorted linked list.

//General Strategy :
//we'll have two helper functions, splitInHalf that splits the linked list in half, and returns head pointers to first list, and second list
//merge helper that takes two head pointers as parameters and merges them into one list and returns the new head



//29 -> 23 ->82 -> 11
const mergeSortLinkedList = function(head) {
  //if list only has single node, no need to sort it
  if (!head || !head.next) {
    return head;
  }

  let newHeads = {
    firstHead : null,
    secondHead : null
  };

  splitInHalf(head, newHeads);

  newHeads.firstHead = mergeSortLinkedList(newHeads.firstHead);
  newHeads.secondHead = mergeSortLinkedList(newHeads.secondHead);

  return merge(newHeads.firstHead, newHeads.secondHead);
};

const splitInHalf = function(head, newHeads) {
  if (!head) {
    newHeads.firstHead = null;
    newHeads.secondHead = null;
    return;
  }

  //only one element in the list
  if (!head.next) {
    newHeads.firstHead = head;
    newHeads.secondHead = null;
  } else {
    //use technique of moving slow and fast
    let slow = head;
    let fast = head.next;

    //when we're done, slow will be pointing to the middle element in the list
    while (fast) {
      fast = fast.next;
      if (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }
    }
  }

  newHeads.firstHead = head;
  newHeads.secondHead = slow.next;
  //Terminate the first list by setting the end to null
  slow.next = null;
};


const merge = function(headA, headB) {
  //if one of them is null, return the other
  if (!headA) {
    return headB;
  }

  if (!headB) {
    return headA;
  }

  //Set up newHead, and set it to whichever is larger between headA and headB
  let newHead = null;

  if (headA.val <= headB.val) {
    newHead = headA;
  } else {
    newHead = headB;
  }

  //Since we have the head set up, we can now append elements to the list
  let newCurrentNode = newHead;

  while (headA && headB) {
    //initialize tempNode that will store the larger of headA/headB
    let tempNode = null;

    if (headA.val >= headB.val) {
      tempNode = headA;
      headA = headA.next;
    } else {
      tempNode = headB;
      headB = headB.next;
    }

    newCurrentNode.next = tempNode;
    newCurrentNode = newCurrentNode.next;
  }

  //Edge cases where there are nodes leftOver in listA, listB
  if (headA) {
    newCurrentNode.next = headA;
  } else if (headB) {
    newCurrentNode.next = headB;
  }

  return newHead;
};

