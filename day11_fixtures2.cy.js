describe('Sample Automation', () => {
    let data;
    before(() => {
         cy.fixture('fixture2').then(function (fixdata) {
            data = fixdata
        })

})
    it('Working with Fixtures in Cypress', () => {
        //load url        
        cy.visit('https://mytestingthoughts.com/Sample/home.html') 
        //input firstname       
        cy.get('input[name="first_name"]').type(data.login.fname)
        cy.wait(1000) 
        //input lastname        
        cy.get('input[name="last_name"]').type(data.login.lname)
        cy.wait(1000)
        //select gender        
        cy.get('[class="form-check-input"]').eq(1).click()
        cy.wait(1000)
        //select hobby        
        cy.get('select').eq(0).select('Singing')
        cy.wait(1000)
        //select department        
        cy.get('select').eq(1).select('Department of Agriculture')
        cy.wait(1000)
        //input username        
        cy.get('input[name="user_name"]').type(data.login.username)
        cy.wait(1000)
        //input password        
        cy.get('input[name="user_password"]').type(data.login.password)
        cy.wait(1000)
        //input confirm password        
        cy.get('input[name="confirm_password"]').type(data.login.confirmpass)
        cy.wait(1000) 
        //input email        
        cy.get('input[name="email"]').type(data.login.email)
        cy.wait(1000)
        //input contact        
        cy.get('input[name="contact_no"]').type(data.login.contact)
        cy.wait(1000)
        //input add info        
        cy.get('textarea[id="exampleFormControlTextarea1"]').type('QAonCloud is a leading software testing services company, based in Chennai, India.Founded in 2016, QAonCloud’s team specializes in providing manual and automated testing solutions to customers across the globe.')
        cy.wait(1000)
        //submit form       
        cy.get('[type="submit"]').click()
        cy.wait(1000)
    })
 })