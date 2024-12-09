class RegPage{
    visit()
    {
        cy.visit('https://mytestingthoughts.com/Sample/home.html')
    }

    fillFname(value)
    {
        const field = cy.get('input[name="first_name"]')     
        field.type(value)
        return this
    }

    fillLname(value) 
    {
        const field = cy.get('input[name="last_name"]')
        field.clear()
        field.type(value)
        return this
    }

    fillGender()
    {
        const field = cy.get('[class="form-check-input"]').eq(1)
        field.click()
        return this
    }

    fillHobbies(value) 
    {
        const field = cy.get('select').eq(0)
        field.select(value)
        return this
    }

    fillDepartment(value) 
    {
        const field = cy.get('select').eq(1)
        field.select(value)
        return this
    }
     
    fillUsername(value) 
    {
        const field = cy.get('input[name="user_name"]')    
        field.type(value)
        return this
    }

    fillPassword(value) 
    {
        const field = cy.get('input[name="user_password"]')   
        field.type(value)
        return this
    }

    fillConfirmPass(value) 
    {
        const field = cy.get('input[name="confirm_password"]')        
        field.type(value)
        return this
    }

    fillEmail(value) 
    {
        const field = cy.get('input[name="email"]')       
        field.type(value)
        return this
    }

    fillContact(value) 
    {
        const field = cy.get('input[name="contact_no"]')        
        field.type(value)
        return this
    }

    fillAddInfo(value)
    {
        const field = cy.get('textarea[id="exampleFormControlTextarea1"]')       
        field.type(value)
        return this
    }

    submit() 
    {
         const button = cy.get('[type="submit"]')
         button.click()
     }

    }
export default RegPage
