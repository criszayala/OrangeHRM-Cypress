describe("Check UI elements",()=>{

    /*it("TC 1 - Checking Radio Buttons",()=>{
        cy.visit("https://demo.guru99.com/test/radio.html")
            
        //búsqueda de un elemento por ID + condición (función que comprueba elemento esté visible en la página)
        cy.get("input#vfb-7-1").should('be.visible') //Radio 1
        cy.get("input#vfb-7-2").should('be.visible') //Radio 2
        cy.get("input#vfb-7-3").should('be.visible') //Radio 3

        //Selection radio buttons + validación de única selección (R. Button 1)
        cy.get("input#vfb-7-1").check().should('be.checked') //marcamos radio button y verificamos la selección
        cy.get("input#vfb-7-2").should('not.be.checked')  //Se verifica que NO esté seleccionado el radio button 2
        cy.get("input#vfb-7-3").should('not.be.checked') //Se verifica que NO esté seleccionado el radio button 3
   
        //Selection radio buttons + validación de única selección (R. Button 3)
        cy.get("input#vfb-7-3").check().should('be.checked') //marcamos radio button y verificamos la selección
        cy.get("input#vfb-7-1").should('not.be.checked')  //Se verifica que NO esté seleccionado el radio button 1
        cy.get("input#vfb-7-2").should('not.be.checked') //Se verifica que NO esté seleccionado el radio button 2
    })*/

    it("TC 2 - Checking Checkboxes",()=>{
        cy.visit("https://demo.guru99.com/test/radio.html")
           
        //--Se verifica la visibilidad de los Checkboxes del sitio/Pantalla
        //---Buscamos el elemento checkbox 2 por tipo y su atributo 'name' y 'value'. Luego verificamos que esté visible
        cy.get('input[type="checkbox"][name="webform"][value="checkbox2"]').should('be.visible');
        //---Seleccionamos el checkbox 1 y 3 por su ID. Luego verificamos que esté visible
        cy.get("input#vfb-6-0").should('be.visible')
        cy.get("input#vfb-6-2").should('be.visible')

        /*-----------------------------------------------*/ 
        //Seleccionamos todos los checkboxes y verificamos que todos estén seleccionados
        
        cy.get("input#vfb-6-0").check().should("be.checked")
        cy.get("input#vfb-6-2").check().should("be.checked")
        cy.get("input#vfb-6-1").check().should("be.checked")

        //Desmarcar opción del checkbox 2 y verificar que realmente esté desmarcado el checkbox 2
        cy.get("input#vfb-6-1").uncheck().should("not.be.checked")

        //cy.get("input#vfb-6-0").should("be.checked")
        //cy.get("input#vfb-6-2").should("be.checked")

        //Selecting all the checkboxes
        //---Buscamos los elementos por el tipo y atributo 'name' + 'value', marcamos todas los checkboxes y validamos marca
        cy.get('input[type="checkbox"][name="webform"]').check().should('be.visible');

        
    })
})