// // const fs = require('fs');
// // const path = require('path');
// // function copyFile(src, dest) {

// //     let readStream = fs.createReadStream(src);
  
// //     readStream.once('error', (err) => {
// //       console.log(err);
// //     });
  
// //     readStream.once('end', () => {
// //       console.log('done copying');
// //     });
  
// //     readStream.pipe(fs.createWriteStream(dest));
// //   }

// // copyFile("filename.txt","test3//filename.txt")

// //copy the $file to $dir2
// function copyFile (file, dir2){
//     //include the fs, path modules
//     var fs = require('fs');
//     var path = require('path');
  
//     //gets file name and adds it to dir2
//     var f = path.basename(file);
//     var source = fs.createReadStream(file);
//     var dest = fs.createWriteStream(path.resolve(dir2, f));
  
//     source.pipe(dest);
//     source.on('end', function() { console.log('Succesfully copied'); });
//     source.on('error', function(err) { console.log(err); });
//   };
  
//   //example, copy file1.htm from 'test/dir_1/' to 'test/'
//   copyFile('./filename.txt', './test/');


let fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");
module.exports.untreefy = function() {
  console.log("untreefy command has been Called");
  let src = arguments[0];
  let dest = arguments[1];

  untreefyFolder(src, dest);
  console.log("All files have been copied")
};

function untreefyFolder(src, dest) {
  let ans = fs.lstatSync(src).isDirectory();
  if (ans == false) {
    let uniqueName = uniqid();
    //copy file from src to dest=> and rename them
    fs.copyFileSync(src, path.join(dest, uniqueName));
  } else {
    let childrens = fs.readdirSync(src);

    // console.log(childrens);
    for (let i = 0; i < childrens.length; i++) {
      let cChPath = path.join(src, childrens[i]);
      untreefyFolder(cChPath, dest);
    }
  }
}