Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Sample Automation', () => { 
    
    it('Working with Upload a file in Cypress', () => {
         //visit the home page        
         cy.visit('https://demo.automationtesting.in/Register.html') 
         //aseert heading        
         cy.contains('Automation Demo Site ').should('exist')
         cy.wait(1000) 
         //input firstname        
         cy.get('[placeholder="First Name"]').type('Pooja')
         cy.wait(1000) 
         //input lastname        
         cy.get('[placeholder="Last Name"]').type('BK')
         cy.wait(1000)
         //input address        
         cy.get('textarea[ng-model="Adress"]').type('Address Line 1,{enter}Address Line 2,{enter}City,{enter}State{enter}') 
         cy.wait(1000)
         //input email        
         cy.get('[type="email"]').type('poojabk@test123.com')
         cy.wait(1000)
         //input mobile number        
         cy.get('[type="tel"]').type('9876543210')
         cy.wait(1000) 
         //select gender        
         cy.get('[type="radio"]').eq(1).click()
         cy.wait(1000) 
         //select hobby        
         cy.get('[type="checkbox"]').eq(1).click()
         cy.wait(1000) 
         //select language        
         //cy.get('[class="ui-autocomplete-multiselect ui-state-default ui-widget"]').click()
         //select skills        
         cy.get('select').eq(0).select('Open Source Software')
         cy.wait(1000)
         //select country        
         cy.get('[role="combobox"]').eq(0).type('India{enter}')
         //select year        
         cy.get('select').eq(3).select('2000')
         cy.wait(1000) 
         //select month        
         cy.get('select').eq(4).select('February')
         cy.wait(1000) 
         //select day        
         cy.get('select').eq(5).select('28') 
         cy.wait(1000) 
         //select password        
         cy.get('[id="firstpassword"]').type('poojaSkotian987654321')
         cy.wait(1000) 
         //confirm password        
         cy.get('[id="secondpassword"]').type('poojaSkotian987654321') 
         //choose image        
         cy.get('[id="imagesrc"]').click()
         cy.wait(1000)
         //upload image        
         cy.get('input[type="file"]').attachFile('upload.jpg')
         cy.wait(1000)
         //cy.get('input[type="submit"]').click()
         //cy.wait(1000)
    })

    it('Working with Download a file in Cypress', () => {
        cy.downloadFile('https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1734804301~exp=1734807901~hmac=a790a8801d53c4db2221b589f1cff3b522efdb7ea718b5bb138e96946f7829ea&w=1060','mydownloads','example.jpg') 
        cy.downloadFile('https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80','mydownloads','test1.jpg')
        cy.downloadFile('https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80','mydownloads','test2.jpg')
        cy.downloadFile('https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80','mydownloads','test3.jpg')
    })
})