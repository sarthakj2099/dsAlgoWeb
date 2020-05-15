let fs = require("fs");

let file1 = fs.promises.readFile("f1.txt");
file1.then(function(data){
    console.log(` data1: ${data.byteLength}`);
})

let file2 = fs.promises.readFile("f2.txt");
file2.then(function(data){
    console.log(` data2: ${data.byteLength}`);
})
let file3 = fs.promises.readFile("f3.txt");
file3.then(function(data){
    console.log(` data3: ${data.byteLength}`);
})