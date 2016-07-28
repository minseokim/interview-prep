//highestProductOfThree.js

function highestProductOfThree(arg) {
    var highest = Math.max(arg[0], arg[1]);
    var lowest = Math.min(arg[0], arg[1]);
    var highestProductOf2 = arg[0] * arg[1];
    var lowestProductOf2 = arg[0] * arg[1];
    var highestProductOfThree = arg[0] * arg[1] * arg[2];
    var currentElement;
    
    for (var i = 2; i < arg.length; i++) {
      current = arg[i];
        
                      //check for highest Product Of 3
        highestProductOfThree = 
            Math.max(highestProductOfThree, current*highestProductOf2, current*lowestProductOf2);
        
       
        highestProductOf2 = 
            Math.max(highestProductOf2, current*highest, current*lowest);
        
        lowestProductOf2 = 
            Math.min(lowestProductOf2, current*lowest, current*highest);
        

          highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
    }
    return highestProductOfThree;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(highestProductOfThree([1,2,5,7,9]));
