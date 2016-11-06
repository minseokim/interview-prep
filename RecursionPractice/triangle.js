
// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks,
//  the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication)
//  the total number of blocks in such a triangle with the given number of rows.

// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3

const triangle = (num) => {
  //if num is 1 or less, return num
  //else, add num to triangle(num-1)
  if (num <= 1) {
    return num;
  }

  return num + triangle(num-1);
};

console.log(triangle(5));