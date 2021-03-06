//second part of input, first 2(0,1) are locations to node js and file
let cmd= process.argv[2];
let viewFile= require("./commands/view");
let treefyFile= require("./commands/treefy");
let untreefyFile= require("./commands/untreefy");
let monitorFile= require("./commands/monitor");
let helpFile= require("./commands/help");

switch(cmd){
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefy(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "monitor":
        monitorFile.monitor(process.argv[3],process.argv[4]);
           break;
    case "help":
        helpFile.help(process.argv[3],process.argv[4]);
        break;
    default:
        console.log("Wrong command has been Called")
}