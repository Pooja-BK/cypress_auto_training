describe('Sample Automation', () => {
    
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.log('********** This is for Launching App ***********')

    })
      
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.log('********** This is LOGIN Block ***********')
    })
      
    afterEach(() => {
        // runs after each test block
        cy.log('********** This is LOGOUT Block ***********')
      })
      
    after(() => {
        // runs once all tests are done
        cy.log('********** This is for Closing App ***********')
      })

    it('Searching', () => {
        //opens Login page of alert website
            cy.log('********** This is Searching Test ***********')
    })

    it('Advanced Searching', () => {
        //opens Login page of alert website
            cy.log('********** This is Advanced Searching Test ***********')
    })

    it('Listing Products', () => {
        //opens Login page of alert website
            cy.log('********** This is Listing Products Test ***********')
    })
    

  })


