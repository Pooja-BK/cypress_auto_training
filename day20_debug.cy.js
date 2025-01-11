Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


describe('Verify Browser Stack Home Page', () => {

    it('Verify Browserstack logo is visible - using debugger', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('.bstack-mm-logo > img').should('be.visible');

    })

    it('Click on Sign In', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('a[title="Sign In"]').then(($selectedElement) => {  

            debugger;

            $selectedElement.get(0).click()

        })

    })

    it('Verify Browserstack logo is visible - using stack trace', () => {

        cy.visit('https://www.browserstack.com/')

        cy.get('.bstack-mm-logo > img').should('be.visible')

    })

    it('Click on Product Menu', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('#product-menu-toggle1').click();

    })

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');
        
        cy.get('.bstack-mm-logo > img').should('be.visible')
        
        cy.log("Navigated to home page")
        
    })

})

