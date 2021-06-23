const homeCommands = {
  register() {
    this.waitForElementVisible('@myAccountDropdown', 1000, "Account dropdown is visible")
        .click('@myAccountDropdown')
        .waitForElementVisible('@signUpLink', 1000, "Sign up link is visible")
        .click('@signUpLink')
        .api.pause(1000);

    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.phptravels.net/',
  commands: [homeCommands],
  elements: {
    myAccountDropdown: {selector: 'div.dropdown-login > a'},
    signUpLink: {
      selector: '//a[text()="Sign Up"]',
      locateStrategy: 'xpath',
      index: 0
    }
  }
};
