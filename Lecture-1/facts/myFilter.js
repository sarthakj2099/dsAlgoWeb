function isPrime(n){
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3;i*i<=n;i+=2)
        if(n%i==0) return false;
    return true;
}

function myFilter(arr, callback){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i]))
            newArr.push(arr[i]);
    }
    return newArr;
}  
let arr=[2,6,17,28,46,68];
let ar1= myFilter(arr, isPrime);
console.log(ar1);