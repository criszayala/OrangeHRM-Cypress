describe("Check UI Elements", ()=>{

    it("Checking Radio Buttons",()=>{

        //1. Se valida que las opciones del radio button estén visibles
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //2. Se valida que se pueda seleccionar solo una opción del radio button (al seleccionar opción no se marquen todas)
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    })
})