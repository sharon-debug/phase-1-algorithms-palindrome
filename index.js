function isPalindrome(word) {
  // Write your algorithm here
  let len = word.length;
  for (let i = 0; i < len; i++) {
    if (word[i] === word[len - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}


/* 
  Add your pseudocode here
   1. Find the length of the input string.
  2. Traverse through the string.
  3. If the character at index i matches its
  "opposite number" in the string, return true.
  4. If the character at index i does not match its
  "opposite number" in the string, return false.
*/


/*
  Add written explanation of your solution here
  Add written explanation of your solution here
  The word[i] === word[length - 1 - i] evauluates each index and the
  matching index from the end of the string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
