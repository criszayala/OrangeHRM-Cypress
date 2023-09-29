describe('Handle tabs',(()=>{

    it('Approach1')
        
    //Se ingresa a la pantalla principal del sitio
        cy.visit('https://the-internet.herokuapp.com/windows')

        //Se remueve acción de abrir enlace en un nuevo tab y hacemos que cargue en el mismo Tab del navegador
        //Hacemos click en el enlace
        cy.get('.example >a').invoke('removeAttr', 'target').click();

        //Se comprueba enlace de la página (carga en el mismo Tab1)
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        //Se retorna a la pantalla principal
        cy.go('back'); //
}))