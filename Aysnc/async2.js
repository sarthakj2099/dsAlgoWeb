fs= require("fs");
function resolveAfter5Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter5Seconds();
    console.log(result);
    // expected output: 'resolved'
  }

  console.log("Start");
  fs.readFile("1.txt",function(err,data){
    console.log("1");
  });

  asyncCall();
  fs.readFile("2.txt",function(err,data){
    console.log("2");
  });
  fs.readFile("3.txt",function(err,data){
    console.log("3");
  });
  console.log("last line");