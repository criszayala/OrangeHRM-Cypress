describe('My first test', () => {
  it('Test1', () => {

    //steps
    //Se ingresa al sitio web
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verificamos el título de la página
    cy.title().should('eq','OrangeHRM')

  })
/*
  it('Test2', () => {

    //stecps
    cy.visit('https://example.cypress.io')
  })*/

})