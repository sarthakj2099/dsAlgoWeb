let fs= require("fs");

let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];

(async function(){
    let d1= await fs.promises.readFile(files[0]);
    console.log("file1: "+d1+" ");
    if(d1.length>20){
        let d2= await fs.promises.readFile(files[1]);
        console.log("file 2: "+d2+" ");
        if(d2.length>20){
            let d4= await fs.promises.readFile(files[3]);
            console.log("file 4: "+d4+" ");
        }
        else{
            let d5= await fs.promises.readFile(files[4]);
            console.log("file 5: "+d5+" ");
        }
    }
    else{
        let d3= await fs.promises.readFile(files[2]);
        console.log("file 3: "+d3+" ");
        if(d3.length>20){
            let d6= await fs.promises.readFile(files[5]);
            console.log("file 6: "+d6+" ");
        }
        else{
            let d7= await fs.promises.readFile(files[6]);
            console.log("file 7: "+d7+" ");
        }
    }
})();