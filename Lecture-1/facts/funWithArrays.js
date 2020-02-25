let arr=[2,6,17,28,46,68];

let ar1 = arr.map(function(num){
    if(num%2==0) return num+1;
    else return num-1;
})

let filtered = ar1.filter(isPrime)

function isPrime(n){
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3;i*i<=n;i+=2)
        if(n%i==0) return false;
    return true;
}

console.log(filtered);