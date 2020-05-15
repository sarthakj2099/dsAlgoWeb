let request = require("request");
let fs = require('fs');
let cheerio= require("cheerio");
console.log("before");
request("https://www.espncricinfo.com/series/19322/scorecard/1187683",function(err,res,html){
    if(err===null&&res.statusCode===200){
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
    let bowlers = $(".scorecard-section.bowling table tbody tr");
    let mostWIckets=0;
    let maxWicketBowler="";
    for(let i=0;i<bowlers.length;i++){
        let bowlerName = $($(bowlers[i]).find("td")[0]).text();
        let wickets = $($(bowlers[i]).find("td")[5]).text();
        if(wickets>mostWIckets){
            mostWIckets = wickets;
            maxWicketBowler = bowlerName;
        }
    }
    console.log(maxWicketBowler+" "+mostWIckets);
}