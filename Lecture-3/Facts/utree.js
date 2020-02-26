let fs = require("fs");
let path=require('path');
let s="";
function displayList(s,src){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans==false){
        //console.log(src+"*");
    }else{
        //let arr=fs.readdirSync(src);
        //console.log(arr);
        //console.log(src)
        const items=fs.readdirSync(src);
        s+="    ";
        for (var i=0; i<items.length; i++) {
                //process.stdout.write(space);
                console.log(s+items[i]);
                displayList(s,path.join(src,items[i]));
            }
        
    }
}

displayList(s,"../src");