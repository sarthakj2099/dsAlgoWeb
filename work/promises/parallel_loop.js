let fs = require("fs");
let files = ["f1.txt", "f2.txt", "f3.txt","f4.txt","f5.txt","f6.txt","f7.txt"];

for(let i=0;i<7;i++){

    let file = fs.promises.readFile(files[i]);
    file.then(function(data){
        console.log(`File ${i+1} data: ${data.byteLength}`);
    })
}
