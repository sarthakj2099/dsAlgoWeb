const {exec}= require("child_process");
function takeRequest(data,success,failure){
    if(data%2==0)
        success();
    else 
        failure();
}

function success(){
    console.log("Your request was completed");
    //exec("calc");
    exec("start chrome www.facebook.com");
}
function failure(){

}
takeRequest(17, success, failure);
takeRequest(18,success,failure)