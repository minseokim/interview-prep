/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getLength = function(head) {
    var count = 0;

    while (head) {
        head = head.next;
        count++;
    }
    return count;
};
var getIntersectionNode = function(headA, headB) {

    if (!headA || !headB) {
        return null;
    }
    var lengthA = getLength(headA);
    var lengthB = getLength(headB);

    var count = 0;
    while (count < (Math.abs(lengthB-lengthA))) {
        if (lengthB > lengthA) {
            headB = headB.next;
        } else {
            headA = headA.next;
        }
        count++;
    }

    //now we're at the same position
    while (headA && headB) {
        //if they intersect, return
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};