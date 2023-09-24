describe("Check UI elements"),()=>{

        it("Checking Radio Buttons",()=>{
            cy.visit("https://artoftesting.com/samplesiteforselenium")
            
        //búsqueda de un elemento por ID en la web + condición (función que comprueba elemento presente en la página)
            cy.get("input#male").should(be.visible)
            cy.get("input#male").should(be.visible)
        })


}