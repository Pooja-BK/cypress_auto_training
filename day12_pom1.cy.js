import RegPage from 'C:/Users/DCKLP-111/CYPRESS_AUTO/cypress/pageobject/pom1.cy.js'

describe('Sample Automation', () => {
  
    it('Working with Page Object Model in Cypress', () => {
        //calling regpage function       
        const rg = new RegPage() 
        //call visint from pom folder     
        rg.visit()
        //call fname from pom folder
        rg.fillFname('Pooja BK')
        cy.wait(1000) 
        rg.fillEmail('poojaskotian9876')
        cy.wait(1000)
        rg.fillPassword('poojaskotian9876543210')
        cy.wait(1000)
        rg.fillRePass('poojaskotian9876543210')
        cy.wait(1000)
        rg.fillAltEmail('poojabk@gmail.com')
        cy.wait(1000)
        rg.fillMobile('9876543210')
        cy.wait(1000)
        rg.fillDate()
        cy.wait(1000)
        rg.fillMonth()
        cy.wait(1000)
        rg.fillYear()
        cy.wait(1000)
        rg.fillEfillGender()
        cy.wait(1000)
        rg.fillCountry()
        cy.wait(1000)
        rg.fillState()
        cy.wait(1000)
    })
})

