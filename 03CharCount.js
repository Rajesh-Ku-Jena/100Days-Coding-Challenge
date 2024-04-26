// Interview Question: count Occurrences of Character

// ! Task
// ? write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// console.log(countChar("MissIssippi", "I")); // output:4

// to do constraints:
// the function should be case sensitive.
// the function should be handle lowercase and uppercase.
//  the character parameter can be any printable ASCII character()


const countChar= (str,ch) =>{
    var str= str.toLowerCase();
    var ch= ch.toLowerCase();

    str= str.split("");
    var c=0;
    for (const x in str) {
        if(str[x]=== ch){
            c++;
        }
       
    }
    return c;
}
console.log(countChar("MissIssippi","I"));
