//  Write a function arraEqual thats take two array arr1 and arr2 ?  as input and return true if array are equal (i.e contain the same element in the same order), and false otherwies

function arrayAreEqual(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }else{
       return arr1.every((currentV, index) => currentV == arr2[index] );
        
    }
    
}
console.log(arrayAreEqual([10,20,30],[10,20]));
