// write a function called calculateAvgerage that takes an array of numbers as input and returns the avarage of those numbers.


function calculateAvgerage(arr){
    const total= arr.reduce((acc, curEle) => acc+ curEle, 0 );
    console.log(total);
    return total / arr.length;

}

console.log(calculateAvgerage([5,10,2,8]));