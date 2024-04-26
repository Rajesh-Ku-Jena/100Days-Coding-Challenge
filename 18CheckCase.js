// write a function to check if the character is UpperCase or not.

const checkCase = (character) =>{
    return character === character.toUpperCase();
}

console.log(checkCase("A"));

//  ***** Another coding

// const checkCase = (character) =>{
//     if(character.charCodeAt(0) >= 65 && character.charCodeAt(0)<=90){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkCase("A"));