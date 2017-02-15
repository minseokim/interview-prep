/*
With the isSubstring() method, determine given two strings s1 and s2 to check if s2 is a rotation of s1
*/

  //String.includes() is the substring method in JS

//key is given 'waterbottle'  and 'erbottlewat',
//if we concatenate s1 into waterbottlewaterbottle
//if we know s2 is a rotation of s1, s2 will always be a substring of s1s1.

  const stringRotation = (s1, s2) => {
    if (s1.length === s2.length) {
      let newString = s1 + s1;
      return newString.includes(s2);
    } 
    return false;
  };
