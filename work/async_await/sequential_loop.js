let fs = require("fs");
let files = ["f1.txt","f2.txt","f3.txt","f4.txt","f5.txt","f6.txt","f7.txt"];

async function readFile(i){
    if(i==files.length)
        return;
    (async function(){
        try{
            let file = await fs.promises.readFile(files[i]);
            console.log(`F${i+1} Data: ${file.length}`);
            readFile(i+1);        
        }catch(err){
            console.log(err);
        }
    })()
}

readFile(0);