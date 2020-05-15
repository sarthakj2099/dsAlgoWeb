let fs = require("fs");

function cb(err,data){
  console.log(data+" ")
}

fs.readFile("f1.txt",cb);