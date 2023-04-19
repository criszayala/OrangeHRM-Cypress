describe('handle dropdowns',()=>{

    it('dropdown with select', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        //1 - Se selecciona opción específica del DropDown y se valida que la selección sea correcta
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')
    })

    it('dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        //2 - Se selecciona opción específica del DropDown y se valida que la selección sea correcta
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.tet', 'Italy')
    })
})