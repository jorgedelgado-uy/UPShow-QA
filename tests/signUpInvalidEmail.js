const data = require("../utils/data");
const messages = require("../utils/messages");

describe('User Sign Up invalid email', () => {
    this.tags = ['register', 'negative'];

    it('User navigates to registration page', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .navigate()
            .assert.urlContains(data.site.registerUrl, "User navigates to " + data.site.registerUrl);
    })

    it('Fill all required but with an invalid email and submit', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .fillUserData(
                data.user.firstName, 
                data.user.lastName, 
                data.user.phoneNumber, 
                data.user.invalidEmail, 
                data.user.password)
            .createAccount()
            .assert.elementPresent(registrationPage.elements.errorBox, messages.alert.errorBox)
            .assert.containsText(registrationPage.elements.errorBox, messages.alert.invalidEmail, messages.alert.invalidEmail); 
    })

    it('A new User Account fails to be created', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .assert.urlContains(data.site.registerUrl, "User still in " + data.site.registerUrl);
    })

    after(function(browser, done) {
        browser.end(function() {
          done();
        });
      });

})