function exp(num){
    if(num%2==0) return num+1;
    else return num-1
}
function myMap(arr,transform){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let a=transform(arr[i]);
        newArr.push(a);
    }
    return newArr;
}

let arr=[2,6,17,28,46,68];

let ar1= myMap(arr, exp);
console.log(ar1);