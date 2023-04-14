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

        /*4 - Se valida que el elemento logo exista en el login*/
        cy.get('.orangehrm-login-branding > img').should('exist')

        /*5 - y se encuentre visible*/
        .and('be.visible')

        /*6 - Se verifica la cantidad de enlaces existentes en el login */
        cy.get("input[placeholder='Username']").type("Admin") //provide a value into input
        cy.get("input[placeholder='Username']").should('have.value','Admin') //value
    })

    it("explicit assertions", ()=>{

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(".oxd-userdropdown-name']").then( (x)=>{

            let actName = x.text()
                
            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName, expName)
            assert.notEqual(actName,expName)
        })
    })
})