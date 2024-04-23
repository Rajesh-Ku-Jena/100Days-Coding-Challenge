// 13: Write a function that takes a string as input and returns    the count of vowels in that string. Consider "a","e","i","o","u" as vowels (both lowercase and uppercase)


const vowelCheck= (str) =>{
let vowels= ['a','e','i','o','u'];
let arr= str.toLowerCase().split("");
console.log(arr);
let count =0;
arr.map((ch) =>{
    if(vowels.includes(ch)){
        count++;
    }
})
return count;
}
console.log(vowelCheck("Hello worlds"));