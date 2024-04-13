//  Write a function that takes a number as input and return the sum of its digits.


// 1st convert the number to ARRAY: we use Array.from(); 
// we use split(), if it is in string.



const sumOfDigit = (num) =>{
    let arr= Array.from(String(num), Number);
    console.log(arr);
    return arr.reduce((acc, currEle) => acc+=currEle, 0);
}

console.log(sumOfDigit(156786));