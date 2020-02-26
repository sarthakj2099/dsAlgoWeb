let fs = require("fs");
let path=require('path');
//let space ="";
function displayList(intend,src){
    let ans = fs.lstatSync(src).isDirectory();
    //console.log(" ");
    if(ans==false){
        console.log(intend+path.basename(src)+"*");
    }else{
        //let arr=fs.readdirSync(src);
        //console.log(arr);
        console.log(intend+path.basename(src))
        const items=fs.readdirSync(src);
        //space+="    ";
        for (var i=0; i<items.length; i++) {
                //process.stdout.write(space);
                displayList(intend+"    ",path.join(src,items[i]));
            }
        
    }
}

displayList("","../src/d10");