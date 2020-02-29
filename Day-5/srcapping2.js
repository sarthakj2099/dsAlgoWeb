//npm install request
let request = require('request');
let fs = require('fs');
let cheerio = require('cheerio');
let seriesID = process.argv[2];
request("https://www.espncricinfo.com/series/19322/commentary/1187679", function (err, res, html) {
    //err is error, res is response and html is that html page
    //200 code is correct status code
    if (err == null && res.statusCode == 200) {
        fs.writeFileSync("abc.html", html);
        parseHTML(html);
        // 404  is page nor found
    } else if (res.statusCode == 404) {
        console.log("Page not found");
        //else what uis error and its status code
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
});

//const $ =cheerio.load(abc.html);
function parseHTML(html) {
    console.log("Parsing HTML");
    let co = cheerio.load(html);
    let lastCommentry = co(".item-wrapper .description").html();
    console.log("file written to disk");
    fs.writeFileSync("commentry.html",lastCommentry);
}