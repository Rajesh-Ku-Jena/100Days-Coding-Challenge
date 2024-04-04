//  Write a function to determine whether a given string is a palindrome or not. A palindrom is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.


// Constraints

// The input string may contain letters, digits, spaces, punctuation and special character  
// The function should be case-insensetive, meaning "Racecar" and "racecar" should be consider same.
// Ignore the spaces, punctuation, and special character when determine if a string is a palindrome.
// The function should return true if the input string is palindrome and false otherwise.


//****** first programme */
// function isPalindrome(str){
//     str1 = str;
//     str= str.split("");
//     str.reverse();
//     str=str.join("");
//     console.log(str);
//     if(str === str1){
//         return true;
//     }else{
//         return false;
//     }
// }

//***Second Programme */

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"));

function isPalindrome(str){
    var a= "sdf";
    str = str.toLowerCase().replace(/\W/g, ""); //except [a-z, A-Z, 0-9] replacee all symbol special char to EMPTY"".
    var r_str= str.split("").reverse().join("");
    console.log(r_str);
   return r_str === str ?  true :  false;
}



