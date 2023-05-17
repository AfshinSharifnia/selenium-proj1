const { Key, By, Builder } = require("selenium-webdriver");

async function tc01() {

  let driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  setInterval(function () {
    driver.quit();
  }, 6000);
}

tc01();
