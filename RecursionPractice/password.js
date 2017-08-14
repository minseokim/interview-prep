/*
Given a password of length n, where each character can be an alphabetical character (a ~ z), check if the password exists.
*/

function passwordExists(pw) {
  let foundPw = false;
  let nextLetter;
  let newStr;

  function recurse(generated) {
    if (generated.length === pw.length || foundPw) {
      if (pw === generated) foundPw = true;
      return;
    }

    for (let i = 97; i <= 122; i++) {
      nextLetter = String.fromCharCode(i);
      //Be sure to use .concat to create new string.
      recurse(generated.concat(nextLetter));
    }
  }

  recurse("");

  return foundPw === true ? true : false;
}

console.log(passwordExists("asf3")); //false;
console.log("abcdef"); //true
