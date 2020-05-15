let fs = require("fs");
console.log("before");
let fileWillBeReadPromise = fs.promises.readFile("f1.html");

fileWillBeReadPromise.then(function (content){
    console.log(content+" ");
    console.log("finish");
})

fileWillBeReadPromise.catch(function(err){
    console.log(err);
})

console.log("After");