const { Given, When, Then } = require('@cucumber/cucumber');
const selectors = require("../common/PageObjectIndex");

Given("I enter email {string}", async function (email) {
    let emailInput = await this.driver.$(selectors.selInputEmail);
    return await emailInput.setValue(email);
});

Given("I enter password {string}", async function (password) {
    let passwordInput = await this.driver.$(selectors.selInputPassword);
    return await passwordInput.setValue(password);
});

Given("I click on the login button", async function () {
    let loginButton = await this.driver.$(selectors.selButtonLogin);
    return await loginButton.click();
});
