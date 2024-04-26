// write a function findMedian() that takes an array of number and returns Median value.
// [3,4,6,7,9] Here the number of digit is odd--5. so the MEDIAN is the middle number 6.
// [3,5,7,9] Here the number of digit is even-- 4. so the Median is the avarage of 2 middle number is--6;


// array must be in sorting.

const findMedian = (arr) =>{
    arr= arr.sort((a,b)=> a-b);
    let length= arr.length;
    let mid= Math.floor(length/2);

    if(length%2 == 0){
        return (arr[mid]+arr[mid-1])/2;
    }else{
        return arr[mid]
    }
}

console.log(findMedian([3,4,6,7,9]));   // odd number of digit.
console.log(findMedian([3,5,7,9]));    //even number of digit.