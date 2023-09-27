describe('handle dropdowns',()=>{

    it('dropdown without select', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]')
            .type('Admin');
        cy.get('input[name="password"][type="password"]')
            .type('admin123');
        // Locate and click the "Login" button by its class
        cy.get('button.orangehrm-login-button')
        .click();

        // Use cy.get() with a CSS selector
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name')
        .contains('My Info')
        .click();
        

        cy.get('oxd-select-text.oxd-select-text--active')
        .click();
        
        
        /* Select the dropdown by its class name
        cy.get('.information.closable').click();
        // Select an item by its data-value attribute (for example, 'us' for United States)
        cy.get('.information.closable .item[data-value="AND"]').click();

        // Assert that the selected item's text matches the expected value using .should()
        cy.get('.text').should('have.text', 'United States'); // Replace 'United States' with the expected text of the selected item
     */
    })
})