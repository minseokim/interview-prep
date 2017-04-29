const wildCard = function(s) {
  //examine each character in s, if we encounter our wildcard,
  //just start off two separate recursive calls, one where we add 0, and one where we add 1.
  //we use currentIndex to keep track of recursion levels.

  const result = [];

  //10?0
   //1
    //10
      //100
      //101
  const generate = function(currentIndex, generated) {
    console.log('currentIndex :', currentIndex);
    console.log('generated :', generated);
    console.log('----------------------');

    if (currentIndex === s.length) {
      result.push(generated);
      return;
    }

    //start adding characters
    if (s[currentIndex] === '?') {
      generate(currentIndex+1, generated.concat('0'));
      generate(currentIndex+1, generated.concat('1'));
    } else {
      generate(currentIndex+1, generated.concat(s[currentIndex]));
    }
  };
  generate(0, '');
  return result;
};

/*
"10?1"

g(0, '')
  g(1, '1')
    g(2, '10')

     g(3, '100')
      g(4, '1001')
     g(3, '101')
      g(4, '1001')
*/

console.log(wildCard("10??"));