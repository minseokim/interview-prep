
// Given base and n that are both 1 or more, compute recursively (no loops)
//  the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

// powerN(3, 1) → 3
// powerN(3, 2) → 9
// powerN(3, 3) → 27

const powerN = (base, exp) => {
  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    return (1/base) * powerN(base, exp+1);
  } else {
    return base * powerN(base, exp-1);
  }
};

console.log(powerN(2,4));