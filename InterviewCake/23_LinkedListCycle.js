function checkCycle(firstNode) {

    // start both runners at the beginning
    var slowRunner = firstNode;
    var fastRunner = firstNode;

    // until we hit the end of the list
    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // case: fastRunner is about to "lap" slowRunner
        if (fastRunner === slowRunner) {
            return true;
        }
    }

    // case: fastRunner hit the end of the list
    return false;
}


//Start both at head
//While loop condition checks two things : fastPointer exists(don't want it to be null, since then we know we've reached the end) and fastPointer.next exists(if fastPointer.next is the last node, we know we've reached the end as well)
//Compare if they are identical, so we're not comparing slowRunner & fastRunner's value but comparing their identity in memory


/*
Alternative solution using a set - O(n) time and O(n) space
*/
var hasCycle = function(head) {
    var nodeSeen = new Set();
    if (head !== null) {
        while (head) {
            if (nodeSeen.has(head)) {
                return true;
            }
            nodeSeen.add(head);
            head = head.next;
        }
    }
    return false;
};