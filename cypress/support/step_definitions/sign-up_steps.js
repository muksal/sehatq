const base = require('/Users/mm/Desktop/sehatq/cypress/support/page_object/page.js');

when('new user open sign up page', () => {
    cy.visit('https://www.sehatq.com/daftar/email')
});

then('user input full name', () => {
    base.input('fullname');
});

then('user input email', () => {
    base.input('email');
});

then('user input password', () => {
    base.input('password');
});

then('user click show password', () => {
    base.clickButton('show password');
});

then('user click checkbox on S&K', () => {
    base.clickButton('S&K');
});

then('user click Continue button', () => {
    base.clickButton('signup');
});

then('verify user', () => {
    base.validationPage('Success Signup');
});

when('existing user open sign up page', () => {
    cy.visit('https://www.sehatq.com/daftar/email')
});

then('check error message', () => {
    base.validationPage('email duplicated');
});

then('user input invalid email', () => {
    base.input('invalid email');
});

then('check invalid email error message', () => {
    base.validationPage('error message invalid email');
});
