describe('Sample Automation', () => {
   

    it('Handling Web/ HTML Table in Cypress', () => {

        //opens Login page of table  website
            cy.visit('https://www.w3schools.com/html/html_tables.asp')
        //assert heading
            //cy.contains('HTML tables allow web developers to arrange data into rows and columns.').should('exist')
        //checking value anywhere in the table
            cy.get('table[class="ws-table-all"]').contains('td','Alfreds Futterkiste').should('be.visible')
        //checking the value in a particular row and column
            cy.get('table[class="ws-table-all"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Germany').should('be.visible')
        //checking the company name with contact person name
            cy.get('table[class="ws-table-all"] > tbody > tr td:nth-child(2)').each(($e,index,$list) => {
                const text=$e.text()
                    if(text.includes('Yoshi Tannamuri'))
                    {
                        cy.get('table[class="ws-table-all"]>tbody>tr td:nth-child(1)').eq(index).then(function(cname)
                        {

                            const companyName = cname.text()
                            expect(companyName).to.equal("Laughing Bacchus Winecellars")
                        })
                    }

            })
    })

  })
