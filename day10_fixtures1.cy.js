describe('Sample Automation', () => {
    let data;
     before(() => {
         cy.fixture('fixture1').then(function (fixdata) {
             data = fixdata
            })
        
    })

    it('Working with Fixtures in Cypress', () => {
        //load url            
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details') 
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[3]/td[3]/input[1]').type(data.admin.name)
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[7]/td[3]/input[1]').type(data.admin.email)
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[9]/td[3]/input[1]').type(data.admin.password)
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[11]/td[3]/input[1]').type(data.admin.repass)
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[14]/td[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/input[1]').type(data.admin.altemail)
        cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[20]/td[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[3]/input[1]').type(data.admin.mobile)
        //input day            
        cy.get('select').eq(1).select('10')
        cy.wait(1000)
        //input month            
        cy.get('select').eq(2).select('OCT')
        cy.wait(1000)
        //input year            
        cy.get('select').eq(3).select('2010')
        cy.wait(1000) 
        //select gender            
        cy.get('[type="radio"]').eq(1).click()
        cy.wait(1000) 
        //select country            
        cy.get('select').eq(4).select('India')
        cy.wait(1000) 
        //select city            
        cy.get('select').eq(5).select('Mysore') 
        cy.wait(1000)
    })
})

