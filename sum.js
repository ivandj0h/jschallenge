function LargestFour(arr) { 

  // code goes here  
var sum = arr.reduce(function(x, y) {
  return x + y
},0)
return sum;

}
   
// keep this function call here 
console.log(LargestFour(readline()));