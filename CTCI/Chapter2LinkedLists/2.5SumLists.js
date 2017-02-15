/*
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in REVERSE order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

ex) (7->1->6) + (5->9->2) = 617 + 295 = 912
output ) 2->1->9   912.
*/

function Node(val) {
  this.data = val;
  this.next = null;
}

/*
Solution : "add" the two linked lists by keeping track of the carry
 7 -> 1 -> 6
 5 -> 9 -> 2

 2 -> 1(plus carry) => 9(plus carry)

 5->1->3   (315)
 4->6      (46)
 9->7->3   (379)   Works for different lengths as well
*/

const computeAddFromLinkedList = (head1, head2, carry) => {

  if (head1 === null && head2 === null && carry === 0) {
    return null;
  }

  let result = new Node();
  let value = carry;

  //add value separately one node at a time
  if (head1 !== null) {
    value += head1.data;
  }

  if (head2 !== null) {
    value += head2.data;
  }

  //set second digit as result's data
  result.data = value % 10;

  //Recurse
  if (head1 !== null | head2 !== null) {
    let moreNode = computeAddFromLinkedList(head1 === null ? null : head1.next, head2 === null ? null : head2.next, value >= 10 ? 1 : 0);
  }

  return result;
};

/*For testing*/
let num1 = new Node(7);
num1.next = new Node(1);
num1.next.next = new Node(6);

let num2 = new Node(5);
num2.next = new Node(9);
num2.next.next = new Node(2);


// const getNumFromLinkedList = (head) => {
//   if (!head) return null;
//
//   let digitCount = 0;
//   let number = 0;
//
//   while (head !== null) {
//     number += ((Math.pow(10, digitCount)) * head.data);
//     digitCount++;
//     head = head.next;
//   }
//
//   return number;
// };
//
// const turnNumIntoLinkedList = (num) => {
//
//   let numToString = num.toString();
//   let head = null;
//   let current;
//
//
//   for (let i = numToString.length-1; i >=0; i--) {
//     let currentNum = Number(numToString[i]);
//     if (!head) {
//       head = new Node(currentNum);
//       current = head;
//     } else {
//       current.next = new Node(currentNum);
//       current = current.next;
//     }
//   }
//   return head;
// };
//
//
//
// const returnSumLinkedList = (head1, head2) {
//   if (!head1 || !head2) {
//     return -1;
//   }
//
//   return turnNumIntoLinkedList(getNumFromLinkedList(head1) + getNumFromLinkedList(head2));
// };
