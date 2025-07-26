const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1. Open your local HTML login page
    await driver.get("file:///Users/narasimha/Downloads/selenium/login.html");

    // 2. Enter Username and Password
    await driver.findElement(By.id("un")).sendKeys("MVSREC");
    await driver.findElement(By.id("pw")).sendKeys("ITD");

    // 3. Click the submit/login button
    await driver.findElement(By.id("s")).click();

    // 4. Wait for page to change or load
    await driver.sleep(2000); // or use `await driver.wait(until.titleIs(...))`

    // 5. Get the new page title (assuming redirect)
    const title = await driver.getTitle();

    // 6. Assert title is expected (replace with real title after login)
    assert.strictEqual(title, "Login Page");

    console.log("✅ Login test passed successfully!");

  } catch (error) {
    console.error(" Login test failed:", error);
  } finally {
    //await driver.quit();
  }
}

loginTest();