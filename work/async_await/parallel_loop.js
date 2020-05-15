let fs = require("fs");
let files = ["f1.txt","f2.txt","f3.txt","f4.txt","f5.txt","f6.txt","f7.txt"];
(async function (){
    let data=[];
    try{
        for(let i=0;i<files.length;i++){
            data[i]= fs.promises.readFile(files[i]);
        }
        for(let i=0;i<data.length;i++){
            data[i]= await data[i];
            console.log(`File ${i+1} : ${data[i].byteLength}`)
        }
    }
    catch(err){
        console.log(err);
    }
})();

