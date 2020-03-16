require('cypress-plugin-tab')

//------------------------------ENV----------------------------------//
const live_env = Cypress.env('live');
//------------------------------DATA----------------------------------//
const testData = {
    email: 'muksalmina04@mail.com',
    notRegisEmail: 'daniel@mail.com',
    invalidEmail: 'muksal',
    password: 'P@ssw0rd',
    invalidPassword: 'asdfgh12345',
    fullname: 'Muksalmina',
    emailRegistedAlready: 'Email sudah ada, mohon gunakan email lain', 
    invalidEmailError: 'Email harus diisi dengan benar',
    loginSuccess: 'Login berhasil',
    loginFail: 'Email harus diisi dengan benar',
    loginFailPassword: 'Email atau Password yang Anda masukkan salah',
    bodInput: '14-03-2020',
    reName: 'Daniela', 
    reBod: '14-03-1993',
    height: '162',
    weight: '58',
    address: 'Jl Kebon Kacang 2 No.76',
    phoneNumber: '082323232301'
}
//------------------------------ELEMENTS-------------------------------//
const elements = {
    email: '#email', 
    pwd: '#password',
    fullname: '#name',
    showPwd: '.js-showPassword', 
    sk: '.animated-checkbox > label > .label-text',
    continue: '#formRegister > .btn-primary', 
    veryUserSignUp: 'a > .name',
    duplicateEmail: '[style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; right: 20px; animation-iteration-count: 1;"] > .row > .col-10 > [data-notify="message"]',
    invalidEmail: '#email-error',
    continueLoginButton: '.js-formValidate > .btn-primary',
    loginSuccess: '[data-notify="title"]',
    loginFail: '[data-notify="message"]',
    editProfile: '.box-title > .row > .col-2',
    bodButton: '.js-datePicker',
    continueUpdateProfile: '.col-lg-8 > .btn-primary',
    height: '#height',
    weight: '#weight',
    address:'#address',
    phone: '#phone',
    saveButton: '.row > :nth-child(2) > .btn',
    changeGender: ':nth-child(2) > .animated-radio-button > .no-wrap > .label-text'
}
//------------------------------MAIN-------------------------------//
export function navigatToPage(param){
    cy.clearCookies();
    switch(param){
        case 'live':
        cy.visit(live_env);
    }
}
export function validationPage(param){
    cy.wait(4500)
    switch(param){
        case 'Success Signup':
            cy.get(elements.veryUserSignUp).should('contain', testData.fullname);
            break;
        case 'Successed':
            cy.get(elements.auth).should('contain', testData.veryEmailAddr)
            break;
        case 'error message invalid email':
            cy.get(elements.invalidEmail).should('contain', testData.invalidEmailError)
            break;
        case 'email duplicated':
            cy.get(elements.duplicateEmail).should('contain', testData.emailRegistedAlready)
            break;
        case 'login success':
            cy.get(elements.loginSuccess).should('contain', testData.loginSuccess)
            break;
        case 'login failed':
            cy.get(elements.loginFail).should('contain', testData.loginFail)
            break;
        case 'login failed with invalid password':
                cy.get(elements.loginFail).should('contain', testData.loginFailPassword)
                break;
    }
}
export function input(param){ 
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.wait(500);
    switch (param){
        case 'email':
            cy.get(elements.email).type(testData.email);
            break;
        case 'username':
            cy.get(elements.email).type(testData.full.fullname);
            break;
        case 'invalid email':
            cy.get(elements.email).type(testData.invalidEmail).tab({shift: true});
            break;
        case 'not register email':
            cy.get(elements.email).type(testData.notRegisEmail);
            break;
        case 'password':
            cy.get(elements.pwd).type(testData.password);
            break;
        case 'invalid password':
            cy.get(elements.pwd).type(testData.invalidPassword);
            break;
        case 'fullname':
            cy.get(elements.fullname).type(testData.fullname);
            break;
        case 'bod 23':
            cy.get(elements.bodButton).type(testData.bodInput).tab({shift: true});
            break;
        case 'change name':
            cy.get(elements.fullname).clear().type(testData.reName);
            break;
        case 'change bod 23':
            cy.get(elements.bodButton).clear().type(testData.reBod);
            break;
        case 'input height':
            cy.get(elements.height).type(testData.height);
            break;
        case 'input weight':
            cy.get(elements.weight).type(testData.weight);
            break;
        case 'input address':
            cy.get(elements.address).type(testData.address);
            break;
        case 'input phone number':
            cy.get(elements.phone).type(testData.phoneNumber);
            break;
    }
}

export function clickButton(param){
    cy.wait(500);
    switch (param){
        case 'show password':
        cy.get(elements.showPwd).click()
        break;
        case 'S&K':
            cy.get(elements.sk).click()
            break;
        case 'signup':
            cy.get(elements.continue).click()
            break;
        case 'continue':
            cy.get(elements.createAccountButton).click()
            break;
        case 'continue login':
            cy.get(elements.continueLoginButton).click()
            break;
        case 'edit profile button':
            cy.get(elements.editProfile).click()
            break;
        case 'bod':
            cy.get(elements.bodButton).click()
            break;
        case 'continue update profile':
            cy.get(elements.continueUpdateProfile).click()
            break;
        case 'save':
            cy.get(elements.saveButton).click()
            break;
        case 'change gender':
            cy.get(elements.changeGender).click()
            break;
    }
}

export function wait(param){
    switch (param){
        case 'waiting':
            cy.wait(500);
            break;
    }
}