const utils = require("../utils/utils");

module.exports = {
    user : {
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+123456789',
        validEmail: utils.randomEmail(5),
        invalidEmail: utils.randomEmail(5, false),
        password: utils.randomPassword(6),
        invalidPassword: utils.randomPassword(5),
        existingEmail : 'test@gmail.com'
    },
    site : {
        homeUrl: 'https://www.phptravels.net',
        registerUrl: 'https://www.phptravels.net/register',
        accountUrl : 'https://www.phptravels.net/account'
    },
}