describe("Check UI elements",()=>{

    it("Checking Radio Buttons",()=>{
        cy.visit("https://demo.guru99.com/test/radio.html")
            
        //búsqueda de un elemento por ID + condición (función que comprueba elemento esté visible en la página)
        cy.get("input#vfb-7-1").should('be.visible') //Radio 1
        cy.get("input#vfb-7-2").should('be.visible') //Radio 2
        cy.get("input#vfb-7-3").should('be.visible') //Radio 3

        //Selection radio buttons + validación de única selección (R. Button 1)
        cy.get("input#vfb-7-1").check().should('be.checked') //marcamos radio button y verificamos la selección
        cy.get("input#vfb-7-2").should('not.be.visible')  //Se verifica que NO esté seleccionado el radio button 2
        cy.get("input#vfb-7-3").should('not.be.visible') //Se verifica que NO esté seleccionado el radio button 3
   
        //Selection radio buttons + validación de única selección (R. Button 3)
        cy.get("input#vfb-7-3").check().should('be.checked') //marcamos radio button y verificamos la selección
        cy.get("input#vfb-7-1").should('not.be.visible')  //Se verifica que NO esté seleccionado el radio button 1
        cy.get("input#vfb-7-2").should('not.be.visible') //Se verifica que NO esté seleccionado el radio button 2
   
   
    })
})