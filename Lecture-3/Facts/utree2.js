let fs = require("fs");
let path=require('path');
let s="";
function displayList(s,src,sr){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(s+sr+"*");
    }else{
        //let arr=fs.readdirSync(src);
        const items=fs.readdirSync(src);
        console.log(s+sr);
        s+="    ";
        for (var i=0; i<items.length; i++) {
                //process.stdout.write(space);
                //console.log(s+items[i]);
                displayList(s,path.join(src,items[i]),items[i]);
            }
        
    }
}

displayList(s,"../src/d10","d10");