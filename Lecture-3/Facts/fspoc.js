let fs = require("fs");
let path=require('path');
//let space ="";
function displayList(src){
    let ans = fs.lstatSync(src).isDirectory();
    //console.log(" ");
    if(ans==false){
        console.log(src+"*");
    }else{
        //let arr=fs.readdirSync(src);
        //console.log(arr);
        console.log(src)
        const items=fs.readdirSync(src);
        //space+="    ";
        for (var i=0; i<items.length; i++) {
                //process.stdout.write(space);
                displayList(path.join(src,items[i]));
            }
        
    }
}

displayList("../src");