let fs = require("fs");
let puppeteer = require('puppeteer');

// let pageToLike = process.argv[3];
// let numPosts = parseInt(process.argv[4]);
// let user = process.argv[2];
let cfile = process.argv[2];
// let pwd = process.argv[3];
let search = process.argv[3];
(async function () {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized', '--disable-notifications']
    });

    let contents = await fs.promises.readFile(cfile, 'utf-8');
    let obj = JSON.parse(contents);
    let user = obj.user;
    let pwd = obj.pwd;

    let pages = await browser.pages();
    let page = pages[0];
    page.goto('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin', {
        waitUntil: 'networkidle2'
    });
    // session_key
    await page.waitForSelector('#username', {
        visible: true
    });

    await page.type('#username', user);
    await page.type('#password', pwd);
    await page.click(".btn__primary--large");
    
    // await page.waitForSelector('.search-global-typeahead__input.always-show-placeholder', {
    //     visible: true
    // });
    // //.search-global-typeahead__input.always-show-placeholder
    // await page.type('.search-global-typeahead__input.always-show-placeholder', "web developer");
    // await page.keyboard.press('Enter');
    // await page.waitForSelector('.search-vertical-filter__filter-item-button.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary ember-view', {
    //     visible: true
    // });
    // // search-vertical-filter__filter-item-button.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary ember-view
    // await page.click(".search-vertical-filter__filter-item-button.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary ember-view");
    
    page.goto(`https://www.linkedin.com/search/results/people/?keywords=${search}`, {
        waitUntil: 'networkidle2'
    });
    //await page.type('.search-result__info');
    await page.waitForSelector('.search-result__info', {
            visible: true
        });
    let elements = await page.$$('.search-result__result-link.ember-view');
    //console.log(elements.length);  
    for( let i=0;i<elements.length;i+=2){
    let q= await page.evaluate(function(elem){
        return elem.getAttribute("href")
    },elements[i]);
    console.log(q);
    const page1 = await browser.newPage();        
    await page1.goto("https://www.linkedin.com"+q, {
        waitUntil: 'networkidle2'
    });
    await page1.waitForSelector('.ml2.pv-s-profile-actions__overflow-toggle.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-bottom.ember-view', {
        visible: true
    });
    await page1.click(".ml2.pv-s-profile-actions__overflow-toggle.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-bottom.ember-view");
    
    await page1.waitForSelector('.pv-s-profile-actions.pv-s-profile-actions--save-to-pdf.pv-s-profile-actions__overflow-button.full-width.text-align-left.artdeco-dropdown__item.artdeco-dropdown__item--is-dropdown.ember-view',{
        visible: true
    })
    
    await page1.click('.pv-s-profile-actions.pv-s-profile-actions--save-to-pdf.pv-s-profile-actions__overflow-button.full-width.text-align-left.artdeco-dropdown__item.artdeco-dropdown__item--is-dropdown.ember-view')
    
    await page1.waitForSelector('.artdeco-toast-item__content', {
        visible: true
    });
    await page.waitFor(3500)
    page1.close();
    }
    page.close();
    browser.close();
})();