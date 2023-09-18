// Implement a function that checks if a string is a palindrome.

// A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards. To check if a string is a palindrome in JavaScript, you can create a function like this:

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string and compare it to the original
    const reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
  }
console.log(isPalindrome('daniel'));  
console.log(isPalindrome('racecar')); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 