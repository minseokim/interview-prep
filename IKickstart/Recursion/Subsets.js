//subsets.js

function clone (existingArray) {
   var newObj = (existingArray instanceof Array) ? [] : {};
   for (i in existingArray) {
      if (i == 'clone') continue;
      if (existingArray[i] && typeof existingArray[i] == "object") {
         newObj[i] = clone(existingArray[i]);
      } else {
         newObj[i] = existingArray[i]
      }
   }
   return newObj;
}

function subsets(input) {
    //get subsets, and check sum of each one
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
    
    return result;
}

console.log(subsets([1,2,3]));