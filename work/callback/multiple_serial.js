let fs= require("fs");
fs.readFile("f1.txt", f1cb);

function f1cb(err, data) {
    console.log("F1: " + data.length);
    fs.readFile("f2.txt", f2cb);
}
function f2cb(err, data) {
    console.log("F2: " + data.length);
    fs.readFile("f3.txt", f3cb)
}
function f3cb(err, data) {
    console.log("F3: " + data.length)
}