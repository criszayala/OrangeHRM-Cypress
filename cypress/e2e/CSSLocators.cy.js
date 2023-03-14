describe('CSSLocators', () => {
    it("csslocators", () => {

    //Ingresamos al sitio web
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Usamos CSS Locator ID para la barra de búsqueda y agregamos texto al campo
    cy.get("#locator id").type('T-Shirt')

    //Se realiza la acción de buscar utilizando atributo del botón "name"
    cy.get("[name='submit_search']").click()

    //Luego de la búsqueda se valida la sección utilizando la clase y un assertion
    cy.get(".valor").contains("T-Shirt") 
    })

})