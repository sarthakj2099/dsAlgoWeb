let fs = require("fs");
let files = ["f1.txt", "f2.txt", "f3.txt","f4.txt","f5.txt","f6.txt","f7.txt"];
function readFiles(i){
    let file = fs.promises.readFile(files[i]);
    file.then(function(data){
        console.log(`File ${i+1} data: ${data.byteLength}`);
        if(i==files.length-1)
            return
        file = fs.promises.readFile(files[i+1]);
        readFiles(i+1, file);
    })
}
readFiles(0);