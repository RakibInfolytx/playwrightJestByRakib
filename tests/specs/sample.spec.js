// https://jestjs.io/docs/expect
const time = require('../../utils/TimeHelper')
const {chromium} = require('playwright');
const HomePage = require('../pages/Home.page');
const LoginPage = require('../pages/Login.page');
let page = null;


const it = (name, action) => {
    test(name, async () => {        
        try {         
            await action()
        } 
        catch (error) {   
            const errorScreenshotPath = `screenshots/${name.replace( / - /g, "_")}_${browserName}_${time.getFormattedDateTimeFromTimestamps()}.png`;
            await page.screenshot({path: errorScreenshotPath}); //take screenshot 
            throw error
        }
    })
}



describe('Applitools page test', () => {
    jest.setTimeout(50000);
    let browser = null;
    let context = null; 
    let homePage  = null;
    let loginPage  = null;

    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll( async ()=>{
        // closing browser
        
        await context.close();
        await browser.close();
        
    });
    
    it('- Should be able to login', async() => {
       await loginPage.login('username','password');
       expect(await page.title()).not.toBeNull();      
    })

    it('- Should be logged in as Jack Gomez', async() => {
       expect(await homePage.getUserName()).toBe('Jack Gomez');
    })

    it('- Should have total balance of $350',  async() => {
       expect(await homePage.getBalance('total')).toBe('$350');
    })

    it('- Should have credit available of $17800',  async() => {
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    })

    it('- Should have due today of $180',  async() => {
        expect(await homePage.getBalance('due')).toBe('$180');
    })
});