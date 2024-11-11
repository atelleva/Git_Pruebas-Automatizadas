const { Given, When, Then } = require('@cucumber/cucumber');
let expect;
(async () => {
    expect = (await import('chai')).expect;
})();

Given('I open the browser', async function () {
    const capabilities = {
        browserName: 'chrome', // Cambia a 'firefox', 'edge', etc., según el navegador que uses
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800'] // Opcional: argumentos para Chrome
        }
    };

    await this.driver.newSession(capabilities);
});

When('I navigate to {string}', async function (url) {
    await this.driver.url(url);
});

When('I enter username {string} and password {string} and press enter', async function (username, password) {
    const usernameField = await this.driver.$('#identification');
    await usernameField.setValue(username);
    const passwordField = await this.driver.$('#password');
    await passwordField.setValue(password);
    await passwordField.keys('Enter');
    await this.driver.pause(5000);
});

Then('I should be redirected to the dashboard', async function () {
    const currentUrl = await this.driver.getUrl();
    expect(currentUrl).to.include('/dashboard');
});

When('I click the link with id {string}', async function (idValue) {
    const element = await this.driver.$(`#${idValue}`);
    await element.click();
    await this.driver.pause(5000);
});

Then('I should be on the page with URL {string}', async function (expectedUrl) {
    const currentUrl = await this.driver.getUrl();
    expect(currentUrl).to.equal(expectedUrl);
});

When('I click the span with text {string}', async function (textValue) {
    const span = await this.driver.$(`//span[text()='${textValue}']`);
    await span.click();
});

When('I click on the span with text edit inside the locksite div', async function () {
    const span = await this.driver.$(`//div[@data-testid="locksite"]//span[text()="edit"]`);
    await span.click();
});

Then('I click on the button with data-state {string} inside the locksite div', async function (dataState) {
    const button = await this.driver.findElement(By.css(`div[data-testid="locksite"] button[data-state="${dataState}"]`));
    await button.click();
});

When('I enter {string} into the input with title {string}', async function (inputValue, inputTitle) {
    const inputField = await this.driver.$(`//input[@title name='${inputTitle}']`);
    await inputField.setValue(inputValue);
});

When('I click the span containing the text {string}', async function (spanText) {
    const spanElement = await this.driver.$(`//span[text()='${spanText}']`);
    await spanElement.click();
});

Then('I should see a div containing the text {string}', async function (divText) {
    const divElement = await this.driver.$(`//div[contains(text(), '${divText}')]`);
    const isDisplayed = await divElement.isDisplayed();
    expect(isDisplayed).to.be.true;
});

When('I enter nameTag {string} and slug {string}', async function (nameTag, slug) {
    const nameTagField = await this.driver.$('#tag-name');
    await nameTagField.setValue(nameTag);
    const tagField = await this.driver.$('#tag-description');
    await tagField.setValue(slug);
    await this.driver.pause(5000);
});

Then('I click on the button with data-test-button {string}', async function (textValue) {
    const span = await this.driver.$(`button[data-test-button='${textValue}']`);
    await span.click();
});

Then('I should see the {string} message', async function (expectedMessage) {
    const messageElement = await this.driver.$(`button[data-test-button='${expectedMessage}']`);
    const actualMessage = await messageElement.getText();
    expect(actualMessage).to.include(expectedMessage, `Expected message to include: "${expectedMessage}", but found: "${actualMessage}"`);
});

Then('I enter {string} into the input with name {string} and press enter', async function (text, name) {
    const inputField = await this.driver.$(`input[name='${name}']`);
    await inputField.setValue(text);
    await inputField.keys('Enter');
});


When('I click the link with href {string}', async function (hrefValue) {
    const link = await this.driver.$(`a[href='${hrefValue}']`);
    await link.click();
});