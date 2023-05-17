const { Key, By, Builder } = require("selenium-webdriver");

const assert = require("assert");

async function tc01() {
  let driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  //assert
  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(todoText, "Learn Selenium");

  setInterval(function () {
    driver.quit();
  }, 2000);
}

tc01();
