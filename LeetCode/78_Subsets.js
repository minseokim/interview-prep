// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
const subsets = nums => {
    const solutions = [];

    const generate = (startIndex, subset) => {
        solutions.push(subset.slice());

        for (let i = startIndex; i < nums.length; i++) {
            let currentElementToSelect = nums[i];
            subset.push(currentElementToSelect);
            generate(i + 1, subset);
            subset.pop();
        }
    };

    generate(0, []);
    return solutions;
};

console.log(subsets([1, 2, 3]));
