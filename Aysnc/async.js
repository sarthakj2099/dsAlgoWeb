let fs= require("fs");
console.log("start");
fs.readFile("1.txt",function(err,data){
    console.log(data);
    function cb(){
        console.log("in");
    }
    cb();
})

function test(){
    fs.readFile("2.txt",function(err,data){
        console.log(data+" ");
    })
}
test();
// async function cb(){
//     console.log("A");
// }

// cb();

console.log("end");