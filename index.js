function isPalindrome(word) {
  // Write your algorithm here
  // iterate from beginning the middle
  for (let i = 0; i < word.length / 2; i++) {
    //check each letter to the corresponding last letter
    const j = word.length - 1 - i;
    // compare using strict inequality operator
    if (word[i] !== word[j]) {
      // if the letters dont match return false

      return false;
    }
  }
  // if all the letters match all the way upto the center
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning to the end of the word
  check each letter in the first to the corresponding last character
  if letters don't match return false ie not palindrome
  if letters match return true ie is a palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("oppo"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"));
}

module.exports = isPalindrome;