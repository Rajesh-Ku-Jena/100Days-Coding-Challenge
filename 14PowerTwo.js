// write a function called isPowerTwo that takes an integer number as input and return true if num is power of two and false other wise
const isPowerTwo= (num) =>{
    let power= false;
for(let i=1;i<num;i++){
    if(2**i === num) 
    {
        power= true;
        break;
    }
}
return power;
}

console.log(isPowerTwo(1024));
