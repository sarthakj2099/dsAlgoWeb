let request = require("request");
let fs = require('fs');
let cheerio = require("cheerio");
//console.log("before");
let leaderBoard=[];
let gcount=0;
request("https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results",function(err,res,html){
    if(err===null&&res.statusCode===200){
        parseHtml(html);
    }else if(res.statusCode===404){
        console.log("Invalid URL");
    }else {
        console.log(err);
        console.log(res.statusCode);
    }
})
//console.log("After")

function parseHtml(html){
    let d= cheerio.load(html);
    let cards= d(".cscore.cscore--final.cricket.cscore--watchNotes");
    for(let i=0;i<cards.length;i++){
        let matchType = d(cards[i]).find(".cscore_info-overview").html();
        let test= matchType.includes("ODI") || matchType.includes("T20");
        if(test== true){
            let anchor = d(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");

            let matchLink= `https://www.espncricinfo.com${anchor}`;
            goToMatchPage(matchLink);
        }
    }
    //console.log("complete");
}
function goToMatchPage(matchLink){
    gcount++;
    request(matchLink, function(err, res, html){
        if(err==null && res.statusCode==200){
            handleMatch(html);
            gcount--;
            if(gcount==0){
            console.table(leaderBoard);
            }
        }else if(res.statusCode == 404){
            console.log("Invalid URL");
        }else {
            console.log(err);
            console.log(res.statusCode);
        }
    })
}

function handleMatch(html){
    const d= cheerio.load(html);
    let format = d(".cscore.cscore--final.cricket .cscore_info-overview").html();
    let teams = d(".sub-module.scorecard h2");
    let innings = d(".sub-module.scorecard ");
    format= format.includes("ODI")?"ODI":"T20";
    //console.log(format);
    for(let i=0;i<innings.length;i++){
        let batsManRows=d(innings[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen");
        team= d(teams[i]).text();
        for(let br =0;br<batsManRows.length;br++){
            let batsMan = d(batsManRows[br]);
            let batsManName = batsMan.find(".cell.batsmen").text();
            let batsManRuns = batsMan.find(".cell.runs").html();
            handlePlayer(format, team, batsManName, batsManRuns);
            //console.log(batsManName+" "+batsManRuns);
            //console.log(batsManInfo);
        }
        //console.log('*************');
    }
    //console.log("#####################");
}

function handlePlayer(format, team, batsManName, batsManRuns){
   batsManRuns = Number(batsManRuns);
   for(let i=0;i<leaderBoard.length;i++){
       let p0bj = leaderBoard[i];
       if(p0bj.name==batsManName&& p0bj.team== team&&p0bj.format===format){
           p0bj.runs+= batsManRuns;
           return;
       }
   }
   let obj ={
       runs:batsManRuns,
       format:format,
       team:team,
       name: batsManName
   }
   leaderBoard.push(obj);
}