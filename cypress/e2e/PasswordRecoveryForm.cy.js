describe('Password Recovery Form', () => {
    // Visit the login page before each test
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    // Test case to check if Reset Password form is displayed when the link is clicked
    it('should display the Reset Password form when the link is clicked', () => {
      cy.get('.loginForm a').contains('Forgot your password?').click()
      cy.get('.resetBox').should('be.visible')
    })
  
    // Test case to check if all the correct elements are displayed in the Reset Password form
    it('should display the correct elements in the Reset Password form', () => {
      cy.get('.loginForm a').contains('Forgot your password?').click()
      cy.get('.resetBox').should('be.visible')
      cy.get('.resetBox h2').contains('Reset Password')
      cy.get('.resetBox p').contains('Please enter your username to identify your account to reset your password')
      cy.get('#securityAuthentication_userName').should('be.visible')
      cy.get('#btnCancel').should('be.visible')
      cy.get('#btnSearchValues').should('be.visible').and('have.value', 'Reset Password')
    })
  
    // Test case to check if clicking Cancel button redirects to login page
    it('should redirect to the login page when Cancel is clicked', () => {
      cy.get('.loginForm a').contains('Forgot your password?').click()
      cy.get('#btnCancel').click()
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    // Test case to check if success message is displayed after valid username is entered and Reset Password is clicked
    it('should show success message after valid username is entered and Reset Password is clicked', () => {
      cy.get('.loginForm a').contains('Forgot your password?').click()
      cy.get('#securityAuthentication_userName').type('admin')
      cy.get('#btnSearchValues').click()
      cy.get('.resetBox').should('not.be.visible')
      cy.get('.message.success').contains('Reset Password link sent successfully')
    })
  })