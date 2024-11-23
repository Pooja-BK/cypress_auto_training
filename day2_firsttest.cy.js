
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
    });


describe('Cypress Training sample test', () => {

  
    it('Visit to the QAonCloud home page', () => {
    //opens home page of QAonCloud website
        cy.visit('https://www.qaoncloud.com/')
        cy.wait(2000)
        cy.title('Get Your App Tested By A Remote, Flexible, On-Demand Teams').should('exist')
        cy.wait(2000)


    })
})