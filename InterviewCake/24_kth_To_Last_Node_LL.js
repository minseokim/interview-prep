function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error('Impossible to find less than first to last node');
  }

  //starts at 1 since we need to count head as well
  let leftNode = head;
  let rightNode = head;

  for (let i = 0; i < k -1; i++) {
    if (!rightNode.next) {
      throw new Error('k is larger than length of list');
    }
    rightNode = rightNode.next;
  }

  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  return leftNode;
}