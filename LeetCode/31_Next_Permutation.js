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

    if (i > 0) {

      while (j >= i) {
        if (nums[j] >= nums[i-1]) {
          break;
        }
        j--;
      }

      //swap only if i is greater than 0
      //This means we only swap if it's not the LAST permutation, since for the last permutatio we don't want to do anything until the reversing part.
      swap(nums, j, i-1);
    }

    console.log('i : ', i);
    console.log('j :', j);



    //reset j
    j = nums.length-1;
    //reverse from i till end
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
};

var nextPermutationAlt = function(nums) {
    var vioIndex = nums.length - 1;

    while(vioIndex > 0) {
        if(nums[vioIndex - 1] < nums[vioIndex]) {
            break;
        }
        vioIndex--;
    }

    if(vioIndex > 0) {
        vioIndex--;
        var first = nums.length - 1;
        while(first > vioIndex && nums[first] <= nums[vioIndex]){
            first--;
        }

        var temp = nums[vioIndex];
        nums[vioIndex] = nums[first];
        nums[first] = temp;

        vioIndex++;
    }

    var end = nums.length - 1;

    while(end > vioIndex) {
        temp = nums[end];
        nums[end] = nums[vioIndex];
        nums[vioIndex] = temp;

        end--;
        vioIndex++;
    }
};


const prevPermutation = function(nums) {

    let i = nums.length-1;
    let j = nums.length-1;


    while (i > 0) {
      console.log('nums[i-1] : ',nums[i-1]);
      console.log('nums[i] :', nums[i]);

      if (nums[i-1] >= nums[i]) {
        break;
      }
      i--;
    }


    // if (i <= 0) return false; //This is the LAST permutation since i is the largest number

    if (i > 0) {

      while (j >= i) {
        if (nums[j] <= nums[i-1]) {
          break;
        }
        j--;
      }

      //swap only if i is greater than 0
      //This means we only swap if it's not the LAST permutation, since for the last permutatio we don't want to do anything until the reversing part.
      swap(nums, j, i-1);
    }

    console.log('i : ', i);
    console.log('j :', j);

    //reset j
    j = nums.length-1;

    //reverse from i till end
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
};


const nums = [1,3,6,5,4];
prevPermutation(nums);
console.log(nums);