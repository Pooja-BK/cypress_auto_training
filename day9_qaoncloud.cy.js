describe('Sample Automation', () => {
        beforeEach(() => {
        cy.visit('https://www.qaoncloud.com/')
 })

    it('Assert QAonCloud logo ', () => {
        //assert banner            
        cy.xpath('/html[1]/body[1]/div[4]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]').should('be.visible')
        cy.wait(2000)
    })

    it('Validation for Customer logo ', () => {
        //assert customers logo           
        cy.wait(2000)
        cy.get('[class="pin-icon pin-normal-icon"]').eq(0).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(1).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(2).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(3).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(4).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(5).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(6).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(7).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(8).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(9).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(10).should('be.visible')
        cy.get('[class="pin-icon pin-normal-icon"]').eq(11).should('be.visible')
        
    })

    it('Validation for Page headers ', () => {
        //services             
        cy.contains('SERVICES').should('exist')
        //solutions
        cy.contains('SOLUTIONS').should('exist')
        //industries served
        cy.contains('Industries Served').should('exist')
        //Banking & Financial Services
        cy.contains('Banking & Financial Services').should('exist')
        //We Love To Help Craft Quality Software
        cy.contains('We Love To Help Craft Quality Software').should('exist')
        //Want To Know More About QAonCloud?
        cy.contains('Want To Know More About QAonCloud?').should('exist')
    })

    it('Validation for Footer', () => {
        //assert footer
        //company
        cy.get('.elementor-element-b7925ff > .elementor-widget-container > .elementor-heading-title').should('exist')
        cy.wait(2000)
        //quick links
        cy.get('.elementor-element-55ee9fb > .elementor-widget-container > .elementor-heading-title').should('exist')
        cy.wait(2000)
        //support
        cy.get('.elementor-element-9b46a17 > .elementor-widget-container > .elementor-heading-title').should('exist')
        cy.wait(2000)
        //policies
        cy.get('.elementor-element-374bd91 > .elementor-widget-container > .elementor-heading-title').should('exist')
        cy.get(2000)
        //footer text
        cy.contains('@QAonCloud 2024. All Rights Reserved').should('exist')
        cy.get(2000)
        cy.contains('QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd').should('exist')
        cy.get(2000)
        
    })
})

