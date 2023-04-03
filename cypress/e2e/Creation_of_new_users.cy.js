describe('Creación de usuario desde sección "Admin"', () => {
    it('Iniciar sesión en la página de inicio de sesión', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('#txtUsername').type('Admin')
      cy.get('#txtPassword').type('admin123')
      cy.get('#btnLogin').click()
    })
  
    it('Agregar usuario desde la sección "Admin"', () => {
      cy.get('#menu_admin_viewAdminModule').click()
      cy.get('#btnAdd').click()
  
      cy.get('#systemUser_userType').select('1')
      cy.get('#systemUser_status').select('1')
      cy.get('#systemUser_employeeName_empName').type('Odis Adalwin')
      const username = 'username' + Math.random().toString(36).substring(7)
      cy.get('#systemUser_userName').type(username)
      const password = 'password' + Math.random().toString(36).substring(7)
      cy.get('#systemUser_password').type(password)
      cy.get('#systemUser_confirmPassword').type(password)
  
      cy.get('#btnSave').click()
    })
  
    it('Validar mensaje de éxito y retorno a la sección anterior', () => {
      cy.get('.toast-message').should('contain', 'Successfully Saved')
      cy.url().should('include', '/admin/viewSystemUsers')
    })
  })
  