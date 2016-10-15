function deleteNode(nodeToDelete) {

    // get the input node's next node, the one we want to skip to
    var nextNode = nodeToDelete.next;

    if (nextNode) {

        // replace the input node's value and pointer with the next
        // node's value and pointer. the previous node now effectively
        // skips over the input node
        nodeToDelete.value = nextNode.value;
        nodeToDelete.next  = nextNode.next;

    } else {

        // eep, we're trying to delete the last node!
        throw new Error("Can't delete the last node with this method!");
    }
}