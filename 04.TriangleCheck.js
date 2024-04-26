//  Interview Question

// ? Write a function called checkTriangleType that takes three parameter representing the length of the sides of a triangle. the function should return string indicating the type of triangle: "equilateral", "isoscles" or "scalene".


// Todo the function should adhere to the following rules:
// ? If all the three sides are equal length, return "equilateral"
// ? If only two sides are equal length. return "isoscles"
// ? If all three side have different length, return "scalene"


function checkTriangleType(a,b,c){
if(a===b && b===c) return "equilateral";
if(a===b || b===c || c===a) return "isoscles";
return "scalene";
}


console.log(checkTriangleType(3,4,5)); 
console.log(checkTriangleType(3,5,5));
console.log(checkTriangleType(4,4,4));
