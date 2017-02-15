/*
3 types of edits on strings : Insert character, remove character, replace character.
Given two strings, check if they are 'one edit' or 'zero edits' away
*/

//pale ple
//bale pale
//pale pales
//cat

/*
the words have to be 'in order'
We can see which case the strings fall into(replace, remove, add)
by comparing string lengths
Then we invoke each function for each case
*/

const checkReplace = (str1, str2) => {
  //
  let diffChar = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffChar++;
    }
  }
  return diffChar <= 1;
};

//check if you can insert a character in str1 to make str2
const checkAdd = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;

  //ale   pale
  //car   rock
  while (index1 < str1.length && index2 < str2.length) {
    //characters are different, see if u can insert char into str1 to make str2
    if (str1[index1] !== str2[index2]) {
      //they have to be equal to be one edit away
      if (index1 !== index2) {
        return false;
      }
      str2++;
    } else {
      index1++;
      index2++;
    }
    return true;
  }
};

const checkOneAway = function(str1, str2) {
  let lengthDif = str1.length - str2.length;

  if (Math.abs(lengthDif) > 1) return false;

  //case1 : replace
  if (lengthDif === 0) {
    return checkReplace(str1, str2);
  } else if (lengthDif === 1) {
    //str1.length is str2.length+1, Case 2: remove
    return checkAdd(str1, str2);
  } else if (lengthDif === -1) {
    //Case 3 : Add
    return checkAdd(str2, str1);
  }
};
