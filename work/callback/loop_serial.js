let fs = require("fs");

let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];
function readFiles(i) {
    if (i == files.length) {
        return;
    }
    fs.readFile(files[i], function (err, data) {
        console.log(`Data of file${i + 1} : ${data+ " "}`);
        readFiles(i + 1);
    })
}
readFiles(0)