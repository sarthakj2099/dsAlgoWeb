
let arr= [4,14,17,23,48,66];

let m = arr.map(fun);

function fun(n){
    if(n%2==0)
        return n+1;
    else 
        return n-1;
}

console.log(m);
let filtered = m.filter(isPrime);

function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i*i <= num; i++)
        if (num % i === 0)
            return false;
    return true;
}


console.log(filtered);