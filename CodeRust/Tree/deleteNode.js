function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const findMin = function(root) {
    if (!root) return null;

    while (root.left) {
        root = root.left;
    }

    return root;
};

const deleteNode = function(root, key) {

    if (!root) return root;

    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val === key) {
        //Case 1 : leaf node
        if (!root.left && !root.right) {
            root = null;
        }

        else if (!root.left) {
            root = root.right;
        }

        else if (!root.right) {
            root = root.left;
        }

        else {
            let minInRight = findMin(root.right);
            //copy minInRight's value into root
            root.val = minInRight.val;

            root.right = deleteNode(root.right, minInRight.val);
        }
    }
    console.log('root :', root);
    return root;
};

const newTree = new TreeNode(5);
newTree.left = new TreeNode(3);
newTree.right = new TreeNode(6);
newTree.left.left = new TreeNode(2);
newTree.left.right = new TreeNode(4);
newTree.right.right = new TreeNode(7);

const treeOne = new TreeNode(0);

console.log(deleteNode(treeOne, 0));