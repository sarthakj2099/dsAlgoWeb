let fs = require("fs");
function readFiles(name){
    let file1 = fs.promises.readFile(name);
    file1.then(function(data){
        console.log(` data: ${data.byteLength}`);
        let file2= fs.promises.readFile("f2.txt");
        file2.then(function(data){
            console.log(` data: ${data.byteLength}`);
        })
    })
}
readFiles("f1.txt");