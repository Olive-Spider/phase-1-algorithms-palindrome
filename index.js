function isPalindrome(word) {
  // Write your algorithm here
  // What is a palidrom?
  // What method will I use to achieve this?
  // In buit functions e.g. reverse(), 

  // string to array
  const arrayValue = word.split('');

  //reverse the array
  const reversedArray = arrayValue.reverse();

  //convert the array back to string
  reverseString = reversedArray.join('');

  if(word == reverseString){
    return true;
  }
  else {
    return false;
  }
}

const word = prompt('Enter a string: ');
isPalindrome(word);

/* 
  Add your pseudocode here
  Initialize a function called isPalidrome
  Write function with all the appropriate methods
  Write a loop
*/

/*
  Add written explanation of your solution here
  I declared a function called isPalindrome with the argument word
  I then declared a variable which converts the argument to an array using .split('')
  .reverse() reverses the array
  .join('') converts the array back to a string
  Finally compare the argument to the reverse and return true or false
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
