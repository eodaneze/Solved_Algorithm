function high(x){
    const words = x.split(' '); // Split the input string into words
   let highestWord = '';
   let highestScore = 0;
 
   for (const word of words) {
     let wordScore = 0;
     for (const char of word) {
       // Calculate the score of each character based on its position in the alphabet
       const charScore = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
       wordScore += charScore;
     }
 
     if (wordScore > highestScore) {
       highestScore = wordScore;
       highestWord = word;
     }
   }
 
   return highestWord;
 }


//  https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// js algorithm to get the highest scoring wordd