let fs=require("fs");

let f1promise=fs.promises.readFile("f1.txt");
f1promise.then(function(data){
    console.log("File 1 data:"+data.length);
    if(data.length>20){

        let f2promise=fs.promises.readFile("f2.txt");
        f2promise.then(function(data){
        console.log("file 2 data:"+data.length);
        if(data.length>40){

            let f6promise=fs.promises.readFile("f6.txt");
            f6promise.then(function(data){
            console.log("file 6 data:"+data.length);
        })
        }
        else{

            let f7promise=fs.promises.readFile("f7.txt");
            f7promise.then(function(data){
            console.log("file 7 data:"+data.length);
        })
        }
       
    })
        
    }
    else{

        let f3promise=fs.promises.readFile("f3.txt");
        f3promise.then(function(data){
        console.log("file 3 data:"+data.length);
        if(data.length<30){

            let f4promise=fs.promises.readFile("f4.txt");
            f4promise.then(function(data){
            console.log("file 4 data:"+data.length);
            })
        }
        else{

            let f5promise=fs.promises.readFile("f5.txt");
            f5promise.then(function(data){
            console.log("file 5 data:"+data.length);
            })
        }
        })
    }
}).catch(function(err){
    console.log(err);
})