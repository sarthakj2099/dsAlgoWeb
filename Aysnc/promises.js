let fs = require("fs");

function promisify(path){
    let fileWillBeReadPromise = new Promise(function(succes,failure){
        fs.readFile(path, function(err, data){
            if(err){
                failure(err);
            }else{
                succes(data);
            }
        })
    })
    return fileWillBeReadPromise;
}

let fileWillBeReadPromise = promisify("f1.txt");

fileWillBeReadPromise.then(function(data){
    console.log("success");
})

fileWillBeReadPromise.catch(function(err){
    console.log(err);
})