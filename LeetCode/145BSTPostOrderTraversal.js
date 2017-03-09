/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //Recursive Solution
const postorderTraversal = function(root) {
    const stack = [];

    //left-right-root
    if (!root) return stack;

    const helper = (root) => {
        if (root !== null) {
            helper(root.left);
            helper(root.right);
            stack.push(root.val);
        }
    };

    helper(root);

    return stack;
};

//Iterative Solution
const postOrderTraversal = function(root) {
    const result = [];

    if (!root) return result;

    const stack = [];
    let node = root;
    let visited = null;

    while (stack.length || node !== null) {
        //Case 1 : Node exists, push to stack and go left
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            //peek the top of stack
            node = stack[stack.length-1];
            //if it hasn't been visited, go right
            if (node.right !== null && node.right !== visited) {
                node = node.right;
            } else {
                result.push(node.val);
                visited = node;
                //pop from stack(go up one level)
                stack.pop();
                //set node to null, since we've stored the parent in our stack already
                node = null;
            }
        }
    }

    return result;
};




//Alternative Solution : Modify Pre-Order to go Right >> Root >> Left  then reverse the result
const postOrderTraversal = function(root) {
    let current = root;
    const result = [];
    const stack = [];

    while (current || stack.length) {
        if (current !== null) {
            stack.push(current);
            current = current.left;
        } else {
            //check top's right
            let temp = stack[stack.length-1].right;
            if (temp === null) {
                //this means temp is a leaf node
                temp = stack.pop();
                //push to result
                result.push(temp.val);

                //Pop and push right children
                while (stack.length && temp === stack[stack.length-1].right) {
                    temp = stack.pop();
                    result.push(temp.val);
                }
            } else {
                current = temp;
            }
        }
    }
    return result;
};

