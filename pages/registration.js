const homeCommands = {
  createAccount() {
    this.waitForElementVisible('@signUpButton', 1000, "Sign up submit is visible")
      .click('@signUpButton')
      .api.pause(1000);

    return this; // Return page object for chaining
  }, 

  fillUserData(firstName = '', lastName = '', phoneNumber='', email = '', password = '', confirmPassword = password){
      this.waitForElementVisible('@firstNameInput', 1000, "User form is visible")
        .setValue('@firstNameInput', firstName)
        .setValue('@lastNameInput', lastName)
        .setValue('@phoneInput', phoneNumber)
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password)
        .setValue('@rePasswordInput', confirmPassword);

      return this;
  }
};

module.exports = {
  url : 'https://www.phptravels.net/register',
  commands: [homeCommands],
  elements: {
    firstNameInput: {selector: 'input[name=firstname]'},
    lastNameInput: {selector: 'input[name=lastname]'},
    phoneInput: {selector: 'input[name=phone]'},
    emailInput: {selector: 'input[name=email]'},
    passwordInput: {selector: 'input[name=password]'},
    rePasswordInput: {selector: 'input[name=confirmpassword]'},
    signUpButton: {selector: 'button[type=submit]'},
    emailErrorBox : {selector : '#headersignupform > div.resultsignup > div '},
    errorBox : { selector: '#headersignupform > div.resultsignup > div > p:nth-child(1)'}
  },
};
