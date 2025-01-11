Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


  describe('Sample Automation', () => {
    
    it('Working with Cypress Mouse Drag and Drop Actions', () => {
    //visit the website
        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.wait(2000)
        cy.get('[id="angular"]').drag('[id="droparea"]')
        cy.wait(1000)
        cy.get('[id="mongo"]').scrollIntoView()
        cy.get('[id="mongo"]').drag('[id="droparea"]')
        cy.wait(1000)
        cy.get('[id="node"]').scrollIntoView()
        cy.get('[id="node"]').drag('[id="droparea"]')
        cy.wait(1000)

        
    })

    
    it('Working with Handling mouse actions in cypress - Mouse Down Events using Cypress', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        /*cy.contains('Admin').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[1]/a[1]').trigger('mousedown')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[1]/a[1]').trigger('mouseup', 20, 20)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[1]/a[1]').trigger('mouseover')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[1]/a[1]').trigger('mousemove')*/


        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/canvas[1]').trigger('mousedown')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/canvas[1]').trigger('mouseup', 'topRight')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/canvas[1]').trigger('mouseover')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/canvas[1]').trigger('mousemove',50,50)
        //cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/canvas[1]').rightclick(500,500)
        //cy.get('#y3_ZJ8BJ').rightclick()
        //cy.contains('Inspect').should('exist')
        


    })


  })