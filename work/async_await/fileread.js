let fs = require("fs");

async function read(name){
    try{
        let file = await fs.promises.readFile(name);
        console.log(`Data: ${file.length}`);      
    }catch(err){
        console.log(err);
    }
}

read("f1.txt")