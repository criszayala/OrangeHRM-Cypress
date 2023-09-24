describe("Check UI elements",()=>{

    it("Checking Radio Buttons",()=>{
        cy.visit("https://demo.guru99.com/test/radio.html")
            
        //búsqueda de un elemento por ID + condición (función que comprueba elemento presente en la página)
        cy.get("input#vfb-7-1").should('be.visible') //Radio 1
        cy.get("input#vfb-7-2").should('be.visible') //Radio 2
        cy.get("input#vfb-7-3").should('be.visible') //Radio 3

        cy.window().then(win => win.close()); // Cierra la ventana actual
    })
})