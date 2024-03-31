// Programming Question : Hash Tag Generator

// You are required to implement a function generateHash that generates a hash taf from a given input string ?
// The Hash tag should be constructed as follows::

// The input string should be converted in to Hash tag format, where each word is capitalized and concatenated together without spaces.
// If the length of the input is greater than 280 characters or if the input is empty or contains only whitespace, the function should return false.
// Otherwise the Function should return the generated hash tag prefix with #.



function generateHash(str){
    if(str.length >280 || str.trim().length === 0){
        return false
    }

    str= str.split(" "); // Here Convert String to Array
    str= str.map((ele) =>
        ele.replace(ele[0], ele[0].toUpperCase()));
    console.log(str);  // Capital the first letter of every word

    str= str.join("");
    console.log(str);
    str = `#${str}`;
    return str;
}
console.log(generateHash("my name is Rajesh kumar"));