let fs = require("fs");

(async function (){
    try{
        let file1 = await fs.promises.readFile("f1.txt");
        console.log(`Data1: ${file1.length}`);
        let file2 = await fs.promises.readFile("f2.txt");
        console.log(`Data2: ${file2.length}`);  
        let file3 = await fs.promises.readFile("f3.txt");
        console.log(`Data3: ${file3.length}`);      
    }catch(err){
        console.log(err);
    }
})();