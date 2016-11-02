var isPalindrome = function(head) {

    //approach 1 : use stack to push all nodes. traverse again, pop stack and compare.
    //approach 2 using recursion

    if (!head) {
        return true;
    }

    var original = head;
    var isPalindrome = true;

    var subroutine = function(head) {

        if (!isPalindrome) {
            return false;
        }

        if (!head) {
            return;
        }

        subroutine(head.next);

        if (original.val !== head.val) {
            isPalindrome = false;
        }

        original = original.next;
    };

    subroutine(head);
    return isPalindrome;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(5);

console.log(isPalindrome(head));