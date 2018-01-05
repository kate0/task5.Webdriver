"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
webdriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

function ErrorHandling(err) {
     console.log('Oops...Something went wrong!\n', err.stack, '\n');
     quitDriver();
}

browser.get('http://www.novatek.by/');
browser.findElement(webdriver.By.css('[href^="/auth/registration/"]')).click();
browser.findElement(webdriver.By.name("REGISTER[NAME]")).sendKeys("Yasya Pupkin");
browser.findElement(webdriver.By.name("REGISTER[PERSONAL_PHONE]")).sendKeys("291111111");
browser.findElement(webdriver.By.name("REGISTER[EMAIL]")).sendKeys("temporary@p33.org");
browser.findElement(webdriver.By.name("REGISTER[PASSWORD]")).sendKeys("654321qwe");
browser.findElement(webdriver.By.name("REGISTER[CONFIRM_PASSWORD]")).sendKeys("654321qwe");
browser.findElement(webdriver.By.xpath("//form[@id='registraion-page-form']/div[3]/div/div[2]")).click()
browser.navigate().to("https://temp-mail.ru/");
browser.findElement(webdriver.By.id("click-to-change")).click();
browser.findElement(webdriver.By.id("mail")).sendKeys("temporary");
browser.findElement(webdriver.By.id("postbut")).click();
browser.findElement(webdriver.By.id("click-to-refresh")).click();
browser.findElement(webdriver.By.partialLinkText("Confirmation")).click();
browser.wait(function () {
    return browser.elementLocated(webdriver.By.className("header")), 10000);
browser.findElement(webdriver.By.linkText("Personal information")).
    then(function(){
		console.log('Account is registered. Test passed.' )
browser.quit();
