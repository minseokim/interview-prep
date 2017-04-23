/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*Let's say we have 1, 3, 6, 5, 4
    The next permutation in lexicographical order is 1,4,3,5,6. How did I know that?
    Well I examined the number right to left looking for an increasing sequence( 3 -> 6). I know that this is where number swaps will happen to find adjacent permutations.

    So step 1 : Go right to left, trying to find A[i-1] <= A[i]. We are finding the first decreasing sequence(right -> left)

    Then, we search right to left, trying to find the number that's JUST larger than A[i-1]. This is because that's the number that will come 'NEXT' in lexicographical order and replace the number A[i]. This number will exist on the right side of A[i-1].

    So step 2 : Go right to left, trying to find A[j] <= A[i-1], as long as j >= i. So in here we're trying to find the largest element that's SMALLER than A[i-1]. The maximum element to the right of A[i-1].

    Step 3. Swap A[i-1] and A[j].

    Step 4. Since we picked out the maximum to the right of A[i-1], the sequence to the right of A[i-1] will be in decreasing order. We simply REVERSE elements from A[i] to make it increasing order.
    */


const swap = function(list, a, b) {
  //we take care of -1 by adding list's length, this takes care of the last permutation edge case
  if (b < 0) {
    b = b + list.length;
  }

  if (a < 0) {
    a = a + list.length;
  }

  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;

}


const nextPermutation = function(nums) {

    let i = nums.length-1;
    let j = nums.length-1;

    //this loop breaks until we find nums[i-1] <= nums[i]
    while (i > 0) {
      if (nums[i-1] <= nums[i]) {
        break;
      }
      i--;
    }


    // if (i <= 0) return false; //This is the LAST permutation since i is the largest number

    while (j >= i) {
      if (nums[j] >= nums[i-1]) {
        break;
      }
      j--;
    }

    console.log('i : ', i);
    console.log('j :', j);


    swap(nums, j, i-1);


    //reset j
    j = nums.length-1;
    //reverse from i till end
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }

};

const nums = [6,5,4,3,2,1];
nextPermutation(nums);
console.log(nums);