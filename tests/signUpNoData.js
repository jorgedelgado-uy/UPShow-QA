const data = require("../utils/data");

describe('User Sign Up no data', () => {
    this.tags = ['register', 'negative'];

    it('User navigates to registration page', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .navigate()
            .assert.urlContains(data.site.registerUrl, "User navigates to " + data.site.registerUrl);
    })

    it('Leave all fields in blank and submit', (browser) => {
        const registrationPage = browser.page.registration();
        registrationPage
            .fillUserData()
            .createAccount();
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