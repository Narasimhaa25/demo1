const {Builder, By, Key} = require("selenium-webdriver"); 
async function example(){ 
 let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.google.com/"); 
 console.log("browser opened"); 
}
example() 
