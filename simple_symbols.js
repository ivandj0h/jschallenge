function SimpleSymbols(str) { 

    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        return false;
    }
    else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }
    else {
     return true; 
    }
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
//   SimpleSymbols(readline());
  console.log(SimpleSymbols("#"));