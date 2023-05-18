//these tests do pass with the puppeteer module installed. It was too big to be on github however
//so i removed the module. There for the tests will fail if pulled from github without npm install puppeteer
// var fs = require('fs');
// const puppeteer = require ('puppeteer');



// //user has an invalid username
// // test ('Invalid UserName', async() => {
// //     const browser = await puppeteer.launch({
// //         headless : false,
// //         //slowmo : 80,
// //     });
// //     const page = await browser.newPage()
// //     await page.goto(
// //         'http://localhost:3000/signup.html'
// //     );
// //     await page.click('#userName');
// //     await page.type('#userName','Z');
// //     await page.click('#Password');
// //     await page.type('#Password','Chicken1234!');
// //     await page.click('#login');
// //     let link = page.url();
// //     await expect(link).toBe("http://localhost:3000/signup.html");

// // },100000);

// // //invalid password 
// // test ('Invalid Password', async() => {
// //     const browser = await puppeteer.launch({
// //         headless : false,
// //         //slowmo : 80,
// //     });
// //     const page = await browser.newPage()
// //     await page.goto(
// //         'http://localhost:3000/signup.html'
// //     );
// //     await page.click('#userName');
// //     await page.type('#userName','Ziiiiiiiiiiiiii');
// //     await page.click('#Password');
// //     await page.type('#Password','C');
// //     await page.click('#login');
// //     let link = page.url();
// //     await expect(link).toBe("http://localhost:3000/signup.html");

// // },100000);

// //checks if sign up button goes to sign up page
// test ('Sign up button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/login.html'
//     );
//     await page.click('#signup');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/signup.html");

// },100000);

// //checks if continue as guest link works goes to sign up page
// test ('Continue as guest link works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/login.html'
//     );
//     await page.click('#hyperlink');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/index.html");

// },100000);

// //checks if Map button works
// test ('Map Button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/index.html'
//     );
//     await page.click('#mapButton');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/map.html");

// },100000);

// //checks if Map button works
// test ('Map Button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/index.html'
//     );
//     await page.click('#mapButton');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/map.html");

// },100000);

// //checks if visited button works
// test ('Visited Button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/index.html'
//     );
//     await page.click('#VisitedButton');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/visited.html");

// },100000);

// //checks if favorites button works
// test ('Visited Button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/index.html'
//     );
//     await page.click('#favoritesButton');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/favorites.html");

// },100000);

// //checks if login button works
// test ('login Button works', async() => {
//     const browser = await puppeteer.launch({
//         headless : false,
//         //slowmo : 80,
//     });
//     const page = await browser.newPage()
//     await page.goto(
//         'http://localhost:3000/index.html'
//     );
//     await page.click('#loginButton');
//     let link = page.url();
//     await expect(link).toBe("http://localhost:3000/login.html");

// },100000);



test('jquery assets working', () => {
    const $ = require('jquery');
});
