/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    const result = [];

    const go = function(string, index) {
      if (string.length === digits.length) {
        result.push(string);
        return;
      }
      //iterate over options in current digit
      let currentOptions = map[digits[index]]; //[a,b,c]

      for (let i = 0; i < currentOptions.length; i++) {
        let currentLetter = currentOptions[i];
        go(string + currentLetter, index+1);
      }
    };

    go("", 0);

    return result;
};

console.log(letterCombinations("23"));