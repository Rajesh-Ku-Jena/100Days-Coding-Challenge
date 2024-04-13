// 12: Write a function that takes an array of integers as input  and remove any duplicates elements, returning a new array with only the unique elements.

const removeDuplicate = (arr) =>{
    // var newArr= new Set(arr);
    // var newArr= [new Set(arr)];
    var newArr= [...new Set(arr)];
    // console.log(newArr);
return newArr;
}

console.log(removeDuplicate([1,6,3,1,5,2,8,6,10,5]));