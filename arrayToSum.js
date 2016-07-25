// arrayToSum.js
// using recursion, check if any sequences of an array sum to a target number(Same as subsets problem)

function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function arrayToSum(input, targetNum) {
    //get arrayToSum, and check sum of each one
    var result = [[]];
    
    var subroutine = function(index) {
        if (index === input.length) {
            return;
        } else {

            var duplicate = JSON.parse(JSON.stringify(result));

            for (var i = 0; i < duplicate.length; i++) {
                duplicate[i].push(input[index]);
            }

            result = result.concat(duplicate);

            subroutine(index+1);
        }
    };

    subroutine(0);
    
    for (var j = 0; j < result.length; j++) {
      if (getSum(result[j]) === targetNum) {
        return true;
      }
    }

    return false;
}

console.log(arrayToSum([1,2,3, -6, 7, -42], -37));