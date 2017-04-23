/*


You are given an empty set S. Write a program to process the following operations :
  add x : Include x to S
  remove x : Remove x from S
  Check x : Print 1 if x in S, 0 if not.
  toggle : If x in S, remove x, if x not in S, add it.
  all : Turn S into {1, 2, ... 20}
  empty : Turn S into an empty set.

  x ranges from 1 <= x <= 20
*/


const Set = function() {
  this.num = 0;
};

Set.prototype.add = function(x) {
  this.num = this.num | (1 << x);
};

Set.prototype.remove = function(x) {
  this.num = this.num & (~(1 << x));
};

Set.prototype.check = function(x) {
  let bitMask = (1 << x);

  if ((this.num & bitMask) === 0) {
    return false;
  } else {
    return true;
  }

};

Set.prototype.toggle = function(x) {
  this.num = this.num ^ (1 << x);
};

Set.prototype.all = function(n) {
  this.num = (1 << n) - 1;
  //now all numbers from 0 ~ n-1 are included in our set.
};

Set.prototype.empty = function() {
  s = 0;
};

const S = new Set();
S.add(4);
S.add(5);
S.toggle(6);
S.toggle(6);
S.toggle(5);

// console.log(S);
console.log(S.check(6));
console.log(S.check(5));
// console.log(S.check(3));
// console.log(S.check(2));
// console.log(S.check(1));


// S.remove(4);
// console.log(S.check(4));
console.log(S);
