let fs = require("fs");
let puppeteer = require('puppeteer');

let cfile = process.argv[2];
let pageToLike = process.argv[3];
let numPosts = parseInt(process.argv[4]);

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
    page.goto('https://www.facebook.com', {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('#email', {
        visible: true
    });

    await page.type('#email', user);
    await page.type('#pass', pwd);
    await page.click("#loginbutton");
    await page.waitForSelector('input._1frb', {
        visible: true
    });


    await page.type('input._1frb', pageToLike);
    // await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForSelector('div._6v_0._4ik4._4ik5 a', {
        visible: true
    });

    await page.click('div._6v_0._4ik4._4ik5 a');
    await page.waitForSelector('[data-key=tab_posts]', {
        visible: true
    });
await Promise.all([page.click('[data-key=tab_posts]'),page.waitForNavigation({waitUntil:"networkidle0"})])

    // // try to find the reason here.
    await page.waitForSelector('#pagelet_timeline_main_column ._1xnd > ._4-u2._4-u8'); 
    // // jugaad -> this is not how it should be but i have no time for doing the best thing
    // // the one who maintains this after me should make better
    let idx = 0;
    do {
        await page.waitForSelector('#pagelet_timeline_main_column ._1xnd .clearfix.uiMorePager')
        let elements = await page.$$('#pagelet_timeline_main_column ._1xnd > ._4-u2._4-u8');
        // console.log(elements.length);
        let post = elements[idx];
        // await page.waitForSelector("._666k ._8c74")
        // page.focus("._666k ._8c74")
        let like = await post.$("._666k ._8c74")
        await like.click({delay:1000})
     
        console.log(idx)
        if(idx===7 ||(idx-1)%7===0)
        {
         let loader = await page.$('.uiMorePagerLoader')
        //  await loader.focus()   
            // await page.focus('.uiMorePagerLoader')
            let chain = await page.$('#pagelet_timeline_main_column ._1xnd .clearfix.uiMorePager');
           await page.evaluate(function(el){
               console.log("executing")
                el.scrollIntoView()
            },chain)
            console.log("here")
            await page.waitForSelector('.uiMorePagerLoader', {

                hidden: true
            });
        }
        idx++;
       
        
    } while (idx < numPosts);
      //browser.close();
})();