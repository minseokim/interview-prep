const factorial = function(n) {
  const memo = {};
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = i * memo[i-1];
  }
  return memo[n];
};

const findKthPermutation = function(n, k) {

  let result = "";
  const list = [];

  for (let i = 1; i <= n; i++) {
    list.push(i);
  }

  const generate = function(k, input) {
    if (input.length === 0 || !k) {
      return;
    }

    const blockSize = factorial(input.length-1); // 3!

    //Get the index of the block that the permutation is in
    let selectedIndex = Math.floor((k-1) / blockSize); //selects block

    result+= input[selectedIndex];

    //splice out currentIndex element from input
    input.splice(selectedIndex, 1);

    //reset k by subtracting it from the # of (blocks * index)
    k = k - (blockSize * selectedIndex);

    generate(k, input);
  };

  generate(k, list);
  return result;
};

console.log(findKthPermutation(3, 2));