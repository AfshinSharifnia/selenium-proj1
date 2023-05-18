const { Key, By, Builder } = require("selenium-webdriver");
var should = require("chai").should();
const assert= require("assert");

//Using Mocha framework

//describe block
describe("add another todo tests", function () {
  //it block

  it("successfully adds another todo to application", async function () {
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

    // assert using chai should

    todoText.should.equal("Learn Selenium");
    await driver.quit();
  });
  
});
