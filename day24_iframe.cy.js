//to use cypress iframe plugin
import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


  describe('Sample Automation', () => {
    
    it('Working with Cypress iframes - Approach 1', () => {
    //visit the website
        cy.visit('https://autotest.how/demo/tinymce')
    //declare iframe variable
        const iframe = cy.get('[id="tinymce_ifr"]') //copy the iframe id
        //to access the document of iframe
                         .its('0.contentDocument.body')
        //assert the document body
                         .should('be.visible')
        //used for wrapping the frame
                         .then(cy.wrap)
        cy.wait(1000)
        

    })

    it('Working with Cypress iframes(using Custom Commands) - Approach 2', () => {
        //visit the website            c
    cy.visit('https://autotest.how/demo/tinymce')
    cy.wait(1000)
    //calling Custom Command function from command.js                
    cy.getIframe('[id="tinymce_ifr"]').clear().type('Welcome {ctrl+a}')
    //to make te text as Italic            
    cy.get('[aria-label="Italic"]').click()
    cy.wait(1000)
    })
    
     it('Working with Cypress iframes(using iframe Plugins) - Approach 3', () => { 
        //visit the website            
        cy.visit('https://autotest.how/demo/tinymce') 
        //to load or switch the frame with the iframe locator            
        cy.frameLoaded('[id="tinymce_ifr"]') 
        cy.wait(1000) 
        //to get the frame or to interact with iframe            
        cy.iframe('[id="tinymce_ifr"]').clear().type('Hello.. Good Afternoon{ctrl+a}') 
        //to align text to Center            
        cy.get('[aria-label="Align center"]').click()
        //to make te text as Italic            
        cy.get('[aria-label="Italic"]').click()
        cy.wait(1000)
    })
   
})