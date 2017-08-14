var hasPathSum = function(root, sum) {
    let addedSoFar = 0;
    let pathExists = false;

    const dfs = root => {
        if (!root || pathExists) {
            return;
        }
        addedSoFar += root.val;

        if (root.left === null && root.right === null && addedSoFar === sum) {
            console.log("found");
            pathExists = true;
            return;
        }
        dfs(root.left);
        dfs(root.right);

        addedSoFar -= root.val;
    };

    dfs(root);
    return pathExists;
};
