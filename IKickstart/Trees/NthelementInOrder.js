//Given a BST, find the Nth element

var kthSmallest = function(root, k) {
  let number = 0;
  let count = k;

  const inOrderRecurse = root => {
    if (root.left) inOrderRecurse(root.left);

    //we've reached the leftMost node, start decrementing count
    count--;

    //process, and count is 0(we've found our node)
    if (count === 0) {
      number = root.val;
      return;
    }

    if (root.right) inOrderRecurse(root.right);
  };

  inOrderRecurse(root);
  return number;
};
