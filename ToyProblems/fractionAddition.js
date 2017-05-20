//Find gcd, and lcm.

const greatestCommonDivisor = function(a, b) {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a%b);
  }
};

const leastCommonMultiple = function(a,b, gcd) {
  return gcd *
          (a/gcd) *
            (b/gcd);
};

const simplify = function(top, bottom) {
  let gcd = greatestCommonDivisor(top, bottom);
  let newTop = top/gcd;
  let newBottom = bottom/gcd;

  return `${newTop}/${newBottom}`;
};

const fractionAddition = function(exp) {
  let expArray = exp.split("+");

  let firstNum = expArray[0].split("/");
  let secondNum = expArray[1].split("/");

  let firstTop = Number(firstNum[0]);
  let firstBottom = Number(firstNum[1]);

  let secondTop = Number(secondNum[0]);
  let secondBottom = Number(secondNum[1]);

  let gcd = greatestCommonDivisor(firstBottom, secondBottom);
  let lcm = leastCommonMultiple(firstBottom, secondBottom, gcd);

  let newTop = ((lcm/firstBottom) * firstTop) + ((lcm/secondBottom) * secondTop);

  return simplify(newTop, lcm);
};

function fractionSum(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
      let currentExpression = str[i].split("+");
      let firstNum = currentExpression[0].split("/");
      let secondNum = currentExpression[1].split("/");

      let firstTop = Number(firstNum[0]);
      let firstBottom = Number(firstNum[1]);

      let secondTop = Number(secondNum[0]);
      let secondBottom = Number(secondNum[1]);

      let gcd = greatestCommonDivisor(firstBottom, secondBottom);
      let lcm = leastCommonMultiple(firstBottom, secondBottom, gcd);

      //compute top of resulting fraction
      let newTop = ((lcm / firstBottom) * firstTop) + ((lcm / secondBottom) * secondTop);

      //simplify fraction and push to result
      result.push(simplify(newTop, lcm));
  }

    return result;
}

const arr = ["722/148+360/176", "978/1212+183/183"];
// console.log(fractionAddition("722/148+360/176"));
// console.log(fractionAddition("978/1212+183/183"));
// console.log(fractionAddition("358/472+301/417"));
// console.log(fractionAddition("780/309+684/988"));
// console.log(fractionAddition("258/840+854/686"));
console.log(fractionSum(arr));