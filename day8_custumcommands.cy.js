describe('Sample Automation', () => {

  it('Custom command for Login Function', () => {
  cy.login("admin","admin123")
  cy.wait(2000)
    //assertin on the page           
    cy.contains('Dashboard').should('exist')
  })

})

