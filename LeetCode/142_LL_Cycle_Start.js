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
var detectCycle = function(head) {
    if (!head) {
        return null;
    }

    var fast = head;
    var slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            break;
        }
    }

    if (!fast || !fast.next) {
        return null;
    }

    //finding length of cycle
        //initialize counter, move fast one at a time. Once we reach the anchor again, we have the length
    let counter = 0;
    while (fast && fast.next) {
        fast = fast.next;
        counter++;
        if (fast === slow) {
            break;
        }
    }

    var p = head;
    while (p !== fast) {
        p = p.next;
        fast = fast.next;
    }

    return p;
};