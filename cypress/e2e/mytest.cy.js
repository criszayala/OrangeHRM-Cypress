describe('My first test', () => {
  it('Test1-verify tittle-possitive', () => {

    //steps
    //Se ingresa al sitio web
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Verificamos el título de la página utilizando el título actual
      cy.title().should('eq','OrangeHRM')
  })

  it('Test2-verify tittle-negative', () => {

    //Se ingresa al sitio web
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Verificamos el título de la página utilizando título anterior
      cy.title().should('eq','Orange')

    })
})