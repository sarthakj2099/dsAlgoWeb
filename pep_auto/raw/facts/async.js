let fs = require("fs");
console.log("before");
fs.readFile("f1.html",function (err,content){
    if(err){
        console.log(err);
    }
    else{
        console.log(content+" ");
    }
    console.log("finish");
})

console.log("After");