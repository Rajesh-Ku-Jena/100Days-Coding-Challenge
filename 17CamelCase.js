// write a function to convert a string to Camelcase
// example: "hello world". output- helloWorld

const camelCase = (str) =>{
str=str.trim().split(" ");
str= str.map((curEle, index)=>{
    if(index === 0) 
    {
        return curEle.toLowerCase(); 
    }
    else{
        return curEle.charAt(0).toUpperCase()+ curEle.slice(1).toLowerCase();
    }
})
// console.log(str);
return str.join("");
}

console.log(camelCase("Hello world raJEsH"));