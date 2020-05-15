fs= require("fs");


fs.readFile("f1.txt",function(err,data){
    if( data.byteLength >20){
        fs.readFile("f2.txt",function(err,data){
            if( data.byteLength >40){
                fs.readFile("f6.txt",function(err,data){
                    console.log("6 "+data);
                })
            }
            else{
                fs.readFile("f7.txt",function(err,data){
                    console.log("7 "+data);
                })
            }
        })
    }
    else{
        fs.readFile("f3.txt",function(err,data){
            if( data.byteLength <30){
                fs.readFile("f4.txt",function(err,data){
                    console.log("4 "+data);
                })
            }
            else{
                fs.readFile("f5.txt",function(err,data){
                    console.log("5 "+data);
                })
            }
        })
    }
  });