let fs = require("fs");
function readFiles(name){
    let file = fs.promises.readFile(name);
    file.then(function(data){
        console.log(` data: ${data.byteLength}`);
    })
}
readFiles("f1.txt");