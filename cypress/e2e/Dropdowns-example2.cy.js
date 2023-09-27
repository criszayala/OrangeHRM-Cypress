describe('handle dropdowns',()=>{

    it('dropdown without select', ()=>{
        cy.visit("https://semantic-ui.com/modules/dropdown.html")

        // Select the dropdown by its class name
        cy.get('.ui.fluid.search.selection.dropdown').click();
        // Select an item by its data-value attribute (for example, 'us' for United States)
        cy.get('.menu.transition.visible .item[data-value="us"]').click();

        // Assert that the selected item's text matches the expected value using .should()
        cy.get('.text').should('have.text', 'United States'); // Replace 'United States' with the expected text of the selected item
    })
})