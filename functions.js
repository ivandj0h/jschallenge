// here are some of very simple examples of how the function are works

// create the function with argument
const sayHello = (argument) => argument;

// Print Out to the console
console.log(sayHello("Good Morning"));

// create the function with two arguments
const greet = (greeting, object) => {
  return `Hello ${object}, ${greeting}...how are you today?`;
};

// Print Out to the console
console.log(greet("Good Morning", "ivandi"));

// ------------------LINE BREAK------------------ //
console.log("------------------LINE BREAK------------------");

// Array Initialization
const oldArray = [4, 5, 6];

// Concatenate the Array
const arrayConcat = oldArray.concat([1, 2, 3]);

// Print Out to the console and reverse
console.log(`Old Array : [${oldArray}]`);
console.log(`New Array : [1,2,3]`);
console.log(`Combine two arrays : [${arrayConcat.reverse().sort()}]`);

// ------------------LINE BREAK------------------ //
console.log("------------------LINE BREAK------------------");
