
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });


describe('Cypress Training', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
    })   


    it('Dropdown practice', () => {
        
            cy.get('[id="dropdowm-menu-1"]').select(['Python'])
            cy.wait(1000)
            cy.get('[id="dropdowm-menu-2"]').select(['TestNG'])
            cy.wait(1000)
            cy.get('[id="dropdowm-menu-3"]').select(['CSS'])
            cy.wait(1000)
            
    })

    it('Checkbox practice', () => {
            
            cy.get('[type="checkbox"]').eq(1).check()
            cy.wait(1000)
            cy.get('[type="checkbox"]').eq(3).check()
            cy.wait(1000)
                
    })

    it('Radio button practice', () => {
            
            cy.get('[type="radio"]').eq(0).click()
            cy.wait(1000)
            cy.get('[type="radio"]').eq(2).click()
            cy.wait(1000)
            cy.get('[type="radio"]').eq(4).click()
            cy.wait(1000)
                    
    })
            
})