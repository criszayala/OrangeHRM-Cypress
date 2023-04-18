describe('handle dropdowns',()=>{

    it('dropdown with select', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        //1 - Se selecciona opción específica del DropDown y se valida que la selección sea correcta
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')
    })
})