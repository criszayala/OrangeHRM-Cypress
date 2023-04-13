const { describe } = require('mocha');

describe("Assertions test", ()=>{

        it('Implicit assetions' ,()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            /*Validaciones del login de usuario*/

            /*1 - Validamos que la url del login incluya valor esperado| Palabras claves: should - and*/
            cy.url().should('include', 'orangehrmlive.com')

            /*2 - Validamos que la url del login sea la correcta*/
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            /*3 - Validamos que el título del sitio sea correcto usando palabras claves como include, eq y contain*/
            cy.title().should('include','Orange')
            .and('eq', "OrangeHRM")
            .and('contain',"HRM")
        })
})