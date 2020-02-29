//npm install request
let request = require('request');
let fs = require('fs');
let cheerio = require('cheerio');
request("https://www.espncricinfo.com/series/19322/scorecard/1187679", function (err, res, html) {
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
    //let tableHTML = co(".scorecard-section.bowling").html();
    let tableArr = co(".scorecard-section.bowling table tbody tr");
    let maxWicketTaker = "";
    let maxWickets = 0;
    //let anchors= tableArr.find("tbody tr")
    for (let i = 0; i < tableArr.length; i++) {
        let tdArr = co(tableArr[i]).find('td');
        let wicket = co(tdArr[5]).html();
        let bowlerName = co(tableArr[i])
            .find("td a")
            .html();
        if (wicket > maxWickets) {
            maxWicketTaker = bowlerName;
            maxWickets = wicket;
        }
    }
    console.log(maxWicketTaker + " " + maxWickets);
    fs.writeFileSync("table.html", tableArr);
    console.log("file written to disk");
}