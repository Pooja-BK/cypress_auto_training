class RegPage{
    visit()
    {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
    }

    fillFname(value)
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[3]/td[3]/input[1]')
        //field.clear()        
        field.type(value)
        return this
    }

    fillEmail(value) 
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[7]/td[3]/input[1]')
        field.type(value)
        return this
    }

    fillPassword(value) 
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[9]/td[3]/input[1]')
        //field.clear()        
        field.type(value)
        return this
    }

    fillRePass(value) 
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[11]/td[3]/input[1]')
        //field.clear()        
        field.type(value)
        return this
    }

    fillAltEmail(value)
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[14]/td[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/input[1]')
        field.type(value)
        return this
    }


    fillMobile(value) 
    {
        const field = cy.xpath('/html[1]/body[1]/center[1]/form[1]/div[1]/table[2]/tbody[1]/tr[20]/td[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[3]/input[1]')
        //field.clear()        
        field.type(value)
        return this
    }
    

    fillDate() 
    {
        const field = cy.get('select').eq(1).select('10')
        return this

    }

    fillMonth() 
    {
        const field = cy.get('select').eq(2).select('OCT')
        return this

    }
     
    fillYear() 
    {
        const field = cy.get('select').eq(3).select('2010')
        return this
    }


    fillEfillGender() 
    {
        const field = cy.get('[type="radio"]').eq(1).click()
        return this
    }

    
    fillCountry()
    {
        const field = cy.get('select').eq(4).select('India')
        return this
    }

    fillState()
    {
        const field = cy.get('select').eq(5).select('Mysore') 
        return this
    }
    

    }
export default RegPage