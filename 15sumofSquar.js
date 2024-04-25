// write a function to calculate the sum of square of all element in an array?
//  example: [1,2,3]  and its answer is 14;
//  1*1+2*2+3*3

const sumOfSquare = (arr) =>{
    return arr.reduce((acc,curEle)=> acc= acc+(curEle*curEle),0)
}
console.log(sumOfSquare([1,2,3]));