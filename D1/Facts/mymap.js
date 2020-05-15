Array.prototype.mymap = function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        let a= cb(this[i]);
        newArr.push(a);
    }
    return newArr;
}

function fun(n){
    if(n%2==0)
        return n+1;
    else 
        return n-1;
}

let arr= [4,14,17,23,48,66];
console.log(arr.mymap(fun));