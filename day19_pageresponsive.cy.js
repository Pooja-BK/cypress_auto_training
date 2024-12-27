describe('Sample Automation', () => {
    
    it('Working with Web Page Responsiveness Testing - Normal Login', () => {
    //visit the website
        cy.visit('https://www.flipkart.com/')
        cy.wait(2000)
    //click login button
        cy.contains('Mobile').click()
        cy.wait(2000)
    //assert heading
        cy.contains('Mobiles Big Savings Days Dec 24').should('exist')
        cy.wait(1000)
        
    })


    it('Working with Web Page Responsiveness Testing - Change Resolution', () => {
    //change page resolution
        cy.viewport(2400,2400)
        //visit the website
            cy.visit('https://www.flipkart.com/')
            cy.wait(2000)
        //click login button
            cy.contains('Mobile').click()
        //change page resolution
            cy.viewport(1000,500)
            cy.wait(2000)
        //assert heading
            cy.contains('Mobiles Big Savings Days Dec 24').should('exist')
            cy.wait(1000)
            
        })


    it('Working with Web Page Responsiveness Testing - iphone 3', () => {
    //change page resolution to iphone display 
        cy.viewport('iphone-3')
        //visit the website
            cy.visit('https://www.flipkart.com/')
            cy.wait(2000)
        //click login button
            cy.contains('Mobile').click()
            cy.wait(2000)
        //assert heading    
            cy.contains('Mobiles Big Savings Days Dec 24').should('exist')
            cy.wait(1000)
            
        })

  })
