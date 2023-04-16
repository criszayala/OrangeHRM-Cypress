describe("Check UI Elements", ()=>{

    it("Test 1 - Checking Radio Buttons",()=>{

        //Ingresamos al sitio de prueba
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //1. Se valida que las opciones del radio button estén visibles
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //2. Se valida que se pueda seleccionar solo una opción del radio button (al seleccionar opción no se marquen todas)
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        
        //2.a Se valida que al seleccionar nueva opción se desmarque la seleccionada anteriormente
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("Test 2 - Checking Checkbox",()=>{

        //Ingresamos al sitio de prueba
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //1. Se valida que el Checkbox esté visible
        cy.get("input#monday").should('be.visible')

        //2. Se valida que seleccionamos una opción del checkbox (Monday)
        cy.get("input#monday").check().should('be.checked')
        
        //3. Se valida que deseleccionamos opción del checkbox (Monday)
        cy.get("input#monday").uncheck().should('not.be.checked')
    })

})