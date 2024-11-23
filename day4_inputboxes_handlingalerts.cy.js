
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
    });

describe('Sample Automation', () => {
   
   it('Handling Errors with JS Alert button', () => {
        //opens Login page of alert website            
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //assert heading            
        cy.contains('JavaScript Alerts').should('exist')
        //click on first alert button           
        cy.contains('Click for JS Alert').click()
        //to assert the popup error            
        cy.on("window:alert", (t) => {
            expect(t).to.equal("I am a JS Alert") })
        cy.wait(2000)
        //on clicking the alert           
        cy.contains('You successfully clicked an alert').should('exist')
    })

    it('Handling Errors with JS Confirm button for OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //click on second alert button           
        cy.contains('Click for JS Confirm').click()
        //to assert the popup error            
        cy.on("window:confirm", (t) => {
            expect(t).to.equal("I am a JS Confirm") }) 
        cy.wait(2000)
        //on clicking the alert OK is by default            
        cy.contains('You clicked: Ok').should('exist')
        cy.wait(2000)
    })
   
    it('Handling Errors with JS Confirm button for CANCEL', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //click on second alert button            
        cy.contains('Click for JS Confirm').click()
        //to assert the popup error            
        cy.on("window:confirm", (t) => {
        //verify text on pop-up               
             expect(t).to.equal("I am a JS Confirm")})
        cy.wait(2000)
        //to show the cancel message            
        cy.on('window:confirm',()=>false)
        //on clicking the alert            
        cy.contains('You clicked: Cancel').should('exist')
        cy.wait(2000)
    })


    it('Handling Errors with JS Prompt button for enetering value', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //to enter value to the prompt window            
        cy.window().then((w)=>{
        //stubbing prompt window                
        cy.stub(w,"prompt").returns("Hello") }) 
        cy.wait(2000) 
        //click on third alert button            
        cy.contains('Click for JS Prompt').click()
        //display the value entered            
        cy.contains('You entered: Hello').should('exist')
        cy.wait(2000)
    })


})