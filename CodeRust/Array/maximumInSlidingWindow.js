/****COME BACK TO THIS SINCE I DONT GET THE SOLUTION


//brute force : scan all elements within window w every time it slides  ==> O(n * w);
  //use heap of size w : every time window moves, we need to remove one of the existing elements from the heap, AND add element(Each logn operation) ====> O(n*logn)
    //use doubly linked list :
      //-
const maximuminSlidingWindow = function(arr, window_size) {
  //result array
  let result = [];

  //throw error if window_size > arr.length
  if (window_size > arr.length) throw Error("Window size is greater than array size");

  let window_  = [];
  //
};


const arr = [-4, 2, -5, 3, 6];