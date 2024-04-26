// write a function to check if a given string starts with a specific substring. not in case sensitive.
const startString = (str1, str2) =>{
return str1.toLowerCase().startsWith(str2.toLowerCase());
}

console.log(startString("Hello worlds", "hel"));