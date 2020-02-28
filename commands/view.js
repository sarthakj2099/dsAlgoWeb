let fs = require("fs");
let path=require('path');
module.exports.view= function(){
    //console.log("View command has been called")
    let src = arguments[0];
    let mode = arguments[1];
    if(mode=="-t"){
        viewAsTree(src);
    }else if (mode =="-f"){
        viewAsFlatFiles("",src);
    }else {
        console.log("Wrong parameter");
    }
};

function viewAsTree(src){
    //console.log("View tree is working");
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
                viewAsTree(path.join(src,items[i]));
            }
        
    }

}
function viewAsFlatFiles(intend,src){
    //console.log("View as flatfile is working")
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
                viewAsFlatFiles(intend+"    ",path.join(src,items[i]));
            }
        
    }
    
}