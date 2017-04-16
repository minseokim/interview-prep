/*
Given head nodes of two linked lists that may or may not intersect, find out if they intersect and return the point of intersection; return null otherwise.
*/

/*
Basic idea : To check if they intersect we'll have to walk down both lists and compare the nodes at each point, but the biggest problem we have right now is that we don't know at which point, or WHEN they might intersect.

We need to make sure that we start off at the same location in both lists when we traverse, because that will allow us to do an accurate comparison of both nodes at each point.

What we'll do is first get lengths of both lists, and adjust the starting pointer equally for both lists. Then we'll traverse down the list till the end using two pointers, and checking if they are equal. If we reach the end of the list and haven't found an intersection, we'll return null.

*/

const getIntersection = function(headA, headB) {
  let lengthA = 0;
  let lengthB = 0;

  if (!headA || !headB) return null;

  let currentA = headA;
  let currentB = headB;

  while (currentA !== null) {
    lengthA++;
    currentA = currentA.next;
  }

  while (currentB !== null) {
    lengthB++;
    currentB = currentB.next;
  }

  let count = 0;
  //at this point we have both lengths, adjust so that they have same starting points
  while (count < Math.abs(lengthB - lengthA)) {
    //Case 1 : A is longer than B
    if (lengthA > lengthB) {
      headA = headA.next;
    } else {
      headB = headB.next;
    }
    count++;
  }

  while (headA && headB) {
    if (headA.val === headB.val) {
      return headA;
    }

    headA = headA.next;
    headB = headB.next;
  }

  return null;

};