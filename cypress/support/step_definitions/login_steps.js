const base = require('/Users/mm/Desktop/sehatq/cypress/support/page_object/page.js');

given('user open sehatQ login page', () => {
    cy.visit('https://www.sehatq.com/login/email')
});

When('user input email', () => {
    base.input('email');
});

// When('user input username', () => {
//     base.input('username');
// });

then('user input not register email', () => {
    base.input('not register email');
});

then('user input password', () => {
    base.input('password');
});

then('user input invalid password', () => {
    base.input('invalid password');
});

then('user click Continue button', () => {
    base.clickButton('continue login');
});

then('verify user login', () => {
    base.validationPage('login success');
});

then('verify user login failure', () => {
    base.validationPage('login failed');
});

then('verify user login failure with invalid password', () => {
    base.validationPage('login failed with invalid password');
});