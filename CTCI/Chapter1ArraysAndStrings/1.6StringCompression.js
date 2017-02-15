/*
lowercase and uppercase letters(a-z) as input, return aabccccaaa into a2b1c5a3. If the compressed string is not smaller than the original string, return original string.
*/

const stringCompression = (string) => {
  //we need to keep track of : last character added
  //count
  //once we encounter a new character, append it to a string
  let resultString = "";
  let lastCharacterAdded;
  let currentChar;
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    currentChar = string[i];
    //check if it's a new character, if so
      //append existing information to string
      //make it lasCharacterAdded,
      //re-start count at 1
    if (currentChar !== lastCharacterAdded) {
      resultString += lastCharacterAdded;
      resultString += count.toString();
      currentChar = lastCharacterAdded;
      count === 1;
    }
    count++;
  }


  return resultString.length > string.length ? resultString : string;
};
