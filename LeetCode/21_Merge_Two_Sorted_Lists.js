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
    //use two pointers to compare l1 and l2.
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    var mergedHead = null;
    var mergedTail = null;

    if (l1.val < l2.val) {
        mergedHead = l1;
        mergedTail = l1;
        l1 = l1.next;
    } else {
        mergedHead = l2;
        mergedTail = l2;
        l2 = l2.next;
    }

    //Case 1 : l1 and l2 are both remaining
    while (l1 && l2) {
        var temp = null;
        if (l1.val < l2.val) {
            //store l1 in temp, advance l1
            temp = l1;
            l1 = l1.next;
        } else {
            //store l2 in temp, advance l2
            temp = l2;
            l2 = l2.next;
        }
        //connect tail to temp, which will be the smaller element, and advance tail
        mergedTail.next = temp;
        mergedTail = mergedTail.next;
    }

    //Case 1 : l1 is remaining, l2 is done
    if (l1) {
        mergedTail.next = l1;
    }

    if (l2) {
        mergedTail.next = l2;
    }

    return mergedHead;
};