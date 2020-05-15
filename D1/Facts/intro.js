let number = 21;
for(let div =2; div *div <= number;div++){
    if(number%div==0){
        console.log("Number is not prime");
        return;
    }
}

console.log("Number is prime");