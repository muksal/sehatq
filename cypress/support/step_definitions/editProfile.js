const base = require('/Users/mm/Desktop/sehatq/cypress/support/page_object/page.js');

given('after login success user click BOD field', () => {
    base.clickButton('bod')
});

when('select date', () => {
    base.input('bod 23')
});

then('click Continue button', () => {
    base.clickButton('continue update profile');
});

then('click edit profile button', () => {
    cy.wait(4500);
    base.clickButton('edit profile button');
});

then('change name', () => {
    base.input('change name');
});

then('edit DOB', () => {
    base.input('change bod 23');
});

then('change gender', () => {
    base.clickButton('change gender');
});

then('input height max 3 chars', () => {
    base.input('input height');
});

then('input weight max 3 chars', () => {
    base.input('input weight');
});

then('input address', () => {
    base.input('input address');
});

then('input phone number', () => {
    base.input('input phone number');
});

then('click Simpan button', () => {
    base.clickButton('save');
});

// then('click Continue button', () => {
//     base.clickButton('continue update profile');
// });