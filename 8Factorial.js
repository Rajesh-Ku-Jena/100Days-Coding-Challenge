// Write a function factorial that takes a non- negetaive integer num as input and returns its factorial. the factorial of non-negetive integer n, denotaed as n!, is the product of all positive integer less than or equal to n. The factorial of 0 is defined as 1.

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6
// factorial(4) = 24
// factorial(5) = 120


function factorial(num){
    fact=1;
    for(var i=1; i<=num; i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));