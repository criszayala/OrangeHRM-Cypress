describe('User login', () => {

    it('Test1 - Successful user login', () => {
  
      //Se ingresa al sitio web
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.reload(true)

      //Se borra posible información existente en el campo 'Username'
      cy.get("[name='username']").clear()
      //Se ingresa el nombre de usuario 'Admin'
      cy.get("[name='username']").type('Admin')

      //Se borra posible información existente en el campo 'password'
      cy.get("[name='password']").clear()
      //Se ingresa la contraseña del usuario 'admin123'
      cy.get("[name='password']").type('admin123')

      //Se hace click en el botón 'Login' utilizando la clase 
      cy.get(".oxd-button").click()

      //Se valida que la página inicial sea 'Dashboard' y se comprueba la existencia de 3 secciones
      cy.get(".oxd-text").contains("Dashboard")  
      cy.get(".oxd-text").contains("Time at Work") 
      cy.get(".oxd-text").contains("My Actions") 
      cy.get(".oxd-text").contains("Quick Launch")

      //Se selecciona dropdown y elegimos opción 'Logout'
      cy.get(".oxd-userdropdown-tab").click()
      cy.get(".oxd-dropdown-menu").contains("Logout").click() 

      //Se verifica el cierre de sesión limpiando los campos del formulario de login 'Username'y 'Password'
      cy.get("[name='username']").clear()
            
      //Se verifica que al actualizar el sitio web no se mantiene la sesión del usuario
      cy.reload(true)

      })

      it('Test2 - User login controls - Empty fields', () => {
  
        //Se ingresa al sitio web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        //Se borra posible información existente en el campo 'Username'
        cy.get("[name='username']").clear()

        //Se ingresa contraseña en el campo 'Password'
        cy.get("[name='password']").type('admin1234')

        //Se hace click en el botón 'Login'
        cy.get(".oxd-button").click()

        //Se valida que se despliegue mensaje de error en el campo 'Username'
        cy.get(".oxd-text").contains("Required") 

        //Se ingresa usuario en el campo 'Username'
        cy.get("[name='username']").type('Admin')

        //Se elimina la contraseña ingresada
        cy.get("[name='password']").clear()

        //Se hace click en el botón 'Login'
        cy.get(".oxd-button").click()

        //Se valida que se despliegue mensaje de error en el campo 'Password'
        cy.get(".oxd-text").contains("Required") 
        
        })
  })