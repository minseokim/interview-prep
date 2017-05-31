/*
Swap kth node from the beginning, with kth node from the end.

Test cases:

swapNodes(list({11, 4, 6, 7, 1, -99, 0, 2}), 2) ⇒ | 11 | -> | 0 | -> | 6 | -> | 7 | -> | 1 | -> | -99 | -> | 4 | -> | 2 | -> Nil

swapNodes(list({{11, 4, 2}), 2) ⇒ | 11 | -> | 4 | -> | 2 | -> Nil

swapNodes(list({11, 4, 2, 1}), 2) ⇒ | 11 | -> | 2 | -> | 4 | -> | 1 | -> Nil

swapNodes(list({11, 2, 4, 1}), 3) => | 11 | -> | 4 | -> | 2 | -> | 1 | -> Nil

swapNodes(list({3, 2, 2, 0}, 1) ⇒ | 0 | -> | 1 | -> | 2 | -> | 3 | -> Nil

swapNodes(list(NULL), 1) ⇒ Nil

*/

/*
Approach : Find the kth node from beginning first, and then find kth from end.

Then swap them - given a list with two nodes, we can swap them using the previous nodes, and the nodes.

*/

const swapper = function(head, prevOne, nodeOne, prevTwo, nodeTwo) {

  if (!nodeOne || !nodeTwo) return;

  //if prevOne is null, this means we're swapping the head node.
  if (!prevOne) {
    head = nodeTwo;
  } else {
    prevOne.next = nodeTwo;
  }

  // k > n-k
  if (!prevTwo) {
    head = nodeOne;
  } else {
    prevTwo.next = nodeOne;
  }

  //swap!
  let temp = nodeOne.next;
  nodeOne.next = nodeTwo.next;
  nodeTwo.next = temp;

  return head;
};


function swapNodes(pList, iK) {

  if (!pList || iK <= 0) return;

  let prevOne = null;
  let prevTwo = null;
  let temp = pList;
  let nodeOne = pList;
  let nodeTwo = pList;

  //find the kth node from beginning first.
  while (iK > 0 && temp) {
    prevOne = temp;
    temp = temp.next;
    iK--;
  }

  //at this point, nodeOne is at kth node from beginning.
  nodeOne = temp;

  //now we move nodeTwo(head) and temp together until temp reaches the end

  while (temp && temp.next) {
    prevTwo = nodeTwo;
    nodeTwo = nodeTwo.next;
    temp = temp.next;
  }

  return swapper(pList, prevOne, nodeOne, prevTwo, nodeTwo);
}
