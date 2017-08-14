/*
Given a binary tree, print out all its root-to-leaf paths one per line.

Example :

Input:
[1 2 3 4 5 6 7]

Output:
1 2 4
1 2 5
1 3 6
1 3 7

*/

function printAllPaths(root, str) {
  str = str || "";

  if (!root) return;

  str += ` ${root.val}`;

  if (root.left) {
    printAllPaths(root.left, str);
  }

  if (root.right) {
    printAllPaths(root.right, str);
  }

  if (root.left === null && root.right === null) {
    console.log(str.slice(1));
  }

  str -= ` ${root.val}`;
}
