describe('User login', () => {

    it('Test1 - Successful user login', () => {
  
      //Se ingresa al sitio web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      //Se borra posible información existente en el campo 'Username'
      cy.get("[name='username']").clear()
      //Se ingresa el nombre de usuario 'Admin'
      cy.get("[name='username']").type('Admin')

      //Se borra posible información existente en el campo 'password'
      cy.get("[name='password']").clear()
      //Se ingresa la contraseña del usuario 'admin123'
      cy.get("[name='password']").type('admin123')

      //Se hace click en botón 'Login' utilizando la clase
      cy.get(".oxd-button").click()

      //Se valida ingreso al sistema
      cy.get(".oxd-button").click()
      })
  })