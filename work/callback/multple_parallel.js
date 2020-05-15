let fs = require("fs");


fs.readFile("f1.txt", function (err, data) {
  console.log(data.byteLength);
})

fs.readFile("f2.txt", function (err, data) {
  console.log(data.byteLength);

})

fs.readFile("f3.txt", function (err, data) {
  console.log(data.byteLength);

})