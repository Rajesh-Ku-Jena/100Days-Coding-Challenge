// Programming Question: Sort Array

// write a function to sort an array of numbers in Ascending Order

// todo requirement:

// ? The function should take an array of numbers as input
// ? It should return an new array with number sorted in ascending order.
// ? The original array should remain unchange.
// ? You are not allow to use the built-in sort() method.


var ar= [5,3,8,10,6,34,54];
function sortArry(c){
return c.sort((a, b) => a - b);

}

console.log(sortArry(ar));
