require("chromedriver");
let fs= require("fs");
let swd = require("selenium-webdriver");
let credentialsFile = process.argv[2];
let username, password,gModules;
let bldr = new swd.Builder();

let driver = bldr.forBrowser("chrome").build();
let credentialsWillBeReadPromise = fs.promises.readFile(credentialsFile);
credentialsWillBeReadPromise.then(function(credentials){
    credentials = JSON.parse(credentials);
    username= credentials.username;
    password = credentials.password;
    let googlePageWillBeOpenedPromise=driver.get("https://pepcoding.com/login");
    return googlePageWillBeOpenedPromise;
})
.then(function(){
    //console.log("Abhi tak kuch nhi hua");
    let emailWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=email]"));
    return emailWillBeSelectedPromise;
}).then(function(emailElement){
    let abraWillBeSendPromise = emailElement.sendKeys(username);
    return abraWillBeSendPromise;
}).then(function(){
    //console.log("Yha sb khatam hua hai");
    let passwordWillBeSelected=driver.findElement(swd.By.css("input[type=password]"));
    return passwordWillBeSelected;
}).then(function(passwordElement){
    let passwordWillBeEnteredPromise = passwordElement.sendKeys(password);
    return passwordWillBeEnteredPromise;
}).then(function(){
    let submitWillBeSelected = driver.findElement(swd.By.css("button[type=submit]"));
    return submitWillBeSelected;
}).then(function(submitbtn){
    let submitBtnWillBeEnteredPromise= submitbtn.click();
    return submitBtnWillBeEnteredPromise;

}).then(function(){
    let resourseWillBeClickedPromise = driver.findElement(swd.By.css(".resource a"));
    return resourseWillBeClickedPromise;
}).then(function(resourcePageAnchor){
    let rPageLinkPromise= resourcePageAnchor.getAttribute("href");
    return rPageLinkPromise;
}).then(function (rPageLink){
    let NavigateToCourseListPage = driver.get(rPageLink);
    return NavigateToCourseListPage;
}).then(function(){
    //console.log("Reached courses page");
    let siteOverlayWillBeSelectedPromise= driver.findElement(swd.By.css('#siteOverlay'));
    return siteOverlayWillBeSelectedPromise;
}).then(function(soe){
    let waitForOverlayToRemovePromise = driver.wait(swd.until.elementIsNotVisible(soe),10000);
    return waitForOverlayToRemovePromise;
}).then(function(){
    let courseWillBeLocatedPromise = driver.findElement(swd.By.css('#courseCard33'));
    return courseWillBeLocatedPromise;
}).then(function(courseCard){
    let courseCardWillBeClickedPromise = courseCard.click();
    return courseCardWillBeClickedPromise;
}).then(function(){
    let lisTabToBeLocatedPromise= driver.wait(swd.until.elementsLocated(swd.By.css(".lis.tab")),10000);
    return lisTabToBeLocatedPromise;
}).then(function(){
    let ModulesWillBeSelectedPromise = driver.findElements(swd.By.css(".lis.tab"));
    return ModulesWillBeSelectedPromise;
}).then(function(modules){
    gModules= modules;
    let moduleTextPromiseArr=[];
    for(let i=0;i<modules.length;i++){
        let moduleNamePomise= modules[i].getText();
        moduleTextPromiseArr.push(moduleNamePomise);
    }
}).then(function(AllModulesTest){

})
.catch(function(err){
    console.log(err);
})

// googlePageWillOpenedPromise.catch(function(err){
//     console.log(err);
// })

// function goToQuestionPage(question){
//     return new Promise(function(resolve, reject){
//         let waitPromise = willWaitForOverlay();
//         waitPromise
//             .then(function(){
//                 let willClickModule = navigationHelper(question.module,".lis.tab");
//                 return willClickModule;
//             }).then(willWaitForOverlay)
//             .then(function(){
//                 let willClickLecture = navigationHelper(question.lecture,".collection-item");
//                 return willClickLecture;
//             }).then(willWaitForOverlay)
//             .then
//     })
//}