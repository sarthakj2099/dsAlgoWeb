Array.prototype.myFilter = function(cb){
    let newArray=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i]))
            newArray.push(this[i]);
    }
    return newArray;
}


function isPrime(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3;i*i<=n;i++){
        if(n%i==0) return false;
    }
    return true;
}
let arr= [4,14,17,23,48,66];
console.log(arr.myFilter(isPrime));