function exp(num){
    if(num%2==0) return num+1;
    else return num-1;
}

let arr=[2,6,17,28,46,68];


Array.prototype.myMap = function (cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        let a=cb(this[i]);
        newArr.push(a);
    }
    return newArr;
}
let ar1= arr.myMap(exp);
console.log(ar1);