//ProductOfEveryOtherIndex.js

function ProductOfEveryOtherIndex(arg) {
    var productSoFar = 1;
    var productsExceptCurrent = [];
    
    for (var i = 0; i < arg.length; i++) {
      productsExceptCurrent[i] = productSoFar;
        productSoFar *= arg[i];
    }
    console.log(productsExceptCurrent);
    
    productSoFar = 1;
    for (var j = arg.length-1; j >= 0; j--) {
      productsExceptCurrent[j] *= productSoFar;
        productSoFar *= arg[j]
    }
    
    
    return 'running with ' + productsExceptCurrent;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(ProductOfEveryOtherIndex([1,2,6,5,9]));
