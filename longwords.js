/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.


Examples

Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love

*/

function LongestWord(sen) {

  let validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let maxLength = 0;
  let longestWord = '';

  for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
      let c = sen[i];
      if (validCharacters.includes(c)) {
          length++;
          word += c;
      } else {
          length = 0;
          word = '';
      }

      if (length > maxLength) {
          maxLength = length;
          longestWord = word;

      }
  }

return longestWord;

}
 
// keep this function call here 
// console.log(LongestWord(readline()));
console.log(LongestWord("i love dogs"));


// The Other Answer
/*
function LongestWord(sen) { 

  // code goes here
  sen = sen.split(" ")
  var longst = sen[0]

  for(i=0; i<sen.length; i++) {
    if(i == sen.length - 1) {
      return longst
    }
    else if(sen[i].length >= sen[i + 1].length) {
      longst = sen[i]
    }
    else {
      longst = sen[i + 1]
    }
  }
  // return sen; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
*/