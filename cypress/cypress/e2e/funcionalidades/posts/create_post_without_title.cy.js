// Ignorar errores de reproducción de medios en Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('The play() request was interrupted')) {
        return false;
    }
    return true;
});

describe('Prueba E2E de Creación y Programación de Publicaciones en Ghost', () => {
    beforeEach(() => {

        cy.login();
    });

    it('Debería mostrar un error si se intenta publicar sin título', () => {
        cy.visit('#/editor/post');
        cy.wait(1000);

        cy.get('.koenig-react-editor').type('Contenido sin título');
        cy.get('button').contains('Publish').click();


        cy.get('button[data-test-button="continue"]').click();

        cy.get('button[data-test-button="confirm-publish"]').click();

        
        cy.get('div.modal-post-success').should('be.visible');


        cy.get('.post-excerpt').contains('Contenido sin título').should('be.visible');

        cy.get('button[data-test-button="close-publish-flow"]').click();

        cy.get('div.modal-post-success').should('not.exist');
    });


});