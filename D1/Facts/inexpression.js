let greater = function sayHi(){
    console.log("Hello All");
    console.log("all fn are var");
}

greater();


function lib(number){
    for(let div =2;div*div<= number;div++){
        if(number%div==0)
            return false;
    }
    return true;
}

let ans= lib(21);
if(ans==true){
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}

let {exec} = require("child_process")

function framework(data, scb, fcb){

    for(let div=2;div*div<=data;div++){
        console.log();
        if(data%div==0){
            fcb();
            return;
        }
    }
    scb();
}

function success(){
    console.log("Number is prime");
    exec("calc");
}

function failure(){
    console.log("Number is not prime");
    exec("start chrome");
}

framework(21,success,failure)