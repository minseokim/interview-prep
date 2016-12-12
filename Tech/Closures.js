Closures

Closures are functions that refer to independent (free) variables. 
In other words, the function defined in the closure 'remembers' the environment in which it was created.
A function is return by another function.

/-----------------------------------------------------------------------/

var name = function(lastName) {
  return function fullname(firstname) {
    debug(firstname +' '+lastName);
  }
}

//var deswarte = name('deswarte');
//deswarte('renan'); renan deswarte


/-----------------------------------------------------------------------/

Two one sentence summaries:

- a closure is the local variables for a function — kept alive after the function has returned, or
- a closure is a stack-frame which is not deallocated
when the function returns (as if a 'stack-frame' were malloc'ed instead of being on the stack!).
The following code returns a reference to a function:

function sayHello2(name) {
    var text = 'Hello ' + name; // Local variable
    var sayAlert = function() { alert(text); }
    return sayAlert;
}
var say2 = sayHello2('Bob');
say2(); // alerts "Hello Bob"


/-----------------------------------------------------------------------/


function showName (firstName, lastName) { 
  ​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
    ​function makeFullName () {         
      ​return nameIntro + firstName + " " + lastName;     
    }
    ​
    ​return makeFullName (); 
  } 
  ​
showName ("Michael", "Jackson"); // Your name is Michael Jackson 

/-----------------------------------------------------------------------/

function celebrityName (firstName) {
  var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
    function lastName (theLastName) {
      return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
  }
  ​
​var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​
​
​// The closure (lastName) is called here after the outer function has returned above​
​// Yet, the closure still has access to the outer function's variables and parameter​
mjName ("Jackson"); // This celebrity is Michael Jackson 

