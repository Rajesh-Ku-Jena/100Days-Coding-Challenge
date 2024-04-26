//  Most Important

// num= [1,2,2,3,1,4,2]; input array;
// outPut is ={'1':2, '2':3, '3':1, '4:'1} 1 occurance 2 times ...

// Q. Write a javascript function to count the occurance of each element in an array and store the counts in an object. the keys of object should represent of the number of times each element appears in the array.

const num= [1,2,2,3,1,4,2];
let count= {}

for(let i of num){
    count[i]= (count[i]||0) +1;
}

console.log(count);