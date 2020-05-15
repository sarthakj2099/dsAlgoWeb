let request = require("request");
let fs = require('fs');
let cheerio= require("cheerio");
console.log("before");
request("https://www.espncricinfo.com/series/19322/commentary/1187683",function(err,res,html){
    if(err===null&&res.statusCode===200){
        // fs.writeFile("index.html",html,function(err){
        //     //console.log("Written file to disk");
        // })
        parseHtml(html);
    }else if(res.statusCode===400){
        console.log("Invalid URL");
    }else {
        console.log(err);
        console.log(res.statusCode);
    }
})
//console.log("After")

function parseHtml(html){
    let $ = cheerio.load(html);
    // dot before class, space before para
    let itemWrapper = $(".item-wrapper .description");
    //use cheerio even after extracting data, as cheerio is lost
    let item = $(itemWrapper[0]).text();
    console.log(item);
}