const data = require("../utils/data");
const messages = require("../utils/messages");

describe('User Sign Up', () => {
    this.tags = ['register', 'positive', 'happy_path'];

    it('User navigates to home page', (browser) => {
        const homePage = browser.page.home();
        homePage
            .navigate()
            .assert.urlContains(data.site.homeUrl, "User navigates to " + data.site.homeUrl);
    })

    it('Click on My Account and Sign Up', (browser) => {
        const homePage = browser.page.home();
        homePage
            .register()
            .assert.urlContains(data.site.registerUrl, "User navigates to " + data.site.registerUrl);
    })

    it('Fill all the required fields with they data and submit', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .fillUserData(
                data.user.firstName, 
                data.user.lastName, 
                data.user.phoneNumber, 
                data.user.validEmail,
                data.user.password)
            .createAccount()
            .assert.urlContains(data.site.accountUrl, "Profile path is loaded");
    })

    it('A new User Account is created', (browser) => {
        const accountPage = browser.page.account();
        accountPage
            .assert.containsText(accountPage.elements.welcomeMessage, data.user.firstName, messages.success.userAccountCreated);
    })

    after(function(browser, done) {
        browser.end(function() {
          done();
        });
      });

      //Testing change 2

})