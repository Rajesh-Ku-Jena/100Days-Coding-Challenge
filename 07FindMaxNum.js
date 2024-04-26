// Write a function findMax that takes an array of number as input and return the maximum number in the array.


// ** First programme

// function findMax(arr){
//     arr = arr.sort((a,b) => a - b);
//     return arr.at(-1);
// }


console.log(findMax([1,5,3,9,2]));
console.log(findMax([-10,-5,-3,-9,-2]));
console.log(findMax([5]));

// *Second Programme

function findMax(arr){
    return Math.max(...arr); // spread operator.
}
