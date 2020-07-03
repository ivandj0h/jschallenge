function LetterCapitalize(str) { 

    let newString = '';
    for (let i = 0, newWord = true; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }
        
        newWord =  (str[i] === ' ') ? true : false;
    }
         
    return newString;
}
   
// keep this function call here 
// LetterCapitalize(readline());
console.log(LetterCapitalize("ivandi djoh gah"));