var bunnyEars = function(num) {
  if (num === 0) {
    return 0;
  }

  return 2 + bunnyEars(num-1);
};

console.log(bunnyEars(2));