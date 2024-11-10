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
});

Then('I should be redirected to the dashboard', async function () {
    const currentUrl = await this.driver.getUrl();
    expect(currentUrl).to.include('dashboard');
});