// write a function finMin that takes an array of number as input and return the minimum value find in the array.

const findMin = (arr) =>{
    return Math.min(...arr);
}

console.log(findMin([10,20,4,6,30,8,3,15,25,]))