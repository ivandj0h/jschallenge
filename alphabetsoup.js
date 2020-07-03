/*
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function AlphabetSoup(str) { 

    var arrays = str.split("");
    var reversearrays = arrays.sort();
    var result = reversearrays.join("");  
     
    
      return result; 
             
}
       
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(AlphabetSoup("ivandi"));