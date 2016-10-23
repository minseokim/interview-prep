
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars2(num) {
  if (num === 0) {
    return 0;
  }
  if (num % 2 === 1) {
    return 3 + bunnyEars2(num-1);
  } else {
    return 2 + bunnyEars2(num-1);
  }

}

// console.log(bunnyEars2(0));
// console.log(bunnyEars2(1));
console.log(bunnyEars2(2));