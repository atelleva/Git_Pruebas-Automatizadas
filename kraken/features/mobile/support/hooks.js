const { Before, After } = require('@cucumber/cucumber');
const { WebDriver } = require('kraken-node');

Before(async function () {
  this.driver = await WebDriver.builder()
    .forBrowser('chrome')  // O el navegador que estés usando
    .build();
});

After(async function () {
  await this.driver.quit();
});