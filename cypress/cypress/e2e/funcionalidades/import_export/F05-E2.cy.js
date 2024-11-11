
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('The play() request was interrupted')) {
        return false;
    }
    return true;
});

describe('sF05-E2 Prueba de Importación en la sección de Migración en Ghost archivo invalido', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Debería completar el proceso de importación mostrando el modal de confirmación', () => {
        
        cy.visit('#/settings/migration');
        cy.wait(1000);

        
        cy.contains('button', 'Universal import').click();

        
        cy.get('[data-testid="universal-import-modal"]').should('be.visible');

       
        cy.get('input[type="file"]').attachFile('example.json');

      
        cy.get('[data-testid="confirmation-modal"]').should('be.visible');

       
        cy.get('[data-testid="confirmation-modal"] h3').contains('Import in progress').should('be.visible');
        cy.get('[data-testid="confirmation-modal"] div').contains("Your import is being processed, and you'll receive a confirmation email as soon as it’s complete. Usually this only takes a few minutes, but larger imports may take longer.").should('be.visible');

        
        cy.get('[data-testid="confirmation-modal"] button').contains('Got it').click();

        
        cy.get('[data-testid="confirmation-modal"]').should('not.exist');
    });
});
