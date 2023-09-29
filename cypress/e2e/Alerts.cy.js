describe('Alerts', ()=> {

    //1 - Javascript Alert: Aceptar
    it('Js alert',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
    })    

})