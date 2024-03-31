//  Programming Question: Longest Word in a String

// Q. write a function findlongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words, return the first one encountered.

// * Constraints :
    // The input string are may contain alphabetic, digits, space and punctuation.
    // The input string is non-empty.
    // The input string may contains multiple words separated by spaces.
    

// * Note :
    // if the input string is empty or contains only whitespace, the function should return false.
    // The function should ignore leading and trailling whitespaece when determining the longest word.





console.log(findLongestWord("My name is Rajesh Kumar Jena"));


function findLongestWord(str){
    if(str.trim().length === 0){ // trim= all the whitespace are remove
        return false;
    }else{
        
        var word= str.split(" "); // split function return the array of given input String
        // word= word.sort(); // sort the string in unicode fromat (A-Z) is first and then (a-z).

        word= word.sort((a,b) =>  a.length - b.length);  // console.log(word);
        longestWord= word.at(-1);
        // console.log(longestWord);

        // *sort in Ascending order [ 'My', 'is', 'name', 'Jena', 'Kumar', 'Rajesh' ] *** Here last index is largest
        
        //  word= word.sort((a,b) =>  b.length - a.length);  
        // longestWord= word[0];
        // console.log(longestWord);
        // console.log(word);
          // sort in Decending order [ 'Rajesh', 'Kumar', 'name', 'Jena', 'My', 'is' ] ***output


          return longestWord;
    }
}


