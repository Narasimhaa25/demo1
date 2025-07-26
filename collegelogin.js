const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const fs = require("fs");

async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");

    await driver.findElement(By.id("txtUserName")).sendKeys("245121737129");
    await driver.findElement(By.id("txtPassword")).sendKeys("245121737129");
    await driver.findElement(By.id("btnSubmit")).click();

    await driver.wait(until.elementLocated(By.id("lblHTNo")), 5000);
    const user = await driver.findElement(By.id("lblHTNo")).getText();
    assert.strictEqual(user, "245121737129");
    console.log("✅ Login successful for:", user);

    await driver.findElement(By.id("Stud_cpModules_imgbtnExams")).click();

    // Wait for Semester Results link before clicking
    await driver.wait(until.elementLocated(By.id("cpBody_lnkSem")), 10000);
    await driver.findElement(By.id("cpBody_lnkSem")).click();

    // Confirm navigation
    const ur = await driver.getCurrentUrl();
    if (ur.includes("Frm_SemwiseStudMarks.aspx")) {
      console.log("✅ Navigated to Semester Marks page");
    } else {
      throw new Error("❌ Navigation failed. Current URL: " + ur);
    }
  } finally {
    // await driver.quit();
  }
}

loginTest();