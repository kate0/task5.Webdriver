"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
webdriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

function ErrorHandling(err) {
     console.log('Oops...Something went wrong!\n', err.stack, '\n');
     quitDriver();
}

browser.get('http://www.novatek.by/');
  .then(_ => browser.findElement(webdriver.By.css('[href^="/auth/registration/"]')).click());
  .then(_ => browser.findElement(webdriver.By.name("REGISTER[NAME]")));
  .then(REGISTER[NAME] => REGISTER[NAME].sendKeys("Yasya Pupkin");
  .then(_ => browser.findElement(webdriver.By.name("REGISTER[PERSONAL_PHONE]")));
  .then(EGISTER[PERSONAL_PHONE] => REGISTER[PERSONAL_PHONE].sendKeys("291111111");
  .then(_ => browser.findElement(webdriver.By.name("REGISTER[EMAIL]")));
  .then(REGISTER[EMAIL] => REGISTER[EMAIL].sendKeys("temporary@p33.org");
  .then(_ => browser.findElement(webdriver.By.name("REGISTER[PASSWORD]")));
  .then(REGISTER[PASSWORD] => REGISTER[PASSWORD].sendKeys("654321qwe");
  .then(_ => browser.findElement(webdriver.By.name("REGISTER[CONFIRM_PASSWORD]")));
  .then(REGISTER[CONFIRM_PASSWORD] => REGISTER[CONFIRM_PASSWORD].sendKeys("654321qwe");
  .then(_ => browser.findElement(webdriver.By.xpath("//form[@id='registraion-page-form']/div[3]/div/div[2]")).click());
  .then(_ => browser.navigate().to("https://temp-mail.ru/"));
  .then(_ => browser.findElement(webdriver.By.id("click-to-change")).click());
  .then(_ => browser.findElement(webdriver.By.id("mail")));
  .then(mail => mail.sendKeys("temporary");
  .then(_ => browser.findElement(webdriver.By.id("postbut")).click());
  .then(_ => browser.findElement(webdriver.By.id("click-to-refresh")).click());
  .then(_ => browser.findElement(webdriver.By.partialLinkText("Confirmation")).click());
  .then(_ => browser.wait(function () {
    return browser.elementLocated(webdriver.By.className("header")), 10000);
  .then(_ => browser.findElement(webdriver.By.linkText("Personal information"));
    .then(function(){
		    console.log('Account is registered. Test passed.'), catch(err));
        browser.quit());
