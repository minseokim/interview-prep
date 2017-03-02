const checkIdenticalTree = function(treeA, treeB) {
  //base case : if theyre both null return true
  if (treeA === null && treeB === null) return true;

  //if theyre both not null
  if (treeA && treeB) {
    return (treeA.val === treeB.val)
      && checkIdenticalTree(treeA.left, treeB.left)
      && checkIdenticalTree(treeB.right, treeB.right);
  }

  //otherwise return false(One of them is null, or theyre unequal)
  return false;
};
