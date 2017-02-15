/*
Implement a function to check if a linked list is a palindrome
*/

function Node(val) {
  this.data = val;
  this.next = null;
}

/*
Use stack, but with slowrunner and fastrunner
all we have to do is store first half of the list
*/
const checkIfPalindrome = (head) => {
  const stack = [];

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    stack.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }

  //so far we've stored the first half of the linked list in our stack

  //if there are odd elements, we need to skip the middle element to start comparing from second half of L.L.
  if (fast !== null) {
    slow = slow.next;
  }

  //iterate till the end of the list
  while (slow !== null) {
    let top = stack.pop();

    //if values are different, return false immediately
    if (top.data !== slow.data) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};

/*
Use recursion
*/
const checkIfPalindromeRecurse = (head) => {
  //'start' that will be used as scope variable
  let start = head;
  let isPalindrome = true;

  let subroutine = (head) => {
    if (!isPalindrome) {
      return false;
    }

    //base case
    if (head === null) return;

    //recurse till we reach end
    subroutine(head.next);

    //compare
    if (head.data !== start.data) {
      isPalindrome = false;
    }

    //move start pointer
    start = start.next;
  };

  subroutine(head);
  return isPalindrome;
};
