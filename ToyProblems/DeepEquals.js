var deepEquals = function(apple, orange){

  //we only care if they're both objects, or both arrays
  if ((objectChecker(apple) && objectChecker(orange)) || (Array.isArray(apple) && Array.isArray(orange))) {
    if (Object.keys(apple).length !== Object.keys(orange).length) {
      return false;
    } else {
      for (var key in apple) {
        if (!deepEquals(apple[key], orange[key])) {
          return false;
        };
      }
    }
    return true;
  } else {
    return apple === orange;
  }
};

function objectChecker(arg) {
  var verify = Object.prototype.toString.call(arg).slice(8, -1);
  return verify === 'Object';
}

 var a = { b : { c : [1,2,3]}};
 var b = { b : { d : [1,2,3]}};
 var c = { b : { c : {d : 1}}};
 var d = { b : { c : {d : 1}}};
 console.log(deepEquals(c,d)); //true
 console.log(deepEquals(a,b)); // false