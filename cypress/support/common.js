export function login(email, password){
    cy.on('uncaught:expectation', (err, runnable) => {
        expect(err.message).to.include('Script Error')
        done()
        return false
    })
    cy
    .clearCookies()
    .get('body > div.ng-scope > div > div.row-fluid.login-block.mg-t-32 > div > div > form > div:nth-child(2) > input').type(email).should('have.value', email)
    .get('body > div.ng-scope > div > div.row-fluid.login-block.mg-t-32 > div > div > form > div:nth-child(3) > input').type(password).should('have.value', password)
    .get('body > div.ng-scope > div > div.row-fluid.login-block.mg-t-32 > div > div > form > div:nth-child(5) > button', {timeout : 60000}).click()
    .wait(800)
}