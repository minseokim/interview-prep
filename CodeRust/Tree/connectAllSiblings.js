/*Given the root to a binary tree where each node has an additional pointer called sibling (or next), connect the sibling pointer to next node in the same level. Last node in each level should point to the first node of next level in the tree.*/

/*
Solution #1 :
Use queue, and a prev pointer to connect all siblings.
Once we dequeue, connect prev -> current(dequeued node)
Don't forget to dequeue
*/
const connectAllSiblings = function(root) {
  const queue = [];
  if (!root) return null;

  let prevNode = null;

  queue.push(root);

  while (queue.length > 0) {
    let currentNode = queue.shift();

    //if prevNode exists, connect it
    if (prevNode) {
      prevNode.next = currentNode;
    }

    prevNode = currentNode;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  //when we're done, prevNode and currentNode are both pointing to the 'last' node in the tree
  prevNode.next = null;

  return root;
};
