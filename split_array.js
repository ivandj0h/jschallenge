// Here how to Split one Array into Two Arrays
const myArr = [1, 2, 4, 3, 7, 6, 5, 10, 8, 9];

// sorting the Array
myArr.sort((a, b) => a - b);
console.log(`The Array ${myArr}`);

// Split up the array
let mid = Math.floor(myArr.length / 2);

// This is the left part
let leftPart = myArr.slice(0, mid);

// This is the right part
let rightPart = myArr.slice(mid);

// Print Out to the console
console.log(`The left part of the array is ${leftPart}`);
console.log(`The right part of the array is ${rightPart}`);
