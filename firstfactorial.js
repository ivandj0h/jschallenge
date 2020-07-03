// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
// (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.


// first way
// function firstFactorial(num) { 
//     if (num <= 1) {
//       return 1;
//     } else {
//       return num * firstFactorial(num - 1);
//     }         
//   }

//   console.log(firstFactorial(3))

// second way
function firstFactorial(num) { 
    return num<=1?1:num*(firstFactorial(num-1)); 
  }

console.log(firstFactorial(3))