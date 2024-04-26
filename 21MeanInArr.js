// write a function called calculateMean() that takes an array of number as input and return the MEAN of those number.

// MEAN== Average of numbers 

const calculateMean= (arr) =>{
    let total=arr.reduce((acc,curEle)=> acc=acc+curEle,0);
    return total/arr.length;
}
console.log(calculateMean([10,20,30,55,36]));  // output is 30.2