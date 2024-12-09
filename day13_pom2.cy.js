import RegPage from 'C:/Users/DCKLP-111/CYPRESS_AUTO/cypress/pageobject/pom2.cy.js'

describe('Sample Automation', () => {
  
    it('Working with Page Object Model in Cypress', () => {
        //calling regpage function       
        const rg = new RegPage() 
        //call visint from pom folder     
        rg.visit()
        //call fname from pom folder
        rg.fillFname('Pooja')
        cy.wait(1000) 
        //call lname from pom
        rg.fillLname('S Kotian')
        cy.wait(1000) 
        //call gender from pom        
        rg.fillGender()
        cy.wait(1000)
        //call hobbies from pom
        rg.fillHobbies('Singing')
        cy.wait(1000)
        //cal dept from pom
        rg.fillDepartment('Department of Agriculture') 
        cy.wait(1000)
        //call username from pom
        rg.fillUsername('poojaskotian9876')
        cy.wait(1000)
        //call passwrd from pom
        rg.fillPassword('poojaskotian9876543210') 
        cy.wait(1000)
        //call confirm password from pom
        rg.fillConfirmPass('poojaskotian9876543210') 
        cy.wait(1000)
        //call email from pom
        rg.fillEmail('poojaskotian@test.com') 
        cy.wait(1000)
        //call contact from pom
        rg.fillContact('987654321012')
        cy.wait(1000)
        //call add info from pom
        rg.fillAddInfo('QAonCloud is a leading software testing services company, based in Chennai, India.Founded in 2016, QAonClouds team specializes in providing manual and automated testing solutions to customers across the globe.')
        cy.wait(1000)
        //call submit from pom
        rg.submit()
        cy.wait(1000)
    })
 })