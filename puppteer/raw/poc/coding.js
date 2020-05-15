let fs = require("fs");
let puppeteer = require('puppeteer');

let cfile = process.argv[2];
// let pageToLike = process.argv[3];
// let numPosts = parseInt(process.argv[4]);

(async function () {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized', '--disable-notifications', '--incognito']
    });

    let contents = await fs.promises.readFile(cfile, 'utf-8');
    let obj = JSON.parse(contents);
    let user = obj.user;
    let pwd = obj.pwd;

    let pages = await browser.pages();
    let page = pages[0];
    page.goto('https://dukaan.codingblocks.com/mycart', {
        waitUntil: 'networkidle2'
    });
    // await page.click(".button-solid.button-orange.ml-4");
    
    // page.goto('https://account.codingblocks.com/login', {
    //     waitUntil: 'networkidle2'
    // });
    await page.waitForSelector('.input-text.icon.user-bg', {
        visible: true
    });

    await page.type('.input-text.icon.user-bg', user);
    await page.type('.input-text.icon.fingerprint-bg', pwd);
    await page.click(".button-solid.lg");
    await page.waitForSelector("#couponInput", {
        visible: true
    });
    // await page.type("#couponInput","dnjje");
    // await page.click("#applyCouponButton");
     //Try until this class is visible ".font-xs.bold"
    genererate("");
    async function genererate(sfs){
        if(sfs.length==2){
            await page.type("#couponInput",sfs);
            await page.click("#applyCouponButton");
            return;
        }
        for(let i=0;i<=9;i++){
            genererate(sfs+i);
        }
        
        for(let n=0;n<26;n++){
            genererate(sfs+ String.fromCharCode(65 + n) )
        }
    }
    
})();

