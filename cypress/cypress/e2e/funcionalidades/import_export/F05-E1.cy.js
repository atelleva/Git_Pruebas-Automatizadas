// Ignorar errores de reproducción de medios en Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('The play() request was interrupted')) {
        return false;
    }
    return true;
});

describe('F05-E1 Prueba de Exportación e Importación en Ghost', () => {
    beforeEach(() => {
      cy.login(); 
    });
  
    it('Debería interceptar la solicitud de exportación y verificar el éxito de la respuesta', () => {

      cy.intercept('GET', '**/ghost/api/admin/db/').as('exportRequest');
  
      
      cy.visit('#/settings/migration');
      cy.wait(1000);
      
      cy.get('button[title="Export"]').scrollIntoView().should('be.visible').click({ force: true });
      cy.contains('button', 'Export content').click({ force: true });
  
      
      cy.wait('@exportRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
  
       
        expect(interception.response.headers['content-type']).to.include('application/json');
      });
    });
  });
  