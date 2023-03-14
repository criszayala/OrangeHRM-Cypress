describe('User login', () => {

    it('Test1 - Successful user login', () => {
  
      //Se ingresa al sitio web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      //Se realiza la acción de buscar utilizando atributo del botón "name"
      cy.get("[name='username']").type('Admin')

      //Se realiza la acción de buscar utilizando atributo del botón "name"
      cy.get("[name='password']").type('admin123')

      //Se realiza la acción de buscar utilizando atributo del botón "name"
      cy.get(".oxd-button").click()

      })
  })